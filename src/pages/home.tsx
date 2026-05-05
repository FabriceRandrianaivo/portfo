import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Sparkles, ArrowRight, Code, Brain, Compass, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import Hero from "../components/hero";
import FeaturedProjects from "../components/featuredProjects";
import TechMarquee from "../components/techMarquee";
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

const Home: React.FC = () => {
	const navigate = useNavigate();
	const { t } = useLang();

	const services = [
		{ key: "fullstack", icon: "code" },
		{ key: "ai", icon: "brain" },
		{ key: "lead", icon: "compass" },
		{ key: "saas", icon: "rocket" },
	] as const;

	return (
		<>
			<Hero />

			<TechMarquee />

			<FeaturedProjects />

			<section className="relative py-24">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mb-12 text-center">
						<p className="text-sm uppercase tracking-[0.2em] text-cyan-300">
							{t("home.services.eyebrow")}
						</p>
						<h2 className="mt-2 text-3xl font-bold md:text-5xl">
							{t("home.services.title")}
						</h2>
					</div>

					<div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
						{services.map((s, i) => (
							<motion.div
								key={s.key}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.4, delay: i * 0.05 }}
								className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-all hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-cyan-400/[0.04]"
							>
								<div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-gradient-to-br from-cyan-500/20 to-purple-500/20 opacity-50 blur-2xl transition group-hover:opacity-100" />
								<div className="mb-4 grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 text-cyan-300">
									{iconFor(s.icon)}
								</div>
								<h4 className="text-lg font-semibold">
									{t(`services.${s.key}.title` as TranslationKey)}
								</h4>
								<p className="mt-2 text-sm leading-relaxed text-muted-foreground">
									{t(`services.${s.key}.desc` as TranslationKey)}
								</p>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			<section className="relative py-24">
				<div className="mx-auto max-w-5xl px-6 lg:px-8">
					<div className="relative overflow-hidden rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 via-blue-500/5 to-purple-500/10 p-10 text-center md:p-16">
						<div className="pointer-events-none absolute inset-0">
							<div className="absolute -top-32 left-1/2 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-cyan-500/15 blur-[100px]" />
						</div>
						<div className="relative">
							<motion.h2
								initial={{ opacity: 0, scale: 0.95 }}
								whileInView={{ opacity: 1, scale: 1 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5 }}
								className="text-3xl font-bold md:text-5xl"
							>
								{t("home.cta.title")}
							</motion.h2>
							<p className="mx-auto mt-4 max-w-2xl text-muted-foreground md:text-lg">
								{t("home.cta.subtitle")}
							</p>
							<div className="mt-8 flex flex-wrap justify-center gap-3">
								<Button size="lg" variant="gradient" onClick={() => navigate("/contact")}>
									<Sparkles className="mr-2 h-4 w-4" />
									{t("common.hireMe")}
								</Button>
								<Button
									size="lg"
									onClick={() => navigate("/projects-v2")}
									className="border-2 border-cyan-400/60 bg-transparent text-cyan-300 hover:bg-cyan-400/10"
								>
									{t("common.seeMyWork")}
									<ArrowRight className="ml-2 h-4 w-4" />
								</Button>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Home;
