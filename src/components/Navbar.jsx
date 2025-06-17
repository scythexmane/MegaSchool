import { Link, useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LanguageSwitcher from "./LanguageSwitcher.jsx";
import DarkModeToggle from "./DarkModeToggle.jsx";
import { useTranslation } from "react-i18next";

// Hamburger Icon
const HamburgerIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6 text-[var(--text-primary)]"
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

// Close Icon
const CloseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6 text-[var(--text-primary)]"
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
  const location = useLocation();

  // Close mobile menu on route change
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
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="text-3xl font-extrabold tracking-tight text-[var(--text-primary)]"
          aria-label="MegaSchool Home"
        >
          <span className="bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] text-transparent bg-clip-text">
            Mega
          </span>
          School
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <div key={link.path} className="relative group">
              <Link
                to={link.path}
                className={`
                  relative text-[var(--text-secondary)] font-medium text-lg
                  transition-colors duration-300 ease-in-out
                  hover:bg-gradient-to-r hover:from-[var(--gradient-from)] hover:to-[var(--gradient-to)] hover:text-transparent hover:bg-clip-text
                  ${location.pathname === link.path ? "bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] text-transparent bg-clip-text" : ""}
                `}
                aria-current={location.pathname === link.path ? "page" : undefined}
              >
                {link.name}
                {/* Animated underline for active/hover link */}
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

        {/* Toggles and Mobile Menu Button */}
        <div className="flex items-center gap-4">
          <LanguageSwitcher />
          <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
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
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.3 }}
            className="md:hidden flex flex-col items-center gap-4 pb-6 pt-2 bg-[var(--card-bg)] border-t border-[var(--card-border)]"
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`
                  text-[var(--text-primary)] font-medium text-lg py-2 w-full text-center
                  hover:bg-[var(--card-border)] transition-colors duration-200 rounded-md
                  ${location.pathname === link.path ? "bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] text-transparent bg-clip-text bg-[var(--card-border)]" : ""}
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