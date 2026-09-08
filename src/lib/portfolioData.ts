import { useEffect, useMemo, useState } from "react";
import { supabase, isSupabaseConfigured, BUCKETS } from "./supabase";
import { projects as staticProjects, type Project } from "../data/projects";
import { slugify, safeFileName } from "./slug";

/** Projet enrichi d'un slug (clé stable pour rattacher les images). */
export interface ProjectWithSlug extends Project {
	slug: string;
	fromDb?: boolean;
	dbId?: string;
	hidden?: boolean;
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
	hidden: boolean;
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

const PROJECT_COLS =
	"id,slug,year,name,company,category,featured,description_fr,description_en,technologies,links,post_fr,post_en,cover_url,sort,hidden";

// ---------- mappers ----------

function withSlug(p: Project): ProjectWithSlug {
	return { ...p, slug: slugify(p.name) };
}

const staticWithSlug = (): ProjectWithSlug[] => staticProjects.map(withSlug);

function mapDbProject(row: DbProjectRow): ProjectWithSlug {
	return {
		slug: row.slug,
		fromDb: true,
		dbId: row.id,
		hidden: row.hidden,
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
		.select(PROJECT_COLS)
		.order("sort", { ascending: true })
		.order("year", { ascending: false });
	if (error) throw error;
	return (data as DbProjectRow[]).map(mapDbProject);
}

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
 * Fusionne les projets statiques (code) et la base :
 * - un projet en base avec le même slug REMPLACE le statique (édition),
 *   en conservant l'image d'origine si aucune n'est fournie ;
 * - un projet marqué `hidden` disparaît (suppression d'un projet existant) ;
 * - les photos uploadées s'ajoutent à la galerie via le slug.
 * En cas d'échec/absence de Supabase, on garde les données statiques.
 */
export function useAllProjects(): { projects: ProjectWithSlug[]; loading: boolean } {
	const base = useMemo(staticWithSlug, []);
	const [list, setList] = useState<ProjectWithSlug[]>(base);
	const [loading, setLoading] = useState<boolean>(isSupabaseConfigured);

	useEffect(() => {
		if (!isSupabaseConfigured || !supabase) return;
		let cancelled = false;
		(async () => {
			try {
				const [db, imgs] = await Promise.all([fetchDbProjects(), fetchImagesBySlug()]);
				if (cancelled) return;
				const bySlug = new Map<string, ProjectWithSlug>();
				base.forEach((p) => bySlug.set(p.slug, p));
				const staticImg = new Map(base.map((p) => [p.slug, { img: p.img, shots: p.screenshots }]));

				for (const d of db) {
					if (d.hidden) {
						bySlug.delete(d.slug); // projet masqué → retiré du site
						continue;
					}
					const s = staticImg.get(d.slug);
					const merged: ProjectWithSlug = { ...d };
					if (!merged.img && s) merged.img = s.img;
					if ((!merged.screenshots || merged.screenshots.length === 0) && s?.shots) {
						merged.screenshots = s.shots;
					}
					bySlug.set(d.slug, merged);
				}

				for (const [slug, urls] of Object.entries(imgs)) {
					const p = bySlug.get(slug);
					if (p && urls.length) {
						const existing = p.screenshots ?? [];
						const seen = new Set(existing);
						const add = urls.filter((u) => !seen.has(u));
						bySlug.set(slug, { ...p, screenshots: [...existing, ...add] });
					}
				}

				setList(Array.from(bySlug.values()));
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

/** Liste combinée (statique + DB, dédupliquée par slug) pour le sélecteur photos. */
export async function listAllProjectsForAdmin(): Promise<ProjectWithSlug[]> {
	const base = staticWithSlug();
	try {
		const db = await fetchDbProjects();
		const bySlug = new Map<string, ProjectWithSlug>();
		base.forEach((p) => bySlug.set(p.slug, p));
		db.forEach((d) => bySlug.set(d.slug, d));
		return Array.from(bySlug.values());
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

function toRow(input: ProjectInput) {
	return {
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
	};
}

/** Crée un nouveau projet (slug dérivé du nom). */
export async function createProject(input: ProjectInput): Promise<void> {
	await saveProject(input, {});
}

/**
 * Enregistre un projet.
 * - opts.id : met à jour la ligne existante (le slug n'est jamais modifié).
 * - sinon : insère avec le slug fourni, ou dérivé du nom.
 */
export async function saveProject(input: ProjectInput, opts: { id?: string; slug?: string }): Promise<void> {
	if (!supabase) throw new Error("Supabase non configuré");
	if (opts.id) {
		const { error } = await supabase.from("projects").update(toRow(input)).eq("id", opts.id);
		if (error) throw error;
	} else {
		const slug = opts.slug ?? slugify(input.name);
		const { error } = await supabase.from("projects").insert({ ...toRow(input), slug, hidden: false });
		if (error) throw error;
	}
}

/** Supprime définitivement une ligne de projet (projets ajoutés en base). */
export async function deleteProjectRow(id: string): Promise<void> {
	if (!supabase) throw new Error("Supabase non configuré");
	const { error } = await supabase.from("projects").delete().eq("id", id);
	if (error) throw error;
}

function staticInputBySlug(slug: string): ProjectInput | null {
	const s = staticWithSlug().find((p) => p.slug === slug);
	if (!s) return null;
	return {
		name: s.name,
		company: s.company,
		year: s.year,
		category: s.category,
		featured: s.featured,
		descriptionFr: s.description?.fr ?? "",
		descriptionEn: s.description?.en ?? "",
		technologies: s.technologies,
		links: s.link,
		postFr: s.post?.fr ?? [],
		postEn: s.post?.en ?? [],
		coverUrl: "",
	};
}

/** Masque un projet (le retire du site public). Gère statiques & projets DB. */
export async function hideProject(slug: string): Promise<void> {
	if (!supabase) throw new Error("Supabase non configuré");
	const { data } = await supabase.from("projects").select("id").eq("slug", slug).maybeSingle();
	if (data?.id) {
		const { error } = await supabase.from("projects").update({ hidden: true }).eq("id", data.id);
		if (error) throw error;
	} else {
		const input = staticInputBySlug(slug);
		if (!input) throw new Error("Projet introuvable");
		const { error } = await supabase.from("projects").insert({ ...toRow(input), slug, hidden: true });
		if (error) throw error;
	}
}

/** Ré-affiche un projet masqué. */
export async function restoreProject(slug: string): Promise<void> {
	if (!supabase) throw new Error("Supabase non configuré");
	const { error } = await supabase.from("projects").update({ hidden: false }).eq("slug", slug);
	if (error) throw error;
}

/** Élément de la liste d'administration des projets. */
export interface AdminProjectItem {
	slug: string;
	name: string;
	company: string;
	year: number;
	source: "static" | "db";
	dbId?: string;
	hidden: boolean;
	overridden: boolean;
}

/** Liste TOUS les projets (existants + ajoutés) avec leur état. */
export async function listAdminProjects(): Promise<AdminProjectItem[]> {
	const base = staticWithSlug();
	const staticSlugs = new Set(base.map((p) => p.slug));
	let rows: DbProjectRow[] = [];
	if (supabase) {
		const { data, error } = await supabase.from("projects").select(PROJECT_COLS).order("year", { ascending: false });
		if (error) throw error;
		rows = data as DbProjectRow[];
	}
	const dbBySlug = new Map(rows.map((r) => [r.slug, r]));

	const items: AdminProjectItem[] = base.map((s) => {
		const d = dbBySlug.get(s.slug);
		return {
			slug: s.slug,
			name: d?.name ?? s.name,
			company: (d?.company ?? s.company) || "",
			year: d?.year ?? s.year,
			source: "static",
			dbId: d?.id,
			hidden: d?.hidden ?? false,
			overridden: Boolean(d),
		};
	});
	rows
		.filter((r) => !staticSlugs.has(r.slug))
		.forEach((r) =>
			items.push({
				slug: r.slug,
				name: r.name,
				company: r.company ?? "",
				year: r.year,
				source: "db",
				dbId: r.id,
				hidden: r.hidden,
				overridden: false,
			}),
		);
	return items;
}

/** Données d'un projet prêtes pour le formulaire d'édition. */
export interface EditableProject extends ProjectInput {
	slug: string;
	dbId?: string;
}

export async function getProjectForEdit(slug: string): Promise<EditableProject> {
	let db: DbProjectRow | null = null;
	if (supabase) {
		const { data } = await supabase.from("projects").select(PROJECT_COLS).eq("slug", slug).maybeSingle();
		db = (data as DbProjectRow) ?? null;
	}
	const stat = staticWithSlug().find((p) => p.slug === slug);
	return {
		slug,
		dbId: db?.id,
		name: db?.name ?? stat?.name ?? "",
		company: (db?.company ?? stat?.company) || "",
		year: db?.year ?? stat?.year ?? new Date().getFullYear(),
		category: db?.category ?? stat?.category ?? "",
		featured: db?.featured ?? stat?.featured ?? false,
		descriptionFr: db?.description_fr ?? stat?.description?.fr ?? "",
		descriptionEn: db?.description_en ?? stat?.description?.en ?? "",
		technologies: db?.technologies ?? stat?.technologies ?? [],
		links: db?.links ?? stat?.link ?? [],
		postFr: db?.post_fr ?? stat?.post?.fr ?? [],
		postEn: db?.post_en ?? stat?.post?.en ?? [],
		coverUrl: db?.cover_url ?? "",
	};
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
	kind: string;
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
