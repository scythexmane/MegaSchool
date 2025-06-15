import React from "react";
import Marquee from "react-fast-marquee";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import {
  Code, FlaskConical, Brain, Languages, Bot, Atom, Lightbulb, BookOpen,
  Cloud, Sun, Star, Zap, Infinity, Search, TrendingUp, Compass, Rocket,
  Laptop, Server, GitBranch, Database, Shield, Monitor, Palette, Megaphone, User, Dna, Microscope
} from "lucide-react";

// Обновленные элементы с ключами для перевода, уникальными ID и соответствующими иконками
// Добавляем яркость иконок через их цвет.
const marqueeItemsPrimary = [
  { id: "py", key: "python", icon: <Code size={60} />, iconColor: "text-blue-500" },
  { id: "scr", key: "scratch", icon: <Bot size={60} />, iconColor: "text-green-500" },
  { id: "front", key: "frontend", icon: <Monitor size={60} />, iconColor: "text-pink-500" },
  { id: "back", key: "backend", icon: <Server size={60} />, iconColor: "text-indigo-500" },
  { id: "cpp", key: "cpp", icon: <GitBranch size={60} />, iconColor: "text-purple-500" },
  { id: "robo", key: "robotics", icon: <Bot size={60} />, iconColor: "text-red-500" },
  { id: "bio", key: "biology", icon: <Brain size={60} />, iconColor: "text-yellow-500" },
  { id: "chem", key: "chemistry", icon: <FlaskConical size={60} />, iconColor: "text-orange-500" },
  { id: "eng_l", key: "english_lang", icon: <Languages size={60} />, iconColor: "text-teal-500" },
  { id: "rus_l", key: "russian_lang", icon: <Languages size={60} />, iconColor: "text-fuchsia-500" },
  { id: "uzb_l", key: "uzbek_lang", icon: <Languages size={60} />, iconColor: "text-lime-500" },
  { id: "data_science", key: "data_science", icon: <Database size={60} />, iconColor: "text-cyan-500" },
  { id: "cyber_security", key: "cyber_security", icon: <Shield size={60} />, iconColor: "text-emerald-500" },
  { id: "design", key: "design", icon: <Palette size={60} />, iconColor: "text-violet-500" },
  { id: "marketing", key: "marketing", icon: <Megaphone size={60} />, iconColor: "text-rose-500" },
];

// Дополнительные абстрактные элементы для фоновой Marquee
const marqueeItemsSecondary = [
  { id: "know", key: "knowledge", icon: <BookOpen size={40} />, iconColor: "text-gray-400" },
  { id: "innov", key: "innovation", icon: <Lightbulb size={40} />, iconColor: "text-yellow-300" },
  { id: "future", key: "future", icon: <Rocket size={40} />, iconColor: "text-indigo-300" },
  { id: "develop", key: "development", icon: <TrendingUp size={40} />, iconColor: "text-green-300" },
  { id: "discover", key: "discovery", icon: <Search size={40} />, iconColor: "text-purple-300" },
  { id: "explore", key: "exploration", icon: <Compass size={40} />, iconColor: "text-blue-300" },
  { id: "infinity", key: "infinity_concept", icon: <Infinity size={40} />, iconColor: "text-teal-300" },
];

const MarqueeSection = () => {
  const { t } = useTranslation();

  return (
    <>
      {/* Глобальные CSS стили для Marquee. В РЕАЛЬНОМ ПРОЕКТЕ ВЫНЕСИТЕ В ОТДЕЛЬНЫЙ .CSS ФАЙЛ */}
      <style>
        {`
        /* Анимация пульсирующей тени (для глубины) */
        @keyframes item-shadow-pulse {
          0% { box-shadow: 0 4px 15px rgba(0,0,0,0.1), 0 0 0px rgba(74,144,226,0); }
          50% { box-shadow: 0 8px 25px rgba(0,0,0,0.2), 0 0 20px rgba(74,144,226,0.6); } /* Свечение */
          100% { box-shadow: 0 4px 15px rgba(0,0,0,0.1), 0 0 0px rgba(74,144,226,0); }
        }

        /* Анимация для иконок (более выраженная пульсация) */
        @keyframes icon-bounce-pulse {
          0%, 100% { transform: scale(1); opacity: 0.9; }
          50% { transform: scale(1.15); opacity: 1; }
        }

        .marquee-item-shadow-pulse {
          animation: item-shadow-pulse 4s ease-in-out infinite alternate;
        }

        .marquee-icon-bounce-pulse {
            animation: icon-bounce-pulse 2s ease-in-out infinite;
        }

        /* Фоновые градиенты для секции, если хотите более динамичный фон */
        @keyframes section-bg-gradient {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
        }
        .animated-section-bg {
            background-size: 200% 200%;
            animation: section-bg-gradient 20s ease infinite;
        }

        /* Кастомные градиентные обводки при ховере - требует дополнительных классов или JS */
        /* .group:hover .custom-border-gradient {
            border-image: linear-gradient(to right, #4A90E2, #7B41C7) 1;
            border-width: 2px;
            border-style: solid;
        } */

        /* Анимация обводки */
        @keyframes border-pulse {
            0%, 100% { border-color: rgba(0,0,0,0); }
            50% { border-color: rgba(74,144,226,0.5); }
        }
        .animated-border-pulse:hover {
            animation: border-pulse 1s ease-in-out infinite;
        }

        `}
      </style>

      <section
        className="py-12 md:py-20 lg:py-24 relative overflow-hidden
                   animated-section-bg
                   bg-gradient-to-tb   from-purple-50/50 to-blue-50/5 dark:from-gray-950 dark:to-gray-900"
        // Секция теперь с анимированным фоном для ещё большей динамики
      >
        {/* Фоновые градиентные края для плавного появления/исчезновения текста */}
        <div className="absolute inset-y-0 left-0 w-24 md:w-32 lg:w-40 bg-gradient-to-r from-gray-100 dark:from-gray-950 to-transparent z-20"></div>
        <div className="absolute inset-y-0 right-0 w-24 md:w-32 lg:w-40 bg-gradient-to-l from-gray-100 dark:from-gray-950 to-transparent z-20"></div>

        {/* Заголовок секции (если нужен, подчеркивает цель Marquee) */}
         <motion.h2
           initial={{ opacity: 0, y: -20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, amount: 0.5 }}
           transition={{ duration: 0.6 }}
           className="text-center text-4xl md:text-5xl font-extrabold mb-12
                      bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text
                      dark:from-blue-400 dark:to-purple-400"
         >
           {t("marqueeSectionTitle")} {/* Например: "Наши Ключевые Направления" */}
         </motion.h2>


        {/* Основная строка Marquee (самая заметная) */}
        <Marquee pauseOnHover gradient={false} speed={50} className="relative z-10 py-4">
          {marqueeItemsPrimary.map((item) => (
            <motion.div
              key={item.id}
              className={`inline-flex items-center justify-center gap-4
                          mx-8 md:mx-12 lg:mx-16
                          px-6 py-3 md:px-8 md:py-4 lg:px-10 lg:py-5
                          rounded-full
                          shadow-xl backdrop-blur-md
                          bg-white/15 dark:bg-gray-800/25
                          border border-gray-300/30 dark:border-gray-700/30
                          transition-all duration-300 ease-in-out
                          transform hover:scale-105 hover:shadow-2xl
                          marquee-item-shadow-pulse animated-border-pulse`} /* Применяем анимации */
            >
              {/* Иконка с ярким цветом и пульсацией */}
              <span className={`text-5xl md:text-6xl lg:text-7xl ${item.iconColor} marquee-icon-bounce-pulse`}>
                {item.icon}
              </span>
              {/* Текст - меньше и контрастнее */}
              <span className="text-xl md:text-2xl lg:text-3xl font-semibold whitespace-nowrap
                               text-gray-800 dark:text-gray-200">
                {t(item.key)}
              </span>
            </motion.div>
          ))}
        </Marquee>

        {/* Вторая строка Marquee (меньше, движется в другую сторону, для глубины) */}
        <Marquee pauseOnHover gradient={false} speed={30} direction="right" className="relative z-0 py-2 mt-6">
          {marqueeItemsPrimary.map((item) => (
            <motion.div
              key={`${item.id}-alt`}
              className={`inline-flex items-center justify-center gap-3
                          mx-6 md:mx-10 lg:mx-14
                          px-5 py-2 md:px-7 md:py-3
                          rounded-full
                          shadow-md backdrop-blur-sm
                          bg-white/10 dark:bg-gray-800/20
                          border border-gray-300/20 dark:border-gray-700/20
                          transition-all duration-300 ease-in-out
                          transform hover:scale-105`}
            >
              <span className={`text-4xl md:text-5xl lg:text-6xl ${item.iconColor}`}>
                {item.icon}
              </span>
              <span className="text-lg md:text-xl lg:text-2xl font-medium whitespace-nowrap
                               text-gray-700 dark:text-gray-300">
                {t(item.key)}
              </span>
            </motion.div>
          ))}
        </Marquee>

        {/* Третья строка Marquee (самая быстрая, абстрактные термины, для эффекта "шума данных") */}
        <Marquee pauseOnHover gradient={false} speed={70} className="relative z-0 py-1 mt-6">
          {marqueeItemsSecondary.map((item) => (
            <motion.div
              key={`${item.id}-abstract`}
              className={`inline-flex items-center justify-center gap-2
                          mx-4 md:mx-8 lg:mx-12
                          px-4 py-1 md:px-6 md:py-2
                          rounded-full
                          backdrop-blur-xs
                          bg-white/5 dark:bg-gray-800/10
                          border border-gray-300/10 dark:border-gray-700/10
                          transition-all duration-300 ease-in-out
                          transform hover:scale-105`}
            >
              <span className={`text-3xl md:text-4xl opacity-80 ${item.iconColor}`}>{item.icon}</span>
              <span className="text-base md:text-lg lg:text-xl font-normal whitespace-nowrap
                               text-gray-600 dark:text-gray-400">
                {t(item.key)}
              </span>
            </motion.div>
          ))}
        </Marquee>
      </section>
    </>
  );
};

export default MarqueeSection;