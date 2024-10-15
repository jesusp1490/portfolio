import PropTypes from 'prop-types';
import './_ServiceCard.scss';

const ServiceCard = ({ icon, title, description, onClick }) => {
    return (
        <div className="service-card" onClick={onClick}>
            <div className="service-icon">{icon}</div>
            <h3 className="service-title">{title}</h3>
            <p className="service-description">{description}</p>
            <div className="card-footer">
                <button className="learn-more-btn">Learn More</button>
            </div>
        </div>
    );
};

ServiceCard.propTypes = {
    icon: PropTypes.node.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
};

export default ServiceCard;