import Navbar from "../../components/Navbar/Navbar"
import ServiceCard from '../../components/ServiceCard/ServiceCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCodeBranch, faPaintBrush, faCogs, faCamera, faUserTie } from '@fortawesome/free-solid-svg-icons';
import '../ServicesPage/_Services.scss'

const services = [
  { 
    icon: faCodeBranch,
    title: 'Git Version Control', 
    description: 'Descripción...' 
  },
  {
    icon: faPaintBrush,
    title: 'App Design',
    description: 'Descripción...'
  },
  {
    icon: faCogs,
    title: 'Web Development',
    description: 'Descripción...'
  },
  {
    icon: faCamera,
    title: 'Back-end Development',
    description: 'Descripción...'
  },
  {
    icon: faUserTie,
    title: 'Photography',
    description: 'Descripción...'
  },
  {
    icon: faUserTie,
    title: 'Freelancing',
    description: 'Descripción...'
  },
];

const Services = () => {
  return (
    <div className="services-section">
    <Navbar />
      <h2 className="services-title">Services</h2>
      {services.map(service => (
        <ServiceCard
          key={service.title}
          icon={<FontAwesomeIcon icon={service.icon} size="3x" />}
          title={service.title}
          description={service.description}
        />
      ))}
    </div>
  );
};

export default Services;
