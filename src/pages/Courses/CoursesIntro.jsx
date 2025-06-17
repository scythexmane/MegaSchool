import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const CoursesIntro = () => {
  const { t } = useTranslation();

  const titleVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  const descriptionVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.2, ease: "easeOut" } },
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
    <div className="text-center py-16 md:py-24 rounded-xl mb-12 shadow-lg relative overflow-hidden bg-[var(--card-bg)]">
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--gradient-from)]/30 via-[var(--gradient-to)]/30 to-[var(--gradient-from)]/30 animate-gradient-full z-0 rounded-xl"></div>
      <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-[var(--gradient-from)]/50 rounded-full mix-blend-multiply filter blur-xl animate-blob opacity-50"></div>
      <div className="absolute top-1/2 right-1/4 w-56 h-56 bg-[var(--gradient-to)]/50 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000 opacity-50"></div>
      <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-[var(--gradient-from)]/50 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000 opacity-50"></div>
      <motion.h1
        className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[var(--text-primary)] mb-6 relative z-10 bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] text-transparent bg-clip-text animate-gradient-text"
        variants={titleVariants}
        initial="hidden"
        animate="visible"
      >
        {t("coursesPageTitle")}
      </motion.h1>
      <motion.p
        className="text-lg sm:text-xl text-[var(--text-secondary)] max-w-3xl mx-auto leading-relaxed relative z-10"
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