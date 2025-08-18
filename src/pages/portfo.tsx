import React, { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { projects, Project } from "../data/projects";

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
          <input
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
              <motion.article
                key={project.name}
                className="project-card"
                variants={itemVariants}
                whileHover={{ y: -6 }}
                onClick={() => openDetails(project.name)}
                tabIndex={0}
                onKeyDown={(e) => { if (e.key === 'Enter') openDetails(project.name); }}
                aria-label={`Open details for ${project.name}`}
              >
                <div className="project-media">
                  <img
                    src={project.img}
                    alt={project.name}
                    className="project-image"
                  />
                  {project.category && (
                    <span className="project-chip">{project.category}</span>
                  )}
                  {shortRole && (
                    <span className="role-chip" title={primaryRole}>{shortRole}</span>
                  )}
                </div>

                <div className="project-body">
                  <header className="project-header">
                    <h3 className="project-title">{project.name}</h3>
                    <div className="project-meta">
                      <span className="company">{project.company}</span>
                      <span className="year">{project.year}</span>
                    </div>
                  </header>

                  {project.description && (
                    <p className="project-description">{project.description}</p>
                  )}

                  {shortRole && (
                    <p className="project-role-summary"><strong>Role:</strong> {primaryRole}</p>
                  )}

                  <div className="project-tech">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span key={`${project.name}-${tech}`} className="tech-tag">{tech}</span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="tech-tag more">+{project.technologies.length - 4}</span>
                    )}
                  </div>

                  <div className="project-actions" onClick={(e) => e.stopPropagation()}>
                    <button className="btn-small" onClick={() => openDetails(project.name)}>Details</button>
                    {firstLink && (
                      <a
                        className="link-mini"
                        href={`https://${firstLink}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={firstLinkIsGitHub ? 'Open GitHub' : 'Open link'}
                      >
                        {firstLinkIsGitHub ? 'GitHub' : 'Link'}
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
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
