import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Code, Brain, Compass, Rocket, ArrowRight } from "lucide-react";
import Hero from "../components/hero";
import FeaturedProjects from "../components/featuredProjects";
import { useLang } from "@/lib/LanguageContext";
import { TranslationKey } from "@/lib/i18n";

const services = [
	{ key: "fullstack", Icon: Code },
	{ key: "ai", Icon: Brain },
	{ key: "lead", Icon: Compass },
	{ key: "saas", Icon: Rocket },
] as const;

const stackRows = [
	{
		labelKey: "skills.cat.frontend",
		items: "React · Next.js · Nuxt 3 · Vue 3 · TypeScript · JavaScript · Tailwind · shadcn/ui · MUI · Bootstrap · Framer Motion · Redux · Zustand · Pinia · Sass · Vite",
	},
	{
		labelKey: "skills.cat.backend",
		items: "Node.js · Express · NestJS · FastAPI · Python · Java 21 · JavaFX · PHP · Laravel · Flask · REST · WebSockets · JWT · OAuth",
	},
	{
		labelKey: "skills.cat.ai",
		items: "OpenAI · Gemini · Claude · OpenRouter · Hermes · RAG · LLM · NLP · BERT · LDA · NER · YOLO v8 · OCR · MediaPipe · scikit-learn · pandas · numpy · Jupyter",
	},
	{
		labelKey: "skills.cat.mobile",
		items: "Flutter · Dart · Riverpod · Provider · Hive · SQLite · fl_chart · React Native · Expo",
	},
	{
		labelKey: "skills.cat.db",
		items: "PostgreSQL · MySQL · MongoDB · SQLite · Prisma · Supabase · Neon · Firebase · Redis · Docker · Nginx · Caddy · Terraform · Prometheus · Loki · GitHub Actions · GitLab CI",
	},
	{
		labelKey: "skills.cat.cms",
		items: "WordPress · Elementor · Shopify · WooCommerce · Stripe",
	},
	{
		labelKey: "skills.cat.hosting",
		items: "Google Cloud · Hetzner · OVHcloud · LWS · Vercel · Render · Cloudflare R2 · AWS / S3 · MinIO",
	},
	{
		labelKey: "skills.cat.tooling",
		items: "Git · Git Flow · n8n · Telegram API · WhatsApp API · Meta Graph API · Trello API · Calendly · Resend · Nodemailer · Pusher · Cloudinary · Postman · Figma · Agile / Scrum · ArchUnit · Resilience4j · OpenTelemetry",
	},
];

const SectionHead: React.FC<{ n: string; title: string }> = ({ n, title }) => (
	<div className="mb-10 flex items-center gap-4">
		<span className="font-mono text-sm font-medium text-lime">({n})</span>
		<span className="h-px flex-1 bg-charcoal/15" />
		<h2 className="text-2xl font-black uppercase tracking-tighter">{title}</h2>
	</div>
);

const Home: React.FC = () => {
	const navigate = useNavigate();
	const { t } = useLang();

	return (
		<>
			<Hero />

			<FeaturedProjects />

			{/* SERVICES (03) */}
			<section className="bg-cream py-24 text-charcoal">
				<div className="mx-auto max-w-[1400px] px-6 lg:px-10">
					<SectionHead n="03" title={t("home.services.title")} />
					<div className="grid gap-px overflow-hidden rounded-sm border border-charcoal/15 bg-charcoal/15 sm:grid-cols-2 lg:grid-cols-4">
						{services.map((s, i) => (
							<motion.div
								key={s.key}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: i * 0.06, duration: 0.5 }}
								className="group bg-cream p-7 transition hover:bg-white"
							>
								<div className="mb-8 flex items-center justify-between">
									<s.Icon className="h-6 w-6 text-lime" />
									<span className="font-mono text-xs text-charcoal/30">0{i + 1}</span>
								</div>
								<h3 className="text-lg font-black uppercase tracking-tight">
									{t(`services.${s.key}.title` as TranslationKey)}
								</h3>
								<p className="mt-2 text-sm leading-relaxed text-charcoal/60">
									{t(`services.${s.key}.desc` as TranslationKey)}
								</p>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* STACK (04) */}
			<section className="border-t border-charcoal/15 bg-cream py-24 text-charcoal">
				<div className="mx-auto max-w-[1400px] px-6 lg:px-10">
					<SectionHead n="04" title={t("home.tech.title")} />
					<div className="border-t border-charcoal/15">
						{stackRows.map((r, i) => (
							<motion.div
								key={r.labelKey}
								initial={{ opacity: 0, x: -20 }}
								whileInView={{ opacity: 1, x: 0 }}
								viewport={{ once: true }}
								transition={{ delay: i * 0.05, duration: 0.5 }}
								className="flex flex-col gap-1 border-b border-charcoal/15 py-5 md:flex-row md:items-baseline md:gap-8"
							>
								<div className="w-44 shrink-0 font-mono text-xs uppercase tracking-widest text-lime">
									{t(r.labelKey as TranslationKey)}
								</div>
								<div className="font-mono text-sm text-charcoal/70">{r.items}</div>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* CTA (05) — bold electric-blue block */}
			<section className="bg-lime py-28 text-white">
				<div className="mx-auto max-w-[1400px] px-6 text-center lg:px-10">
					<motion.h2
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						className="text-4xl font-black uppercase leading-[0.9] tracking-tighter md:text-7xl"
					>
						{t("home.cta.title")}
					</motion.h2>
					<p className="mx-auto mt-5 max-w-xl font-mono text-sm text-white/80">
						{t("home.cta.subtitle")}
					</p>
					<div className="mt-8 flex flex-wrap justify-center gap-3">
						<button
							onClick={() => navigate("/contact")}
							className="rounded-full bg-white px-7 py-3.5 text-sm font-bold tracking-wide text-charcoal transition hover:brightness-95"
						>
							{t("common.hireMe")}
						</button>
						<button
							onClick={() => navigate("/projects-v2")}
							className="inline-flex items-center gap-2 rounded-full border border-white/60 px-7 py-3.5 text-sm font-bold tracking-wide text-white transition hover:bg-white hover:text-charcoal"
						>
							{t("common.seeMyWork")}
							<ArrowRight className="h-4 w-4" />
						</button>
					</div>
				</div>
			</section>
		</>
	);
};

export default Home;
