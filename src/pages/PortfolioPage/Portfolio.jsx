import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Navbar from "../../components/Navbar/Navbar";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import ProjectModal from "../../components/ProjectModal/ProjectModal";
import projectsData from '../../data/projectsData';
import { motion, AnimatePresence } from 'framer-motion';
import './_Portfolio.scss';

export default function Portfolio() {
  const { t } = useTranslation();
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProjects, setFilteredProjects] = useState(projectsData);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const filtered = projectsData.filter(project =>
      (filter === 'all' || project.category === filter) &&
      project.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProjects(filtered);
  }, [filter, searchTerm]);

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="portfolio-container">
      <Navbar />
      <div className="portfolio-content">
        <h2 className="portfolio-title">{t('projects.title')}</h2>

        <div className="portfolio-controls">
          <div className="filter-buttons">
            <button onClick={() => handleFilterChange('all')} className={filter === 'all' ? 'active' : ''}>
              All
            </button>
            <button onClick={() => handleFilterChange('web')} className={filter === 'web' ? 'active' : ''}>
              Web
            </button>
            <button onClick={() => handleFilterChange('mobile')} className={filter === 'mobile' ? 'active' : ''}>
              Mobile
            </button>
          </div>
          <input
            type="text"
            placeholder="Search projects..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="search-input"
          />
        </div>

        <motion.div layout className="portfolio-grid">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <ProjectCard
                  title={t(`projects.${project.title}.title`)}
                  description={t(`projects.${project.title}.description`)}
                  imageUrl={project.imageUrl}
                  repoUrl={project.repoUrl}
                  demoUrl={project.demoUrl}
                  techIcons={project.techIcons}
                  onClick={() => openModal(project)}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={closeModal}
          />
        )}
      </div>
    </div>
  );
}