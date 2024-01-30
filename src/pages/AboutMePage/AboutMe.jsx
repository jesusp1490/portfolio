import Navbar from "../../components/Navbar/Navbar";
import './_AboutMe.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJs, faReact, faAngular, faNodeJs, faHtml5, faCss3Alt, faSass, faBootstrap, faMdb, faGitAlt, faNpm, faGithub } from '@fortawesome/free-brands-svg-icons';

const AboutMe = () => {
  return (
    <div className="about-me-container">
      <Navbar />
      <div className="about-me-image-bg">
        <img src="https://res.cloudinary.com/dizd9f3ky/image/upload/v1706617952/AbooutMeImg_meutqx.png" alt="Background" />
      </div>
      <div className="about-me-card">
        <div className="about-me-text">
          <h2>About me</h2>
          <p>I`m Jesús Pérez, a passionate software developer who loves solving complex problems with creative solutions. I started my journey in programming some years ago, and it has been a path filled with constant learning and improvement. I specialize in frontend development, where I focus on creating user-friendly interfaces, and in backend development, where I work on the essential parts that keep applications and websites running smoothly.</p>
        </div>
        <div className="about-me-skills">
          <h2>Skills</h2>
          <div className="skills-logos">
            <FontAwesomeIcon icon={faJs} className="skill-icon" size="4x" />
            <FontAwesomeIcon icon={faReact} className="skill-icon" size="4x" />
            <FontAwesomeIcon icon={faAngular} className="skill-icon" size="4x" />
            <FontAwesomeIcon icon={faNodeJs} className="skill-icon" size="4x" />
            <FontAwesomeIcon icon={faHtml5} className="skill-icon" size="4x" />
            <FontAwesomeIcon icon={faCss3Alt} className="skill-icon" size="4x" />
            <FontAwesomeIcon icon={faSass} className="skill-icon" size="4x" />
            <FontAwesomeIcon icon={faBootstrap} className="skill-icon" size="4x" />
            <FontAwesomeIcon icon={faGitAlt} className="skill-icon" size="4x" />
            <FontAwesomeIcon icon={faGithub} className="skill-icon" size="4x" /> 
            <FontAwesomeIcon icon={faNpm} className="skill-icon" size="4x" />
            <FontAwesomeIcon icon={faMdb} className="skill-icon" size="4x" />

          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
