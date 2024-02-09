import { useEffect } from "react";
import Typed from "typed.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import Navbar from "../../components/Navbar/Navbar";
import './_Home.scss';
import { Button } from "@mui/material";
import cvFile from '../../assets/Jesus Perez_CV_esp.pdf';
import { useTranslation } from 'react-i18next';

const Home = () => {
    const { t } = useTranslation();

    useEffect(() => {
        const roles = t("home.roles", { returnObjects: true });
        const options = {
            strings: Array.isArray(roles) ? roles : [roles],
            typeSpeed: 50,
            backSpeed: 30,
            backDelay: 1000,
            loop: true,
        };

        const typed = new Typed('#typed', options);

        return () => {
            typed.destroy();
        };

    }, [t]); 

    return (
        <div className="home-container">
            <Navbar />
            <div className="home-content">
                <div className="home-avatar">
                    <img src="https://res.cloudinary.com/dizd9f3ky/image/upload/v1702648552/Praga_122_phegkz.jpg" alt="Profile_Prague" className="home-img" />
                </div>
                <div className="home-details">
                    <h3 className="home-name">{t("home.title")}</h3>
                    <h4 className="home-typed"><span id="typed"></span></h4>
                    <div className="home-rrss">
                        <a href="https://github.com/jesusp1490" target="_blank" rel="noopener noreferrer" aria-label={t("home.social.github")}>
                            <FontAwesomeIcon icon={faGithub} className="home-rrss-icon" />
                        </a>
                        <a href="https://www.linkedin.com/in/jesusperez14/" target="_blank" rel="noopener noreferrer" aria-label={t("home.social.linkedin")}>
                            <FontAwesomeIcon icon={faLinkedin} className="home-rrss-icon" />
                        </a>
                        <a href="https://www.instagram.com/jesusperez.ph/" target="_blank" rel="noopener noreferrer" aria-label={t("home.social.instagram")}>
                            <FontAwesomeIcon icon={faInstagram} className="home-rrss-icon" />
                        </a>
                    </div>

                    <Button variant="contained" href={cvFile} download="Jesus Perez_CV_esp.pdf">
                        {t("home.downloadResume")}
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Home;
