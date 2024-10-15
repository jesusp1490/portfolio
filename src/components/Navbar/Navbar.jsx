import { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faCog, faBriefcase, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './_Navbar.scss';

const Navbar = () => {
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { t, i18n } = useTranslation();

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <nav className='navbar' aria-label="Main navigation">
            <div className="navbar-icon-menu" onClick={toggleMenu} aria-expanded={isMenuOpen} aria-label="Toggle menu">
                <div className="menu-icon-bar"></div>
                <div className="menu-icon-bar"></div>
                <div className="menu-icon-bar"></div>
            </div>

            <div className={`navbar-container ${isMenuOpen ? 'menu-open' : ''}`}>
                <div className="navbar-links">
                    <Link to="/" className={location.pathname === '/' ? 'selected' : ''} onClick={closeMenu} aria-current={location.pathname === '/' ? 'page' : undefined}>
                        <FontAwesomeIcon icon={faHome} className="navbar-icon" aria-hidden="true" /> {t('navbar.home')}
                    </Link>
                    <Link to="/about" className={location.pathname === '/about' ? 'selected' : ''} onClick={closeMenu} aria-current={location.pathname === '/about' ? 'page' : undefined}>
                        <FontAwesomeIcon icon={faUser} className="navbar-icon" aria-hidden="true" /> {t('navbar.about')}
                    </Link>
                    <Link to="/services" className={location.pathname === '/services' ? 'selected' : ''} onClick={closeMenu} aria-current={location.pathname === '/services' ? 'page' : undefined}>
                        <FontAwesomeIcon icon={faCog} className="navbar-icon" aria-hidden="true" /> {t('navbar.services')}
                    </Link>
                    <Link to="/portfolio" className={location.pathname === '/portfolio' ? 'selected' : ''} onClick={closeMenu} aria-current={location.pathname === '/portfolio' ? 'page' : undefined}>
                        <FontAwesomeIcon icon={faBriefcase} className="navbar-icon" aria-hidden="true" /> {t('navbar.portfolio')}
                    </Link>
                    <Link to="/contact" className={location.pathname === '/contact' ? 'selected' : ''} onClick={closeMenu} aria-current={location.pathname === '/contact' ? 'page' : undefined}>
                        <FontAwesomeIcon icon={faEnvelope} className="navbar-icon" aria-hidden="true" /> {t('navbar.contact')}
                    </Link>
                    <div className="language-button-container" role="group" aria-label="Language selection">
                        <button
                            className={`language-button ${i18n.language === 'en' ? 'active' : ''}`}
                            onClick={() => changeLanguage('en')}
                            aria-pressed={i18n.language === 'en'}
                        >
                            EN
                        </button>
                        <button
                            className={`language-button ${i18n.language === 'es' ? 'active' : ''}`}
                            onClick={() => changeLanguage('es')}
                            aria-pressed={i18n.language === 'es'}
                        >
                            ES
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;