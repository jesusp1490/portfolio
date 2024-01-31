import Navbar from "../../components/Navbar/Navbar"
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import projectsData from '../../data/projectsData';
import '../PortfolioPage/_Portfolio.scss';

const Portfolio = () => {
  return (
    <div className="portfolio-container">
      <Navbar />
      <h2 className="portfolio-title">Portfolio</h2>
      <div className="portfolio-grid">
        {projectsData.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl}
            repoUrl={project.repoUrl}
            techIcons={project.techIcons} 
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio
