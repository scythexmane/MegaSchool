import React from "react";
import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex gap-2 items-center">
      <button
        onClick={() => changeLanguage("uz")}
        className={`text-sm ${i18n.language === "uz" ? "font-bold text-blue-600 dark:text-blue-400" : ""}`}
      >
        UZ
      </button>
      <span>/</span>
      <button
        onClick={() => changeLanguage("ru")}
        className={`text-sm ${i18n.language === "ru" ? "font-bold text-blue-600 dark:text-blue-400" : ""}`}
      >
        RU
      </button>
    </div>
  );
};

export default LanguageSwitcher;
