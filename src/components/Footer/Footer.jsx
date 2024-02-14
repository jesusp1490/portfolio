import '../Footer/_Footer.scss';
import { useTranslation } from 'react-i18next';

const Footer = () => {
    const { t } = useTranslation();

    return (
        <footer className="footer-container">
            <div className="footer-content">
                <p>{t('footer.info')}</p>
            </div>
        </footer>
    );
};

export default Footer;
