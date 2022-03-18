import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translation from './sv';

i18n
  .use(initReactI18next)
  .init({
    fallbackLng: 'sv',
    debug: true,
    resources: {
        sv: {
          translation
        }
      },

    interpolation: {
      escapeValue: false,
    }
  });


export default i18n;
