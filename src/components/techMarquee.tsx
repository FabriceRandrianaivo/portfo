import React from "react";
import { useLang } from "@/lib/LanguageContext";

const stack = [
	"Next.js",
	"Nuxt 3",
	"React",
	"TypeScript",
	"Tailwind CSS",
	"Node.js",
	"Python",
	"FastAPI",
	"Java 21",
	"JavaFX",
	"PostgreSQL",
	"MongoDB",
	"Prisma",
	"Docker",
	"Terraform",
	"YOLO v8",
	"OpenAI",
	"Anthropic",
	"Flutter",
	"Stripe",
	"Vercel",
	"Linux",
];

const TechMarquee: React.FC = () => {
	const { t } = useLang();
	const items = [...stack, ...stack];

	return (
		<section className="relative overflow-hidden border-y border-white/10 bg-white/[0.02] py-16">
			<div className="mx-auto mb-8 max-w-7xl px-6 lg:px-8">
				<p className="text-sm uppercase tracking-[0.2em] text-cyan-300">
					{t("home.tech.eyebrow")}
				</p>
				<h3 className="mt-2 text-2xl font-bold md:text-3xl">{t("home.tech.title")}</h3>
			</div>

			<div className="relative">
				<div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-background to-transparent" />
				<div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-background to-transparent" />

				<div className="flex w-max animate-marquee gap-3 px-6">
					{items.map((s, i) => (
						<span
							key={`${s}-${i}`}
							className="rounded-full border border-white/10 bg-white/[0.03] px-5 py-2 text-sm font-medium text-muted-foreground"
						>
							{s}
						</span>
					))}
				</div>
			</div>
		</section>
	);
};

export default TechMarquee;
