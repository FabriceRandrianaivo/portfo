import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { projects } from "../data/projects";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useLang } from "@/lib/LanguageContext";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
import {
  ExternalLink,
  Github,
  Building2,
  User,
  Sparkles,
  Star,
  Search,
} from "lucide-react";
import { Input } from "@/components/ui/input";

const ProjectsV2: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [search, setSearch] = useState<string>("");
  const [showFeaturedOnly, setShowFeaturedOnly] = useState<boolean>(false);
  const { t } = useLang();

  const categories = useMemo(() => {
    const set = new Set<string>(["All"]);
    projects.forEach((p) => {
      if (p.category) set.add(p.category);
    });
    return Array.from(set);
  }, []);

  const filteredProjects = useMemo(() => {
    const q = search.trim().toLowerCase();
    return projects.filter((p) => {
      if (showFeaturedOnly && !p.featured) return false;
      if (activeCategory !== "All" && p.category !== activeCategory) return false;
      if (!q) return true;
      const haystack = [
        p.name,
        p.company,
        p.description || "",
        p.category || "",
        ...(p.technologies || []),
      ]
        .join(" ")
        .toLowerCase();
      return haystack.includes(q);
    });
  }, [search, activeCategory, showFeaturedOnly]);

  return (
    <div className="relative min-h-screen overflow-hidden bg-background pb-24 pt-28">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 left-0 h-[400px] w-[400px] rounded-full bg-cyan-500/15 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-purple-500/15 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-7xl space-y-12 px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <Badge
            variant="outline"
            className="mb-4 border-cyan-400/30 bg-cyan-400/10 text-cyan-300"
          >
            {t("projects.eyebrow")}
          </Badge>
          <h1 className="text-4xl font-extrabold tracking-tight md:text-6xl">
            {t("projects.title.before")}{" "}
            <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-500 bg-clip-text text-transparent">
              {t("projects.title.gradient")}
            </span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground md:text-lg">
            {t("projects.subtitle")}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="space-y-4 rounded-2xl border border-white/10 bg-white/[0.02] p-4 backdrop-blur"
        >
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div className="relative flex-1 md:max-w-md">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder={t("projects.search")}
                className="pl-9"
              />
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setShowFeaturedOnly((v) => !v)}
                className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-medium transition ${
                  showFeaturedOnly
                    ? "border-amber-400/40 bg-amber-400/10 text-amber-300"
                    : "border-white/10 bg-white/[0.02] text-muted-foreground hover:text-foreground"
                }`}
              >
                <Star className="h-3.5 w-3.5" />
                {t("common.featuredOnly")}
              </button>
              <span className="text-xs text-muted-foreground">
                {filteredProjects.length}{" "}
                {filteredProjects.length !== 1 ? t("common.results") : t("common.result")}
              </span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((c) => {
              const active = activeCategory === c;
              return (
                <button
                  key={c}
                  onClick={() => setActiveCategory(c)}
                  className={`rounded-full px-3 py-1.5 text-xs font-medium transition ${
                    active
                      ? "bg-cyan-400/15 text-cyan-300 ring-1 ring-cyan-400/40"
                      : "border border-white/10 bg-white/[0.02] text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {c}
                </button>
              );
            })}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          {filteredProjects.map((project) => (
            <Dialog key={project.name}>
              <DialogTrigger asChild>
                <div className="cursor-pointer">
                  <CardContainer className="inter-var w-full">
                    <CardBody className="group/card relative h-auto w-full rounded-xl border border-black/[0.1] bg-gray-50 p-6 dark:border-white/[0.2] dark:bg-black dark:hover:shadow-2xl dark:hover:shadow-cyan-500/[0.1]">
                      {project.featured && (
                        <CardItem
                          translateZ="40"
                          className="absolute right-4 top-4 inline-flex items-center gap-1 rounded-full border border-amber-400/30 bg-amber-400/10 px-2.5 py-1 text-[10px] font-medium text-amber-300"
                        >
                          <Star className="h-3 w-3" />
                          {t("common.featured")}
                        </CardItem>
                      )}

                      <CardItem
                        translateZ="50"
                        className="text-xl font-bold text-neutral-600 dark:text-white"
                      >
                        {project.name}
                      </CardItem>

                      <CardItem
                        as="p"
                        translateZ="55"
                        className="mt-1 text-xs uppercase tracking-[0.18em] text-cyan-500/90 dark:text-cyan-300"
                      >
                        {project.company}
                      </CardItem>

                      <CardItem
                        as="p"
                        translateZ="60"
                        className="mt-3 max-w-sm text-sm text-neutral-500 dark:text-neutral-300"
                      >
                        {project.description}
                      </CardItem>

                      <CardItem translateZ="100" className="mt-4 w-full">
                        <img
                          src={project.img}
                          height="1000"
                          width="1000"
                          className="h-56 w-full rounded-xl object-cover group-hover/card:shadow-xl"
                          alt={project.name}
                        />
                      </CardItem>

                      <div className="mt-6 flex items-center justify-between">
                        <CardItem translateZ={20} as="div" className="flex flex-wrap gap-1.5">
                          {project.technologies.slice(0, 3).map((tech) => (
                            <Badge key={tech} variant="secondary" className="text-[10px]">
                              {tech}
                            </Badge>
                          ))}
                          {project.technologies.length > 3 && (
                            <Badge variant="secondary" className="text-[10px]">
                              +{project.technologies.length - 3}
                            </Badge>
                          )}
                        </CardItem>
                        <CardItem
                          translateZ={20}
                          as="button"
                          className="rounded-xl bg-black px-4 py-2 text-xs font-bold text-white dark:bg-white dark:text-black"
                        >
                          {t("common.viewDetails")}
                        </CardItem>
                      </div>

                      <CardItem
                        as="div"
                        translateZ={10}
                        className="mt-3 flex items-center gap-3 text-xs text-muted-foreground"
                      >
                        <span>{project.year}</span>
                        {project.category && (
                          <>
                            <span>·</span>
                            <span>{project.category}</span>
                          </>
                        )}
                      </CardItem>
                    </CardBody>
                  </CardContainer>
                </div>
              </DialogTrigger>

              <DialogContent className="border-cyan-500/20 bg-background/95 backdrop-blur-xl sm:max-w-4xl">
                <DialogHeader>
                  <DialogTitle className="flex items-center gap-3 text-3xl font-bold text-cyan-400">
                    {project.name}
                    <Badge variant="outline" className="border-muted text-sm font-normal text-muted-foreground">
                      {project.year}
                    </Badge>
                    {project.category && (
                      <Badge variant="outline" className="border-cyan-400/30 text-xs text-cyan-300">
                        {project.category}
                      </Badge>
                    )}
                  </DialogTitle>
                  <DialogDescription className="text-lg text-foreground/80">
                    {project.description}
                  </DialogDescription>
                </DialogHeader>

                <div className="mt-6 grid gap-8 md:grid-cols-2">
                  <div className="space-y-6">
                    <AspectRatio
                      ratio={16 / 9}
                      className="overflow-hidden rounded-lg border border-white/10 bg-muted shadow-2xl"
                    >
                      <img
                        src={project.img}
                        alt={project.name}
                        className="h-full w-full object-cover"
                      />
                    </AspectRatio>

                    <div className="flex flex-wrap gap-3">
                      {project.link.map((link, i) => {
                        const isGithub = link.includes("github");
                        return (
                          <Button
                            key={i}
                            variant="default"
                            size="lg"
                            asChild
                            className="gap-2 bg-cyan-500 font-bold text-black hover:bg-cyan-600"
                          >
                            <a
                              href={`https://${link}`}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {isGithub ? (
                                <Github className="h-5 w-5" />
                              ) : (
                                <ExternalLink className="h-5 w-5" />
                              )}
                              {isGithub ? t("common.viewCode") : t("common.liveDemo")}
                            </a>
                          </Button>
                        );
                      })}
                    </div>
                  </div>

                  <ScrollArea className="h-[400px] pr-4">
                    <div className="space-y-8">
                      <div>
                        <h4 className="mb-3 flex items-center gap-2 text-md font-semibold text-cyan-400">
                          <Building2 className="h-5 w-5" /> {t("common.context")}
                        </h4>
                        <p className="text-base text-muted-foreground">{project.company}</p>
                      </div>

                      <div>
                        <h4 className="mb-3 flex items-center gap-2 text-md font-semibold text-cyan-400">
                          <User className="h-5 w-5" /> {t("common.role")}
                        </h4>
                        <ul className="list-inside list-disc space-y-2 text-base text-muted-foreground">
                          {project.post.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="mb-3 text-md font-semibold text-cyan-400">{t("common.tech")}</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <Badge key={tech} variant="tech" className="px-3 py-1 text-sm">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </ScrollArea>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="rounded-2xl border border-dashed border-white/10 p-10 text-center text-muted-foreground">
            {t("common.noMatch")}
          </div>
        )}

        <div className="relative mt-16 overflow-hidden rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 via-blue-500/5 to-purple-500/10 py-16 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold md:text-5xl">{t("projects.cta.title")}</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              {t("projects.cta.subtitle")}
            </p>
            <Button
              size="lg"
              variant="gradient"
              className="mt-8 px-8 py-6 text-lg"
              asChild
            >
              <a href="/contact">
                <Sparkles className="mr-2 h-5 w-5" /> {t("projects.cta.button")}
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsV2;
