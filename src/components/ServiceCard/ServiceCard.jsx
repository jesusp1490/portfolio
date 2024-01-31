import PropTypes from 'prop-types';
import '../ServiceCard/_ServiceCard.scss';

const ServiceCard = ({ icon, title, description }) => {
    return (
        <div className="service-card">
            <div className="service-icon">{icon}</div>
            <h3 className="service-title">{title}</h3>
            <p className="service-description">{description}</p>
        </div>
    );
};

ServiceCard.propTypes = {
    icon: PropTypes.node.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
};

export default ServiceCard;
