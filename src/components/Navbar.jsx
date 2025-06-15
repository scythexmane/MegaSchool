import { Link, useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion"; // Импортируем Framer Motion
import LanguageSwitcher from "./LanguageSwitcher.jsx"; // Предполагаем, что они переработаны для нового стиля
import DarkModeToggle from "./DarkModeToggle.jsx"; // Предполагаем, что они переработаны для нового стиля
import { useTranslation } from "react-i18next";

// Иконка гамбургера (меню)
const HamburgerIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6 text-gray-800 dark:text-gray-200"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 6h16M4 12h16M4 18h16"
    />
  </svg>
);

// Иконка закрытия (крестик)
const CloseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6 text-gray-800 dark:text-gray-200"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

const Navbar = ({ darkMode, setDarkMode }) => {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation(); // Для определения активной ссылки

  // Закрываем мобильное меню при изменении маршрута
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: t("home"), path: "/" },
    { name: t("courses"), path: "/courses" },
    { name: t("aboutNav"), path: "/about" },
    { name: t("contact1"), path: "/contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className="bg-white dark:bg-gray-950 shadow-lg shadow-black/5 sticky top-0 z-50 backdrop-blur-md bg-opacity-80 dark:bg-opacity-80"
      // Добавляем backdrop-blur-md и bg-opacity для эффекта полупрозрачности
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Логотип */}
        <Link
          to="/"
          className="text-3xl font-extrabold tracking-tight text-gray-800 dark:text-white"
          aria-label="MegaSchool Home"
        >
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
            Mega
          </span>
          School
        </Link>

        {/* Десктопное меню */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <div key={link.path} className="relative group">
              <Link
                to={link.path}
                className={`
                  relative
                  text-gray-600 dark:text-gray-300
                  font-medium text-lg
                  transition-colors duration-300 ease-in-out
                  hover:text-blue-600 dark:hover:text-blue-400
                  ${location.pathname === link.path ? "text-blue-600 dark:text-blue-400" : ""}
                `}
                aria-current={location.pathname === link.path ? "page" : undefined}
              >
                {link.name}
                {/* Анимированное подчеркивание для активной/ховер ссылки */}
                {location.pathname === link.path && (
                  <motion.span
                    layoutId="underline"
                    className="absolute left-0 bottom-[-4px] h-[2px] bg-blue-600 dark:bg-blue-400 w-full"
                    // transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </Link>
            </div>
          ))}
        </div>

        {/* Переключатели и кнопка мобильного меню */}
        <div className="flex items-center gap-4">
          <LanguageSwitcher />
          <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <CloseIcon /> : <HamburgerIcon />}
          </button>
        </div>
      </div>

      {/* Мобильное меню (Framer Motion для анимации) */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.3 }}
            className="md:hidden flex flex-col items-center gap-4 pb-6 pt-2
                       bg-white dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800"
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`
                  text-gray-700 dark:text-gray-200
                  font-medium text-lg py-2 w-full text-center
                  hover:bg-gray-50 dark:hover:bg-gray-800
                  transition-colors duration-200 rounded-md
                  ${location.pathname === link.path ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-gray-800" : ""}
                `}
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;