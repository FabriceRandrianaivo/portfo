import React, { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { projects, Project } from "../data/projects";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

type ProjectWithMaybeCategory = Project & { category?: string };
const projectsData = projects as ReadonlyArray<ProjectWithMaybeCategory>;

type SortKey = 'recent' | 'oldest' | 'name';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
};

const detailsVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
  exit: { opacity: 0, x: 50, transition: { duration: 0.25 } }
};

const splitResponsibilities = (roleEntries: readonly string[]): string[] => {
  if (!roleEntries || roleEntries.length === 0) return [];
  const parts = roleEntries.flatMap(entry => entry.split(',')).map(s => s.trim()).filter(Boolean);
  const seen = new Set<string>();
  return parts.filter(p => { if (seen.has(p)) return false; seen.add(p); return true; });
};

const Portfolio: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortKey, setSortKey] = useState<SortKey>('recent');


  const hasCategories = useMemo(() => projectsData.some(p => !!p.category), []);

  const categories = useMemo(() => {
    if (!hasCategories) return [] as string[];
    const base = new Set<string>(['All']);
    projectsData.forEach(p => { if (p.category) base.add(p.category); });
    return Array.from(base);
  }, [hasCategories]);

  const searchedProjects = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return projectsData;
    return projectsData.filter(p => {
      const haystack = [
        p.name,
        p.company,
        p.description || '',
        ...(p.technologies || [])
      ].join(' ').toLowerCase();
      return haystack.includes(q);
    });
  }, [searchQuery]);

  const filteredProjects = useMemo(() => {
    const base = searchedProjects;
    if (!hasCategories) return base;
    if (activeCategory === 'All') return base;
    return base.filter(p => p.category === activeCategory);
  }, [searchedProjects, activeCategory, hasCategories]);

  const sortedProjects = useMemo(() => {
    const arr = [...filteredProjects];
    if (sortKey === 'name') {
      arr.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortKey === 'oldest') {
      arr.sort((a, b) => a.year - b.year);
    } else {
      arr.sort((a, b) => b.year - a.year);
    }
    return arr;
  }, [filteredProjects, sortKey]);

  const selectedProjectData = useMemo(
    () => projectsData.find(p => p.name === selectedProject) || null,
    [selectedProject]
  );

  const openDetails = (projectName: string) => setSelectedProject(projectName);
  const closeDetails = () => setSelectedProject(null);



  return (
    <div className="portfolio-container">
      <motion.div
        className="portfolio-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="portfolio-title">Projects</h1>
        <p className="portfolio-subtitle">
          A selection of real projects I built. Click a card to view details, stack, and links.
        </p>

        {/* Toolbar: Search + Sort + Filters (if any) */}
        <div className="portfolio-toolbar" role="region" aria-label="Search and sort projects">
          <Input
            className="search-input"
            type="text"
            placeholder="Search by name, company, or tech..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            aria-label="Search projects"
          />

          <div className="toolbar-right">
            <div className="sort-control">
              <label htmlFor="sortKey">Sort</label>
              <select id="sortKey" value={sortKey} onChange={(e) => setSortKey(e.target.value as SortKey)}>
                <option value="recent">Most recent</option>
                <option value="oldest">Oldest</option>
                <option value="name">Name (A→Z)</option>
              </select>
            </div>

            {hasCategories && (
              <div className="category-filters" role="tablist" aria-label="Filter projects by category">
                {categories.map(category => (
                  <button
                    key={category}
                    role="tab"
                    aria-selected={activeCategory === category}
                    className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
                    onClick={() => setActiveCategory(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="results-row">
          <span className="results-count">{sortedProjects.length} result{sortedProjects.length !== 1 ? 's' : ''}</span>
        </div>
      </motion.div>

      <div className="portfolio-content">
        <motion.div
          className="cards-grid"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {sortedProjects.map(project => {
            const primaryRole = project.post && project.post.length > 0 ? project.post[0] : '';
            const shortRole = primaryRole ? primaryRole.split(',')[0] : '';
            const firstLink = project.link && project.link.length > 0 ? project.link[0] : '';
            const firstLinkIsGitHub = firstLink.includes('github.com');

            return (
              <motion.div
                key={project.name}
                variants={itemVariants}
                whileHover={{ y: -6 }}
              >
                <Card
                  className="project-card cursor-pointer overflow-hidden group hover:shadow-2xl hover:border-cyan-400/40 transition-all duration-300"
                  onClick={() => openDetails(project.name)}
                  tabIndex={0}
                  onKeyDown={(e) => { if (e.key === 'Enter') openDetails(project.name); }}
                  aria-label={`Open details for ${project.name}`}
                >
                  <div className="project-media relative">
                    <img
                      src={project.img}
                      alt={project.name}
                      className="project-image w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {project.category && (
                      <Badge variant="secondary" className="absolute bottom-3 left-3 bg-cyan-500/90 text-white border-0 shadow-lg">
                        {project.category}
                      </Badge>
                    )}
                    {shortRole && (
                      <Badge variant="outline" className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm border-cyan-400/50" title={primaryRole}>
                        {shortRole}
                      </Badge>
                    )}
                  </div>

                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between gap-2">
                      <CardTitle className="text-xl text-cyan-400 group-hover:text-cyan-300 transition-colors">
                        {project.name}
                      </CardTitle>
                      <Badge variant="outline" className="text-xs shrink-0">
                        {project.year}
                      </Badge>
                    </div>
                    <CardDescription className="text-sm text-muted-foreground">
                      {project.company}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-3">
                    {project.description && (
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {project.description}
                      </p>
                    )}

                    {shortRole && (
                      <p className="text-xs text-muted-foreground">
                        <strong className="text-foreground">Role:</strong> {primaryRole}
                      </p>
                    )}

                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <Badge
                          key={`${project.name}-${tech}`}
                          variant="tech"
                          className="text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 4 && (
                        <Badge variant="secondary" className="text-xs">
                          +{project.technologies.length - 4}
                        </Badge>
                      )}
                    </div>
                  </CardContent>

                  <CardFooter className="pt-0 gap-2" onClick={(e) => e.stopPropagation()}>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => openDetails(project.name)}
                      className="flex-1"
                    >
                      Details
                    </Button>
                    {firstLink && (
                      <Button
                        size="sm"
                        variant="ghost"
                        asChild
                        className="flex-1"
                      >
                        <a
                          href={`https://${firstLink}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={firstLinkIsGitHub ? 'Open GitHub' : 'Open link'}
                        >
                          {firstLinkIsGitHub ? 'GitHub' : 'Link'}
                        </a>
                      </Button>
                    )}
                  </CardFooter>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        <AnimatePresence>
          {selectedProjectData && (
            <motion.aside
              className="project-details"
              key={selectedProjectData.name}
              variants={detailsVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              aria-modal="true"
              role="dialog"
            >
              <button className="details-close" onClick={closeDetails} aria-label="Close details">×</button>

              <div className="details-header">
                <h2>{selectedProjectData.name}</h2>
                <div className="details-meta">
                  <span className="company">{selectedProjectData.company}</span>
                  <span className="year">{selectedProjectData.year}</span>
                  {selectedProjectData.category && (
                    <span className="category">{selectedProjectData.category}</span>
                  )}
                </div>
                {selectedProjectData.post && selectedProjectData.post.length > 0 && (
                  <p className="role-summary"><strong>Role:</strong> {selectedProjectData.post[0]}</p>
                )}
              </div>

              <div className="details-content">
                {selectedProjectData.description && (
                  <div className="details-section">
                    <h4>Overview</h4>
                    <p>{selectedProjectData.description}</p>
                  </div>
                )}

                <div className="details-section">
                  <h4>Role</h4>
                  <ul className="list">
                    {selectedProjectData.post.map((p, i) => (
                      <li key={i}>{p}</li>
                    ))}
                  </ul>
                </div>

                {selectedProjectData.post && (
                  <div className="details-section">
                    <h4>Responsibilities</h4>
                    <div className="responsibility-tags">
                      {splitResponsibilities(selectedProjectData.post).map((r, i) => (
                        <span className="responsibility-tag" key={`${selectedProjectData.name}-resp-${i}`}>{r}</span>
                      ))}
                    </div>
                  </div>
                )}

                <div className="details-section">
                  <h4>Tech stack</h4>
                  <div className="tech-list">
                    {selectedProjectData.technologies.map((tech) => (
                      <span key={`${selectedProjectData.name}-${tech}`} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>

                {selectedProjectData.link.length > 0 && (
                  <div className="details-section">
                    <h4>Links</h4>
                    <div className="links">
                      {selectedProjectData.link.map((l, i) => (
                        <a
                          key={i}
                          href={`https://${l}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="link-btn"
                        >
                          {l.includes('github.com') ? 'GitHub' : 'Visit'}
                        </a>
                      ))}
                    </div>
                  </div>
                )}

                {selectedProjectData.img && (
                  <div className="details-section">
                    <h4>Preview</h4>
                    <img src={selectedProjectData.img} alt={selectedProjectData.name} className="details-image" />
                  </div>
                )}
              </div>
            </motion.aside>
          )}
        </AnimatePresence>
      </div>


    </div>
  );
};

export default Portfolio;
