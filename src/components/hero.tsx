import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion";
import portrait from "../assets/modele/profile-v2.png";
import { useNavigate } from "react-router-dom";
import { profile } from "../data/profile";
import { useLang } from "@/lib/LanguageContext";

const spring = { stiffness: 100, damping: 30, restDelta: 0.001 };

const fadeUp = {
	hidden: { opacity: 0, y: 40 },
	visible: (i: number) => ({
		opacity: 1,
		y: 0,
		transition: { delay: i * 0.1, duration: 0.8, ease: [0.25, 0.4, 0.25, 1] },
	}),
};

const Hero: React.FC = () => {
	const navigate = useNavigate();
	const { t } = useLang();
	const ref = useRef(null);
	const [roleIdx, setRoleIdx] = useState(0);
	const roles = [
		t("hero.role1"),
		t("hero.role2"),
		t("hero.role3"),
		t("hero.role4"),
		t("hero.role5"),
		t("hero.role6"),
	];

	useEffect(() => {
		const id = setInterval(() => setRoleIdx((i) => (i + 1) % roles.length), 2600);
		return () => clearInterval(id);
	}, [roles.length]);

	const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
	const y = useSpring(useTransform(scrollYProgress, [0, 1], [0, 180]), spring);
	const scale = useSpring(useTransform(scrollYProgress, [0, 0.5], [1, 0.92]), spring);
	const textX1 = useSpring(useTransform(scrollYProgress, [0, 1], [0, -70]), spring);
	const textX2 = useSpring(useTransform(scrollYProgress, [0, 1], [0, 70]), spring);
	const opacity = useSpring(useTransform(scrollYProgress, [0, 0.8], [1, 0]), spring);

	const skills = ["React", "Next.js", "FastAPI", "Flutter", "LLM / IA"];

	return (
		<section
			ref={ref}
			className="noise-overlay relative flex min-h-[92vh] items-center justify-center overflow-hidden bg-cream text-charcoal"
		>
			<div className="absolute inset-0 bg-gradient-to-br from-cream via-lime/[0.04] to-cream" />
			<motion.div
				className="absolute left-10 top-24 h-28 w-28 rounded-full bg-lime/15 blur-3xl"
				animate={{ x: [0, 30, 0], y: [0, -20, 0], scale: [1, 1.1, 1] }}
				transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
			/>
			<motion.div
				className="absolute bottom-40 right-20 h-40 w-40 rounded-full bg-lime/10 blur-3xl"
				animate={{ x: [0, -40, 0], y: [0, 30, 0], scale: [1, 1.15, 1] }}
				transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
			/>

			<div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-12 pt-24 lg:px-8">
				<div className="grid items-center gap-8 lg:grid-cols-2">
					{/* LEFT */}
					<motion.div style={{ opacity }} className="space-y-6">
						<motion.div
							variants={fadeUp}
							custom={0}
							initial="hidden"
							animate="visible"
							className="inline-flex items-center gap-2 rounded-full bg-charcoal px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-wider text-white"
						>
							<motion.span
								className="h-2 w-2 rounded-full bg-lime"
								animate={{ scale: [1, 1.25, 1], opacity: [1, 0.6, 1] }}
								transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
							/>
							{t("hero.status")}
						</motion.div>

						<div className="space-y-1 overflow-hidden">
							<motion.h1
								style={{ x: textX1 }}
								className="text-5xl font-black uppercase leading-[0.9] tracking-tighter md:text-7xl"
							>
								<motion.span variants={fadeUp} custom={1} initial="hidden" animate="visible" className="inline-block">
									{t("hero.headline.l1")}
								</motion.span>
							</motion.h1>
							<motion.h1
								style={{ x: textX2 }}
								className="text-5xl font-black uppercase leading-[0.9] tracking-tighter md:text-7xl"
							>
								<motion.span variants={fadeUp} custom={2} initial="hidden" animate="visible" className="inline-block">
									{t("hero.headline.l2")} <span className="text-lime">{t("hero.headline.accent")}</span>
								</motion.span>
							</motion.h1>

							<motion.div
								variants={fadeUp}
								custom={3}
								initial="hidden"
								animate="visible"
								className="flex h-8 items-center gap-2 pt-2 font-mono text-lg text-charcoal/70 md:text-xl"
							>
								<span className="text-lime">{">"}</span>
								<AnimatePresence mode="wait">
									<motion.span
										key={roleIdx}
										initial={{ y: 12, opacity: 0 }}
										animate={{ y: 0, opacity: 1 }}
										exit={{ y: -12, opacity: 0 }}
										transition={{ duration: 0.35 }}
										className="font-semibold text-lime"
									>
										{roles[roleIdx]}
									</motion.span>
								</AnimatePresence>
								<motion.span
									animate={{ opacity: [1, 0, 1] }}
									transition={{ duration: 1.1, repeat: Infinity }}
									className="text-lime"
								>
									_
								</motion.span>
							</motion.div>

							<motion.p
								variants={fadeUp}
								custom={4}
								initial="hidden"
								animate="visible"
								className="max-w-md pt-3 font-mono text-sm leading-relaxed tracking-tight text-charcoal/60 md:text-base"
							>
								{t("hero.bio")}
							</motion.p>
						</div>

						<motion.div variants={fadeUp} custom={4} initial="hidden" animate="visible" className="flex flex-wrap gap-3 pt-1">
							<motion.button
								onClick={() => navigate("/projects-v2")}
								whileHover={{ scale: 1.02 }}
								whileTap={{ scale: 0.98 }}
								className="group relative overflow-hidden rounded-full bg-lime px-6 py-3 text-sm font-bold text-white shadow-lg shadow-lime/25"
							>
								<motion.span
									className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent"
									whileHover={{ x: "200%" }}
									transition={{ duration: 0.6 }}
								/>
								<span className="relative z-10">{t("common.viewProjects")}</span>
							</motion.button>
							<motion.button
								onClick={() => navigate("/contact")}
								whileHover={{ scale: 1.02 }}
								whileTap={{ scale: 0.98 }}
								className="rounded-full border-2 border-charcoal px-6 py-3 text-sm font-bold text-charcoal transition hover:bg-charcoal hover:text-white"
							>
								{t("common.getInTouch")}
							</motion.button>
						</motion.div>

						<motion.div variants={fadeUp} custom={5} initial="hidden" animate="visible" className="flex flex-wrap gap-4 pt-1">
							{skills.map((s) => (
								<div key={s} className="flex items-center gap-2 font-mono text-xs uppercase tracking-wide text-charcoal/55">
									<div className="h-1.5 w-1.5 rounded-full bg-lime" />
									{s}
								</div>
							))}
						</motion.div>
					</motion.div>

					{/* RIGHT — floating portrait */}
					<motion.div style={{ y, scale }} className="relative flex justify-center">
						<motion.div
							initial={{ opacity: 0, scale: 0.8, rotate: -6 }}
							animate={{ opacity: 1, scale: 1, rotate: 0 }}
							transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.3 }}
							className="relative"
						>
							<motion.div
								className="absolute inset-0 scale-90 rounded-full bg-lime/25 blur-[80px]"
								animate={{ scale: [0.9, 1, 0.9], opacity: [0.4, 0.6, 0.4] }}
								transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
							/>
							<motion.img
								src={portrait}
								alt={profile.name}
								animate={{ y: [0, -15, 0] }}
								transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
								className="relative z-10 w-full max-w-md object-contain drop-shadow-2xl"
							/>
						</motion.div>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
