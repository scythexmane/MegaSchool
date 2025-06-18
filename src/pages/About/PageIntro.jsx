import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import AnimatedIcon from "./AnimetedIcons";
import { Sparkles, Brain, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const FloatingStars = () => {
  // Reduce number of stars on smaller screens for performance and aesthetics
  const numberOfStars = window.innerWidth < 768 ? 40 : 80;
  const stars = Array.from({ length: numberOfStars }, (_, index) => {
    // Smaller stars on smaller screens
    const size = window.innerWidth < 768 ? Math.random() * 1.5 + 2 : Math.random() * 2 + 3;
    const speed = Math.random() * 3 + 1; // Slightly slower speed for less distraction
    const startX = Math.random() * 100;
    const startY = Math.random() * 100;
    const animationDelay = Math.random() * 2;

    return (
      <motion.div
        key={index}
        className="absolute rounded-full bg-[var(--text-primary)]"
        style={{ width: `${size}px`, height: `${size}px`, top: `${startY}vh`, left: `${startX}vw` }}
        // Adjusted animation range for better mobile effect
        initial={{ x: 0, y: 0, opacity: 0.7 }}
        animate={{ x: -150, y: -150, opacity: 0 }} // Reduced travel distance
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
      className="relative overflow-hidden py-20 sm:py-24 lg:py-32 flex items-center justify-center min-h-[60vh] sm:min-h-[70vh] text-center bg-[var(--bg-from)]" // Adjusted padding and min-height
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      variants={staggerContainer}
    >
      <FloatingStars />
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--gradient-from)]/1 to-[var(--gradient-to)]/1 animate-gradient-shift"></div>
      </div>
      <div className="relative z-10 max-w-5xl px-4 sm:px-8 lg:px-12 mx-auto"> {/* Adjusted horizontal padding */}
        <motion.div variants={fadeInUp}>
          <div className="inline-flex items-center space-x-2 sm:space-x-4 mb-6 sm:mb-8 bg-[var(--card-bg)] px-4 py-2 sm:px-6 sm:py-3 rounded-full backdrop-blur-sm border border-[var(--card-border)] shadow-lg animate-fade-in-slow"> {/* Adjusted spacing and padding */}
            <AnimatedIcon
              name="Sparkles"
              size={24} // Smaller icon size for mobile
              className="text-[var(--gradient-from)] drop-shadow-lg sm:text-32" // Adjusted base size, then sm: size
              animateProps={{ scale: [1, 1.2, 1], rotate: [0, 10, -10, 0] }}
              initialProps={{ scale: 0.8 }}
              transitionProps={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
            <span className="text-base sm:text-lg font-semibold tracking-wide text-[var(--text-primary)] uppercase whitespace-nowrap"> {/* Adjusted font size and ensured no wrapping */}
              {t("header.about")}
            </span>
            <AnimatedIcon
              name="Brain"
              size={24} // Smaller icon size for mobile
              className="text-[var(--gradient-to)] drop-shadow-lg sm:text-32" // Adjusted base size, then sm: size
              animateProps={{ rotateY: [0, 180, 0] }}
              initialProps={{ rotateY: 0 }}
              transitionProps={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />
          </div>
        </motion.div>
        <motion.h1
          className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] leading-tight mb-6 sm:mb-8 drop-shadow-2xl animate-text-gradient-pulse" // Adjusted font sizes and margin-bottom
          variants={fadeInUp}
        >
          {t("about1.pageIntro.title")}
        </motion.h1>
        <motion.p
          className="text-base sm:text-lg text-[var(--text-secondary)] mb-8 sm:mb-10 max-w-3xl mx-auto leading-relaxed opacity-90 px-4" // Adjusted font sizes, margin-bottom and padding
          variants={fadeInUp}
        >
          {t("about1.pageIntro.subtitle")}
        </motion.p>
        <Link to="/courses">
          <motion.button
            className="relative inline-flex items-center px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-xl font-bold text-white bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] rounded-full shadow-2xl overflow-hidden transform transition-all duration-700 ease-out hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[var(--gradient-from)]" // Adjusted padding and font size
            variants={fadeInUp}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="absolute inset-0 bg-gradient-to-r from-[var(--gradient-from)]/70 to-[var(--gradient-to)]/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"></span>
            <span className="relative z-10 flex items-center">
              {t("about1.pageIntro.cta")}
              <AnimatedIcon
                name="ArrowRight"
                size={20} // Smaller icon size for mobile
                className="ml-2 sm:ml-3 transition-transform duration-300 group-hover:translate-x-2 sm:text-28" // Adjusted margin-left and base size, then sm: size
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