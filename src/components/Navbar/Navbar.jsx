import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faCog, faBriefcase, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './_Navbar.scss';

const Navbar = () => {
    const location = useLocation();

    return (
        <div className="navbar-container">

            {/* <h2>NUKEDEV</h2> */}

            <div className="navbar-links">
                <Link to="/" className={location.pathname === '/' ? 'selected' : ''}>
                    <FontAwesomeIcon icon={faHome} className="navbar-icon" />
                    Home
                </Link>
                <Link to="/about" className={location.pathname === '/about' ? 'selected' : ''}>
                    <FontAwesomeIcon icon={faUser} className="navbar-icon" />
                    About Me
                </Link>
                <Link to="/services" className={location.pathname === '/services' ? 'selected' : ''}>
                    <FontAwesomeIcon icon={faCog} className="navbar-icon" />
                    Services
                </Link>
                <Link to="/portfolio" className={location.pathname === '/portfolio' ? 'selected' : ''}>
                    <FontAwesomeIcon icon={faBriefcase} className="navbar-icon" />
                    Portfolio
                </Link>
                <Link to="/contact" className={location.pathname === '/contact' ? 'selected' : ''}>
                    <FontAwesomeIcon icon={faEnvelope} className="navbar-icon" />
                    Contact
                </Link>
            </div>
        </div>
    );
};

export default Navbar;