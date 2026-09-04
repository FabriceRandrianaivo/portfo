import React, { useEffect, useState } from "react";
import {
	LogOut,
	FolderPlus,
	Images,
	FileLock2,
	Trash2,
	UploadCloud,
	Link2,
	Loader2,
	ShieldCheck,
	Copy,
	Check,
} from "lucide-react";
import { isSupabaseConfigured } from "../lib/supabase";
import { useAuth, signIn, signOut } from "../lib/useAuth";
import {
	createProject,
	listDbProjectsRaw,
	deleteProject,
	listAllProjectsForAdmin,
	listProjectImages,
	uploadProjectImage,
	deleteProjectImage,
	listDocuments,
	uploadDocument,
	deleteDocument,
	signDocumentUrl,
	type DbProjectRow,
	type ProjectWithSlug,
	type ProjectImageRow,
	type DocumentRow,
} from "../lib/portfolioData";

// ------- helpers UI -------
const card = "rounded-2xl border border-charcoal/10 bg-white p-5 shadow-sm";
const label = "block text-xs font-semibold uppercase tracking-wide text-charcoal/60 mb-1";
const input =
	"w-full rounded-lg border border-charcoal/15 bg-white px-3 py-2 text-sm text-charcoal outline-none transition focus:border-lime";
const btn =
	"inline-flex items-center justify-center gap-2 rounded-full bg-lime px-4 py-2 text-sm font-semibold text-white transition hover:brightness-110 disabled:opacity-50";
const btnGhost =
	"inline-flex items-center justify-center gap-2 rounded-full border border-charcoal/15 px-3 py-1.5 text-xs font-semibold text-charcoal/60 transition hover:border-lime hover:text-lime";

const csv = (s: string) =>
	s
		.split(",")
		.map((x) => x.trim())
		.filter(Boolean);
const lines = (s: string) =>
	s
		.split("\n")
		.map((x) => x.trim())
		.filter(Boolean);

// =====================================================================
//  Racine
// =====================================================================
const Admin: React.FC = () => {
	const { session, loading } = useAuth();

	if (!isSupabaseConfigured) {
		return (
			<Centered>
				<div className={`${card} max-w-md text-center`}>
					<ShieldCheck className="mx-auto mb-3 h-8 w-8 text-lime" />
					<h1 className="text-lg font-bold">Back office non configuré</h1>
					<p className="mt-2 text-sm text-charcoal/60">
						Renseigne <code className="rounded bg-charcoal/5 px-1">VITE_SUPABASE_URL</code> et{" "}
						<code className="rounded bg-charcoal/5 px-1">VITE_SUPABASE_ANON_KEY</code> dans{" "}
						<code className="rounded bg-charcoal/5 px-1">.env.local</code>, puis relance le serveur.
					</p>
				</div>
			</Centered>
		);
	}

	if (loading) {
		return (
			<Centered>
				<Loader2 className="h-6 w-6 animate-spin text-lime" />
			</Centered>
		);
	}

	return session ? <Dashboard email={session.user.email ?? ""} /> : <LoginForm />;
};

const Centered: React.FC<{ children: React.ReactNode }> = ({ children }) => (
	<div className="grid min-h-screen place-items-center bg-cream px-6 text-charcoal">{children}</div>
);

// =====================================================================
//  Login
// =====================================================================
const LoginForm: React.FC = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState<string | null>(null);
	const [busy, setBusy] = useState(false);

	const submit = async (e: React.FormEvent) => {
		e.preventDefault();
		setError(null);
		setBusy(true);
		try {
			await signIn(email, password);
		} catch (err) {
			setError(err instanceof Error ? err.message : "Connexion impossible");
		} finally {
			setBusy(false);
		}
	};

	return (
		<Centered>
			<form onSubmit={submit} className={`${card} w-full max-w-sm`}>
				<div className="mb-5 text-center">
					<ShieldCheck className="mx-auto mb-2 h-8 w-8 text-lime" />
					<h1 className="text-xl font-bold">Back office</h1>
					<p className="text-sm text-charcoal/55">Accès réservé</p>
				</div>
				<div className="space-y-3">
					<div>
						<label className={label}>Email</label>
						<input
							type="email"
							required
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							className={input}
							autoComplete="username"
						/>
					</div>
					<div>
						<label className={label}>Mot de passe</label>
						<input
							type="password"
							required
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							className={input}
							autoComplete="current-password"
						/>
					</div>
					{error && <p className="text-sm text-red-600">{error}</p>}
					<button type="submit" disabled={busy} className={`${btn} w-full`}>
						{busy ? <Loader2 className="h-4 w-4 animate-spin" /> : "Se connecter"}
					</button>
				</div>
			</form>
		</Centered>
	);
};

// =====================================================================
//  Dashboard
// =====================================================================
type Tab = "projects" | "photos" | "documents";

const Dashboard: React.FC<{ email: string }> = ({ email }) => {
	const [tab, setTab] = useState<Tab>("projects");

	const tabs: { id: Tab; label: string; icon: React.ReactNode }[] = [
		{ id: "projects", label: "Projets", icon: <FolderPlus className="h-4 w-4" /> },
		{ id: "photos", label: "Photos", icon: <Images className="h-4 w-4" /> },
		{ id: "documents", label: "Documents privés", icon: <FileLock2 className="h-4 w-4" /> },
	];

	return (
		<div className="min-h-screen bg-cream text-charcoal">
			<header className="border-b border-charcoal/10 bg-white">
				<div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
					<div>
						<p className="font-mono text-[11px] uppercase tracking-widest text-lime">Back office</p>
						<h1 className="text-lg font-bold">Portfolio — administration</h1>
					</div>
					<div className="flex items-center gap-3">
						<span className="hidden text-xs text-charcoal/50 sm:inline">{email}</span>
						<button onClick={() => void signOut()} className={btnGhost}>
							<LogOut className="h-3.5 w-3.5" /> Déconnexion
						</button>
					</div>
				</div>
				<div className="mx-auto flex max-w-5xl gap-1 px-6">
					{tabs.map((tb) => (
						<button
							key={tb.id}
							onClick={() => setTab(tb.id)}
							className={`-mb-px flex items-center gap-2 border-b-2 px-4 py-2.5 text-sm font-semibold transition ${
								tab === tb.id
									? "border-lime text-lime"
									: "border-transparent text-charcoal/50 hover:text-charcoal"
							}`}
						>
							{tb.icon}
							{tb.label}
						</button>
					))}
				</div>
			</header>

			<main className="mx-auto max-w-5xl px-6 py-8">
				{tab === "projects" && <ProjectsPanel />}
				{tab === "photos" && <PhotosPanel />}
				{tab === "documents" && <DocumentsPanel />}
			</main>
		</div>
	);
};

// ---------------------------------------------------------------------
//  Onglet Projets
// ---------------------------------------------------------------------
const emptyForm = {
	name: "",
	company: "",
	year: new Date().getFullYear(),
	category: "",
	featured: false,
	descriptionFr: "",
	descriptionEn: "",
	technologies: "",
	links: "",
	postFr: "",
	postEn: "",
	coverUrl: "",
};

const ProjectsPanel: React.FC = () => {
	const [form, setForm] = useState({ ...emptyForm });
	const [rows, setRows] = useState<DbProjectRow[]>([]);
	const [busy, setBusy] = useState(false);
	const [msg, setMsg] = useState<string | null>(null);

	const refresh = () => listDbProjectsRaw().then(setRows).catch(() => setRows([]));
	useEffect(() => {
		refresh();
	}, []);

	const submit = async (e: React.FormEvent) => {
		e.preventDefault();
		setBusy(true);
		setMsg(null);
		try {
			await createProject({
				name: form.name,
				company: form.company,
				year: Number(form.year),
				category: form.category || undefined,
				featured: form.featured,
				descriptionFr: form.descriptionFr,
				descriptionEn: form.descriptionEn,
				technologies: csv(form.technologies),
				links: csv(form.links),
				postFr: lines(form.postFr),
				postEn: lines(form.postEn),
				coverUrl: form.coverUrl || undefined,
			});
			setForm({ ...emptyForm });
			setMsg("Projet ajouté ✅");
			refresh();
		} catch (err) {
			setMsg(err instanceof Error ? err.message : "Erreur");
		} finally {
			setBusy(false);
		}
	};

	const remove = async (id: string) => {
		if (!confirm("Supprimer ce projet ?")) return;
		await deleteProject(id);
		refresh();
	};

	const set = (k: keyof typeof form, v: string | number | boolean) => setForm((f) => ({ ...f, [k]: v }));

	return (
		<div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
			<form onSubmit={submit} className={card}>
				<h2 className="mb-4 text-base font-bold">Ajouter un projet</h2>
				<div className="grid grid-cols-2 gap-3">
					<div className="col-span-2">
						<label className={label}>Nom *</label>
						<input required value={form.name} onChange={(e) => set("name", e.target.value)} className={input} />
					</div>
					<div>
						<label className={label}>Entreprise / contexte</label>
						<input value={form.company} onChange={(e) => set("company", e.target.value)} className={input} />
					</div>
					<div>
						<label className={label}>Année</label>
						<input
							type="number"
							value={form.year}
							onChange={(e) => set("year", e.target.value)}
							className={input}
						/>
					</div>
					<div>
						<label className={label}>Catégorie</label>
						<input value={form.category} onChange={(e) => set("category", e.target.value)} className={input} />
					</div>
					<div className="flex items-end">
						<label className="flex items-center gap-2 text-sm text-charcoal/70">
							<input
								type="checkbox"
								checked={form.featured}
								onChange={(e) => set("featured", e.target.checked)}
							/>
							Mis en avant
						</label>
					</div>
					<div className="col-span-2">
						<label className={label}>Description (FR)</label>
						<textarea
							rows={2}
							value={form.descriptionFr}
							onChange={(e) => set("descriptionFr", e.target.value)}
							className={input}
						/>
					</div>
					<div className="col-span-2">
						<label className={label}>Description (EN)</label>
						<textarea
							rows={2}
							value={form.descriptionEn}
							onChange={(e) => set("descriptionEn", e.target.value)}
							className={input}
						/>
					</div>
					<div className="col-span-2">
						<label className={label}>Technologies (séparées par des virgules)</label>
						<input
							value={form.technologies}
							onChange={(e) => set("technologies", e.target.value)}
							placeholder="React, TypeScript, Supabase"
							className={input}
						/>
					</div>
					<div className="col-span-2">
						<label className={label}>Liens (virgules) — sans https://</label>
						<input
							value={form.links}
							onChange={(e) => set("links", e.target.value)}
							placeholder="monsite.com, github.com/moi/projet"
							className={input}
						/>
					</div>
					<div className="col-span-2">
						<label className={label}>Rôles / responsabilités FR (1 par ligne)</label>
						<textarea
							rows={3}
							value={form.postFr}
							onChange={(e) => set("postFr", e.target.value)}
							className={input}
						/>
					</div>
					<div className="col-span-2">
						<label className={label}>Rôles / responsabilités EN (1 par ligne)</label>
						<textarea
							rows={3}
							value={form.postEn}
							onChange={(e) => set("postEn", e.target.value)}
							className={input}
						/>
					</div>
					<div className="col-span-2">
						<label className={label}>Image de couverture (URL, optionnel)</label>
						<input
							value={form.coverUrl}
							onChange={(e) => set("coverUrl", e.target.value)}
							placeholder="https://…"
							className={input}
						/>
						<p className="mt-1 text-xs text-charcoal/45">
							Astuce : ajoute d'abord le projet, puis dépose ses photos dans l'onglet « Photos ».
						</p>
					</div>
				</div>
				{msg && <p className="mt-3 text-sm text-charcoal/70">{msg}</p>}
				<button type="submit" disabled={busy} className={`${btn} mt-4`}>
					{busy ? <Loader2 className="h-4 w-4 animate-spin" /> : <FolderPlus className="h-4 w-4" />}
					Ajouter le projet
				</button>
			</form>

			<div className={card}>
				<h2 className="mb-4 text-base font-bold">Projets ajoutés ({rows.length})</h2>
				{rows.length === 0 ? (
					<p className="text-sm text-charcoal/50">Aucun projet ajouté via le back office pour l'instant.</p>
				) : (
					<ul className="space-y-2">
						{rows.map((r) => (
							<li
								key={r.id}
								className="flex items-center justify-between rounded-lg border border-charcoal/10 px-3 py-2"
							>
								<div className="min-w-0">
									<p className="truncate text-sm font-semibold">{r.name}</p>
									<p className="truncate text-xs text-charcoal/50">
										{r.company} · {r.year}
									</p>
								</div>
								<button onClick={() => remove(r.id)} className="text-charcoal/40 hover:text-red-600">
									<Trash2 className="h-4 w-4" />
								</button>
							</li>
						))}
					</ul>
				)}
			</div>
		</div>
	);
};

// ---------------------------------------------------------------------
//  Onglet Photos
// ---------------------------------------------------------------------
const PhotosPanel: React.FC = () => {
	const [projects, setProjects] = useState<ProjectWithSlug[]>([]);
	const [slug, setSlug] = useState<string>("");
	const [images, setImages] = useState<ProjectImageRow[]>([]);
	const [busy, setBusy] = useState(false);
	const [msg, setMsg] = useState<string | null>(null);

	useEffect(() => {
		listAllProjectsForAdmin().then((p) => {
			setProjects(p);
			if (p.length && !slug) setSlug(p[0].slug);
		});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const loadImages = (s: string) => listProjectImages(s).then(setImages).catch(() => setImages([]));
	useEffect(() => {
		if (slug) loadImages(slug);
	}, [slug]);

	const onFiles = async (files: FileList | null) => {
		if (!files || !slug) return;
		setBusy(true);
		setMsg(null);
		try {
			for (const file of Array.from(files)) {
				await uploadProjectImage(slug, file);
			}
			setMsg(`${files.length} photo(s) ajoutée(s) ✅`);
			loadImages(slug);
		} catch (err) {
			setMsg(err instanceof Error ? err.message : "Erreur d'upload");
		} finally {
			setBusy(false);
		}
	};

	const remove = async (row: ProjectImageRow) => {
		if (!confirm("Supprimer cette photo ?")) return;
		await deleteProjectImage(row);
		loadImages(slug);
	};

	return (
		<div className={card}>
			<h2 className="mb-4 text-base font-bold">Déposer des photos de projet</h2>
			<div className="grid gap-4 sm:grid-cols-[1fr_auto] sm:items-end">
				<div>
					<label className={label}>Projet</label>
					<select value={slug} onChange={(e) => setSlug(e.target.value)} className={input}>
						{projects.map((p) => (
							<option key={p.slug} value={p.slug}>
								{p.name} {p.fromDb ? "" : "(existant)"}
							</option>
						))}
					</select>
				</div>
				<label className={`${btn} cursor-pointer`}>
					{busy ? <Loader2 className="h-4 w-4 animate-spin" /> : <UploadCloud className="h-4 w-4" />}
					Choisir des images
					<input
						type="file"
						accept="image/*"
						multiple
						hidden
						onChange={(e) => onFiles(e.target.files)}
					/>
				</label>
			</div>
			{msg && <p className="mt-3 text-sm text-charcoal/70">{msg}</p>}

			<div className="mt-6">
				<h3 className="mb-3 text-sm font-semibold text-charcoal/70">
					Photos de ce projet ({images.length})
				</h3>
				{images.length === 0 ? (
					<p className="text-sm text-charcoal/50">Aucune photo pour ce projet.</p>
				) : (
					<div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
						{images.map((img) => (
							<div
								key={img.id}
								className="group relative overflow-hidden rounded-lg border border-charcoal/10"
							>
								<img src={img.url} alt="" className="aspect-square w-full object-cover" />
								<button
									onClick={() => remove(img)}
									className="absolute right-1.5 top-1.5 grid h-7 w-7 place-items-center rounded-full bg-white/90 text-charcoal/60 opacity-0 shadow transition hover:text-red-600 group-hover:opacity-100"
								>
									<Trash2 className="h-3.5 w-3.5" />
								</button>
							</div>
						))}
					</div>
				)}
			</div>
		</div>
	);
};

// ---------------------------------------------------------------------
//  Onglet Documents privés
// ---------------------------------------------------------------------
const DocumentsPanel: React.FC = () => {
	const [title, setTitle] = useState("");
	const [kind, setKind] = useState("certificate");
	const [issuer, setIssuer] = useState("");
	const [file, setFile] = useState<File | null>(null);
	const [rows, setRows] = useState<DocumentRow[]>([]);
	const [busy, setBusy] = useState(false);
	const [msg, setMsg] = useState<string | null>(null);
	const [copied, setCopied] = useState<string | null>(null);

	const refresh = () => listDocuments().then(setRows).catch(() => setRows([]));
	useEffect(() => {
		refresh();
	}, []);

	const submit = async (e: React.FormEvent) => {
		e.preventDefault();
		if (!file) return;
		setBusy(true);
		setMsg(null);
		try {
			await uploadDocument({ title, kind, issuer: issuer || undefined, file });
			setTitle("");
			setIssuer("");
			setFile(null);
			(document.getElementById("doc-file") as HTMLInputElement | null)?.value &&
				((document.getElementById("doc-file") as HTMLInputElement).value = "");
			setMsg("Document ajouté ✅");
			refresh();
		} catch (err) {
			setMsg(err instanceof Error ? err.message : "Erreur");
		} finally {
			setBusy(false);
		}
	};

	const share = async (row: DocumentRow) => {
		try {
			const url = await signDocumentUrl(row.path);
			await navigator.clipboard.writeText(url);
			setCopied(row.id);
			setTimeout(() => setCopied((c) => (c === row.id ? null : c)), 2500);
		} catch (err) {
			setMsg(err instanceof Error ? err.message : "Impossible de générer le lien");
		}
	};

	const remove = async (row: DocumentRow) => {
		if (!confirm("Supprimer ce document ?")) return;
		await deleteDocument(row);
		refresh();
	};

	return (
		<div className="grid gap-6 lg:grid-cols-[1fr_1.2fr]">
			<form onSubmit={submit} className={card}>
				<h2 className="mb-1 text-base font-bold">Ajouter un document privé</h2>
				<p className="mb-4 text-xs text-charcoal/50">
					Certificats de travail & lettres de recommandation. Jamais affichés publiquement : partage par
					lien signé (valable 7 jours).
				</p>
				<div className="space-y-3">
					<div>
						<label className={label}>Titre *</label>
						<input required value={title} onChange={(e) => setTitle(e.target.value)} className={input} />
					</div>
					<div>
						<label className={label}>Type</label>
						<select value={kind} onChange={(e) => setKind(e.target.value)} className={input}>
							<option value="certificate">Certificat de travail</option>
							<option value="recommendation">Lettre de recommandation</option>
						</select>
					</div>
					<div>
						<label className={label}>Émetteur (entreprise / personne)</label>
						<input value={issuer} onChange={(e) => setIssuer(e.target.value)} className={input} />
					</div>
					<div>
						<label className={label}>Fichier (PDF, image…) *</label>
						<input
							id="doc-file"
							type="file"
							required
							accept="application/pdf,image/*"
							onChange={(e) => setFile(e.target.files?.[0] ?? null)}
							className={input}
						/>
					</div>
					{msg && <p className="text-sm text-charcoal/70">{msg}</p>}
					<button type="submit" disabled={busy || !file} className={btn}>
						{busy ? <Loader2 className="h-4 w-4 animate-spin" /> : <UploadCloud className="h-4 w-4" />}
						Déposer
					</button>
				</div>
			</form>

			<div className={card}>
				<h2 className="mb-4 text-base font-bold">Mes documents ({rows.length})</h2>
				{rows.length === 0 ? (
					<p className="text-sm text-charcoal/50">Aucun document pour l'instant.</p>
				) : (
					<ul className="space-y-2">
						{rows.map((r) => (
							<li key={r.id} className="rounded-lg border border-charcoal/10 px-3 py-2.5">
								<div className="flex items-center justify-between gap-3">
									<div className="min-w-0">
										<p className="truncate text-sm font-semibold">{r.title}</p>
										<p className="truncate text-xs text-charcoal/50">
											{r.kind === "certificate" ? "Certificat" : "Recommandation"}
											{r.issuer ? ` · ${r.issuer}` : ""}
										</p>
									</div>
									<div className="flex shrink-0 items-center gap-2">
										<button onClick={() => share(r)} className={btnGhost}>
											{copied === r.id ? (
												<>
													<Check className="h-3.5 w-3.5" /> Copié
												</>
											) : (
												<>
													<Link2 className="h-3.5 w-3.5" /> Lien
												</>
											)}
										</button>
										<button
											onClick={() => remove(r)}
											className="text-charcoal/40 hover:text-red-600"
										>
											<Trash2 className="h-4 w-4" />
										</button>
									</div>
								</div>
							</li>
						))}
					</ul>
				)}
				<p className="mt-4 flex items-center gap-2 text-xs text-charcoal/45">
					<Copy className="h-3.5 w-3.5" /> « Lien » copie une URL signée temporaire à envoyer à un
					recruteur.
				</p>
			</div>
		</div>
	);
};

export default Admin;
