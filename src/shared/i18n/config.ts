import i18n from "i18next";
import {initReactI18next} from "react-i18next";
import rusRus from "./locales/ru/translations.json"
import enEn from "./locales/en/translations.json"


i18n.use(initReactI18next).init({
  fallbackLng: "en",
  lng: "en",
  resources: {
    en: {
      translations: enEn
    },
    ru: {
      translations: rusRus
    }
  },
  ns: ["translations"],
  defaultNS: "translations"
})

i18n.languages = ["en", "ru"]
export default i18n
