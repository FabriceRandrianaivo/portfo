import React from "react";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { experiences } from "../data/profile";
import { useLang } from "@/lib/LanguageContext";
import { TranslationKey } from "@/lib/i18n";

const typeMeta = {
  work: { color: "from-cyan-400 to-blue-500", icon: <Briefcase className="h-4 w-4" />, key: "experience.type.work" as TranslationKey },
  freelance: { color: "from-purple-400 to-pink-500", icon: <Sparkles className="h-4 w-4" />, key: "experience.type.freelance" as TranslationKey },
  education: { color: "from-emerald-400 to-cyan-500", icon: <GraduationCap className="h-4 w-4" />, key: "experience.type.education" as TranslationKey },
} as const;

const Experience: React.FC = () => {
  const { t } = useLang();

  return (
    <div className="relative min-h-screen bg-background pb-24 pt-28">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 left-0 h-[400px] w-[400px] rounded-full bg-blue-500/15 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-purple-500/15 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <Badge variant="outline" className="mb-4 border-cyan-400/30 bg-cyan-400/10 text-cyan-300">
            {t("experience.eyebrow")}
          </Badge>
          <h1 className="text-4xl font-extrabold tracking-tight md:text-6xl">
            <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-500 bg-clip-text text-transparent">
              {t("experience.title.gradient")}
            </span>
            {t("experience.title.after")}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">{t("experience.subtitle")}</p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-4 top-0 hidden h-full w-[2px] bg-gradient-to-b from-cyan-400/40 via-purple-400/40 to-transparent md:left-1/2 md:block md:-translate-x-1/2" />

          <ul className="space-y-10 md:space-y-16">
            {experiences.map((exp, i) => {
              const meta = typeMeta[exp.type];
              const isLeft = i % 2 === 0;
              return (
                <motion.li
                  key={`${exp.role}-${exp.period}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="relative md:grid md:grid-cols-2 md:gap-12"
                >
                  <div
                    className={`absolute left-4 top-6 hidden h-4 w-4 -translate-x-1/2 rounded-full bg-gradient-to-br ${meta.color} ring-4 ring-background md:left-1/2 md:block`}
                  />

                  <div className={`md:${isLeft ? "pr-12 text-right" : "col-start-2 pl-12"}`}>
                    <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur transition hover:border-cyan-400/30 hover:bg-cyan-400/[0.03]">
                      <div className={`flex items-center gap-2 ${isLeft ? "md:justify-end" : ""}`}>
                        <Badge
                          variant="outline"
                          className={`gap-1.5 border-white/10 bg-gradient-to-r ${meta.color} bg-clip-text text-transparent`}
                        >
                          <span className="text-foreground">{meta.icon}</span>
                          <span>{t(meta.key)}</span>
                        </Badge>
                        <span className="text-xs font-medium text-muted-foreground">{exp.period}</span>
                      </div>

                      <h3 className="mt-3 text-xl font-bold">{exp.role}</h3>
                      <p className="text-sm text-cyan-300">{exp.company}</p>
                      {exp.location && (
                        <p className="text-xs text-muted-foreground">{exp.location}</p>
                      )}

                      <ul className={`mt-4 space-y-2 text-sm text-muted-foreground ${isLeft ? "md:text-right" : ""}`}>
                        {exp.highlights.map((h, j) => (
                          <li key={j} className="leading-relaxed">
                            {isLeft ? (
                              <>
                                <span>{h}</span>
                                <span className="ml-2 text-cyan-400">▸</span>
                              </>
                            ) : (
                              <>
                                <span className="mr-2 text-cyan-400">▸</span>
                                <span>{h}</span>
                              </>
                            )}
                          </li>
                        ))}
                      </ul>

                      {exp.stack && (
                        <div className={`mt-4 flex flex-wrap gap-1.5 ${isLeft ? "md:justify-end" : ""}`}>
                          {exp.stack.map((s) => (
                            <Badge key={s} variant="secondary" className="text-[10px]">
                              {s}
                            </Badge>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </motion.li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Experience;
