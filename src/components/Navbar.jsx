import { Link, useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LanguageSwitcher from "./LanguageSwitcher.jsx";
import DarkModeToggle from "./DarkModeToggle.jsx";
import { useTranslation } from "react-i18next";
import logoDark from "../assets/bl-logo.png";
import logoLight from "../assets/wh-logo.png";

// Hamburger Icon
const HamburgerIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6 text-[var(--text-primary)]"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

// Close Icon
const CloseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6 text-[var(--text-primary)]"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

// Phone Icon
const PhoneIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="feather feather-phone"
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const Navbar = ({ darkMode, setDarkMode }) => {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

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
      className="sticky top-0 z-50 backdrop-blur-md bg-[var(--card-bg)] border-b border-[var(--card-border)]"
    >
      <div className="max-w-7xl mx-auto px-2 py-2 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex-shrink-0" aria-label="Your Company Home">
          <img
            src={darkMode ? logoDark : logoLight}
            alt="Логотип"
            className="h-10 md:h-14 w-auto transition-all duration-500"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <div key={link.path} className="relative group">
              <Link
                to={link.path}
                className={`
                  relative text-[var(--text-secondary)] font-medium text-lg
                  transition-colors duration-300 ease-in-out
                  hover:bg-gradient-to-r hover:from-[var(--gradient-from)] hover:to-[var(--gradient-to)] hover:text-transparent hover:bg-clip-text
                  ${
                    location.pathname === link.path
                      ? "bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] text-transparent bg-clip-text"
                      : ""
                  }
                `}
              >
                {link.name}
                {location.pathname === link.path && (
                  <motion.span
                    layoutId="underline"
                    className="absolute left-0 bottom-[-4px] h-[2px] bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] w-full"
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </Link>
            </div>
          ))}
        </div>

        {/* Controls */}
        <div className="flex items-center gap-4 lg:gap-6">
          {/* Phone Button Desktop */}
          <a
            href="tel:+998901234567"
            className="hidden lg:flex items-center px-5 py-2.5 rounded-full bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] text-white font-semibold text-base shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            aria-label="Call us"
          >
            <PhoneIcon />
            <span className="ml-2 whitespace-nowrap">+998 (90) 123-45-67</span>
          </a>

          <LanguageSwitcher />
          <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md hover:bg-[var(--card-border)] transition-colors duration-200"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <CloseIcon /> : <HamburgerIcon />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black z-40 md:hidden"
              onClick={() => setIsMenuOpen(false)}
            />

            {/* Slide-down menu */}
            <motion.div
              initial={{ y: -40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -40, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed top-14 inset-x-4 z-50 md:hidden bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl shadow-xl p-5 flex flex-col items-center gap-4"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`
                    w-full text-center py-3 px-4 rounded-lg font-medium text-base
                    transition-all duration-200
                    ${
                      location.pathname === link.path
                        ? "bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] text-white"
                        : "text-[var(--text-primary)] hover:bg-[var(--card-border)]"
                    }
                  `}
                >
                  {link.name}
                </Link>
              ))}

              <a
                href="tel:+998901234567"
                className="mt-2 w-full flex justify-center items-center gap-2 py-2.5 px-4 bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] text-white rounded-full font-semibold text-sm shadow-lg hover:scale-105 transition-transform duration-300"
              >
                <PhoneIcon />
                +998 (90) 123-45-67
              </a>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
