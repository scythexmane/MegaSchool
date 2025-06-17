import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  BookOpen,
  Code,
  FlaskConical,
  Brain,
  Languages,
  Bot,
  Atom,
  Palette,
  Megaphone,
  Laptop,
} from "lucide-react";

const courseColors = {
  english: {
    base: "#1A6AA5",
    accent: "#3FA0D5",
    iconBg: "linear-gradient(45deg, #1A6AA5, #3FA0D5)",
    shadow: "rgba(26, 106, 165, 0.6)",
  },
  russian: {
    base: "#4B2A80",
    accent: "#7C4FC0",
    iconBg: "linear-gradient(45deg, #4B2A80, #7C4FC0)",
    shadow: "rgba(75, 42, 128, 0.6)",
  },
  chemistry: {
    base: "#BF360C",
    accent: "#E64A19",
    iconBg: "linear-gradient(45deg, #BF360C, #E64A19)",
    shadow: "rgba(191, 54, 12, 0.6)",
  },
  biology: {
    base: "#FF8F00",
    accent: "#FFB300",
    iconBg: "linear-gradient(45deg, #FF8F00, #FFB300)",
    shadow: "rgba(255, 143, 0, 0.6)",
  },
  robotics: {
    base: "#006064",
    accent: "#00838F",
    iconBg: "linear-gradient(45deg, #006064, #00838F)",
    shadow: "rgba(0, 96, 100, 0.6)",
  },
  it: {
    base: "#558B2F",
    accent: "#7CB342",
    iconBg: "linear-gradient(45deg, #558B2F, #7CB342)",
    shadow: "rgba(85, 139, 47, 0.6)",
  },
  physics: {
    base: "#283593",
    accent: "#3F51B5",
    iconBg: "linear-gradient(45deg, #283593, #3F51B5)",
    shadow: "rgba(40, 53, 147, 0.6)",
  },
  math: {
    base: "#C2185B",
    accent: "#D81B60",
    iconBg: "linear-gradient(45deg, #C2185B, #D81B60)",
    shadow: "rgba(194, 24, 91, 0.6)",
  },
  marketing: {
    base: "#E65100",
    accent: "#FB8C00",
    iconBg: "linear-gradient(45deg, #E65100, #FB8C00)",
    shadow: "rgba(230, 81, 0, 0.6)",
  },
  computerLiteracy: {
    base: "#004D40",
    accent: "#00695C",
    iconBg: "linear-gradient(45deg, #004D40, #00695C)",
    shadow: "rgba(0, 77, 64, 0.6)",
  },
};

const courses = [
  {
    id: "english",
    titleKey: "english",
    icon: <Languages size={48} />,
    colorKey: "english",
  },
  {
    id: "russian",
    titleKey: "russian",
    icon: <Languages size={48} />,
    colorKey: "russian",
  },
  {
    id: "chemistry",
    titleKey: "chemistry",
    icon: <FlaskConical size={48} />,
    colorKey: "chemistry",
  },
  {
    id: "biology",
    titleKey: "biology",
    icon: <Brain size={48} />,
    colorKey: "biology",
  },
  {
    id: "robotics",
    titleKey: "robotics",
    icon: <Bot size={48} />,
    colorKey: "robotics",
  },
  { id: "it", titleKey: "it", icon: <Code size={48} />, colorKey: "it" },
  {
    id: "physics",
    titleKey: "physics",
    icon: <Atom size={48} />,
    colorKey: "physics",
  },
  {
    id: "math",
    titleKey: "math",
    icon: <BookOpen size={48} />,
    colorKey: "math",
  },
  {
    id: "marketing",
    titleKey: "marketing",
    icon: <Megaphone size={48} />,
    colorKey: "marketing",
  },
  {
    id: "computerLiteracy",
    titleKey: " computerLiteracy",
    icon: <Laptop size={48} />,
    colorKey: "computerLiteracy",
  },
];

const CoursesSection = () => {
  const { t } = useTranslation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 60, opacity: 0, scale: 0.95 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 18,
      },
    },
    hover: {
      y: -15,
      scale: 1.04,
      boxShadow: "0px 25px 50px rgba(0, 0, 0, 0.3)",
      transition: { duration: 0.2 },
    },
    tap: { scale: 0.96 },
  };

  return (
    <section className="py-24 lg:py-40 relative overflow-hidden animated-bg">
      {/* Background blobs */}
      <div className="absolute inset-0 z-0 opacity-20 dark:opacity-30">
        <div
          className="absolute top-1/4 left-[5%] w-80 h-80 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob"
          style={{ backgroundColor: "var(--blob-blue)" }}
        ></div>
        <div
          className="absolute bottom-1/3 right-[10%] w-72 h-72 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-2000"
          style={{ backgroundColor: "var(--blob-purple)" }}
        ></div>
        <div
          className="absolute top-1/2 left-[20%] w-64 h-64 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-4000"
          style={{ backgroundColor: "var(--blob-pink)" }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, type: "spring", stiffness: 100 }}
          className="text-5xl md:text-6xl font-extrabold mb-6
                     bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] text-transparent bg-clip-text"
        >
          {t("coursesSectionTitle")}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{
            duration: 0.7,
            delay: 0.2,
            type: "spring",
            stiffness: 100,
          }}
          className="text-xl md:text-2xl text-[var(--text-secondary)] mb-16 max-w-3xl mx-auto leading-relaxed"
        >
          {t("coursesSectionSubtitle")}
        </motion.p>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-10"
        >
          {courses.map((course) => {
            const colors = courseColors[course.colorKey];
            return (
              <motion.div
                key={course.id}
                variants={itemVariants}
                whileHover="hover"
                whileTap="tap"
                className="relative group rounded-3xl p-8 lg:p-10 shadow-xl
                           transition-all duration-300 ease-in-out transform-gpu
                           overflow-hidden backdrop-blur-sm bg-[var(--card-bg)]
                           hover:shadow-2xl flex flex-col items-center justify-center text-center
                           border border-[var(--card-border)]"
                style={{
                  boxShadow: `0px 15px 30px ${colors.shadow}`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = `0px 25px 50px ${colors.shadow}, 0px 0px 40px ${colors.shadow} inset`;
                  e.currentTarget.style.borderColor = `${colors.accent}80`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = `0px 15px 30px ${colors.shadow}`;
                  e.currentTarget.style.borderColor = "var(--card-border)";
                }}
              >
                <div
                  className="absolute inset-0 rounded-3xl opacity-70"
                  style={{
                    backgroundImage: `linear-gradient(145deg, ${colors.base}, ${colors.accent}, ${colors.base})`,
                  }}
                ></div>
                <div
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `radial-gradient(circle at center, ${colors.base}40, transparent 70%)`,
                  }}
                ></div>

                <motion.div
                  initial={{ rotate: 0 }}
                  whileHover={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="relative mb-6 p-5 rounded-full flex items-center justify-center
                             shadow-lg group-hover:scale-110 transition-transform duration-300 ease-out z-10"
                  style={{
                    background: colors.iconBg,
                    boxShadow: `0px 8px 20px ${colors.shadow}`,
                  }}
                >
                  <span className="text-white">{course.icon}</span>
                </motion.div>

                <h3
                  className="text-2xl lg:text-3xl font-bold mb-3 text-[var(--text-primary)]
                             group-hover:bg-gradient-to-r group-hover:from-[var(--gradient-from)] group-hover:to-[var(--gradient-to)]
                             group-hover:text-transparent group-hover:bg-clip-text z-10"
                >
                  {t(course.titleKey)}
                </h3>

                <p className="text-[var(--text-secondary)] text-base lg:text-lg mb-6 line-clamp-3 z-10">
                  {t(`${course.titleKey}Description`)}
                </p>

                <Link
                  to={`/courses/${course.id}`}
                  className="inline-flex items-center gap-2 px-6 py-3
                             bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)]
                             text-white rounded-full font-semibold text-lg
                             shadow-md group-hover:shadow-lg transition-all duration-300 ease-in-out z-10"
                  style={{
                    boxShadow: `0px 4px 15px ${colors.shadow}`,
                  }}
                  aria-label={t("learnMoreAbout", {
                    courseName: t(course.titleKey),
                  })}
                >
                  {t("learnMore")}
                  <motion.span
                    className="inline-block"
                    initial={{ x: 0 }}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    →
                  </motion.span>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{
            duration: 0.7,
            delay: 0.5,
            type: "spring",
            stiffness: 100,
          }}
          className="mt-20"
        >
          <Link
            to="/courses"
            className="group inline-flex items-center justify-center px-12 py-5
                       bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)]
                       text-white font-semibold text-xl rounded-full shadow-lg
                       hover:shadow-xl transition-all duration-300 ease-in-out
                       relative overflow-hidden transform-gpu"
            aria-label={t("viewAllCourses")}
          >
            <span className="relative z-10">{t("viewAllCourses")}</span>
            <span className="absolute inset-0 bg-gradient-to-r from-[var(--gradient-to)] to-[var(--gradient-from)] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CoursesSection;
