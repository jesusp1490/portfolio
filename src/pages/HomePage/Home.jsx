import { useEffect } from "react";
import Typed from "typed.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import Navbar from "../../components/Navbar/Navbar";
import './_Home.scss';

const Home = () => {

    useEffect(() => {
        const options = {
            strings: ['Full Stack Developer', 'Video Games Developer', 'Photographer'],
            typeSpeed: 50,
            backSpeed: 30,
            backDelay: 1000,
            loop: true,
        };

        const typed = new Typed('#typed', options);

        return () => {
            typed.destroy();
        };

    }, []);

    return (
        <div className="home-container">
            <Navbar />
            <div className="home-content">
                <div className="home-avatar">
                    <img src="https://res.cloudinary.com/dizd9f3ky/image/upload/v1702648552/Praga_122_phegkz.jpg" alt="Profile_Prague" className="home-img" />
                </div>
                <div className="home-details">
                    <h3 className="home-name">Jesus Perez</h3>
                    <h4 className="home-typed">I`m a <span id="typed"></span></h4>
                    <p className="home-description">Passionate Full Stack Developer with a love for photography, 3D art, and a strong affinity for music and movies. I´m dedicated to
                        crafting smooth and engaging digital experiences. I blend the art of design with coding expertise to turn creative ideas into
                        live, user-friendly solutions. Let`s bring your visions to life in the digital world!
                    </p>
                    <div className="home-rrss">
                        <a href="https://github.com/jesusp1490" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faGithub} className="home-rrss-icon" />
                        </a>
                        <a href="https://www.linkedin.com/in/jesusperez14/" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faLinkedin} className="home-rrss-icon" />
                        </a>
                        <a href="https://www.instagram.com/jesusperez.ph/" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faInstagram} className="home-rrss-icon" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;
