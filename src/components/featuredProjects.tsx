import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowUpRight, ArrowRight, Star } from "lucide-react";
import { projects } from "../data/projects";
import { useLang } from "@/lib/LanguageContext";
import ProjectImage from "@/components/ui/projectImage";

const FeaturedProjects: React.FC = () => {
	const navigate = useNavigate();
	const { t, lang } = useLang();
	const FEATURED_ORDER = [
		"Borne Stad V2",
		"myAuxilium",
		"CosyNight / RentFlow",
		"Externam CRM",
		"AISPAM — App médicale",
		"PilatPro",
	];
	const featured = FEATURED_ORDER.map((n) => projects.find((p) => p.name === n)).filter(
		(p): p is (typeof projects)[number] => p !== undefined
	);

	return (
		<section className="relative bg-cream py-20 text-charcoal md:py-24">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
					<div>
						<p className="font-mono text-xs uppercase tracking-[0.25em] text-lime">
							{t("home.featured.eyebrow")}
						</p>
						<h2 className="mt-3 text-3xl font-bold tracking-tight md:text-5xl">
							{t("home.featured.title")}
						</h2>
						<p className="mt-3 max-w-xl text-charcoal/60">{t("home.featured.subtitle")}</p>
					</div>
					<button
						onClick={() => navigate("/projects-v2")}
						className="group inline-flex shrink-0 items-center gap-2 self-start rounded-full border border-charcoal/20 px-5 py-2.5 text-sm font-semibold transition hover:border-lime hover:text-lime"
					>
						{t("home.featured.cta")}
						<ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
					</button>
				</div>

				<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
					{featured.map((p, i) => (
						<motion.button
							key={p.name}
							onClick={() => navigate("/projects-v2")}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, margin: "-40px" }}
							transition={{ duration: 0.4, delay: (i % 3) * 0.06 }}
							className="group relative flex flex-col overflow-hidden rounded-2xl border border-charcoal/10 bg-white text-left shadow-sm transition hover:-translate-y-1 hover:border-lime hover:shadow-xl"
						>
							<div className="relative aspect-[16/10] w-full overflow-hidden bg-charcoal/5">
								<ProjectImage
									src={p.img}
									alt={p.name}
									name={p.name}
									className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
								/>
								<span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-lime px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-white">
									<Star className="h-3 w-3" /> {t("common.featured")}
								</span>
								<span className="absolute right-3 top-3 grid h-8 w-8 place-items-center rounded-full bg-white text-lime opacity-0 shadow-md transition group-hover:opacity-100">
									<ArrowUpRight className="h-4 w-4" />
								</span>
							</div>
							<div className="flex flex-1 flex-col gap-2 p-5">
								<p className="font-mono text-[11px] uppercase tracking-widest text-lime">
									{p.company}
								</p>
								<h3 className="text-lg font-bold">{p.name}</h3>
								<p className="line-clamp-2 text-sm text-charcoal/55">{p.description?.[lang]}</p>
								<div className="mt-auto flex flex-wrap gap-1.5 pt-3">
									{p.technologies.slice(0, 3).map((tech) => (
										<span
											key={tech}
											className="rounded-full bg-charcoal/[0.05] px-2.5 py-0.5 text-[10px] font-medium text-charcoal/60"
										>
											{tech}
										</span>
									))}
								</div>
							</div>
						</motion.button>
					))}
				</div>
			</div>
		</section>
	);
};

export default FeaturedProjects;
