import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import es from "./translations/es.json";
import pt from "./translations/pt.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "es",
    supportedLngs: ["es", "pt"],
    detection: {
      order: [
        "querystring",
        "localStorage",
        "navigator",
        "htmlTag",
        "subdomain",
      ],
      caches: ["localStorage"],
    },
    resources: {
      es: { translation: es },
      pt: { translation: pt },
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
