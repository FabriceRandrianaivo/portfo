import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
	Code,
	Brain,
	Compass,
	Rocket,
	MapPin,
	Mail,
	Phone,
	ArrowRight,
	Download,
	Sparkles,
} from "lucide-react";
import me from "../assets/modele/me.png";
import cvPdf from "../assets/modele/pdf/FabriceRandrianaivo_JS_2025_CV.pdf";
import { profile, achievements, socials } from "../data/profile";
import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { useLang } from "@/lib/LanguageContext";
import { TranslationKey } from "@/lib/i18n";

const iconFor = (key: string) => {
	switch (key) {
		case "code":
			return <Code className="h-5 w-5" />;
		case "brain":
			return <Brain className="h-5 w-5" />;
		case "compass":
			return <Compass className="h-5 w-5" />;
		case "rocket":
			return <Rocket className="h-5 w-5" />;
		default:
			return <Sparkles className="h-5 w-5" />;
	}
};

const socialIcon = (name: string) => {
	switch (name) {
		case "GitHub":
			return <FaGithub />;
		case "LinkedIn":
			return <FaLinkedin />;
		case "Email":
			return <FaEnvelope />;
		case "WhatsApp":
			return <FaWhatsapp />;
		default:
			return null;
	}
};

const About: React.FC = () => {
	const navigate = useNavigate();
	const { t } = useLang();

	const services = [
		{ key: "fullstack", icon: "code" },
		{ key: "ai", icon: "brain" },
		{ key: "lead", icon: "compass" },
		{ key: "saas", icon: "rocket" },
	] as const;

	const valueKeys = ["ship", "arch", "own", "curious"] as const;
	const valueEmojis = ["🚢", "🏛️", "🎯", "🧭"];

	const statKeys: Array<{ value: string; key: TranslationKey }> = [
		{ value: achievements[0].value, key: "home.stats.label.projects" },
		{ value: achievements[1].value, key: "home.stats.label.years" },
		{ value: achievements[2].value, key: "home.stats.label.devs" },
		{ value: achievements[3].value, key: "home.stats.label.budget" },
	];

	return (
		<div className="relative min-h-screen bg-cream pb-24 pt-28 text-charcoal">
			<div className="mx-auto max-w-6xl px-6 lg:px-8">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
				>
					<p className="font-mono text-xs uppercase tracking-[0.25em] text-charcoal/50">
						{t("about.eyebrow")}
					</p>
					<h1 className="mt-3 text-5xl font-bold tracking-tight md:text-7xl">
						{t("about.title.before")}{" "}
						<span className="text-lime [text-shadow:0_2px_24px_rgba(110,147,174,0.35)]">
							{t("about.title.gradient")}
						</span>
					</h1>
				</motion.div>

				<div className="mt-14 grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
					{/* LEFT — portrait + contact/connect */}
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5, delay: 0.1 }}
						className="space-y-5"
					>
						<div className="relative mx-auto aspect-[4/5] w-full max-w-sm">
							<div className="absolute inset-0 scale-95 rounded-3xl bg-lime/25 blur-[60px]" />
							<div className="relative h-full w-full overflow-hidden rounded-3xl border-2 border-charcoal/10 bg-white">
								<img src={me} alt={profile.name} className="h-full w-full object-cover" />
							</div>
						</div>

						{/* Coordonnées */}
						<div className="space-y-3 rounded-2xl border border-charcoal/10 bg-white p-5">
							<p className="font-mono text-[11px] uppercase tracking-widest text-charcoal/40">
								{t("contact.channel.location")} · {t("contact.channel.email")}
							</p>
							<div className="flex items-center gap-3 text-sm">
								<MapPin className="h-4 w-4 text-lime" />
								<span className="text-charcoal/70">{profile.location}</span>
							</div>
							<a
								href={`mailto:${profile.email}`}
								className="flex items-center gap-3 text-sm text-charcoal/70 transition hover:text-charcoal"
							>
								<Mail className="h-4 w-4 text-lime" />
								{profile.email}
							</a>
							<div className="flex items-center gap-3 text-sm">
								<Phone className="h-4 w-4 text-lime" />
								<span className="text-charcoal/70">{profile.phone}</span>
							</div>
						</div>

						{/* Me connecter */}
						<div className="rounded-2xl border border-charcoal/10 bg-white p-5">
							<p className="font-mono text-[11px] uppercase tracking-widest text-lime">
								{t("common.getInTouch")}
							</p>
							<div className="mt-3 grid grid-cols-2 gap-2">
								{socials.map((s) => (
									<a
										key={s.name}
										href={s.url}
										target="_blank"
										rel="noopener noreferrer"
										className="flex items-center gap-2.5 rounded-xl border border-charcoal/10 px-3 py-2.5 text-sm text-charcoal/70 transition hover:border-lime hover:text-lime"
									>
										<span className="text-base">{socialIcon(s.name)}</span>
										{s.name}
									</a>
								))}
							</div>
						</div>
					</motion.div>

					{/* RIGHT — bio */}
					<motion.div
						initial={{ opacity: 0, x: 20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5, delay: 0.2 }}
						className="space-y-6"
					>
						<div>
							<p className="font-mono text-xs uppercase tracking-[0.25em] text-charcoal/50">
								{t("about.tagline")}
							</p>
							<h2 className="mt-2 text-3xl font-black tracking-tight md:text-4xl">
								{profile.fullName}
							</h2>
						</div>

						<div className="space-y-4 text-base leading-relaxed text-charcoal/70">
							<p>{t("about.bio.p1")}</p>
							<p>{t("about.bio.p2")}</p>
							<p>{t("about.bio.p3")}</p>
						</div>

						<div className="grid grid-cols-2 gap-4 border-t border-charcoal/10 pt-6 sm:grid-cols-4">
							{statKeys.map((s) => (
								<div key={s.key}>
									<div className="text-3xl font-black tracking-tight text-charcoal md:text-4xl">
										{s.value}
									</div>
									<div className="mt-1 font-mono text-[11px] uppercase tracking-wide text-charcoal/50">
										{t(s.key)}
									</div>
								</div>
							))}
						</div>

						<div className="flex flex-wrap gap-3 pt-2">
							<a
								href={cvPdf}
								target="_blank"
								rel="noopener noreferrer"
								download
								className="inline-flex items-center gap-2 rounded-full bg-lime px-6 py-3 text-sm font-bold text-charcoal transition hover:brightness-105"
							>
								<Download className="h-4 w-4" />
								{t("common.downloadCV")}
							</a>
							<button
								onClick={() => navigate("/contact")}
								className="inline-flex items-center gap-2 rounded-full border-2 border-charcoal px-6 py-3 text-sm font-bold transition hover:bg-charcoal hover:text-white"
							>
								{t("common.getInTouch")}
								<ArrowRight className="h-4 w-4" />
							</button>
						</div>
					</motion.div>
				</div>

				{/* Services */}
				<section className="mt-24">
					<p className="font-mono text-xs uppercase tracking-[0.25em] text-charcoal/50">
						{t("about.services.eyebrow")}
					</p>
					<h3 className="mt-2 text-3xl font-bold tracking-tight md:text-5xl">
						{t("about.services.title")}
					</h3>
					<div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
						{services.map((s, i) => (
							<motion.div
								key={s.key}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.4, delay: i * 0.05 }}
								className="group rounded-2xl border border-charcoal/10 bg-white p-6 transition hover:-translate-y-1 hover:border-lime hover:shadow-xl"
							>
								<div className="mb-4 grid h-12 w-12 place-items-center rounded-xl bg-lime text-white">
									{iconFor(s.icon)}
								</div>
								<h4 className="text-lg font-bold">
									{t(`services.${s.key}.title` as TranslationKey)}
								</h4>
								<p className="mt-2 text-sm leading-relaxed text-charcoal/60">
									{t(`services.${s.key}.desc` as TranslationKey)}
								</p>
							</motion.div>
						))}
					</div>
				</section>

				{/* Valeurs */}
				<section className="mt-24">
					<p className="font-mono text-xs uppercase tracking-[0.25em] text-charcoal/50">
						{t("about.values.eyebrow")}
					</p>
					<h3 className="mt-2 text-3xl font-bold tracking-tight md:text-5xl">
						{t("about.values.title")}
					</h3>
					<div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
						{valueKeys.map((vk, i) => (
							<motion.div
								key={vk}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.4, delay: i * 0.05 }}
								className="rounded-2xl border border-charcoal/10 bg-white p-5"
							>
								<div className="text-2xl">{valueEmojis[i]}</div>
								<h4 className="mt-3 font-bold">{t(`values.${vk}.title` as TranslationKey)}</h4>
								<p className="mt-1 text-sm text-charcoal/60">
									{t(`values.${vk}.desc` as TranslationKey)}
								</p>
							</motion.div>
						))}
					</div>
				</section>

				{/* CTA — charcoal */}
				<section className="relative mt-24 overflow-hidden rounded-3xl bg-lime p-10 text-center text-white md:p-16">
					<div className="relative z-10">
						<h3 className="text-3xl font-bold tracking-tight md:text-5xl">
							{t("about.cta.title")}
						</h3>
						<p className="mx-auto mt-4 max-w-2xl font-mono text-sm text-white/80">
							{t("about.cta.subtitle")}
						</p>
						<div className="mt-8 flex flex-wrap justify-center gap-3">
							<button
								onClick={() => navigate("/contact")}
								className="rounded-full bg-white px-7 py-3.5 text-sm font-bold text-lime transition hover:brightness-95"
							>
								{t("common.hireMe")}
							</button>
							<button
								onClick={() => navigate("/projects-v2")}
								className="rounded-full border-2 border-white/50 px-7 py-3.5 text-sm font-bold text-white transition hover:bg-white hover:text-lime"
							>
								{t("common.seeMyWork")}
							</button>
						</div>
					</div>
				</section>
			</div>
		</div>
	);
};

export default About;
