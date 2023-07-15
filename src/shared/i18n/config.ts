import i18n from "i18next";
import {initReactI18next} from "react-i18next";
import {ru as rusRus} from "./locales/ru/translations"
import {en as enEn} from "./locales/en/translations"
import {be as beBe} from "./locales/be/translations";
import {pl as plPl} from "./locales/pl/translations";


i18n.use(initReactI18next).init({
  fallbackLng: "en",
  lng: "en",
  resources: {
    en: {
      translations: enEn
    },
    ru: {
      translations: rusRus
    },
    be: {
      translations: beBe
    },
    pl: {
      translations: plPl
    }
  },
  ns: ["translations"],
  defaultNS: "translations"
})

i18n.languages = ["en", "ru", "be", "pl"]
export default i18n
