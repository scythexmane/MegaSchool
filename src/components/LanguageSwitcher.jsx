import React, { useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import ReactCountryFlag from "react-country-flag";
import { useClickAway } from "react-use";
import clsx from "clsx";

const ArrowIcon = ({ isOpen }) => (
  <motion.svg
    className="w-4 h-4 text-[var(--select-arrow-color)]"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    animate={{ rotate: isOpen ? 180 : 0 }}
    transition={{ duration: 0.2, ease: "easeInOut" }}
  >
    <path
      d="M6 9L12 15L18 9"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </motion.svg>
);

const LanguageSwitcher = ({ changeLangWithEffect }) => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  useClickAway(ref, () => setIsOpen(false));

  const languageOptions = [
    { value: "en", label: "Eng", countryCode: "GB" },
    { value: "ru", label: "Rus", countryCode: "RU" },
    { value: "uz", label: "Uzb", countryCode: "UZ" },
  ];

  const currentOption =
    languageOptions.find((option) => option.value === i18n.language) ||
    languageOptions[0];

  const handleSelect = (option) => {
    setIsOpen(false);
    if (i18n.language === option.value) return;

    if (changeLangWithEffect) {
      changeLangWithEffect(option.value); // ✅ используем с анимацией
    } else {
      i18n.changeLanguage(option.value); // fallback
    }
  };

  const menuVariants = {
    hidden: {
      opacity: 0,
      y: -5,
      transition: { duration: 0.15, ease: "easeOut" },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.15, ease: "easeOut" },
    },
  };

  return (
    <div
      ref={ref}
      className="relative w-[90px] font-sans text-sm"
      key={i18n.language} // ✅ перерендер при смене языка
    >
      <div
        onClick={() => setIsOpen(!isOpen)}
        className={clsx(
          "flex items-center justify-between h-9 px-3 cursor-pointer",
          "bg-[var(--select-menu-bg)] border border-[var(--card-border)] rounded-lg",
          "transition-colors duration-150 hover:bg-[var(--select-option-hover-bg)]"
        )}
      >
        <div className="flex items-center gap-2 text-[var(--select-text-color)] font-medium">
          <ReactCountryFlag
            countryCode={currentOption.countryCode}
            svg
            className="w-4 h-4 rounded-full"
          />
          <span>{currentOption.label}</span>
        </div>
        <ArrowIcon isOpen={isOpen} />
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.ul
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="absolute top-full mt-2 left-0 right-0 z-10 list-none m-0 p-1.5 
              bg-[var(--select-menu-bg)] border border-[var(--card-border)] 
              rounded-lg shadow-lg shadow-black/20"
          >
            {languageOptions.map((option) => (
              <li
                key={option.value}
                onClick={() => handleSelect(option)}
                className={clsx(
                  "flex items-center gap-2 p-2 rounded-md cursor-pointer font-medium",
                  i18n.language === option.value
                    ? "text-white bg-[var(--select-option-selected-bg)]"
                    : "text-[var(--select-text-color)] hover:bg-[var(--select-option-hover-bg)]"
                )}
              >
                <ReactCountryFlag
                  countryCode={option.countryCode}
                  svg
                  className="w-4 h-4 rounded-full"
                />
                <span>{option.label}</span>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LanguageSwitcher;
