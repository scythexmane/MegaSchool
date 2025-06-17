import React, { useState, useEffect } from "react";
import ReactFlagsSelect from "react-flags-select";
import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [selected, setSelected] = useState("UZ");

  useEffect(() => {
    if (i18n.language === "uz") setSelected("UZ");
    else if (i18n.language === "ru") setSelected("RU");
    else if (i18n.language === "en") setSelected("GB");
  }, [i18n.language]);

  const handleChange = (code) => {
    setSelected(code);

    const langMap = {
      UZ: "uz",
      RU: "ru",
      GB: "en",
    };

    const newLang = langMap[code];
    if (i18n.language === newLang) return;

    document.body.classList.add("fade-out");
    setTimeout(() => {
      i18n.changeLanguage(newLang);
      document.body.classList.remove("fade-out");
      document.body.classList.add("fade-in");
      setTimeout(() => {
        document.body.classList.remove("fade-in");
      }, 500);
    }, 400);
  };

  return (
    <div className="min-w-[120px] text-sm">
      <ReactFlagsSelect
        selected={selected}
        onSelect={handleChange}
        countries={["UZ", "RU", "GB"]}
        customLabels={{ UZ: "UZ", RU: "RU", GB: "EN" }}
        fullWidth={false}
        showSelectedLabel={true}
        showOptionLabel={true}
      />
    </div>
  );
};

export default LanguageSwitcher;
