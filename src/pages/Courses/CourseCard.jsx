// src/components/CourseCard.jsx
import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // <-- Импортируем Link
import {
  DollarSign,
  Calendar,
  TrendingUp,
  Info,
  UserRound,
  BookOpen,
  LanguagesIcon,
  FlaskConical,
  Brain,
  PenTool,
  Code,
} from "lucide-react";

const languageLogos = {
  javascript: "/images/svg/js.svg",
  python: "/images/svg/python.svg",
  html: "/images/svg/html.svg",
  cpp: "/images/svg/cpp.svg",
  java: "/images/svg/java.svg",
  placeholder: "/images/svg/code.svg",
};

const getProgrammingLogo = (course) => {
  const lang = course.language?.toLowerCase() || "placeholder";
  return languageLogos[lang] || languageLogos.placeholder;
};

const CourseCard = ({ course }) => {
  const { t } = useTranslation();

  const categoryIcons = {
    science: <FlaskConical size={48} className="text-[var(--gradient-from)]" />,
    ai: <Brain size={48} className="text-[var(--gradient-to)]" />,
    languages: <LanguagesIcon size={48} className="text-[var(--gradient-from)]" />,
    design: <PenTool size={48} className="text-[var(--gradient-to)]" />,
    it: <Code size={48} className="text-[var(--gradient-from)]" />,
    default: <BookOpen size={48} className="text-[var(--text-primary)]" />,
  };

  const IconWrapper = ({ children, color }) => (
    <div
      className="w-8 h-8 rounded-full flex items-center justify-center bg-opacity-10"
      style={{ backgroundColor: color }}
    >
      {children}
    </div>
  );

  const iconVariants = {
    initial: { scale: 1, rotate: 0 },
    hover: { scale: 1.1, rotate: [0, 5, -5, 0], transition: { duration: 0.6, ease: "easeInOut" } },
  };

  return (
    // Оборачиваем всю карточку в Link
    <Link to={`/courses/${course.id}`} className="block h-full"> {/* <-- Добавляем Link здесь */}
      <motion.div
        className="bg-[var(--card-bg)] rounded-xl overflow-hidden shadow-xl flex flex-col h-full cursor-pointer relative transition-all duration-300 ease-in-out border border-[var(--card-border)] hover:border-[var(--gradient-from)]"
        whileHover={{ scale: 1.02, boxShadow: "0 10px 20px rgba(0,0,0,0.2)" }}
        // Убрал onClick отсюда, так как Link уже управляет навигацией
      >
        <motion.div
          className="relative h-48 bg-gradient-to-tr from-[var(--bg-from)] to-[var(--bg-to)] flex items-center justify-center"
          initial="initial"
          whileHover="hover"
        >
          {course.category === "development" ? (
            <motion.img
              src={getProgrammingLogo(course)}
              alt={course.language}
              className="h-20 w-20 object-contain"
              variants={iconVariants}
            />
          ) : (
            <motion.div variants={iconVariants}>
              {categoryIcons[course.category?.toLowerCase()] || categoryIcons.default}
            </motion.div>
          )}
          <span className="absolute bottom-3 left-4 text-sm font-semibold bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] px-3 py-1 rounded-full text-white shadow-md">
            {t(course.category + "Category")}
          </span>
        </motion.div>
        <div className="p-6 flex flex-col justify-between flex-grow">
          <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-3 leading-tight">
            {t(course.title)}
          </h3>
          <p className="text-[var(--text-secondary)] text-sm mb-4 line-clamp-3">
            {t(course.description)}
          </p>
        
          {/* Кнопка "Узнать больше" теперь не обязательна, так как вся карточка кликабельна,
              но если хотите оставить, она будет просто частью ссылки */}
          <motion.button
            className="mt-auto bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-200 shadow-md focus:outline-none focus:ring-2 focus:ring-[var(--gradient-from)]"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            // Этот onClick не нужен, так как Link уже перенаправляет.
            // Если вы хотите сделать что-то еще при клике на кнопку,
            // можно добавить onClick, но он будет вызван после навигации.
          >
            <Info size={20} /> {t("learnMore")}
          </motion.button>
        </div>
      </motion.div>
    </Link> // <-- Закрываем Link здесь
  );
};

export default CourseCard;