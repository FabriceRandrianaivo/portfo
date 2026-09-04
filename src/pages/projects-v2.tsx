import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { projects } from "../data/projects";
import { useLang } from "@/lib/LanguageContext";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import ProjectImage from "@/components/ui/projectImage";
import {
	ExternalLink,
	Github,
	Star,
	Search,
	ArrowUpRight,
	Lock,
	Building2,
	ListChecks,
	Layers,
	LinkIcon,
	Eye,
} from "lucide-react";

type SortMode = "recent" | "oldest" | "name";

const ProjectsV2: React.FC = () => {
	const [activeCategory, setActiveCategory] = useState<string>("All");
	const [search, setSearch] = useState<string>("");
	const [showFeaturedOnly, setShowFeaturedOnly] = useState<boolean>(false);
	const [sortMode, setSortMode] = useState<SortMode>("recent");
	const { t, lang } = useLang();

	const categories = useMemo(() => {
		const set = new Set<string>(["All"]);
		projects.forEach((p) => p.category && set.add(p.category));
		return Array.from(set);
	}, []);

	const filtered = useMemo(() => {
		const q = search.trim().toLowerCase();
		const list = projects.filter((p) => {
			if (showFeaturedOnly && !p.featured) return false;
			if (activeCategory !== "All" && p.category !== activeCategory) return false;
			if (!q) return true;
			return [p.name, p.company, p.description?.[lang] || "", p.category || "", ...(p.technologies || [])]
				.join(" ")
				.toLowerCase()
				.includes(q);
		});
		const sorted = [...list];
		if (sortMode === "recent") sorted.sort((a, b) => b.year - a.year);
		else if (sortMode === "oldest") sorted.sort((a, b) => a.year - b.year);
		else sorted.sort((a, b) => a.name.localeCompare(b.name));
		return sorted;
	}, [search, activeCategory, showFeaturedOnly, sortMode]);

	return (
		<div className="relative min-h-screen bg-cream pb-24 pt-28 text-charcoal">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				{/* header */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
				>
					<p className="font-mono text-xs uppercase tracking-[0.25em] text-lime">
						{t("projects.eyebrow")}
					</p>
					<h1 className="mt-3 text-4xl font-bold tracking-tight md:text-6xl">
						{t("projects.title.before")}{" "}
						<span className="text-lime">{t("projects.title.gradient")}</span>
					</h1>
					<p className="mt-4 max-w-2xl text-charcoal/60">{t("projects.subtitle")}</p>
				</motion.div>

				{/* controls */}
				<div className="mt-10 space-y-5">
					<div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
						<div className="relative flex-1 md:max-w-sm">
							<Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-charcoal/40" />
							<input
								value={search}
								onChange={(e) => setSearch(e.target.value)}
								placeholder={t("projects.search")}
								className="w-full rounded-full border border-charcoal/15 bg-white py-2.5 pl-10 pr-4 text-sm text-charcoal outline-none transition focus:border-lime"
							/>
						</div>
						<div className="flex items-center gap-3">
							<div className="flex items-center gap-2">
								<span className="font-mono text-xs uppercase tracking-widest text-charcoal/45">
									{t("common.sort")}
								</span>
								<select
									value={sortMode}
									onChange={(e) => setSortMode(e.target.value as SortMode)}
									className="rounded-full border border-charcoal/15 bg-white px-3 py-1.5 text-sm text-charcoal outline-none transition focus:border-lime"
								>
									<option value="recent">{t("common.sortRecent")}</option>
									<option value="oldest">{t("common.sortOldest")}</option>
									<option value="name">{t("common.sortName")}</option>
								</select>
							</div>
							<button
								onClick={() => setShowFeaturedOnly((v) => !v)}
								className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-2 text-xs font-semibold transition ${
									showFeaturedOnly
										? "border-lime bg-lime text-white"
										: "border-charcoal/15 text-charcoal/60 hover:border-lime hover:text-lime"
								}`}
							>
								<Star className="h-3.5 w-3.5" />
								{t("common.featuredOnly")}
							</button>
						</div>
					</div>

					<div className="flex flex-wrap items-center gap-2">
						{categories.map((c) => {
							const active = activeCategory === c;
							return (
								<button
									key={c}
									onClick={() => setActiveCategory(c)}
									className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition ${
										active
											? "bg-charcoal text-white"
											: "border border-charcoal/15 text-charcoal/55 hover:border-lime hover:text-lime"
									}`}
								>
									{c}
								</button>
							);
						})}
						<span className="ml-auto font-mono text-xs text-charcoal/45">
							{filtered.length} {filtered.length !== 1 ? t("common.results") : t("common.result")}
						</span>
					</div>
				</div>

				{/* grid */}
				<div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
					{filtered.map((project) => (
						<Dialog key={project.name}>
							<DialogTrigger asChild>
								<motion.button
									layout
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.4 }}
									className="group relative flex flex-col overflow-hidden rounded-2xl border border-charcoal/10 bg-white text-left shadow-sm transition hover:-translate-y-1 hover:border-lime hover:shadow-xl"
								>
									<div className="relative aspect-[16/10] w-full overflow-hidden bg-charcoal/5">
										<ProjectImage
											src={project.img}
											alt={project.name}
											name={project.name}
											className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
										/>
										{project.featured && (
											<span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-lime px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-white">
												<Star className="h-3 w-3" /> {t("common.featured")}
											</span>
										)}
										<span className="absolute right-3 top-3 grid h-8 w-8 place-items-center rounded-full bg-white text-lime opacity-0 shadow-md transition group-hover:opacity-100">
											<ArrowUpRight className="h-4 w-4" />
										</span>
									</div>

									<div className="flex flex-1 flex-col gap-2 p-5">
										<p className="font-mono text-[11px] uppercase tracking-widest text-lime">
											{project.company}
										</p>
										<h3 className="text-lg font-bold">{project.name}</h3>
										<p className="line-clamp-2 text-sm text-charcoal/55">{project.description?.[lang]}</p>
										<div className="mt-auto flex flex-wrap gap-1.5 pt-3">
											{project.technologies.slice(0, 3).map((tech) => (
												<span
													key={tech}
													className="rounded-full bg-charcoal/[0.05] px-2.5 py-0.5 text-[10px] font-medium text-charcoal/60"
												>
													{tech}
												</span>
											))}
											{project.technologies.length > 3 && (
												<span className="rounded-full bg-charcoal/[0.05] px-2.5 py-0.5 text-[10px] font-medium text-charcoal/60">
													+{project.technologies.length - 3}
												</span>
											)}
										</div>
									</div>
								</motion.button>
							</DialogTrigger>

							<DialogContent className="max-w-3xl border-charcoal/10 bg-cream p-0 text-charcoal">
								<ScrollArea className="max-h-[85vh]">
									{/* Preview — galerie style Play Store (tous projets) */}
									{project.screenshots && project.screenshots.length > 0 ? (
										<div className="border-b border-charcoal/10 bg-charcoal/[0.04] p-5">
											{project.screenshots.length === 1 ? (
												<img
													src={project.screenshots[0]}
													alt={project.name}
													className="max-h-[440px] w-full rounded-xl border border-charcoal/10 object-cover"
												/>
											) : (
												<div className="flex gap-3 overflow-x-auto pb-2">
													{project.screenshots.map((src, i) => (
														<img
															key={i}
															src={src}
															alt={`${project.name} — ${i + 1}`}
															loading="lazy"
															className="h-72 w-auto shrink-0 rounded-xl border border-charcoal/10 bg-white object-contain shadow-sm"
														/>
													))}
												</div>
											)}
										</div>
									) : (
										<div className="relative aspect-[21/9] w-full overflow-hidden bg-charcoal/5">
											<ProjectImage
												src={project.img}
												alt={project.name}
												name={project.name}
												className="h-full w-full object-cover"
											/>
										</div>
									)}

									<div className="space-y-7 p-6 md:p-8">
										<DialogHeader>
											<div className="flex flex-wrap items-center gap-2">
												<span className="rounded-full bg-lime px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-white">
													{project.year}
												</span>
												{project.category && (
													<span className="rounded-full border border-charcoal/15 px-2.5 py-1 text-[10px] uppercase tracking-wide text-charcoal/55">
														{project.category}
													</span>
												)}
											</div>
											<DialogTitle className="mt-3 text-3xl font-bold tracking-tight">
												{project.name}
											</DialogTitle>
										</DialogHeader>

										{/* Overview */}
										<div>
											<h4 className="mb-2 flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-lime">
												<Eye className="h-4 w-4" /> {t("common.overview")}
											</h4>
											<p className="text-base leading-relaxed text-charcoal/70">
												{project.description?.[lang]}
											</p>
										</div>

										{/* Role */}
										<div>
											<h4 className="mb-2 flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-lime">
												<Building2 className="h-4 w-4" /> {t("common.role")}
											</h4>
											<p className="text-base text-charcoal/70">{project.company}</p>
										</div>

										{/* Responsibilities */}
										<div>
											<h4 className="mb-2 flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-lime">
												<ListChecks className="h-4 w-4" /> {t("common.responsibilities")}
											</h4>
											<ul className="space-y-2">
												{project.post[lang].map((item, i) => (
													<li key={i} className="flex gap-2 text-sm text-charcoal/70">
														<span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-lime" />
														{item}
													</li>
												))}
											</ul>
										</div>

										{/* Tech stack */}
										<div>
											<h4 className="mb-3 flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-lime">
												<Layers className="h-4 w-4" /> {t("common.tech")}
											</h4>
											<div className="flex flex-wrap gap-2">
												{project.technologies.map((tech) => (
													<span
														key={tech}
														className="rounded-full border border-charcoal/15 px-3 py-1 text-xs text-charcoal/70"
													>
														{tech}
													</span>
												))}
											</div>
										</div>

										{/* Links */}
										<div>
											<h4 className="mb-3 flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-lime">
												<LinkIcon className="h-4 w-4" /> {t("common.links")}
											</h4>
											{project.link.length > 0 ? (
												<div className="flex flex-wrap gap-3">
													{project.link.map((link, i) => {
														const isGithub = link.includes("github");
														return (
															<a
																key={i}
																href={`https://${link}`}
																target="_blank"
																rel="noopener noreferrer"
																className="inline-flex items-center gap-2 rounded-full bg-lime px-5 py-2.5 text-sm font-semibold text-white transition hover:brightness-110"
															>
																{isGithub ? (
																	<Github className="h-4 w-4" />
																) : (
																	<ExternalLink className="h-4 w-4" />
																)}
																{isGithub ? t("common.viewCode") : t("common.liveDemo")}
															</a>
														);
													})}
												</div>
											) : (
												<div className="inline-flex items-center gap-2 rounded-full border border-charcoal/15 px-4 py-2 font-mono text-xs uppercase tracking-wide text-charcoal/50">
													<Lock className="h-3.5 w-3.5" /> {t("common.privateProject")}
												</div>
											)}
										</div>
									</div>
								</ScrollArea>
							</DialogContent>
						</Dialog>
					))}
				</div>

				{filtered.length === 0 && (
					<div className="mt-12 rounded-2xl border border-dashed border-charcoal/20 p-12 text-center font-mono text-sm text-charcoal/50">
						{t("common.noMatch")}
					</div>
				)}
			</div>
		</div>
	);
};

export default ProjectsV2;
