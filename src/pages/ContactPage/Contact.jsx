import { useTranslation } from 'react-i18next';
import Navbar from "../../components/Navbar/Navbar";
import { TextField, Button, Box, Grid, Typography } from '@mui/material';
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
      <Grid container spacing={2} justifyContent="center" alignItems="center" style={{ marginTop: '100px', marginLeft: '1000px' }}>
        <Grid item xs={12} md={6}>
          <Typography variant="h6" gutterBottom fontFamily='Montserrat' >
            {t('contact.description')}
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
        <Grid item xs={12} md={6} >
          <Box
            className="contact-form-container"
            component="form"
            sx={{
              '& .MuiTextField-root': { m: 1, width: '25ch' },
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '20px',
              borderRadius: '10px',
              maxWidth: '500px',
              width: '100%',
              margin: 'auto',
              height: '50%',
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="name-field"
              label={t('contact.name')}
              variant="filled"
              color="accent"
              style={{
                width: '100%', fontSize: '2rem',
                '@media (maxWidth: 768px)': {
                  width: '100%',
                },
              }}
            />
            <TextField
              id="email-field"
              label={t('contact.email')}
              variant="filled"
              color="accent"
              style={{
                width: '100%', fontSize: '2rem',
                '@media (maxWidth: 768px)': {
                  width: '100%',
                },
              }}

            />
            <TextField
              id="message-field"
              label={t('contact.message')}
              variant="filled"
              required
              multiline
              rows={8}
              color="accent"
              style={{
                width: '100%', fontSize: '2rem',
                '@media (maxWidth: 768px)': {
                  width: '100%',
                  marginRight: '100px',
                },
              }}
            />
            <Button variant="contained" sx={{ mt: 2, width: '40%', fontSize: '1rem' }} color="accent">
              {t('contact.submit')}
            </Button>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default Contact;