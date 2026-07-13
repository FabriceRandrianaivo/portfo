import React from "react";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Sparkles } from "lucide-react";
import { experiences } from "../data/profile";
import { useLang } from "@/lib/LanguageContext";
import { TranslationKey } from "@/lib/i18n";

const typeMeta = {
	work: { icon: <Briefcase className="h-3.5 w-3.5" />, key: "experience.type.work" as TranslationKey },
	freelance: {
		icon: <Sparkles className="h-3.5 w-3.5" />,
		key: "experience.type.freelance" as TranslationKey,
	},
	education: {
		icon: <GraduationCap className="h-3.5 w-3.5" />,
		key: "experience.type.education" as TranslationKey,
	},
} as const;

const Experience: React.FC = () => {
	const { t, lang } = useLang();

	return (
		<div className="relative min-h-screen bg-cream pb-24 pt-28 text-charcoal">
			<div className="mx-auto max-w-4xl px-6 lg:px-8">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
				>
					<p className="font-mono text-xs uppercase tracking-[0.25em] text-charcoal/50">
						{t("experience.eyebrow")}
					</p>
					<h1 className="mt-3 text-5xl font-bold tracking-tight md:text-7xl">
						{t("experience.title.gradient")}
						<span className="text-lime">.</span>
					</h1>
					<p className="mt-4 max-w-2xl font-mono text-sm text-charcoal/55">
						{t("experience.subtitle")}
					</p>
				</motion.div>

				<div className="relative mt-14 pl-8">
					{/* vertical line */}
					<div className="absolute left-[7px] top-2 h-full w-[2px] bg-charcoal/10" />

					<ul className="space-y-8">
						{experiences.map((exp, i) => {
							const meta = typeMeta[exp.type];
							return (
								<motion.li
									key={`${exp.role.fr}-${exp.period}`}
									initial={{ opacity: 0, y: 24 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true, margin: "-80px" }}
									transition={{ duration: 0.5, delay: i * 0.05 }}
									className="relative"
								>
									{/* dot */}
									<span className="absolute -left-8 top-2 grid h-4 w-4 place-items-center rounded-full bg-lime ring-4 ring-cream" />

									<div className="rounded-2xl border border-charcoal/10 bg-white p-6 transition hover:border-lime hover:shadow-lg">
										<div className="flex flex-wrap items-center gap-3">
											<span className="inline-flex items-center gap-1.5 rounded-full bg-lime px-2.5 py-1 font-mono text-[10px] uppercase tracking-wide text-white">
												{meta.icon}
												{t(meta.key)}
											</span>
											<span className="font-mono text-xs text-charcoal/50">{exp.period}</span>
										</div>

										<h3 className="mt-3 text-xl font-black tracking-tight">{exp.role[lang]}</h3>
										<p className="font-mono text-sm font-bold text-lime">{exp.company}</p>
										{exp.location && (
											<p className="font-mono text-xs text-charcoal/45">{exp.location}</p>
										)}

										<ul className="mt-4 space-y-2">
											{exp.highlights[lang].map((h, j) => (
												<li key={j} className="flex gap-2 text-sm leading-relaxed text-charcoal/65">
													<span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-lime" />
													{h}
												</li>
											))}
										</ul>

										{exp.stack && (
											<div className="mt-4 flex flex-wrap gap-1.5">
												{exp.stack.map((s) => (
													<span
														key={s}
														className="rounded-full border border-charcoal/10 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wide text-charcoal/50"
													>
														{s}
													</span>
												))}
											</div>
										)}
									</div>
								</motion.li>
							);
						})}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Experience;
