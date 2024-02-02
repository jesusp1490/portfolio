import Navbar from "../../components/Navbar/Navbar"
import ServiceCard from '../../components/ServiceCard/ServiceCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileButton, faCamera, faLaptop, faDatabase, faCode } from '@fortawesome/free-solid-svg-icons';
import { faGithub, } from '@fortawesome/free-brands-svg-icons';
import '../ServicesPage/_Services.scss'

const services = [
  { 
    icon: faGithub,
    title: 'Git Version Control', 
    description: 'Enhance workflow efficiency with advanced and collaborative version control using Git.' 
  },
  {
    icon: faMobileButton,
    title: 'App Design',
    description: 'Intuitive, user-centered app designs with sleek interfaces and optimized user experiences.'
  },
  {
    icon: faCode,
    title: 'Web Development',
    description: 'Modern web development to create dynamic, responsive, and performance-oriented sites.'
  },
  {
    icon: faDatabase,
    title: 'Back-end Development',
    description: 'Robust and scalable back-end solutions powering the logic and data management of your applications.'
  },
  {
    icon: faCamera,
    title: 'Photography',
    description: 'Professional photography services that capture your brand`s essence and enhance visual storytelling.'
  },
  {
    icon: faLaptop,
    title: 'Freelancing',
    description: 'Flexible and adaptable development and design services to take your projects to the next level.'
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
