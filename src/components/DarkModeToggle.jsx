// MagicDarkModeToggle.jsx
import React from "react";
import { Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const MagicDarkModeToggle = ({ darkMode, setDarkMode }) => {
  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    document.documentElement.classList.toggle("dark", newMode);
    localStorage.setItem("theme", newMode ? "dark" : "light");
  };

  return (
    <motion.button
      onClick={toggleDarkMode}
      aria-label={
        darkMode
          ? "Переключиться на светлую тему"
          : "Переключиться на тёмную тему"
      }
      className="relative w-10 h-10 rounded-full flex items-center justify-center
                 overflow-hidden cursor-pointer
                 shadow-lg hover:shadow-xl active:shadow-md"
      whileTap={{ scale: 0.95 }}
      // Анимация фона самой кнопки с новыми градиентами
      initial={false}
      animate={{
        background: darkMode
          ? "linear-gradient(155deg, rgba(0, 11, 36, 1) 0%, rgba(39, 45, 69, 1) 55%, rgba(33, 43, 65, 1) 100%)" // ТЕМНЫЙ градиент
          : "linear-gradient(155deg,rgba(247, 247, 247, 1) 0%, rgba(179, 193, 230, 1) 0%, rgba(230, 230, 230, 1) 100%)", // СВЕТЛЫЙ градиент
      }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      {/* Анимированная градиентная рамка/подсветка */}
   

      {/* Контейнер для иконок с центрированием */}
      <div className="relative z-10 flex items-center justify-center">
        <AnimatePresence mode="wait" initial={false}>
          {darkMode ? (
            <motion.div
              key="sun-icon"
              initial={{ opacity: 0, scale: 0.7, rotate: -90 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 0.7, rotate: 90 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <Sun size={20} className="text-yellow-400" /> {/* Цвет иконки солнца */}
            </motion.div>
          ) : (
            <motion.div
              key="moon-icon"
              initial={{ opacity: 0, scale: 0.7, rotate: 90 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 0.7, rotate: -90 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <Moon size={20} className="text-indigo-400" /> {/* Цвет иконки луны */}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.button>
  );
};

export default MagicDarkModeToggle;