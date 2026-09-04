import { useEffect, useMemo, useState } from "react";
import { supabase, isSupabaseConfigured, BUCKETS } from "./supabase";
import { projects as staticProjects, type Project } from "../data/projects";
import { slugify, safeFileName } from "./slug";

/** Projet enrichi d'un slug (clé stable pour rattacher les images). */
export interface ProjectWithSlug extends Project {
	slug: string;
	/** true si le projet vient de la base (ajouté via le back office). */
	fromDb?: boolean;
	/** id en base (projets DB uniquement). */
	dbId?: string;
}

/** Ligne brute de la table `projects`. */
export interface DbProjectRow {
	id: string;
	slug: string;
	year: number;
	name: string;
	company: string | null;
	category: string | null;
	featured: boolean;
	description_fr: string | null;
	description_en: string | null;
	technologies: string[];
	links: string[];
	post_fr: string[];
	post_en: string[];
	cover_url: string | null;
	sort: number;
}

export interface DocumentRow {
	id: string;
	title: string;
	kind: string;
	issuer: string | null;
	path: string;
	created_at: string;
}

export interface ProjectImageRow {
	id: string;
	project_slug: string;
	url: string;
	path: string | null;
	sort: number;
	created_at: string;
}

// ---------- mappers ----------

function withSlug(p: Project): ProjectWithSlug {
	return { ...p, slug: slugify(p.name) };
}

function mapDbProject(row: DbProjectRow): ProjectWithSlug {
	return {
		slug: row.slug,
		fromDb: true,
		dbId: row.id,
		year: row.year,
		name: row.name,
		company: row.company ?? "",
		category: row.category ?? undefined,
		featured: row.featured,
		description: { fr: row.description_fr ?? "", en: row.description_en ?? "" },
		technologies: row.technologies ?? [],
		link: row.links ?? [],
		img: row.cover_url ?? "",
		screenshots: row.cover_url ? [row.cover_url] : [],
		post: { fr: row.post_fr ?? [], en: row.post_en ?? [] },
	};
}

// ---------- lecture publique ----------

export async function fetchDbProjects(): Promise<ProjectWithSlug[]> {
	if (!supabase) return [];
	const { data, error } = await supabase
		.from("projects")
		.select("*")
		.order("sort", { ascending: true })
		.order("year", { ascending: false });
	if (error) throw error;
	return (data as DbProjectRow[]).map(mapDbProject);
}

/** Toutes les images de galerie, groupées par slug de projet. */
export async function fetchImagesBySlug(): Promise<Record<string, string[]>> {
	if (!supabase) return {};
	const { data, error } = await supabase
		.from("project_images")
		.select("project_slug,url,sort")
		.order("sort", { ascending: true });
	if (error) throw error;
	const map: Record<string, string[]> = {};
	for (const row of data as Pick<ProjectImageRow, "project_slug" | "url" | "sort">[]) {
		(map[row.project_slug] ??= []).push(row.url);
	}
	return map;
}

/**
 * Hook public : renvoie les projets statiques immédiatement, puis fusionne
 * les projets/images de la base si Supabase répond. En cas d'échec ou de
 * configuration absente, on garde les données statiques (aucune casse).
 */
export function useAllProjects(): { projects: ProjectWithSlug[]; loading: boolean } {
	const base = useMemo(() => staticProjects.map(withSlug), []);
	const [list, setList] = useState<ProjectWithSlug[]>(base);
	const [loading, setLoading] = useState<boolean>(isSupabaseConfigured);

	useEffect(() => {
		if (!isSupabaseConfigured || !supabase) return;
		let cancelled = false;
		(async () => {
			try {
				const [db, imgs] = await Promise.all([fetchDbProjects(), fetchImagesBySlug()]);
				if (cancelled) return;
				const merged = [...base, ...db].map((p) => {
					const extra = imgs[p.slug];
					if (extra && extra.length) {
						const existing = p.screenshots ?? [];
						// évite les doublons (ex. cover déjà présent)
						const seen = new Set(existing);
						const add = extra.filter((u) => !seen.has(u));
						return { ...p, screenshots: [...existing, ...add] };
					}
					return p;
				});
				setList(merged);
			} catch {
				/* on garde les données statiques */
			} finally {
				if (!cancelled) setLoading(false);
			}
		})();
		return () => {
			cancelled = true;
		};
	}, [base]);

	return { projects: list, loading };
}

/** Liste combinée statique + DB (pour le sélecteur du back office). */
export async function listAllProjectsForAdmin(): Promise<ProjectWithSlug[]> {
	const base = staticProjects.map(withSlug);
	try {
		const db = await fetchDbProjects();
		return [...base, ...db];
	} catch {
		return base;
	}
}

// ---------- projets (admin) ----------

export interface ProjectInput {
	name: string;
	company: string;
	year: number;
	category?: string;
	featured?: boolean;
	descriptionFr?: string;
	descriptionEn?: string;
	technologies: string[];
	links: string[];
	postFr: string[];
	postEn: string[];
	coverUrl?: string;
}

export async function createProject(input: ProjectInput): Promise<void> {
	if (!supabase) throw new Error("Supabase non configuré");
	const slug = slugify(input.name);
	const { error } = await supabase.from("projects").insert({
		slug,
		name: input.name,
		company: input.company,
		year: input.year,
		category: input.category ?? null,
		featured: input.featured ?? false,
		description_fr: input.descriptionFr ?? null,
		description_en: input.descriptionEn ?? null,
		technologies: input.technologies,
		links: input.links,
		post_fr: input.postFr,
		post_en: input.postEn,
		cover_url: input.coverUrl ?? null,
	});
	if (error) throw error;
}

export async function listDbProjectsRaw(): Promise<DbProjectRow[]> {
	if (!supabase) return [];
	const { data, error } = await supabase.from("projects").select("*").order("year", { ascending: false });
	if (error) throw error;
	return data as DbProjectRow[];
}

export async function deleteProject(id: string): Promise<void> {
	if (!supabase) throw new Error("Supabase non configuré");
	const { error } = await supabase.from("projects").delete().eq("id", id);
	if (error) throw error;
}

// ---------- images de projet (admin) ----------

export async function listProjectImages(slug: string): Promise<ProjectImageRow[]> {
	if (!supabase) return [];
	const { data, error } = await supabase
		.from("project_images")
		.select("*")
		.eq("project_slug", slug)
		.order("sort", { ascending: true });
	if (error) throw error;
	return data as ProjectImageRow[];
}

export async function uploadProjectImage(slug: string, file: File): Promise<void> {
	if (!supabase) throw new Error("Supabase non configuré");
	const path = `${slug}/${Date.now()}-${safeFileName(file.name)}`;
	const { error: upErr } = await supabase.storage.from(BUCKETS.projectImages).upload(path, file, {
		cacheControl: "3600",
		upsert: false,
	});
	if (upErr) throw upErr;
	const { data: pub } = supabase.storage.from(BUCKETS.projectImages).getPublicUrl(path);
	const { error: insErr } = await supabase
		.from("project_images")
		.insert({ project_slug: slug, url: pub.publicUrl, path });
	if (insErr) throw insErr;
}

export async function deleteProjectImage(row: ProjectImageRow): Promise<void> {
	if (!supabase) throw new Error("Supabase non configuré");
	if (row.path) {
		await supabase.storage.from(BUCKETS.projectImages).remove([row.path]);
	}
	const { error } = await supabase.from("project_images").delete().eq("id", row.id);
	if (error) throw error;
}

// ---------- documents privés (admin) ----------

export async function listDocuments(): Promise<DocumentRow[]> {
	if (!supabase) return [];
	const { data, error } = await supabase.from("documents").select("*").order("created_at", { ascending: false });
	if (error) throw error;
	return data as DocumentRow[];
}

export interface DocumentInput {
	title: string;
	kind: string; // 'certificate' | 'recommendation'
	issuer?: string;
	file: File;
}

export async function uploadDocument(input: DocumentInput): Promise<void> {
	if (!supabase) throw new Error("Supabase non configuré");
	const path = `${input.kind}/${Date.now()}-${safeFileName(input.file.name)}`;
	const { error: upErr } = await supabase.storage.from(BUCKETS.documents).upload(path, input.file, {
		cacheControl: "3600",
		upsert: false,
	});
	if (upErr) throw upErr;
	const { error: insErr } = await supabase.from("documents").insert({
		title: input.title,
		kind: input.kind,
		issuer: input.issuer ?? null,
		path,
	});
	if (insErr) throw insErr;
}

export async function deleteDocument(row: DocumentRow): Promise<void> {
	if (!supabase) throw new Error("Supabase non configuré");
	await supabase.storage.from(BUCKETS.documents).remove([row.path]);
	const { error } = await supabase.from("documents").delete().eq("id", row.id);
	if (error) throw error;
}

/** Génère un lien signé temporaire (par défaut 7 jours) pour partager un document privé. */
export async function signDocumentUrl(path: string, expiresInSeconds = 60 * 60 * 24 * 7): Promise<string> {
	if (!supabase) throw new Error("Supabase non configuré");
	const { data, error } = await supabase.storage.from(BUCKETS.documents).createSignedUrl(path, expiresInSeconds);
	if (error) throw error;
	return data.signedUrl;
}
