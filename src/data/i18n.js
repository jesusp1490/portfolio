import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    // Carga la traducción usando http -> /locales/<language>/<namespace>.json
    .use(HttpBackend)
    // Detecta el idioma del usuario
    .use(LanguageDetector)
    // Pasa el i18n hacia abajo a react-i18next
    .use(initReactI18next)
    .init({
        fallbackLng: 'en',
        debug: true,
        detection: {
            order: ['queryString', 'cookie', 'localStorage', 'sessionStorage', 'navigator', 'htmlTag', 'path', 'subdomain'],
            caches: ['localStorage', 'cookie'],
        },
        interpolation: {
            escapeValue: false,
        },
        backend: {
            loadPath: '/locales/{{lng}}/{{ns}}.json' // Ruta relativa para cargar los archivos de traducción
        }
    });

export default i18n;
