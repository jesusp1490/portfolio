import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faExternalLinkAlt, faCode } from '@fortawesome/free-solid-svg-icons';
import './_ProjectModal.scss';

const ProjectModal = ({ project, onClose }) => {
    return (
        <motion.div
            className="project-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
        >
            <motion.div
                className="project-modal-content"
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -50, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
            >
                <button className="close-button" onClick={onClose} aria-label="Close modal">
                    <FontAwesomeIcon icon={faTimes} />
                </button>
                <h2>{project.title}</h2>
                <img src={project.imageUrl} alt={project.title} className="project-image" />
                <div className="project-details">
                    <h3>Description</h3>
                    <p>{project.description}</p>
                    <h3>Key Features</h3>
                    <ul>
                        {project.features.map((feature, index) => (
                            <li key={index}>{feature}</li>
                        ))}
                    </ul>
                    <h3>Technologies Used</h3>
                    <div className="project-tech">
                        {project.techIcons.map((icon, index) => (
                            <img key={index} src={icon} alt="Technology Icon" className="tech-icon" />
                        ))}
                    </div>
                    <h3>Challenges and Solutions</h3>
                    <p>{project.challenges}</p>
                    <div className="project-links">
                        <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                            <FontAwesomeIcon icon={faCode} /> View Repository
                        </a>
                        {project.demoUrl && (
                            <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                                <FontAwesomeIcon icon={faExternalLinkAlt} /> Live Demo
                            </a>
                        )}
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

ProjectModal.propTypes = {
    project: PropTypes.shape({
        title: PropTypes.string.isRequired,
        imageUrl: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        features: PropTypes.arrayOf(PropTypes.string).isRequired,
        repoUrl: PropTypes.string.isRequired,
        demoUrl: PropTypes.string,
        techIcons: PropTypes.arrayOf(PropTypes.string).isRequired,
        challenges: PropTypes.string.isRequired,
    }).isRequired,
    onClose: PropTypes.func.isRequired,
};

export default ProjectModal;