import { useTranslation } from 'react-i18next';
import Navbar from "../../components/Navbar/Navbar";
import { Button, Grid, Typography } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';
import cvFile from '../../assets/Jesus Perez_CV_esp.pdf';
import '../ContactPage/_Contact.scss';

const Contact = () => {
  const { t } = useTranslation();

  return (
    <div className="contact-page-container">
      <Navbar />
      <h2 className="contact-title">{t('contact.title')}</h2>
      <Grid container spacing={2} justifyContent="center" alignItems="center" style={{ marginTop: '100px' }}>
        <Grid item xs={12} md={6}>
          <Typography variant="h6" gutterBottom fontFamily='Montserrat' >
            <div className='contact-page-description' dangerouslySetInnerHTML={{ __html: t('contact.description') }} />
          </Typography>

          <div className="contact-rrss">
            <a href="https://github.com/jesusp1490" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} className="contact-rrss-icon" />
            </a>
            <a href="https://www.linkedin.com/in/jesusperez14/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedinIn} className="contact-rrss-icon" />
            </a>
            <a href="https://www.instagram.com/jesusperez.ph/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} className="contact-rrss-icon" />
            </a>
          </div>

          <Button variant="contained" href={cvFile} download="Jesus Perez_CV_esp.pdf" >
            {t('contact.downloadResume')}
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default Contact;