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
    hidden: { y: 30, opacity: 0, rotateX: -15 },
    visible: { y: 0, opacity: 1, rotateX: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24 relative overflow-hidden perspective-1200">
      {/* Декоративный фон */}
      <div className="absolute inset-0 z-0 opacity-25 dark:opacity-35">
        <div
          className="absolute top-[5%] left-[5%] w-80 h-80 sm:w-112 sm:h-112 rounded-full filter blur-3xl opacity-60 animate-blob"
          style={{ background: "linear-gradient(135deg, var(--blob-blue), var(--blob-pink))" }}
        ></div>
        <div
          className="absolute bottom-[10%] right-[10%] w-96 h-96 sm:w-128 sm:h-128 rounded-full filter blur-3xl opacity-60 animate-blob-alt"
          style={{ background: "linear-gradient(135deg, var(--blob-pink), var(--blob-blue))" }}
        ></div>
      </div>
      <style jsx="true">{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-50px, 60px) scale(1.4); }
        }
        @keyframes blob-alt {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(50px, -60px) scale(0.6); }
        }

        /* Мягкий и прозрачный эффект линии */
        @keyframes shine {
          0% { transform: translateX(-150%) skewX(-30deg); }
          100% { transform: transparent translateX(150%) skewX(-30deg); }
        }

        /* Стили карточек */
        .card {
          transform-style: preserve-3d;
          transition: transform 0.5s ease, box-shadow 0.5s ease, background 0.5s ease;
          position: relative;
          overflow: hidden;
          background: linear-gradient(135deg, rgba(var(--card-bg-rgb), 0.98), rgba(var(--gradient-to-rgb), 0.1));
        }
        .card:hover {
          transform: translateZ(80px) rotateY(8deg) scale(1.08);
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.4), inset 0 0 20px rgba(255, 255, 255, 0.15);
          background: linear-gradient(135deg, rgba(var(--card-bg-rgb), 0.95), rgba(var(--gradient-to-rgb), 0.4));
        }
        .card::before {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.15), transparent);
          opacity: 0;
          transition: opacity 0.5s ease;
          z-index: 1;
        }
        .card:hover::before {
          opacity: 0.7;
          animation: shine 2s ease-in-out infinite;
        }

        /* Стили иконок */
        .icon-container {
          transition: transform 0.5s ease, box-shadow 0.5s ease;
          position: relative;
          border-radius: 50%;
          overflow: hidden;
        }
        .card:hover .icon-container {
          transform: scale(1.25) rotate(15deg);
          box-shadow: 0 12px 25px rgba(0, 0, 0, 0.3);
        }
        .icon-container::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          opacity: 0;
          transition: opacity 0.5s ease;
        }
        .card:hover .icon-container::after {
          opacity: 0.6;
          animation: shine 1.8s ease-in-out infinite;
        }

        /* Стили кнопок */
        .learn-more-btn {
          position: relative;
          overflow: hidden;
          transition: transform 0.4s ease, box-shadow 0.4s ease;
        }
        .learn-more-btn:hover {
          transform: scale(1.15);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
        }
        .learn-more-btn::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.15), transparent);
          transform: translateX(-150%);
          transition: transform 0.5s ease;
        }
        .learn-more-btn:hover::after {
          transform: translateX(150%);
        }
        .learn-more-btn .arrow {
          transition: transform 0.4s ease;
        }
        .learn-more-btn:hover .arrow {
          transform: translateX(10px);
        }

        /* Стили для главной кнопки */
        .view-all-btn {
          position: relative;
          overflow: hidden;
        }
        .view-all-btn::before {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.15), transparent);
          opacity: 0;
          transition: opacity 0.5s ease;
        }
        .view-all-btn:hover::before {
          opacity: 0.7;
          animation: shine 2s ease-in-out infinite;
        }
        .view-all-btn:hover {
          transform: scale(1.08);
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.4);
        }
        .view-all-btn .arrow {
          transition: transform 0.4s ease;
        }
        .view-all-btn:hover .arrow {
          transform: translateX(10px);
        }
      `}</style>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl p-3 md:text-6xl font-extrabold mb-4 sm:mb-6 bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] text-transparent bg-clip-text drop-shadow-lg"
        >
          {t("coursesSectionTitle")}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg sm:text-xl text-[var(--text-secondary)] mb-12 sm:mb-16 max-w-3xl mx-auto leading-relaxed px-2"
        >
          {t("coursesSectionSubtitle")}
        </motion.p>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8"
        >
          {Array.isArray(courses) &&
            courses.map((course) => {
              const colors = courseColors[course.colorKey];
              return (
                <motion.div
                  key={course.id}
                  variants={itemVariants}
                  className="card rounded-3xl p-6 sm:p-8 bg-[var(--card-bg)] border border-[var(--card-border)] flex flex-col items-center justify-between text-center h-[360px] w-full max-w-[320px] mx-auto"
                  style={{ boxShadow: `0 12px 30px ${colors.shadow}`, transformStyle: "preserve-3d" }}
                >
                  <div
                    className="icon-container mb-4 p-4 rounded-full shadow-lg"
                    style={{ background: colors.iconBg }}
                  >
                    <span className="text-white text-4xl sm:text-5xl">{course.icon}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 text-[var(--text-primary)]">
                    {t(course.titleKey)}
                  </h3>
                  <p className="text-[var(--text-secondary)] text-sm sm:text-base mb-4 line-clamp-3 px-2">
                    {t(`${course.titleKey}Description`)}
                  </p>
                  <Link
                    to={`/courses/${course.id}`}
                    className="learn-more-btn inline-flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 bg-gradient-to-r text-white rounded-full font-semibold text-base sm:text-lg shadow-md"
                    style={{ background: colors.iconBg }}
                    aria-label={t("learnMoreAbout", { courseName: t(course.titleKey) })}
                  >
                    {t("learnMore")}
                    <span className="arrow">→</span>
                  </Link>
                </motion.div>
              );
            })}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 sm:mt-20"
        >
          <Link
            to="/courses"
            className="view-all-btn inline-flex items-center justify-center px-8 py-4 sm:px-10 sm:py-5 w-full max-w-xs sm:max-w-none bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] text-white font-semibold text-lg sm:text-xl rounded-full shadow-lg transition-all duration-300 ease-in-out relative group"
            aria-label={t("viewAllCourses")}
          >
            <span className="relative z-10 flex items-center gap-2">
              {t("viewAllCourses")}
              <span className="arrow">→</span>
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-[var(--gradient-to)] to-[var(--gradient-from)] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default React.memo(CoursesSection);