import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Navbar from "../../components/Navbar/Navbar";
import ServiceCard from '../../components/ServiceCard/ServiceCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileButton, faCamera, faLaptop, faDatabase, faCode, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { motion, AnimatePresence } from 'framer-motion';
import './_Services.scss';

export default function Services() {
  const { t } = useTranslation();
  const [selectedService, setSelectedService] = useState(null);

  const services = t('services.items', { returnObjects: true });

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'faGithub': return faGithub;
      case 'faMobileButton': return faMobileButton;
      case 'faCode': return faCode;
      case 'faDatabase': return faDatabase;
      case 'faCamera': return faCamera;
      default: return faLaptop;
    }
  };

  const handleServiceClick = (service) => {
    setSelectedService(service);
  };

  const closeServiceDetails = () => {
    setSelectedService(null);
  };

  return (
    <div className="services-container">
      <Navbar />
      <div className="services-content">
        <h2 className="services-title">{t('services.title')}</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="service-card-wrapper"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <ServiceCard
                icon={<FontAwesomeIcon icon={getIcon(service.icon)} size="3x" />}
                title={service.title}
                description={service.description}
                onClick={() => handleServiceClick(service)}
              />
            </motion.div>
          ))}
        </div>
      </div>
      <AnimatePresence>
        {selectedService && (
          <motion.div
            className="service-details-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeServiceDetails}
          >
            <motion.div
              className="service-details"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="close-button" onClick={closeServiceDetails}>
                <FontAwesomeIcon icon={faTimes} />
              </button>
              <h3>{selectedService.title}</h3>
              <p>{selectedService.fullDescription}</p>
              {selectedService.features && (
                <>
                  <h4>{t('services.featuresTitle')}</h4>
                  <ul>
                    {selectedService.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </>
              )}
              {selectedService.benefits && (
                <>
                  <h4>{t('services.benefitsTitle')}</h4>
                  <ul>
                    {selectedService.benefits.map((benefit, index) => (
                      <li key={index}>{benefit}</li>
                    ))}
                  </ul>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}