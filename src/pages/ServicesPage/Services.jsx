import { useTranslation } from 'react-i18next';
import Navbar from "../../components/Navbar/Navbar";
import ServiceCard from '../../components/ServiceCard/ServiceCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileButton, faCamera, faLaptop, faDatabase, faCode } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import '../ServicesPage/_Services.scss';

const Services = () => {
  const { t } = useTranslation();

  const services = t('services.items', { returnObjects: true });

  return (
    <div className="services-section">
      <Navbar />
      <h2 className="services-title">{t('services.title')}</h2>
      {services.map((service, index) => (
        <ServiceCard
          key={index}
          icon={<FontAwesomeIcon icon={service.icon === 'faGithub' ? faGithub : service.icon === 'faMobileButton' ? faMobileButton : service.icon === 'faCode' ? faCode : service.icon === 'faDatabase' ? faDatabase : service.icon === 'faCamera' ? faCamera : faLaptop} size="3x" />}
          title={service.title}
          description={service.description}
        />
      ))}
    </div>
  );
};

export default Services;
