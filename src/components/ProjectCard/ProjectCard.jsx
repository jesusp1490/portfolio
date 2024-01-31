import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './_ProjectCard.scss';

const ProjectCard = ({ title, description, imageUrl, repoUrl, techIcons }) => {
    return (
        <div className="project-card">
            <img src={imageUrl} alt={title} className="project-image" />
            <div className="project-content">
                <div className="project-tech-logos">
                    {techIcons.map((icon, index) => (
                        <FontAwesomeIcon key={index} icon={icon} className="tech-logo" />
                    ))}
                </div>
                <h5 className="project-title">{title}</h5>
                <p className="project-description">{description}</p> 
                <a href={repoUrl} className="project-link" target="_blank" rel="noopener noreferrer">Ver Repositorio</a>
            </div>
        </div>
    );
};

ProjectCard.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    repoUrl: PropTypes.string.isRequired,
    techIcons: PropTypes.array.isRequired 
};

export default ProjectCard;
