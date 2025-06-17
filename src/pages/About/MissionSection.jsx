import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import AnimatedIcon from "./AnimetedIcons";

const MissionSection = () => {
  const { t } = useTranslation();

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] } },
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0, rotate: -5 },
    visible: { scale: 1, opacity: 1, rotate: 0, transition: { duration: 1.1, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] } },
  };

  const textVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] } },
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={sectionVariants}
      className="relative py-24 sm:py-32 px-6 sm:px-10 lg:px-16"
    >
      <div className="relative z-10 bg-[var(--card-bg)] rounded-3xl shadow-2xl ring-1 ring-[var(--card-border)] backdrop-blur-md p-10 sm:p-14 lg:p-20 max-w-7xl mx-auto overflow-hidden border border-[var(--card-border)]">
        <div className="absolute inset-0 z-0 blur-3xl opacity-25 pointer-events-none">
          <div className="absolute top-[-20%] left-[-10%] w-[300px] h-[300px] bg-[var(--gradient-from)]/50 rounded-full mix-blend-overlay animate-blob-pulse-slow" />
          <div className="absolute bottom-[-25%] right-[-10%] w-[400px] h-[400px] bg-[var(--gradient-to)]/50 rounded-full mix-blend-overlay animate-blob-pulse-slow delay-500" />
        </div>
        <div className="relative z-10 grid md:grid-cols-2 gap-14 items-center">
          <motion.div className="md:pr-10" variants={textVariants}>
            <div className="inline-flex items-center space-x-2 text-[var(--gradient-from)] mb-6 px-4 py-2 bg-[var(--gradient-from)]/10 rounded-full border border-[var(--gradient-from)]/20 shadow-md">
              <AnimatedIcon
                name="Target"
                size={28}
                className="text-[var(--gradient-from)] drop-shadow-md"
                animateProps={{ rotate: [0, 10, -10, 0] }}
                initialProps={{ rotate: 0 }}
              />
              <span className="text-sm font-semibold tracking-widest uppercase">
                {t("about.mission.heading")}
              </span>
            </div>
            <h2 className="text-4xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] leading-tight mb-6">
              {t("about.mission.title")}
            </h2>
            <p className="mt-5 text-lg text-[var(--text-secondary)] leading-relaxed max-w-prose">
              {t("about.mission.text")}
            </p>
          </motion.div>
          <motion.div
            className="relative rounded-3xl overflow-hidden aspect-video shadow-xl ring-1 ring-[var(--card-border)] group transform transition-all duration-500 ease-out hover:shadow-[var(--gradient-from)]/40 hover:ring-[var(--gradient-from)]"
            variants={imageVariants}
            whileHover={{ scale: 1.02, rotateX: 2, rotateY: -2 }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
          >
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt={t("about.mission.altText", "Students collaborating")}
              className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-from)]/40 to-transparent opacity-80"></div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default MissionSection;