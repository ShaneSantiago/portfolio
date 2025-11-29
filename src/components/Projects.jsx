import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiExternalLink, FiFolder } from 'react-icons/fi';
import { projects } from '../data/portfolioData';
import './Projects.css';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [filter, setFilter] = useState('all');
  const [showAll, setShowAll] = useState(false);

  const filteredProjects = filter === 'all'
    ? projects
    : filter === 'featured'
      ? projects.filter(p => p.featured)
      : projects;

  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 4);

  return (
    <section id="projects" className="projects section" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-subtitle">Portfólio</span>
          <h2 className="section-title">Projetos em Destaque</h2>
          <p className="section-description">
            Uma seleção dos meus trabalhos mais recentes e impactantes
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          className="projects-filter"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {['all', 'featured'].map((filterOption) => (
            <button
              key={filterOption}
              className={`filter-btn ${filter === filterOption ? 'active' : ''}`}
              onClick={() => setFilter(filterOption)}
            >
              {filterOption === 'all' ? 'Todos' : 'Destaques'}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="projects-grid"
          layout
        >
          <AnimatePresence mode="wait">
            {displayedProjects.map((project, index) => (
              <motion.article
                key={project.id}
                className="project-card"
                layout
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                {/* Project Image */}
                <div className="project-image-container">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-image"
                  />
                  <div className="project-overlay">
                    <div className="project-links">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                        aria-label="Ver projeto"
                      >
                        <FiExternalLink />
                      </a>
                    </div>
                  </div>
                  {project.featured && (
                    <span className="featured-badge">Destaque</span>
                  )}
                </div>

                {/* Project Info */}
                <div className="project-info">
                  <div className="project-folder">
                    <FiFolder />
                  </div>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tech">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Show More Button */}
        {filteredProjects.length > 4 && (
          <motion.div
            className="projects-more"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
          >
            <button
              className="btn-secondary"
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? 'Mostrar Menos' : 'Ver Mais Projetos'}
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;
