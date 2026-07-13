import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useLang } from "@/lib/LanguageContext";
import { TranslationKey } from "@/lib/i18n";

interface HeaderProps {
	theme: boolean;
	setTheme: (theme: boolean) => void;
}

const navItems: { labelKey: TranslationKey; path: string }[] = [
	{ labelKey: "nav.home", path: "/" },
	{ labelKey: "nav.about", path: "/about" },
	{ labelKey: "nav.skills", path: "/skills" },
	{ labelKey: "nav.experience", path: "/experience" },
	{ labelKey: "nav.projects", path: "/projects-v2" },
	{ labelKey: "nav.contact", path: "/contact" },
];

const TopHeader = (_props: HeaderProps) => {
	const [scrolled, setScrolled] = useState(false);
	const [mobileOpen, setMobileOpen] = useState(false);
	const navigate = useNavigate();
	const location = useLocation();
	const { lang, toggle: toggleLang, t } = useLang();

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 24);
		onScroll();
		window.addEventListener("scroll", onScroll);
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	useEffect(() => {
		setMobileOpen(false);
	}, [location.pathname]);

	const isActive = (path: string) =>
		path === "/" ? location.pathname === "/" : location.pathname.startsWith(path);

	return (
		<motion.header
			initial={{ y: -80 }}
			animate={{ y: 0 }}
			transition={{ type: "spring", stiffness: 100, damping: 20 }}
			className={`fixed left-0 right-0 top-0 z-50 text-charcoal transition-all duration-500 ${
				scrolled ? "border-b border-charcoal/10 bg-cream/90 backdrop-blur-md" : "bg-transparent"
			}`}
		>
			<div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-6 lg:px-10">
				<button
					onClick={() => navigate("/")}
					className="text-xl font-black uppercase tracking-tighter"
				>
					Fabrice<span className="text-lime">.</span>
				</button>

				<nav className="hidden lg:block">
					<ul className="flex items-center gap-7">
						{navItems.map((item) => {
							const active = isActive(item.path);
							return (
								<li key={item.path}>
									<button
										onClick={() => navigate(item.path)}
										className={`group relative font-mono text-xs uppercase tracking-widest transition-colors ${
											active ? "text-charcoal" : "text-charcoal/50 hover:text-charcoal"
										}`}
									>
										{t(item.labelKey)}
										<span
											className={`absolute -bottom-1.5 left-0 h-0.5 w-full origin-left bg-lime transition-transform duration-300 ${
												active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
											}`}
										/>
									</button>
								</li>
							);
						})}
					</ul>
				</nav>

				<div className="flex items-center gap-3">
					<button
						onClick={toggleLang}
						aria-label={t("nav.lang")}
						className="flex items-center gap-1.5 font-mono text-xs font-bold text-charcoal"
					>
						<span className={lang === "fr" ? "text-lime" : "opacity-40"}>FR</span>
						<span className="opacity-30">/</span>
						<span className={lang === "en" ? "text-lime" : "opacity-40"}>EN</span>
					</button>

					<button
						onClick={() => navigate("/contact")}
						className="hidden rounded-full border border-charcoal px-5 py-2 text-xs font-bold tracking-wide transition hover:bg-charcoal hover:text-cream lg:block"
					>
						{t("common.getInTouch")}
					</button>

					<button
						onClick={() => setMobileOpen((v) => !v)}
						aria-label={t("nav.menu")}
						className="grid h-9 w-9 place-items-center text-charcoal lg:hidden"
					>
						{mobileOpen ? <X size={22} /> : <Menu size={22} />}
					</button>
				</div>
			</div>

			<AnimatePresence>
				{mobileOpen && (
					<motion.nav
						initial={{ opacity: 0, height: 0 }}
						animate={{ opacity: 1, height: "auto" }}
						exit={{ opacity: 0, height: 0 }}
						transition={{ duration: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
						className="overflow-hidden border-t border-charcoal/10 bg-cream lg:hidden"
					>
						<ul className="mx-auto flex max-w-[1400px] flex-col gap-1 px-6 py-4">
							{navItems.map((item) => {
								const active = isActive(item.path);
								return (
									<li key={item.path}>
										<button
											onClick={() => navigate(item.path)}
											className={`w-full py-2.5 text-left font-mono text-sm uppercase tracking-widest transition ${
												active ? "text-lime" : "text-charcoal/70 hover:text-charcoal"
											}`}
										>
											{t(item.labelKey)}
										</button>
									</li>
								);
							})}
							<button
								onClick={() => navigate("/contact")}
								className="mt-3 rounded-full bg-lime px-5 py-3 text-sm font-bold tracking-wide text-white"
							>
								{t("common.getInTouch")}
							</button>
						</ul>
					</motion.nav>
				)}
			</AnimatePresence>
		</motion.header>
	);
};

export default TopHeader;
