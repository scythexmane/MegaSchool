import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import AnimatedIcon from "./AnimetedIcons";
import { Sparkles, Brain, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const FloatingStars = () => {
  const numberOfStars = 80;
  const stars = Array.from({ length: numberOfStars }, (_, index) => {
    const size = Math.random() * 2 + 3;
    const speed = Math.random() * 4 + 1.5;
    const startX = Math.random() * 100;
    const startY = Math.random() * 100;
    const animationDelay = Math.random() * 2;

    return (
      <motion.div
        key={index}
        className="absolute rounded-full bg-[var(--text-primary)]"
        style={{ width: `${size}px`, height: `${size}px`, top: `${startY}vh`, left: `${startX}vw` }}
        initial={{ x: 0, y: 0, opacity: 0.7 }}
        animate={{ x: -250, y: -250, opacity: 0 }}
        transition={{ duration: speed, repeat: Infinity, repeatType: "loop", delay: animationDelay, ease: "linear" }}
      />
    );
  });

  return <>{stars}</>;
};

const PageIntro = () => {
  const { t } = useTranslation();

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.3 } },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] } },
  };

  return (
    <motion.section
      className="relative overflow-hidden py-24 sm:py-32 lg:py-48 flex items-center justify-center min-h-[70vh] text-center bg-[var(--bg-from)]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      variants={staggerContainer}
    >
      <FloatingStars />
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--gradient-from)]/10 to-[var(--gradient-to)]/10 animate-gradient-shift"></div>
      </div>
      <div className="relative z-10 max-w-5xl px-6 sm:px-12 lg:px-20 mx-auto">
        <motion.div variants={fadeInUp}>
          <div className="inline-flex items-center space-x-4 mb-8 bg-[var(--card-bg)] px-6 py-3 rounded-full backdrop-blur-sm border border-[var(--card-border)] shadow-lg animate-fade-in-slow">
            <AnimatedIcon
              name="Sparkles"
              size={32}
              className="text-[var(--gradient-from)] drop-shadow-lg"
              animateProps={{ scale: [1, 1.2, 1], rotate: [0, 10, -10, 0] }}
              initialProps={{ scale: 0.8 }}
              transitionProps={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
            <span className="text-lg font-semibold tracking-wide text-[var(--text-primary)] uppercase">
              {t("header.about")}
            </span>
            <AnimatedIcon
              name="Brain"
              size={32}
              className="text-[var(--gradient-to)] drop-shadow-lg"
              animateProps={{ rotateY: [0, 180, 0] }}
              initialProps={{ rotateY: 0 }}
              transitionProps={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />
          </div>
        </motion.div>
        <motion.h1
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] leading-tight mb-8 drop-shadow-2xl animate-text-gradient-pulse"
          variants={fadeInUp}
        >
          {t("about1.pageIntro.title")}
        </motion.h1>
        <motion.p
          className="text-lg sm:text-xl text-[var(--text-secondary)] mb-12 max-w-3xl mx-auto leading-relaxed opacity-90"
          variants={fadeInUp}
        >
          {t("about1.pageIntro.subtitle")}
        </motion.p>
        <Link to="/courses">
          <motion.button
            className="relative inline-flex items-center px-10 py-5 text-xl font-bold text-white bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] rounded-full shadow-2xl overflow-hidden transform transition-all duration-700 ease-out hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[var(--gradient-from)]"
            variants={fadeInUp}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="absolute inset-0 bg-gradient-to-r from-[var(--gradient-from)]/70 to-[var(--gradient-to)]/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"></span>
            <span className="relative z-10 flex items-center">
              {t("about1.pageIntro.cta")}
              <AnimatedIcon
                name="ArrowRight"
                size={28}
                className="ml-3 transition-transform duration-300 group-hover:translate-x-2"
                animateProps={{ x: [0, 5, 0] }}
                transitionProps={{ duration: 0.5, repeat: Infinity, repeatType: "mirror" }}
              />
            </span>
          </motion.button>
        </Link>
      </div>
    </motion.section>
  );
};

export default PageIntro;