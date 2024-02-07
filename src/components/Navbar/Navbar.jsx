// Navbar.jsx
import { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faCog, faBriefcase, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './_Navbar.scss';

const Navbar = () => {
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const closeMenu = () => setIsMenuOpen(false); // Agregamos una función para cerrar el menú

    return (
        <>
            <div className="navbar-icon-menu" onClick={toggleMenu}>
                <div className="menu-icon-bar"></div>
                <div className="menu-icon-bar"></div>
                <div className="menu-icon-bar"></div>
            </div>
            <div className={`navbar-container ${isMenuOpen ? 'menu-open' : ''}`}>
                <div className="navbar-links">
                    <Link to="/" className={location.pathname === '/' ? 'selected' : ''} onClick={closeMenu}>
                        <FontAwesomeIcon icon={faHome} className="navbar-icon" /> Home
                    </Link>
                    <Link to="/about" className={location.pathname === '/about' ? 'selected' : ''} onClick={closeMenu}>
                        <FontAwesomeIcon icon={faUser} className="navbar-icon" /> About Me
                    </Link>
                    <Link to="/services" className={location.pathname === '/services' ? 'selected' : ''} onClick={closeMenu}>
                        <FontAwesomeIcon icon={faCog} className="navbar-icon" /> Services
                    </Link>
                    <Link to="/portfolio" className={location.pathname === '/portfolio' ? 'selected' : ''} onClick={closeMenu}>
                        <FontAwesomeIcon icon={faBriefcase} className="navbar-icon" /> Portfolio
                    </Link>
                    <Link to="/contact" className={location.pathname === '/contact' ? 'selected' : ''} onClick={closeMenu}>
                        <FontAwesomeIcon icon={faEnvelope} className="navbar-icon" /> Contact
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Navbar;
