import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { BookOpen, Code, FlaskConical, Brain, Languages, Bot, Atom } from "lucide-react";

const courseColors = {
  english: { base: "#1A6AA5", accent: "#3FA0D5", iconBg: "linear-gradient(45deg, #1A6AA5, #3FA0D5)", shadow: "rgba(26, 106, 165, 0.6)" },
  russian: { base: "#4B2A80", accent: "#7C4FC0", iconBg: "linear-gradient(45deg, #4B2A80, #7C4FC0)", shadow: "rgba(75, 42, 128, 0.6)" },
  chemistry: { base: "#BF360C", accent: "#E64A19", iconBg: "linear-gradient(45deg, #BF360C, #E64A19)", shadow: "rgba(191, 54, 12, 0.6)" },
  biology: { base: "#FF8F00", accent: "#FFB300", iconBg: "linear-gradient(45deg, #FF8F00, #FFB300)", shadow: "rgba(255, 143, 0, 0.6)" },
  robotics: { base: "#006064", accent: "#00838F", iconBg: "linear-gradient(45deg, #006064, #00838F)", shadow: "rgba(0, 96, 100, 0.6)" },
  it: { base: "#558B2F", accent: "#7CB342", iconBg: "linear-gradient(45deg, #558B2F, #7CB342)", shadow: "rgba(85, 139, 47, 0.6)" },
  physics: { base: "#283593", accent: "#3F51B5", iconBg: "linear-gradient(45deg, #283593, #3F51B5)", shadow: "rgba(40, 53, 147, 0.6)" },
  math: { base: "#C2185B", accent: "#D81B60", iconBg: "linear-gradient(45deg, #C2185B, #D81B60)", shadow: "rgba(194, 24, 91, 0.6)" },
};

const courses = [
  { id: "english", titleKey: "english", icon: <Languages size={48} />, colorKey: "english" },
  { id: "russian", titleKey: "russian", icon: <Languages size={48} />, colorKey: "russian" },
  { id: "chemistry", titleKey: "chemistry", icon: <FlaskConical size={48} />, colorKey: "chemistry" },
  { id: "biology", titleKey: "biology", icon: <Brain size={48} />, colorKey: "biology" },
  { id: "robotics", titleKey: "robotics", icon: <Bot size={48} />, colorKey: "robotics" },
  { id: "it", titleKey: "it", icon: <Code size={48} />, colorKey: "it" },
  { id: "physics", titleKey: "physics", icon: <Atom size={48} />, colorKey: "physics" },
  { id: "math", titleKey: "math", icon: <BookOpen size={48} />, colorKey: "math" },
];

const CoursesSection = () => {
  const { t } = useTranslation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.3 } },
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-20 dark:opacity-30">
        <div className="absolute top-[10%] left-[5%] w-64 h-64 sm:w-80 sm:h-80 rounded-full filter blur-3xl opacity-40 animate-blob" style={{ backgroundColor: "var(--blob-blue)" }}></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2 initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 sm:mb-6 bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] text-transparent bg-clip-text">
          {t("coursesSectionTitle")}
        </motion.h2>
        <motion.p initial={{ opacity: 0, y: -10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }} className="text-lg sm:text-xl text-[var(--text-secondary)] mb-12 sm:mb-16 max-w-3xl mx-auto leading-relaxed px-2">
          {t("coursesSectionSubtitle")}
        </motion.p>
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
          {Array.isArray(courses) && courses.map((course) => {
            const colors = courseColors[course.colorKey];
            return (
              <motion.div key={course.id} variants={itemVariants} className="rounded-3xl p-6 sm:p-8 shadow-xl transition-all duration-300 ease-in-out bg-[var(--card-bg)] border border-[var(--card-border)] flex flex-col items-center justify-center text-center" style={{ boxShadow: `0px 10px 20px ${colors.shadow}` }}>
                <div className="mb-4 p-4 rounded-full shadow-lg" style={{ background: colors.iconBg }}>
                  <span className="text-white text-4xl sm:text-5xl">{course.icon}</span>
                </div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2 sm:mb-3 text-[var(--text-primary)]">
                  {t(course.titleKey)}
                </h3>
                <p className="text-[var(--text-secondary)] text-sm sm:text-base lg:text-lg mb-4 sm:mb-6 line-clamp-3 px-2">
                  {t(`${course.titleKey}Description`)}
                </p>
                <Link to={`/courses/${course.id}`} className="inline-flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] text-white rounded-full font-semibold text-base sm:text-lg shadow-md transition-all duration-300 ease-in-out" aria-label={t("learnMoreAbout", { courseName: t(course.titleKey) })}>
                  {t("learnMore")}
                  <span>→</span>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.5 }} className="mt-16 sm:mt-20">
          <Link to="/courses" className="group inline-flex items-center justify-center px-8 py-4 sm:px-10 sm:py-5 w-full max-w-xs sm:max-w-none bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] text-white font-semibold text-lg sm:text-xl rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out relative overflow-hidden" aria-label={t("viewAllCourses")}>
            <span className="relative z-10">{t("viewAllCourses")}</span>
            <span className="absolute inset-0 bg-gradient-to-r from-[var(--gradient-to)] to-[var(--gradient-from)] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default React.memo(CoursesSection);