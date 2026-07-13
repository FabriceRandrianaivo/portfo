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
		<footer className="border-t border-charcoal/15 bg-cream text-charcoal">
			<div className="mx-auto max-w-[1400px] px-6 py-16 lg:px-10">
				<div className="grid gap-10 lg:grid-cols-[1.6fr_1fr_1fr]">
					<div>
						<button
							onClick={() => navigate("/")}
							className="text-4xl font-black uppercase tracking-tighter"
						>
							Fabrice<span className="text-lime">.</span>
						</button>
						<p className="mt-4 max-w-md font-mono text-sm text-charcoal/60">{t("hero.bio")}</p>
						<div className="mt-6 flex gap-2">
							{socials.map((s) => (
								<a
									key={s.name}
									href={s.url}
									target="_blank"
									rel="noopener noreferrer"
									aria-label={s.name}
									className="grid h-10 w-10 place-items-center rounded-full border border-charcoal/20 text-charcoal/70 transition hover:border-charcoal hover:bg-charcoal hover:text-cream"
								>
									{socialIcon(s.name)}
								</a>
							))}
						</div>
					</div>

					<div>
						<p className="font-mono text-[11px] uppercase tracking-[0.2em] text-lime">
							{t("footer.nav")}
						</p>
						<ul className="mt-4 space-y-2.5">
							{navItems.map((n) => (
								<li key={n.path}>
									<button
										onClick={() => navigate(n.path)}
										className="text-sm text-charcoal/60 transition hover:text-lime"
									>
										{t(n.labelKey)}
									</button>
								</li>
							))}
						</ul>
					</div>

					<div>
						<p className="font-mono text-[11px] uppercase tracking-[0.2em] text-lime">
							{t("footer.contact")}
						</p>
						<ul className="mt-4 space-y-2.5 text-sm text-charcoal/60">
							<li>
								<a href={`mailto:${profile.email}`} className="transition hover:text-lime">
									{profile.email}
								</a>
							</li>
							<li>{profile.phone}</li>
							<li>{profile.location}</li>
						</ul>
					</div>
				</div>
			</div>

			<div className="border-t border-charcoal/15">
				<div className="mx-auto flex max-w-[1400px] flex-col items-center justify-between gap-2 px-6 py-5 font-mono text-xs text-charcoal/45 sm:flex-row lg:px-10">
					<p>© {year} Fabrice Randrianaivo. {t("footer.copyright")}</p>
					<p>{t("footer.builtWith")}</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
