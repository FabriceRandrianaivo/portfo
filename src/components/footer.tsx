import { useNavigate } from "react-router-dom";
import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { profile, socials } from "../data/profile";
import { useLang } from "@/lib/LanguageContext";
import { TranslationKey } from "@/lib/i18n";

const navItems: { labelKey: TranslationKey; path: string }[] = [
  { labelKey: "nav.home", path: "/" },
  { labelKey: "nav.about", path: "/about" },
  { labelKey: "nav.skills", path: "/skills" },
  { labelKey: "nav.experience", path: "/experience" },
  { labelKey: "nav.projects", path: "/projects-v2" },
  { labelKey: "nav.contact", path: "/contact" },
];

const socialIcon = (name: string) => {
  if (name === "GitHub") return <FaGithub />;
  if (name === "LinkedIn") return <FaLinkedin />;
  if (name === "Email") return <FaEnvelope />;
  if (name === "WhatsApp") return <FaWhatsapp />;
  return null;
};

const Footer = () => {
  const navigate = useNavigate();
  const { t } = useLang();
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/10 bg-background/80 backdrop-blur">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 lg:grid-cols-[1.4fr_1fr_1fr] lg:px-8">
        <div>
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 font-bold tracking-tight"
          >
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-cyan-400 to-purple-500 text-sm font-black text-white shadow-lg shadow-cyan-500/20">
              FR
            </span>
            <span>
              <span className="bg-gradient-to-r from-cyan-300 to-purple-400 bg-clip-text text-transparent">
                Fabrice
              </span>
              <span className="text-foreground">.dev</span>
            </span>
          </button>
          <p className="mt-3 max-w-md text-sm text-muted-foreground">{t("hero.bio")}</p>

          <div className="mt-5 flex gap-2">
            {socials.map((s) => (
              <a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.name}
                className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/5 text-muted-foreground transition hover:border-cyan-400/40 hover:text-cyan-300"
              >
                {socialIcon(s.name)}
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-cyan-300">{t("footer.nav")}</p>
          <ul className="mt-3 space-y-2">
            {navItems.map((n) => (
              <li key={n.path}>
                <button
                  onClick={() => navigate(n.path)}
                  className="text-sm text-muted-foreground transition hover:text-foreground"
                >
                  {t(n.labelKey)}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-cyan-300">{t("footer.contact")}</p>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li>
              <a href={`mailto:${profile.email}`} className="hover:text-foreground">
                {profile.email}
              </a>
            </li>
            <li>{profile.phone}</li>
            <li>{profile.location}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-5 text-xs text-muted-foreground sm:flex-row lg:px-8">
          <p>© {year} Fabrice Randrianaivo. {t("footer.copyright")}</p>
          <p>{t("footer.builtWith")}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
