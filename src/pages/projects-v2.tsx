import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects, Project } from "../data/projects";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { ExternalLink, Github, Building2, User, Sparkles } from 'lucide-react';

// Extension du type Project pour inclure la catégorie (si elle n'est pas dans l'interface de base)
type ProjectWithCategory = Project & { category?: string };

const ProjectsV2: React.FC = () => {
    const [activeTab, setActiveTab] = useState("all");

    // Filtrage des projets
    const filteredProjects = useMemo(() => {
        if (activeTab === "all") return projects;
        return projects.filter((p: any) => p.category?.toLowerCase() === activeTab);
    }, [activeTab]);

    return (
        <div className="min-h-screen bg-background pt-24 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
            <TracingBeam className="px-6">
                <div className="max-w-7xl mx-auto space-y-12">

                    {/* Header Section */}
                    <div className="text-center space-y-4 mb-16 relative">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/20 blur-[100px] rounded-full -z-10" />
                        <motion.h1
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            className="text-5xl md:text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 tracking-tight"
                        >
                            Featured Work
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            className="text-muted-foreground max-w-2xl mx-auto text-xl"
                        >
                            A curated selection of projects pushing the boundaries of Web & AI.
                        </motion.p>
                    </div>

                    {/* 3D Grid Layout */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
                        {filteredProjects.map((project, index) => (
                            <Dialog key={project.name}>
                                <DialogTrigger asChild>
                                    <div className="cursor-pointer group">
                                        <CardContainer className="inter-var w-full">
                                            <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6 border">
                                                <CardItem
                                                    translateZ="50"
                                                    className="text-xl font-bold text-neutral-600 dark:text-white"
                                                >
                                                    {project.name}
                                                </CardItem>
                                                <CardItem
                                                    as="p"
                                                    translateZ="60"
                                                    className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                                                >
                                                    {project.description}
                                                </CardItem>
                                                <CardItem translateZ="100" className="w-full mt-4">
                                                    <img
                                                        src={project.img}
                                                        height="1000"
                                                        width="1000"
                                                        className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                                                        alt="thumbnail"
                                                    />
                                                </CardItem>
                                                <div className="flex justify-between items-center mt-10">
                                                    <CardItem
                                                        translateZ={20}
                                                        as="div"
                                                        className="flex flex-wrap gap-2"
                                                    >
                                                        {project.technologies.slice(0, 3).map(tech => (
                                                            <Badge key={tech} variant="secondary" className="text-xs">
                                                                {tech}
                                                            </Badge>
                                                        ))}
                                                    </CardItem>
                                                    <CardItem
                                                        translateZ={20}
                                                        as="button"
                                                        className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                                                    >
                                                        View Details
                                                    </CardItem>
                                                </div>
                                            </CardBody>
                                        </CardContainer>
                                    </div>
                                </DialogTrigger>

                                {/* Modal Details (Same as before) */}
                                <DialogContent className="sm:max-w-4xl bg-background/95 backdrop-blur-xl border-cyan-500/20">
                                    <DialogHeader>
                                        <DialogTitle className="text-3xl font-bold text-cyan-400 flex items-center gap-3">
                                            {project.name}
                                            <Badge variant="outline" className="text-sm font-normal text-muted-foreground border-muted">
                                                {project.year}
                                            </Badge>
                                        </DialogTitle>
                                        <DialogDescription className="text-lg text-foreground/80">
                                            {project.description}
                                        </DialogDescription>
                                    </DialogHeader>

                                    <div className="grid md:grid-cols-2 gap-8 mt-6">
                                        <div className="space-y-6">
                                            <AspectRatio ratio={16 / 9} className="bg-muted rounded-lg overflow-hidden border border-white/10 shadow-2xl">
                                                <img
                                                    src={project.img}
                                                    alt={project.name}
                                                    className="object-cover w-full h-full"
                                                />
                                            </AspectRatio>

                                            <div className="flex flex-wrap gap-3">
                                                {project.link.map((link, i) => (
                                                    <Button key={i} variant="default" size="lg" asChild className="gap-2 bg-cyan-500 hover:bg-cyan-600 text-black font-bold">
                                                        <a href={`https://${link}`} target="_blank" rel="noopener noreferrer">
                                                            {link.includes('github') ? <Github className="w-5 h-5" /> : <ExternalLink className="w-5 h-5" />}
                                                            {link.includes('github') ? 'View Code' : 'Live Demo'}
                                                        </a>
                                                    </Button>
                                                ))}
                                            </div>
                                        </div>

                                        <ScrollArea className="h-[400px] pr-4">
                                            <div className="space-y-8">
                                                <div>
                                                    <h4 className="flex items-center gap-2 text-md font-semibold text-cyan-400 mb-3">
                                                        <Building2 className="w-5 h-5" /> Company / Context
                                                    </h4>
                                                    <p className="text-base text-muted-foreground">{project.company}</p>
                                                </div>

                                                <div>
                                                    <h4 className="flex items-center gap-2 text-md font-semibold text-cyan-400 mb-3">
                                                        <User className="w-5 h-5" /> My Role
                                                    </h4>
                                                    <ul className="list-disc list-inside text-base text-muted-foreground space-y-2">
                                                        {project.post.map((item, i) => (
                                                            <li key={i}>{item}</li>
                                                        ))}
                                                    </ul>
                                                </div>

                                                <div>
                                                    <h4 className="text-md font-semibold text-cyan-400 mb-3">Technologies</h4>
                                                    <div className="flex flex-wrap gap-2">
                                                        {project.technologies.map(tech => (
                                                            <Badge key={tech} variant="tech" className="text-sm py-1 px-3">
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

                    {/* Hire Me CTA */}
                    <div className="mt-32 text-center relative py-20">
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-blue-500/10 blur-3xl -z-10" />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to create something amazing?</h2>
                            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                                I'm currently available for freelance projects and full-time opportunities.
                            </p>
                            <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105">
                                <Sparkles className="mr-2 h-5 w-5" /> Hire Me Now
                            </Button>
                        </motion.div>
                    </div>

                </div>
            </TracingBeam>
        </div>
    );
};

export default ProjectsV2;
