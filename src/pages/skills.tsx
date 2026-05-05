import React from "react";
import { motion } from "framer-motion";
import {
  Monitor,
  Server,
  Brain,
  Smartphone,
  Database,
  Wrench,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { skillCategories } from "../data/profile";
import { useLang } from "@/lib/LanguageContext";
import { TranslationKey } from "@/lib/i18n";

const iconFor = (key: string) => {
  switch (key) {
    case "monitor":
      return <Monitor className="h-5 w-5" />;
    case "server":
      return <Server className="h-5 w-5" />;
    case "brain":
      return <Brain className="h-5 w-5" />;
    case "smartphone":
      return <Smartphone className="h-5 w-5" />;
    case "database":
      return <Database className="h-5 w-5" />;
    case "wrench":
      return <Wrench className="h-5 w-5" />;
    default:
      return null;
  }
};

const accentFor = (i: number) => {
  const palette = [
    "from-cyan-400 to-blue-500",
    "from-emerald-400 to-cyan-500",
    "from-purple-400 to-pink-500",
    "from-amber-400 to-orange-500",
    "from-blue-400 to-indigo-500",
    "from-rose-400 to-purple-500",
  ];
  return palette[i % palette.length];
};

const titleKeys: TranslationKey[] = [
  "skills.cat.frontend",
  "skills.cat.backend",
  "skills.cat.ai",
  "skills.cat.mobile",
  "skills.cat.db",
  "skills.cat.tooling",
];

const Skills: React.FC = () => {
  const { t } = useLang();

  return (
    <div className="relative min-h-screen bg-background pb-24 pt-28">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 right-0 h-[400px] w-[400px] rounded-full bg-cyan-500/15 blur-[120px]" />
        <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-purple-500/15 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-14 text-center"
        >
          <Badge variant="outline" className="mb-4 border-cyan-400/30 bg-cyan-400/10 text-cyan-300">
            {t("skills.eyebrow")}
          </Badge>
          <h1 className="text-4xl font-extrabold tracking-tight md:text-6xl">
            {t("skills.title.before")}{" "}
            <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-500 bg-clip-text text-transparent">
              {t("skills.title.gradient")}
            </span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">{t("skills.subtitle")}</p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-all hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-cyan-400/[0.03]"
            >
              <div
                className={`absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br ${accentFor(i)} opacity-20 blur-2xl transition group-hover:opacity-40`}
              />

              <div className="mb-4 flex items-center gap-3">
                <div
                  className={`grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br ${accentFor(i)} text-white shadow-lg`}
                >
                  {iconFor(cat.icon)}
                </div>
                <h3 className="text-lg font-bold">{t(titleKeys[i])}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {cat.skills.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-medium text-muted-foreground transition hover:border-cyan-400/30 hover:bg-cyan-400/10 hover:text-cyan-300"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 grid gap-4 sm:grid-cols-3"
        >
          {[
            { label: t("skills.bottom.languages"), value: t("skills.bottom.languagesValue") },
            { label: t("skills.bottom.learning"), value: t("skills.bottom.learningValue") },
            { label: t("skills.bottom.spoken"), value: t("skills.bottom.spokenValue") },
          ].map((b) => (
            <div
              key={b.label}
              className="rounded-2xl border border-white/10 bg-white/[0.02] p-5"
            >
              <p className="text-xs uppercase tracking-[0.18em] text-cyan-300">{b.label}</p>
              <p className="mt-2 text-sm text-muted-foreground">{b.value}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
