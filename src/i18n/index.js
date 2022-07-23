import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import TRANSLATIONS_RU_RU from "./ru-RU.json";
import TRANSLATIONS_EN_US from "./en-US.json";
import TRANSLATIONS_DE_DE from "./de-DE.json";

const resources = {
  "en-US": {
    translation: TRANSLATIONS_EN_US
  },
  "ru-RU": {
    translation: TRANSLATIONS_RU_RU
  },
  "de-DE": {
    translation: TRANSLATIONS_DE_DE
  }
};
i18n.use(initReactI18next).init({
  lng: "en-US",
  resources,
  fallbackLng: "en-US"
});

export default i18n;
