import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import sv from './locales/sv/sv';
import en from './locales/en/en';

// we init with resources
const resources = {
  sv, en,
};
i18n
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    resources,
    fallbackLng: 'sv',
    lng: 'sv',
    otherLanguages: ['en'],
    // have a common namespace used around the full app
    ns: ['translations', 'names'],
    defaultNS: 'translations',
    keySeparator: false, // we use content as keys
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  }, (err) => {
    if (err) return console.log('something went wrong loading', err);
    return ('error');
  });
export default i18n;
