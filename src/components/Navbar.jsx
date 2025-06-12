import { Link } from "react-router-dom";
import React from "react";
import LanguageSwitcher from "./LanguageSwitcher.jsx";
import DarkModeToggle from "./DarkModeToggle.jsx";
import { useTranslation } from "react-i18next";
import { useState } from "react";

const Navbar = ({ darkMode, setDarkMode }) => {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white dark:bg-gray-950 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-blue-600 dark:text-white">
          MegaSchool
        </Link>

        <div className="hidden md:flex items-center gap-6">
          <Link to="/" className="hover:text-blue-600 dark:hover:text-blue-400">{t("home")}</Link>
          <Link to="/courses" className="hover:text-blue-600 dark:hover:text-blue-400">{t("courses")}</Link>
          <Link to="/about" className="hover:text-blue-600 dark:hover:text-blue-400">{t("about")}</Link>
          <Link to="/teachers" className="hover:text-blue-600 dark:hover:text-blue-400">{t("teachers")}</Link>
          <Link to="/contact" className="hover:text-blue-600 dark:hover:text-blue-400">{t("contact")}</Link>
        </div>

        <div className="flex items-center gap-3">
          <LanguageSwitcher />
          <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-xl"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden flex flex-col items-center gap-3 pb-4">
          <Link to="/" onClick={() => setIsMenuOpen(false)}>{t("home")}</Link>
          <Link to="/courses" onClick={() => setIsMenuOpen(false)}>{t("courses")}</Link>
          <Link to="/about" onClick={() => setIsMenuOpen(false)}>{t("about")}</Link>
          <Link to="/teachers" onClick={() => setIsMenuOpen(false)}>{t("teachers")}</Link>
          <Link to="/contact" onClick={() => setIsMenuOpen(false)}>{t("contact")}</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
