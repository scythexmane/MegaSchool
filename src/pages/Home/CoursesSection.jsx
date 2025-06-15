import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  BookOpen, Code, FlaskConical, Brain, Languages, Bot, CircuitBoard,
  Atom, Lightbulb, User, Palette, Globe, Megaphone, Laptop, PenTool, Music, TrendingUp, Compass
} from "lucide-react";

// Определяем палитру цветов для градиентов.
// Эти цвета будут использоваться через CSS-переменные в стилях.
// Я выбрал их, основываясь на Apple/Stripe-подобной эстетике:
// глубокие, насыщенные, но не кричащие, с мягкими переходами.
const courseColors = {
  english: { base: '#4A90E2', accent: '#6ECFF6', iconBg: 'linear-gradient(45deg, #4A90E2, #6ECFF6)', shadow: 'rgba(74, 144, 226, 0.4)' }, // Blue-Cyan
  russian: { base: '#7B41C7', accent: '#B26BF7', iconBg: 'linear-gradient(45deg, #7B41C7, #B26BF7)', shadow: 'rgba(123, 65, 199, 0.4)' }, // Deep Purple-Violet
  uzbek: { base: '#4CAF50', accent: '#81C784', iconBg: 'linear-gradient(45deg, #4CAF50, #81C784)', shadow: 'rgba(76, 175, 80, 0.4)' }, // Emerald-Light Green
  chemistry: { base: '#FF5722', accent: '#FF7043', iconBg: 'linear-gradient(45deg, #FF5722, #FF7043)', shadow: 'rgba(255, 87, 34, 0.4)' }, // Deep Orange-Coral
  biology: { base: '#FFC107', accent: '#FFD54F', iconBg: 'linear-gradient(45deg, #FFC107, #FFD54F)', shadow: 'rgba(255, 193, 7, 0.4)' }, // Amber-Gold
  robotics: { base: '#00BCD4', accent: '#4DD0E1', iconBg: 'linear-gradient(45deg, #00BCD4, #4DD0E1)', shadow: 'rgba(0, 188, 212, 0.4)' }, // Cyan-Aqua
  programming: { base: '#8BC34A', accent: '#AED581', iconBg: 'linear-gradient(45deg, #8BC34A, #AED581)', shadow: 'rgba(139, 195, 74, 0.4)' }, // Lime Green-Pastel Green
  physics: { base: '#3F51B5', accent: '#5C6BC0', iconBg: 'linear-gradient(45deg, #3F51B5, #5C6BC0)', shadow: 'rgba(63, 81, 181, 0.4)' }, // Indigo-Blue Gray
  math: { base: '#E91E63', accent: '#F06292', iconBg: 'linear-gradient(45deg, #E91E63, #F06292)', shadow: 'rgba(233, 30, 99, 0.4)' }, // Pink-Rose
  marketing: { base: '#FF9800', accent: '#FFB74D', iconBg: 'linear-gradient(45deg, #FF9800, #FFB74D)', shadow: 'rgba(255, 152, 0, 0.4)' }, // Orange-Light Orange
  design: { base: '#9C27B0', accent: '#BA68C8', iconBg: 'linear-gradient(45deg, #9C27B0, #BA68C8)', shadow: 'rgba(156, 39, 176, 0.4)' }, // Deep Purple-Light Purple
  web_development: { base: '#009688', accent: '#4DB6AC', iconBg: 'linear-gradient(45deg, #009688, #4DB6AC)', shadow: 'rgba(0, 150, 136, 0.4)' }, // Teal-Light Teal
};

// Расширяем данные курсов, добавляя уникальные ID и ссылку на цвета
const courses = [
  { id: "english", titleKey: "english", icon: <Languages size={48} />, colorKey: "english" },
  { id: "russian", titleKey: "russian", icon: <Languages size={48} />, colorKey: "russian" },
  { id: "uzbek", titleKey: "uzbek", icon: <Languages size={48} />, colorKey: "uzbek" },
  { id: "chemistry", titleKey: "chemistry", icon: <FlaskConical size={48} />, colorKey: "chemistry" },
  { id: "biology", titleKey: "biology", icon: <Brain size={48} />, colorKey: "biology" },
  { id: "robotics", titleKey: "robotics", icon: <Bot size={48} />, colorKey: "robotics" },
  { id: "programming", titleKey: "programming", icon: <Code size={48} />, colorKey: "programming" },
  { id: "physics", titleKey: "physics", icon: <Atom size={48} />, colorKey: "physics" },
  { id: "math", titleKey: "math", icon: <BookOpen size={48} />, colorKey: "math" },
  { id: "marketing", titleKey: "marketing", icon: <Megaphone size={48} />, colorKey: "marketing" },
  { id: "design", titleKey: "design", icon: <Palette size={48} />, colorKey: "design" },
  { id: "web_development", titleKey: "web_development", icon: <Laptop size={48} />, colorKey: "web_development" },
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
      y: -15, // Усиленное поднятие карточки
      scale: 1.04, // Немного увеличиваем
      boxShadow: "0px 25px 50px rgba(0, 0, 0, 0.3)", // Более выраженная и глубокая тень
      transition: { duration: 0.2 },
    },
    tap: { scale: 0.96 }, // Эффект нажатия
  };

  return (
    <>
      {/* Глобальные CSS стили для градиентов и анимаций */}
      {/* В реальном проекте это должно быть в отдельном .css файле */}
      <style>
        {`
        :root {
          /* Custom colors for gradients */
          --color-blue-base: #4A90E2;
          --color-blue-accent: #6ECFF6;
          --color-purple-base: #7B41C7;
          --color-purple-accent: #B26BF7;
          --color-emerald-base: #4CAF50;
          --color-emerald-accent: #81C784;
          --color-orange-base: #FF5722;
          --color-orange-accent: #FF7043;
          --color-amber-base: #FFC107;
          --color-amber-accent: #FFD54F;
          --color-cyan-base: #00BCD4;
          --color-cyan-accent: #4DD0E1;
          --color-lime-base: #8BC34A;
          --color-lime-accent: #AED581;
          --color-indigo-base: #3F51B5;
          --color-indigo-accent: #5C6BC0;
          --color-pink-base: #E91E63;
          --color-pink-accent: #F06292;
          --color-deep-orange-base: #FF9800;
          --color-deep-orange-accent: #FFB74D;
          --color-deep-purple-base: #9C27B0;
          --color-deep-purple-accent: #BA68C8;
          --color-teal-base: #009688;
          --color-teal-accent: #4DB6AC;
        }

        /* Keyframes для анимированных градиентов */
        @keyframes gradient-animation {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        /* Keyframes для пульсирующей тени */
        @keyframes pulse-shadow {
          0% { transform: scale(1); opacity: 0.4; }
          50% { transform: scale(1.05); opacity: 0.6; }
          100% { transform: scale(1); opacity: 0.4; }
        }

        .animated-gradient-bg {
          background-size: 200% 200%;
          animation: gradient-animation 10s ease infinite;
        }

        .pulsing-shadow {
          animation: pulse-shadow 3s ease-in-out infinite;
        }
        `}
      </style>

      <section
        className="py-24 lg:py-40 relative overflow-hidden
                   bg-gradient-to-tb   from-purple-50/50 to-blue-50/5 dark:from-gray-950 dark:to-blue-950/20"
      >
        {/* Фоновые декоративные элементы для глубины и "сияния" */}
        <div className="absolute inset-0 z-0 opacity-20 dark:opacity-10">
          <div className="absolute top-1/4 left-[5%] w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob"></div>
          <div className="absolute bottom-1/3 right-[10%] w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-2000"></div>
          <div className="absolute top-1/2 left-[20%] w-64 h-64 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          {/* Заголовок секции */}
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, type: "spring", stiffness: 100 }}
            className="text-5xl md:text-6xl font-extrabold mb-6
                       bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text
                       dark:from-blue-400 dark:to-purple-400 tracking-tight"
          >
            {t("coursesSectionTitle")}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, delay: 0.2, type: "spring", stiffness: 100 }}
            className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-16 max-w-3xl mx-auto leading-relaxed"
          >
            {t("coursesSectionSubtitle")}
          </motion.p>

          {/* Сетка курсов */}
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
                  className={`
                    relative group
                    rounded-3xl p-8 lg:p-10
                    shadow-xl
                    transition-all duration-300 ease-in-out
                    transform-gpu
                    overflow-hidden
                    backdrop-blur-sm bg-opacity-80 dark:bg-opacity-80
                    hover:shadow-2xl
                    flex flex-col items-center justify-center text-center
                    border border-transparent group-hover:border-opacity-50
                  `}
                  // Динамические стили для фона и тени карточки
                  style={{
                    background: `linear-gradient(145deg, ${colors.base}1A, ${colors.accent}1A)`, // Полупрозрачный фон
                    boxShadow: `0px 15px 30px ${colors.shadow}, 0px 0px 0px 0px ${colors.shadow}`, // Базовая тень
                    borderColor: `var(--card-border-color)`, // Будет обновляться через hover
                    '--card-border-color': `transparent`, // Default border color
                    '--card-glow-color': colors.base, // Для эффекта свечения
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.boxShadow = `0px 25px 50px ${colors.shadow}, 0px 0px 40px ${colors.shadow} inset`;
                    e.currentTarget.style.borderColor = `${colors.accent}80`; // Мягкая обводка
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.boxShadow = `0px 15px 30px ${colors.shadow}`;
                    e.currentTarget.style.borderColor = `transparent`;
                  }}
                >
                  {/* Фоновый анимированный градиент для карточки */}
                  <div
                    className="absolute inset-0 rounded-3xl animated-gradient-bg opacity-70 dark:opacity-50"
                    style={{
                      backgroundImage: `linear-gradient(145deg, ${colors.base}, ${colors.accent}, ${colors.base})`,
                    }}
                  ></div>
                  {/* Эффект свечения при ховере */}
                  <div
                    className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                    style={{
                      background: `radial-gradient(circle at center, ${colors.base}40, transparent 70%)`,
                    }}
                  ></div>

                  {/* Иконка с ярким градиентным фоном и анимацией */}
                  <motion.div
                    initial={{ rotate: 0 }}
                    whileHover={{ rotate: [0, 10, -10, 0] }} // Анимация покачивания/вращения при ховере
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className={`relative mb-6 p-5 rounded-full flex items-center justify-center
                                shadow-lg
                                group-hover:scale-110
                                transition-transform duration-300 ease-out z-10`}
                    style={{
                      background: colors.iconBg, // Градиент для иконки
                      boxShadow: `0px 8px 20px ${colors.shadow}`,
                    }}
                  >
                    <span className="text-white">
                      {course.icon}
                    </span>
                  </motion.div>

                  {/* Заголовок карточки */}
                  <h3
                    className="text-2xl lg:text-3xl font-bold mb-3
                               bg-gradient-to-r from-gray-800 to-gray-600 text-transparent bg-clip-text
                               dark:from-gray-100 dark:to-gray-300
                               group-hover:from-white group-hover:to-gray-200 group-hover:bg-clip-text transition-colors duration-300 z-10"
                    style={{
                      // Динамический градиент текста при ховере для светлой темы
                      backgroundImage: `linear-gradient(90deg, ${colors.base}, ${colors.accent})`,
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      // Чтобы не переопределяло темную тему, используем group-hover:from-white etc.
                    }}
                  >
                    {t(course.titleKey)}
                  </h3>

                  {/* Краткое описание курса */}
                  <p className="text-gray-600 dark:text-gray-400 text-base lg:text-lg mb-6 line-clamp-3 z-10">
                    {t(`${course.titleKey}Description`)}
                  </p>

                  {/* Кнопка "Узнать больше" */}
                  <Link
                    to={`/courses/${course.id}`}
                    className="inline-flex items-center gap-2 px-6 py-3
                               bg-blue-600 text-white rounded-full font-semibold text-lg
                               shadow-md shadow-blue-600/30
                               group-hover:shadow-lg
                               transition-all duration-300 ease-in-out z-10"
                    style={{
                      background: `linear-gradient(45deg, ${colors.base}, ${colors.accent})`, // Градиент кнопки
                      boxShadow: `0px 4px 15px ${colors.shadow}`,
                    }}
                    aria-label={t("learnMoreAbout", { courseName: t(course.titleKey) })}
                  >
                    {t("learnMore")}
                    <motion.span
                      className="inline-block"
                      initial={{ x: 0 }}
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      &rarr;
                    </motion.span>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Кнопка "Посмотреть все курсы" */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, delay: 0.5, type: "spring", stiffness: 100 }}
            className="mt-20"
          >
            <Link
              to="/courses"
              className="group inline-flex items-center justify-center px-12 py-5
                         bg-gradient-to-r from-blue-600 to-purple-600
                         text-white font-semibold text-xl rounded-full shadow-lg shadow-blue-600/30
                         hover:shadow-xl hover:shadow-blue-600/40
                         transition-all duration-300 ease-in-out
                         relative overflow-hidden transform-gpu"
              aria-label={t("viewAllCourses")}
            >
              <span className="relative z-10">{t("viewAllCourses")}</span>
              <span className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default CoursesSection;

/*
  ВАЖНО:
  1.  **CSS-СТИЛИ:** Блок `<style>` в реальном проекте должен быть вынесен в глобальный CSS-файл (например, `src/index.css` или `src/globals.css`).
      Это обеспечит корректное применение `@keyframes` и `:root` переменных.
  2.  **Tailwind `safelist`:** Поскольку мы используем динамические стили через `style` атрибуты, большая часть классов, связанных с цветами,
      уже не требует `safelist`. Однако, если вы решите вернуть некоторые динамические Tailwind классы, `safelist` потребуется.
  3.  **Переводы:** Убедитесь, что все необходимые переводы добавлены в соответствующие JSON-файлы для `i18n` (см. примеры выше).
  4.  **Анимация `animate-blob` и `animation-delay-*`:** Эти классы требуют `@keyframes` в глобальном CSS, как указано в предыдущем ответе.
*/