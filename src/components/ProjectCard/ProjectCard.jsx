import PropTypes from 'prop-types';
import './_ProjectCard.scss';

const ProjectCard = ({ title, description, imageUrl, repoUrl, techIcons, onClick }) => {
    return (
        <div className="project-card" onClick={onClick}>
            <img src={imageUrl} alt={title} className="project-image" />
            <div className="project-content">
                <h5 className="project-title">{title}</h5>
                <div className="project-tech-logos">
                    {techIcons.map((iconUrl, index) => (
                        <img key={index} src={iconUrl} alt="Technology Icon" className="tech-logo" />
                    ))}
                </div>
                <p className="project-description">{description}</p>
                <a
                    href={repoUrl}
                    className="project-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()} // Prevent modal from opening when clicking the link
                >
                    Ver Repositorio
                </a>
            </div>
        </div>
    );
};

ProjectCard.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    repoUrl: PropTypes.string.isRequired,
    techIcons: PropTypes.arrayOf(PropTypes.string).isRequired,
    onClick: PropTypes.func.isRequired
};

export default ProjectCard;