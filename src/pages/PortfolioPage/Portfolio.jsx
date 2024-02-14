import { useTranslation } from 'react-i18next';
import Navbar from "../../components/Navbar/Navbar"
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import projectsData from '../../data/projectsData';
import '../PortfolioPage/_Portfolio.scss';

const Portfolio = () => {
  const { t } = useTranslation();

  return (
    <div className="portfolio-container">
      <Navbar />
      <h2 className="portfolio-title">{t('projects.title')}</h2>
      <div className="portfolio-grid">
        {projectsData.map((project) => (
          <ProjectCard
            key={project.title}
            title={t(`projects.${project.title}.title`)}
            description={t(`projects.${project.title}.description`)}
            imageUrl={project.imageUrl}
            repoUrl={project.repoUrl}
            techIcons={project.techIcons}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
