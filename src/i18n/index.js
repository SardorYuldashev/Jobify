import i18n from 'i18next'
import { initReactI18next } from "react-i18next";
import UZ from "./locale/uz.json"
import EN from "./locale/en.json"

i18n.use(initReactI18next).init({
  resources: {
    EN,
    UZ
  },

  lng: "EN",
  fallbackLng: "EN",
  languages: ["EN", "UZ"]
})