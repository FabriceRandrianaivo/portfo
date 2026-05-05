import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import me from "../assets/modele/me.png";
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload, FaWhatsapp, FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import cvPdf from "../assets/modele/pdf/FabriceRandrianaivo_JS_2025_CV.pdf";
import { Button } from "@/components/ui/button";
import { profile, achievements, socials } from "../data/profile";
import { useLang } from "@/lib/LanguageContext";
import { TranslationKey } from "@/lib/i18n";

const Hero: React.FC = () => {
  const [currentText, setCurrentText] = useState(0);
  const navigate = useNavigate();
  const { t } = useLang();

  const handleViewProjects = () => navigate("/projects-v2");
  const handleAbout = () => navigate("/about");

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % profile.roles.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const socialIcon = (name: string) => {
    if (name === "GitHub") return <FaGithub />;
    if (name === "LinkedIn") return <FaLinkedin />;
    if (name === "Email") return <FaEnvelope />;
    if (name === "WhatsApp") return <FaWhatsapp />;
    return null;
  };

  const statKeys: Array<{ value: string; key: TranslationKey }> = [
    { value: achievements[0].value, key: "home.stats.label.projects" },
    { value: achievements[1].value, key: "home.stats.label.years" },
    { value: achievements[2].value, key: "home.stats.label.devs" },
    { value: achievements[3].value, key: "home.stats.label.budget" },
  ];

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-background pt-20 pb-12">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 -left-32 h-[500px] w-[500px] rounded-full bg-cyan-500/20 blur-[120px]" />
        <div className="absolute top-1/3 -right-32 h-[500px] w-[500px] rounded-full bg-purple-500/20 blur-[120px]" />
        <div className="absolute bottom-0 left-1/3 h-[400px] w-[400px] rounded-full bg-blue-500/15 blur-[120px]" />
      </div>

      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <motion.div
        className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="space-y-7">
          {profile.available && (
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-1.5 text-xs font-medium text-cyan-300 backdrop-blur-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
              </span>
              {t("hero.availability")}
            </motion.div>
          )}

          <motion.div variants={itemVariants} className="space-y-2">
            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
              {t("hero.greeting")}
            </p>
            <h1 className="text-5xl font-extrabold leading-tight tracking-tight md:text-6xl lg:text-7xl">
              <span className="block animate-gradient-x bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-500 bg-[length:200%_200%] bg-clip-text text-transparent">
                Fabrice
              </span>
              <span className="block text-foreground">Randrianaivo</span>
            </h1>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex h-9 items-center text-xl font-semibold text-foreground/90 md:text-2xl"
          >
            <span className="text-muted-foreground">{t("hero.iam")}</span>
            <motion.span
              key={currentText}
              initial={{ y: 16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -16, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-gradient-to-r from-cyan-300 to-purple-400 bg-clip-text text-transparent"
            >
              {profile.roles[currentText]}
            </motion.span>
            <span className="ml-1 inline-block h-6 w-[2px] animate-pulse bg-cyan-400" />
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg"
          >
            {t("hero.bio")}
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-3 pt-2">
            <Button variant="gradient" size="lg" asChild>
              <a href={cvPdf} target="_blank" rel="noopener noreferrer" download>
                <FaDownload className="mr-2 h-4 w-4" />
                {t("common.downloadCV")}
              </a>
            </Button>
            <Button
              size="lg"
              onClick={handleViewProjects}
              className="border-2 border-cyan-400/60 bg-transparent text-cyan-300 hover:bg-cyan-400/10"
            >
              {t("common.viewProjects")}
              <FaArrowRight className="ml-2 h-3 w-3" />
            </Button>
            <Button
              size="lg"
              variant="ghost"
              onClick={handleAbout}
              className="text-muted-foreground hover:text-foreground"
            >
              {t("common.aboutMe")}
            </Button>
          </motion.div>

          <motion.div variants={itemVariants} className="flex items-center gap-3 pt-2">
            {socials.map((s) => (
              <a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.name}
                className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/5 text-lg text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-cyan-400/40 hover:text-cyan-300"
              >
                {socialIcon(s.name)}
              </a>
            ))}
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 gap-4 border-t border-white/10 pt-6 sm:grid-cols-4"
          >
            {statKeys.map((s) => (
              <div key={s.key}>
                <div className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-2xl font-bold text-transparent md:text-3xl">
                  {s.value}
                </div>
                <div className="text-xs text-muted-foreground md:text-sm">{t(s.key)}</div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          variants={itemVariants}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="relative aspect-square">
            <div className="absolute inset-0 animate-glow rounded-[2rem] bg-gradient-to-br from-cyan-500/30 via-blue-500/20 to-purple-500/30 blur-2xl" />
            <div className="absolute inset-2 rounded-[2rem] bg-gradient-to-br from-cyan-500/20 to-purple-500/20 p-[2px]">
              <div className="h-full w-full overflow-hidden rounded-[1.9rem] bg-background/60 backdrop-blur-sm">
                <img
                  src={me}
                  alt={profile.name}
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </div>

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-4 top-8 rounded-2xl border border-white/10 bg-background/80 px-4 py-3 shadow-2xl backdrop-blur-md"
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">🚀</span>
                <div>
                  <div className="text-xs text-muted-foreground">{t("hero.card.lead")}</div>
                  <div className="text-sm font-semibold">{t("hero.card.leadAt")}</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -right-2 bottom-12 rounded-2xl border border-white/10 bg-background/80 px-4 py-3 shadow-2xl backdrop-blur-md"
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">🤖</span>
                <div>
                  <div className="text-xs text-muted-foreground">{t("hero.card.building")}</div>
                  <div className="text-sm font-semibold">{t("hero.card.tech")}</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              className="absolute -bottom-4 left-6 rounded-2xl border border-white/10 bg-background/80 px-4 py-3 shadow-2xl backdrop-blur-md"
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">📍</span>
                <div>
                  <div className="text-xs text-muted-foreground">{t("hero.card.based")}</div>
                  <div className="text-sm font-semibold">{t("hero.card.location")}</div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs text-muted-foreground md:flex"
      >
        <span>{t("common.scroll")}</span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity }}
          className="h-8 w-[1px] bg-gradient-to-b from-cyan-400 to-transparent"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
