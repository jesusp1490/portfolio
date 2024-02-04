import Navbar from "../../components/Navbar/Navbar";
import { TextField, Button, Box, Grid, Typography } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';
import '../ContactPage/_Contact.scss';
import cvFile from '../../assets/Jesus Perez_CV_esp.pdf'; 

const Contact = () => {
  return (
    <div className="contact-page-container">
      <Navbar />
      <h2 className="contact-title">Contact Me</h2>
      <Grid container spacing={2} justifyContent="center" alignItems="center" style={{ marginTop: '100px', marginLeft: '1000px' }}>
        <Grid item xs={12} md={6}>
          <Typography variant="h6" gutterBottom fontFamily='Montserrat' >
            Do you have any projects in mind, or do you need any maintenance or photography services? Don`t hesitate to contact me!
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
            Download Resume
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
              label="Name"
              variant="filled"
              color="accent"
              sx={{ width: '90%', fontSize: '2rem' }}
            />
            <TextField
              id="email-field"
              label="Email"
              variant="filled"
              color="accent"
              sx={{ width: '90%', fontSize: '2rem' }}

            />
            <TextField
              id="message-field"
              label="Message"
              variant="filled"
              required
              multiline
              rows={8}
              color="accent"
              sx={{ width: '90%', fontSize: '2rem' }}
            />
            <Button variant="contained" sx={{ mt: 2, width: '40%', fontSize: '1rem' }} color="accent">
              Submit
            </Button>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default Contact;
