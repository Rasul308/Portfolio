import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector/cjs";
import translationUz from "../../public/locales/uz/translation.json";
import translationRu from "../../public/locales/ru/translation.json";
import translationEn from "../../public/locales/en/translation.json";

const resources = {
  uz: {
    translation: translationUz
  },
  ru: {
    translation: translationRu
  },
  en: {
    translation: translationEn
  }
};

i18n.use(I18nextBrowserLanguageDetector).use(initReactI18next).init({
    resources,
    fallbackLng: "en",
    debug: true,
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;