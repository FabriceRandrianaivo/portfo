import React from "react";
import { motion } from "framer-motion";
import {
	Monitor,
	Server,
	Brain,
	Smartphone,
	Database,
	Wrench,
	ShoppingCart,
	Cloud,
} from "lucide-react";
import { skillCategories } from "../data/profile";
import { useLang } from "@/lib/LanguageContext";
import { TranslationKey } from "@/lib/i18n";

const iconFor = (key: string) => {
	switch (key) {
		case "monitor":
			return <Monitor className="h-4 w-4" />;
		case "server":
			return <Server className="h-4 w-4" />;
		case "brain":
			return <Brain className="h-4 w-4" />;
		case "smartphone":
			return <Smartphone className="h-4 w-4" />;
		case "database":
			return <Database className="h-4 w-4" />;
		case "cart":
			return <ShoppingCart className="h-4 w-4" />;
		case "cloud":
			return <Cloud className="h-4 w-4" />;
		case "wrench":
			return <Wrench className="h-4 w-4" />;
		default:
			return null;
	}
};

const titleKeys: TranslationKey[] = [
	"skills.cat.frontend",
	"skills.cat.backend",
	"skills.cat.ai",
	"skills.cat.mobile",
	"skills.cat.db",
	"skills.cat.cms",
	"skills.cat.hosting",
	"skills.cat.tooling",
];

const Skills: React.FC = () => {
	const { t } = useLang();

	return (
		<div className="relative min-h-screen bg-cream pb-24 pt-28 text-charcoal">
			<div className="mx-auto max-w-5xl px-6 lg:px-8">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
				>
					<p className="font-mono text-xs uppercase tracking-[0.25em] text-charcoal/50">
						{t("skills.eyebrow")}
					</p>
					<h1 className="mt-3 text-5xl font-bold tracking-tight md:text-7xl">
						{t("skills.title.before")}{" "}
						<span className="text-lime [text-shadow:0_2px_24px_rgba(110,147,174,0.35)]">
							{t("skills.title.gradient")}
						</span>
					</h1>
					<p className="mt-4 max-w-2xl font-mono text-sm text-charcoal/55">
						{t("skills.subtitle")}
					</p>
				</motion.div>

				<div className="mt-14 grid gap-x-12 gap-y-10 md:grid-cols-2">
					{skillCategories.map((cat, i) => (
						<motion.div
							key={cat.title}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, margin: "-60px" }}
							transition={{ duration: 0.4, delay: (i % 2) * 0.06 }}
							className="border-t border-charcoal/15 pt-5"
						>
							<div className="flex items-center gap-2.5">
								<span className="grid h-8 w-8 place-items-center rounded-lg bg-lime text-white">
									{iconFor(cat.icon)}
								</span>
								<h3 className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-charcoal">
									{t(titleKeys[i])}
								</h3>
							</div>
							<p className="mt-3 font-mono text-sm leading-relaxed text-charcoal/60">
								{cat.skills.join("  ·  ")}
							</p>
						</motion.div>
					))}
				</div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
					className="mt-16 grid gap-4 sm:grid-cols-3"
				>
					{[
						{ label: t("skills.bottom.languages"), value: t("skills.bottom.languagesValue") },
						{ label: t("skills.bottom.learning"), value: t("skills.bottom.learningValue") },
						{ label: t("skills.bottom.spoken"), value: t("skills.bottom.spokenValue") },
					].map((b) => (
						<div key={b.label} className="rounded-2xl border border-charcoal/10 bg-white p-5">
							<p className="font-mono text-[11px] uppercase tracking-[0.18em] text-lime">
								{b.label}
							</p>
							<p className="mt-2 font-mono text-sm text-charcoal/60">{b.value}</p>
						</div>
					))}
				</motion.div>
			</div>
		</div>
	);
};

export default Skills;
