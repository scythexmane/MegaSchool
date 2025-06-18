import { Link, useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LanguageSwitcher from "./LanguageSwitcher.jsx";
import DarkModeToggle from "./DarkModeToggle.jsx";
import { useTranslation } from "react-i18next";
import logoDark from "../assets/bl-logo.png";
import logoLight from "../assets/wh-logo.png";

// Иконки
const HamburgerIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[var(--text-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[var(--text-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.63A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
  </svg>
);

const Navbar = ({ darkMode, setDarkMode }) => {
  const { t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    // Закрываем меню при смене маршрута
    setMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: t('home'), path: '/' },
    { name: t('courses'), path: '/courses' },
    { name: t('aboutNav'), path: '/about' },
    { name: t('contact1'), path: '/contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      className="sticky top-0 z-50 backdrop-blur bg-[var(--card-bg)] border-b border-[var(--card-border)]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        {/* Логотип - размер не меняется */}
        <Link to="/" aria-label="Главная">
          <img src={darkMode ? logoDark : logoLight} alt="Логотип" className="h-10 transition-all duration-500" />
        </Link>

        {/* Десктоп-навигация */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map(link => {
            const active = pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`relative font-medium transition-colors duration-300 text-[var(--text-secondary)]
                  ${active
                    ? 'text-transparent bg-clip-text bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)]'
                    : 'hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[var(--gradient-from)] hover:to-[var(--gradient-to)]'}`
                }
              >
                {link.name}
                {active && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute left-0 bottom-0 h-0.5 w-full bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)]"
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </div>

        {/* Контролы */}
        <div className="flex items-center space-x-3 sm:space-x-4 lg:space-x-6">
          <a
            href="tel:+998901234567"
            className="hidden xl:flex items-center space-x-2 px-4 py-2 rounded-full bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] text-white font-semibold shadow-lg hover:shadow-xl transform transition"
          >
            <PhoneIcon />
            <span>+998 (90) 123‑45‑67</span>
          </a>

          {/* LanguageSwitcher для десктопа */}
          {/* Скрываем на экранах меньше md, так как там он будет в мобильном меню */}
          <div className="hidden md:block">
            <LanguageSwitcher />
          </div>
          
          <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />

          <button
            onClick={() => setMenuOpen(prev => !prev)}
            className="md:hidden p-2 rounded hover:bg-[var(--card-border)] transition"
            aria-label={menuOpen ? 'Закрыть меню' : 'Открыть меню'}
          >
            {menuOpen ? <CloseIcon /> : <HamburgerIcon />}
          </button>
        </div>
      </div>

      {/* Мобильное меню */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Оверлей для закрытия меню по клику вне его */}
            <motion.div
              className="fixed inset-0 bg-black/50 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
            />

            <motion.div
              className="fixed top-16 inset-x-4 z-50 bg-[var(--card-bg)] border border-[var(--card-border)] rounded-2xl shadow-xl p-6 flex flex-col items-center space-y-4"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              {navLinks.map(link => {
                const active = pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setMenuOpen(false)}
                    className={`w-full text-center py-3 rounded-lg font-medium transition-colors duration-200
                      ${active
                        ? 'bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] text-white'
                        : 'text-[var(--text-primary)] hover:bg-[var(--card-border)]'}`
                    }
                  >
                    {link.name}
                  </Link>
                );
              })}

              {/* LanguageSwitcher внутри мобильного меню */}
              <div className="w-full text-center py-3">
                <LanguageSwitcher />
              </div>

              <a
                href="tel:+998901234567"
                className="w-full inline-flex justify-center items-center space-x-2 py-2.5 px-4 font-semibold text-white rounded-full bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] shadow hover:scale-105 transform transition"
              >
                <PhoneIcon />
                <span>+998 (90) 123‑45‑67</span>
              </a>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;