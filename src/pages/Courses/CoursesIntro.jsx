import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const CoursesIntro = () => {
  const { t } = useTranslation();

  const titleVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const descriptionVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: 0.2, ease: "easeOut" },
    },
  };

  React.useEffect(() => {
    const handleMouseMove = (e) => {
      document.documentElement.style.setProperty("--mouse-x", `${e.clientX}px`);
      document.documentElement.style.setProperty("--mouse-y", `${e.clientY}px`);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="text-center py-16 md:py-24 rounded-xl mb-12 shadow-lg relative overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800">
      {/* Абсолютный градиентный фон */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 via-purple-500/30 to-pink-500/30 animate-gradient-full z-0 rounded-xl"></div>

      {/* Декоративные анимированные блобы */}
      <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-blob opacity-50"></div>
      <div className="absolute top-1/2 right-1/4 w-56 h-56 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000 opacity-50"></div>
      <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000 opacity-50"></div>

      {/* Анимированный градиентный текст заголовка */}
      <motion.h1
        className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 relative z-10
                           bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text animate-gradient-text"
        variants={titleVariants}
        initial="hidden"
        animate="visible"
      >
        {t("coursesPageTitle")}
      </motion.h1>
      <motion.p
        className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed relative z-10"
        variants={descriptionVariants}
        initial="hidden"
        animate="visible"
      >
        {t("coursesPageDescription")}
      </motion.p>
    </div>
  );
};

export default CoursesIntro;