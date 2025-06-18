import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import uz from "./locales/uz/translation.json";
import ru from "./locales/ru/translation.json";
import en from "./locales/en/translation.json"; // ✅ добавляем английский

i18n
  .use(initReactI18next)
  .init({
    resources: {
      uz: { translation: uz },
      ru: { translation: ru },
      en: { translation: en }, // ✅ добавляем английский в ресурсы
    },
    lng: "uz", // язык по умолчанию
    fallbackLng: "uz", // запасной язык
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
