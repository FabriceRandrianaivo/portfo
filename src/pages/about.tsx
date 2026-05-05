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
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
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
    <div className="relative min-h-screen bg-background pb-24 pt-28">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 right-0 h-[400px] w-[400px] rounded-full bg-cyan-500/15 blur-[120px]" />
        <div className="absolute top-1/2 -left-32 h-[400px] w-[400px] rounded-full bg-purple-500/15 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <Badge variant="outline" className="mb-4 border-cyan-400/30 bg-cyan-400/10 text-cyan-300">
            {t("about.eyebrow")}
          </Badge>
          <h1 className="text-4xl font-extrabold tracking-tight md:text-6xl">
            {t("about.title.before")} <br />
            <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-500 bg-clip-text text-transparent">
              {t("about.title.gradient")}
            </span>
          </h1>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-6"
          >
            <div className="relative mx-auto aspect-[4/5] w-full max-w-sm">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-500/30 to-purple-500/30 blur-xl" />
              <div className="relative h-full w-full overflow-hidden rounded-3xl border border-white/10 bg-background/40 backdrop-blur">
                <img src={me} alt={profile.name} className="h-full w-full object-cover" />
              </div>
            </div>

            <div className="space-y-3 rounded-2xl border border-white/10 bg-white/[0.02] p-5 backdrop-blur">
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="h-4 w-4 text-cyan-400" />
                <span className="text-muted-foreground">{profile.location}</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Mail className="h-4 w-4 text-cyan-400" />
                <a
                  href={`mailto:${profile.email}`}
                  className="text-muted-foreground hover:text-foreground"
                >
                  {profile.email}
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="h-4 w-4 text-cyan-400" />
                <span className="text-muted-foreground">{profile.phone}</span>
              </div>
              <div className="flex flex-wrap gap-2 pt-2">
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
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">{t("about.tagline")}</p>
              <h2 className="mt-2 text-3xl font-bold md:text-4xl">{profile.fullName}</h2>
            </div>

            <div className="space-y-4 text-base leading-relaxed text-muted-foreground md:text-lg">
              <p>{t("about.bio.p1")}</p>
              <p>{t("about.bio.p2")}</p>
              <p>{t("about.bio.p3")}</p>
            </div>

            <div className="grid grid-cols-2 gap-4 border-t border-white/10 pt-6 sm:grid-cols-4">
              {statKeys.map((s) => (
                <div key={s.key}>
                  <div className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-2xl font-bold text-transparent md:text-3xl">
                    {s.value}
                  </div>
                  <div className="text-xs text-muted-foreground md:text-sm">{t(s.key)}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <Button variant="gradient" size="lg" asChild>
                <a href={cvPdf} target="_blank" rel="noopener noreferrer" download>
                  <Download className="mr-2 h-4 w-4" />
                  {t("common.downloadCV")}
                </a>
              </Button>
              <Button
                size="lg"
                onClick={() => navigate("/contact")}
                className="border-2 border-cyan-400/60 bg-transparent text-cyan-300 hover:bg-cyan-400/10"
              >
                {t("common.getInTouch")}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        </div>

        <section className="mt-24">
          <div className="mb-10">
            <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">{t("about.services.eyebrow")}</p>
            <h3 className="mt-2 text-3xl font-bold md:text-4xl">{t("about.services.title")}</h3>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s, i) => (
              <motion.div
                key={s.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-all hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-cyan-400/[0.04]"
              >
                <div className="mb-4 grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 text-cyan-300">
                  {iconFor(s.icon)}
                </div>
                <h4 className="text-lg font-semibold">{t(`services.${s.key}.title` as TranslationKey)}</h4>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t(`services.${s.key}.desc` as TranslationKey)}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mt-24">
          <div className="mb-10">
            <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">{t("about.values.eyebrow")}</p>
            <h3 className="mt-2 text-3xl font-bold md:text-4xl">{t("about.values.title")}</h3>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {valueKeys.map((vk, i) => (
              <motion.div
                key={vk}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="rounded-2xl border border-white/10 bg-white/[0.02] p-5"
              >
                <div className="text-2xl">{valueEmojis[i]}</div>
                <h4 className="mt-3 font-semibold">{t(`values.${vk}.title` as TranslationKey)}</h4>
                <p className="mt-1 text-sm text-muted-foreground">{t(`values.${vk}.desc` as TranslationKey)}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mt-24 overflow-hidden rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 via-blue-500/5 to-purple-500/10 p-10 text-center md:p-14">
          <h3 className="text-3xl font-bold md:text-4xl">{t("about.cta.title")}</h3>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">{t("about.cta.subtitle")}</p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
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
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
