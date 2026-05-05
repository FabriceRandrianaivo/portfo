import { useEffect, useState } from "react";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import LightModeIcon from "@mui/icons-material/LightMode";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
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

const TopHeader = (props: HeaderProps) => {
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(props.theme);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { lang, toggle: toggleLang, t } = useLang();

  useEffect(() => {
    setIsDarkTheme(props.theme);
  }, [props.theme]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const toggleTheme = () => {
    const newTheme = !isDarkTheme;
    setIsDarkTheme(newTheme);
    props.setTheme(newTheme);
  };

  const isActive = (path: string) =>
    path === "/" ? location.pathname === "/" : location.pathname.startsWith(path);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-background/80 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
        <button
          onClick={() => navigate("/")}
          className="group flex items-center gap-2 font-bold tracking-tight"
        >
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-cyan-400 to-purple-500 text-sm font-black text-white shadow-lg shadow-cyan-500/20 transition group-hover:scale-105">
            FR
          </span>
          <span className="hidden sm:inline">
            <span className="bg-gradient-to-r from-cyan-300 to-purple-400 bg-clip-text text-transparent">
              Fabrice
            </span>
            <span className="text-foreground">.dev</span>
          </span>
        </button>

        <nav className="hidden md:block">
          <ul className="flex items-center gap-1">
            {navItems.map((item) => {
              const active = isActive(item.path);
              return (
                <li key={item.path}>
                  <button
                    onClick={() => navigate(item.path)}
                    className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                      active
                        ? "text-cyan-300"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {active && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 -z-10 rounded-full bg-cyan-400/10 ring-1 ring-cyan-400/30"
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                    {t(item.labelKey)}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleLang}
            aria-label={t("nav.lang")}
            className="group relative grid h-10 min-w-[3.25rem] place-items-center overflow-hidden rounded-full border border-white/10 bg-white/5 px-3 text-xs font-bold text-muted-foreground transition hover:border-cyan-400/40 hover:text-cyan-300"
          >
            <div className="flex items-center gap-1.5">
              <span
                className={`transition-colors ${
                  lang === "fr" ? "text-cyan-300" : "text-muted-foreground/50"
                }`}
              >
                FR
              </span>
              <span className="h-3 w-[1px] bg-white/20" />
              <span
                className={`transition-colors ${
                  lang === "en" ? "text-cyan-300" : "text-muted-foreground/50"
                }`}
              >
                EN
              </span>
            </div>
          </button>

          <button
            onClick={toggleTheme}
            aria-label={isDarkTheme ? t("nav.theme.light") : t("nav.theme.dark")}
            className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 text-muted-foreground transition hover:border-cyan-400/40 hover:text-cyan-300"
          >
            {isDarkTheme ? <LightModeIcon fontSize="small" /> : <Brightness4Icon fontSize="small" />}
          </button>

          <button
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={t("nav.menu")}
            className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 text-muted-foreground md:hidden"
          >
            {mobileOpen ? <CloseIcon fontSize="small" /> : <MenuIcon fontSize="small" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="border-t border-white/10 bg-background/95 backdrop-blur-xl md:hidden"
          >
            <ul className="mx-auto flex max-w-7xl flex-col gap-1 px-6 py-4">
              {navItems.map((item) => {
                const active = isActive(item.path);
                return (
                  <li key={item.path}>
                    <button
                      onClick={() => navigate(item.path)}
                      className={`w-full rounded-lg px-4 py-3 text-left text-sm font-medium transition ${
                        active
                          ? "bg-cyan-400/10 text-cyan-300 ring-1 ring-cyan-400/30"
                          : "text-muted-foreground hover:bg-white/5 hover:text-foreground"
                      }`}
                    >
                      {t(item.labelKey)}
                    </button>
                  </li>
                );
              })}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default TopHeader;
