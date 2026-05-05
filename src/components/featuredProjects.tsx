import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowRight, ExternalLink, Github, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { projects } from "../data/projects";
import { useLang } from "@/lib/LanguageContext";

const FeaturedProjects: React.FC = () => {
	const navigate = useNavigate();
	const { t } = useLang();

	const featured = projects.filter((p) => p.featured).slice(0, 6);

	return (
		<section className="relative py-24">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
					<div>
						<p className="text-sm uppercase tracking-[0.2em] text-cyan-300">
							{t("home.featured.eyebrow")}
						</p>
						<h2 className="mt-2 text-3xl font-bold md:text-5xl">
							{t("home.featured.title")}
						</h2>
						<p className="mt-3 max-w-xl text-muted-foreground">
							{t("home.featured.subtitle")}
						</p>
					</div>
					<Button
						size="lg"
						onClick={() => navigate("/projects-v2")}
						className="border-2 border-cyan-400/60 bg-transparent text-cyan-300 hover:bg-cyan-400/10"
					>
						{t("home.featured.cta")}
						<ArrowRight className="ml-2 h-4 w-4" />
					</Button>
				</div>

				<div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
					{featured.map((p, i) => {
						const firstLink = p.link?.[0] ?? "";
						const isGithub = firstLink.includes("github");
						return (
							<motion.article
								key={p.name}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true, margin: "-50px" }}
								transition={{ duration: 0.4, delay: i * 0.05 }}
								className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur transition-all hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-cyan-400/[0.03]"
							>
								<div className="relative aspect-[16/10] overflow-hidden">
									<img
										src={p.img}
										alt={p.name}
										className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
									/>
									<div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
									<div className="absolute right-3 top-3 flex items-center gap-1.5 rounded-full border border-amber-400/30 bg-amber-400/10 px-2.5 py-1 text-[10px] font-medium text-amber-300 backdrop-blur">
										<Star className="h-3 w-3" />
										{t("common.featured")}
									</div>
									<div className="absolute bottom-3 left-3 flex items-center gap-2">
										<Badge
											variant="outline"
											className="border-cyan-400/30 bg-cyan-400/10 text-[10px] text-cyan-300 backdrop-blur"
										>
											{p.year}
										</Badge>
										{p.category && (
											<Badge
												variant="outline"
												className="border-white/10 bg-background/40 text-[10px] text-muted-foreground backdrop-blur"
											>
												{p.category}
											</Badge>
										)}
									</div>
								</div>

								<div className="flex flex-1 flex-col gap-3 p-5">
									<div>
										<p className="text-[11px] uppercase tracking-[0.16em] text-cyan-300">
											{p.company}
										</p>
										<h3 className="mt-1 text-lg font-bold">{p.name}</h3>
									</div>
									<p className="line-clamp-3 text-sm text-muted-foreground">
										{p.description}
									</p>
									<div className="mt-auto flex flex-wrap gap-1.5 pt-2">
										{p.technologies.slice(0, 4).map((tech) => (
											<span
												key={tech}
												className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-0.5 text-[10px] font-medium text-muted-foreground"
											>
												{tech}
											</span>
										))}
										{p.technologies.length > 4 && (
											<span className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-0.5 text-[10px] font-medium text-muted-foreground">
												+{p.technologies.length - 4}
											</span>
										)}
									</div>
									<div className="flex items-center gap-3 pt-3">
										<button
											onClick={() => navigate("/projects-v2")}
											className="text-xs font-semibold text-cyan-300 hover:underline"
										>
											{t("common.viewDetails")}
										</button>
										{firstLink && (
											<a
												href={`https://${firstLink}`}
												target="_blank"
												rel="noopener noreferrer"
												className="ml-auto inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground"
												onClick={(e) => e.stopPropagation()}
											>
												{isGithub ? (
													<Github className="h-3.5 w-3.5" />
												) : (
													<ExternalLink className="h-3.5 w-3.5" />
												)}
												{isGithub ? t("common.viewCode") : t("common.liveDemo")}
											</a>
										)}
									</div>
								</div>
							</motion.article>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default FeaturedProjects;
