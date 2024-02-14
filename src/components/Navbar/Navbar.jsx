import { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faCog, faBriefcase, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './_Navbar.scss';
import Footer from '../Footer/Footer';

const Navbar = () => {
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { t, i18n } = useTranslation(); // Obtener la función de cambio de idioma y las traducciones

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

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
                        <FontAwesomeIcon icon={faHome} className="navbar-icon" /> {t('navbar.home')}
                    </Link>
                    <Link to="/about" className={location.pathname === '/about' ? 'selected' : ''} onClick={closeMenu}>
                        <FontAwesomeIcon icon={faUser} className="navbar-icon" /> {t('navbar.about')}
                    </Link>
                    <Link to="/services" className={location.pathname === '/services' ? 'selected' : ''} onClick={closeMenu}>
                        <FontAwesomeIcon icon={faCog} className="navbar-icon" /> {t('navbar.services')}
                    </Link>
                    <Link to="/portfolio" className={location.pathname === '/portfolio' ? 'selected' : ''} onClick={closeMenu}>
                        <FontAwesomeIcon icon={faBriefcase} className="navbar-icon" /> {t('navbar.portfolio')}
                    </Link>
                    <Link to="/contact" className={location.pathname === '/contact' ? 'selected' : ''} onClick={closeMenu}>
                        <FontAwesomeIcon icon={faEnvelope} className="navbar-icon" /> {t('navbar.contact')}
                    </Link>
                    <div className="language-button-container">
                        <button className="language-button" onClick={() => changeLanguage('en')}>EN</button>
                        <button className="language-button" onClick={() => changeLanguage('es')}>ES</button>
                    </div>
                    <Footer />
                </div>
            </div>
        </>
    );
};

export default Navbar;
