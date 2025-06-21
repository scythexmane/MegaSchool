import React from "react";
import Marquee from "react-fast-marquee";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import {
  Code, FlaskConical, Brain, Languages, Bot, BookOpen, Database, Shield,
  Palette, Megaphone, Rocket, Zap, Globe, UsersRound, Wifi, Fingerprint,
  Cloud, Cpu, Layers, Lightbulb, TrendingUp // Новые иконки для разнообразия
} from "lucide-react";

// --- Определение элементов для строк Marquee ---
// Добавлен baseSize для каждого элемента для контроля размера иконок и текста
// в зависимости от строки Marquee.
const marqueeItemsPrimary = [
  { id: "code", key: "coding", icon: <Code />, iconColor: "text-blue-500", baseSize: "text-5xl sm:text-6xl md:text-7xl", textBaseSize: "text-lg sm:text-xl md:text-2xl" },
  { id: "science", key: "science", icon: <FlaskConical />, iconColor: "text-green-500", baseSize: "text-5xl sm:text-6xl md:text-7xl", textBaseSize: "text-lg sm:text-xl md:text-2xl" },
  { id: "ai", key: "artificialIntelligence", icon: <Brain />, iconColor: "text-purple-500", baseSize: "text-5xl sm:text-6xl md:text-7xl", textBaseSize: "text-lg sm:text-xl md:text-2xl" },
  { id: "languages", key: "languages", icon: <Languages />, iconColor: "text-yellow-500", baseSize: "text-5xl sm:text-6xl md:text-7xl", textBaseSize: "text-lg sm:text-xl md:text-2xl" },
  { id: "robotics", key: "robotics", icon: <Bot />, iconColor: "text-red-500", baseSize: "text-5xl sm:text-6xl md:text-7xl", textBaseSize: "text-lg sm:text-xl md:text-2xl" },
  { id: "education", key: "education", icon: <BookOpen />, iconColor: "text-indigo-500", baseSize: "text-5xl sm:text-6xl md:text-7xl", textBaseSize: "text-lg sm:text-xl md:text-2xl" },
  { id: "data", key: "dataScience", icon: <Database />, iconColor: "text-teal-500", baseSize: "text-5xl sm:text-6xl md:text-7xl", textBaseSize: "text-lg sm:text-xl md:text-2xl" },
  { id: "security", key: "cyberSecurity", icon: <Shield />, iconColor: "text-gray-500", baseSize: "text-5xl sm:text-6xl md:text-7xl", textBaseSize: "text-lg sm:text-xl md:text-2xl" },
  { id: "design", key: "design", icon: <Palette />, iconColor: "text-pink-500", baseSize: "text-5xl sm:text-6xl md:text-7xl", textBaseSize: "text-lg sm:text-xl md:text-2xl" },
  { id: "marketing", key: "marketing", icon: <Megaphone />, iconColor: "text-orange-500", baseSize: "text-5xl sm:text-6xl md:text-7xl", textBaseSize: "text-lg sm:text-xl md:text-2xl" },
];

const marqueeItemsSecondary = [
  { id: "innovation", key: "innovation", icon: <Rocket />, iconColor: "text-sky-500", baseSize: "text-3xl sm:text-4xl md:text-5xl", textBaseSize: "text-sm sm:text-base md:text-lg" },
  { id: "energy", key: "energy", icon: <Zap />, iconColor: "text-amber-500", baseSize: "text-3xl sm:text-4xl md:text-5xl", textBaseSize: "text-sm sm:text-base md:text-lg" },
  { id: "global", key: "global", icon: <Globe />, iconColor: "text-emerald-500", baseSize: "text-3xl sm:text-4xl md:text-5xl", textBaseSize: "text-sm sm:text-base md:text-lg" },
  { id: "community", key: "community", icon: <UsersRound />, iconColor: "text-rose-500", baseSize: "text-3xl sm:text-4xl md:text-5xl", textBaseSize: "text-sm sm:text-base md:text-lg" },
  { id: "cloud", key: "cloudComputing", icon: <Cloud />, iconColor: "text-blue-400", baseSize: "text-3xl sm:text-4xl md:text-5xl", textBaseSize: "text-sm sm:text-base md:text-lg" },
  { id: "cpu", key: "processing", icon: <Cpu />, iconColor: "text-gray-400", baseSize: "text-3xl sm:text-4xl md:text-5xl", textBaseSize: "text-sm sm:text-base md:text-lg" },
  { id: "layers", key: "architecture", icon: <Layers />, iconColor: "text-cyan-400", baseSize: "text-3xl sm:text-4xl md:text-5xl", textBaseSize: "text-sm sm:text-base md:text-lg" },
  { id: "lightbulb", key: "creativity", icon: <Lightbulb />, iconColor: "text-yellow-400", baseSize: "text-3xl sm:text-4xl md:text-5xl", textBaseSize: "text-sm sm:text-base md:text-lg" },
];

const MarqueeSection = () => {
  const { t } = useTranslation();

  return (
    <section className="relative overflow-hidden py-16 sm:py-20 md:py-24 perspective-1000">
      {/* Фон с градиентом и анимированные "жидкие" формы (Blobs) для глубины */}
      <div
        className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,var(--bg-to)_0%,var(--bg-from)_70%)]"
      >
        {/* Анимированные Blob'ы с уникальным движением и размерами */}
        <div
          className="absolute top-0 left-[5%] h-[300px] w-[300px] animate-[blob-wiggle_10s_infinite_alternate] rounded-full mix-blend-soft-light filter blur-[120px] opacity-45"
          style={{ backgroundColor: "var(--blob-blue)" }}
        ></div>
        <div
          className="absolute bottom-10 right-[15%] h-[400px] w-[400px] animate-[blob-drift_15s_linear_infinite_reverse] rounded-full mix-blend-soft-light filter blur-[150px] opacity-40"
          style={{ backgroundColor: "var(--blob-pink)" }}
        ></div>
        <div
          className="absolute top-1/3 left-1/3 h-[250px] w-[250px] animate-[blob-spin_12s_linear_infinite] rounded-full mix-blend-soft-light filter blur-[100px] opacity-35"
          style={{ backgroundColor: "var(--blob-purple)" }}
        ></div>
      </div>

      {/* Пользовательские определения keyframe для необычных движений Blob'ов.
          Поместите это в ваш глобальный CSS-файл (например, globals.css),
          если вы не используете styled-jsx.
      */}
      <style jsx="true">{`
        @keyframes blob-wiggle {
          0%, 100% { transform: translate(0, 0) rotate(0deg) scale(1); }
          50% { transform: translate(20px, -20px) rotate(15deg) scale(1.05); }
        }
        @keyframes blob-drift {
          0% { transform: translate(-50px, -30px) rotate(-5deg); opacity: 0.3; }
          50% { transform: translate(80px, 50px) rotate(10deg); opacity: 0.5; }
          100% { transform: translate(-50px, -30px) rotate(-5deg); opacity: 0.3; }
        }
        @keyframes blob-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>

      {/* Заголовок секции */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
        className="text-center p-4 px-6 text-4xl sm:text-5xl md:text-6xl font-extrabold mb-10 sm:mb-12
                   bg-clip-text text-transparent drop-shadow-lg relative z-10"
        style={{
          backgroundImage: `linear-gradient(45deg, var(--gradient-from) 30%, var(--gradient-to) 70%)`,
          textShadow: `2px 2px 4px rgba(0, 0, 0, 0.3)`
        }}
      >
        {t("marqueeSectionTitle")}
      </motion.h2>

      {/* Первая строка Marquee (Самые крупные, Ближе всего) */}
      <Marquee
        pauseOnHover
        gradient={false}
        speed={50}
        className="relative z-20 py-4 sm:py-5 mt-8 [transform:translateZ(0)]"
      >
        {Array.isArray(marqueeItemsPrimary) &&
          marqueeItemsPrimary.map((item) => (
            <motion.div
              key={item.id}
              className={`
                group inline-flex items-center justify-center gap-4 sm:gap-5 mx-5 sm:mx-7
                px-6 py-3 sm:px-7 sm:py-3.5 rounded-full
                shadow-xl backdrop-blur-md transition-all duration-500 ease-out
                transform-gpu
                hover:scale-110 md:hover:rotate-y-5 md:hover:rotate-x-3 md:hover:skew-x-6
                relative overflow-hidden cursor-grab active:cursor-grabbing
                border-2 border-opacity-0 hover:border-opacity-50 hover:border-[var(--gradient-from)]
              `}
              style={{
                backgroundColor: `rgba(var(--card-bg-rgb), 0.8)`,
                border: `1px solid rgba(var(--card-border-rgb), 0.6)`,
                boxShadow: `5px 5px 20px rgba(0,0,0,0.2), 2px 2px 30px rgba(0,0,0,0.1) inset`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = `
                  10px 10px 30px rgba(0,0,0,0.4),
                  4px 4px 40px rgba(0,0,0,0.2) inset,
                  0 0 30px ${item.iconColor.replace('text-', '')}60
                `;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = `5px 5px 20px rgba(0,0,0,0.2), 2px 2px 30px rgba(0,0,0,0.1) inset`;
              }}
            >
              <span
                className={`${item.baseSize} ${item.iconColor}
                           transition-transform duration-300 group-hover:scale-120 group-hover:drop-shadow-[0_0_18px_currentColor]`}
              >
                {item.icon}
              </span>
              <span
                className={`${item.textBaseSize} font-bold whitespace-nowrap
                           transition-colors duration-300 group-hover:text-[var(--text-primary)]`}
                style={{ color: `var(--text-primary)`, textShadow: `1px 1px 2px rgba(0,0,0,0.15)` }}
              >
                {t(item.key)}
              </span>
              {/* Необычный блеск/отражение внутри карточки */}
              <div className="absolute inset-0 rounded-full overflow-hidden hidden md:block"> {/* Скрыто на мобильных */}
                <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 rounded-full bg-white opacity-10 blur-xl"></div>
              </div>
            </motion.div>
          ))}
      </Marquee>

      {/* Вторая строка Marquee (Средние, Ближе) */}
      <Marquee
        pauseOnHover
        gradient={false}
        speed={40}
        direction="right"
        className="relative z-10 py-3 sm:py-4 mt-6 [transform:translateZ(-20px)]"
      >
        {Array.isArray(marqueeItemsSecondary) &&
          marqueeItemsSecondary.map((item) => (
            <motion.div
              key={item.id}
              className={`
                group inline-flex items-center justify-center gap-3 sm:gap-4 mx-4 sm:mx-6
                px-5 py-2.5 sm:px-6 sm:py-3 rounded-full
                shadow-lg backdrop-blur-sm transition-all duration-500 ease-out
                transform-gpu
                hover:scale-108 md:hover:rotate-y-4 md:hover:rotate-x-2 md:hover:skew-x-3
                relative overflow-hidden cursor-grab active:cursor-grabbing
                border-2 border-opacity-0 hover:border-opacity-50 hover:border-[var(--gradient-to)]
              `}
              style={{
                backgroundColor: `rgba(var(--card-bg-rgb), 0.7)`,
                border: `1px solid rgba(var(--card-border-rgb), 0.5)`,
                boxShadow: `3px 3px 15px rgba(0,0,0,0.15), 1px 1px 20px rgba(0,0,0,0.05) inset`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = `
                  6px 6px 20px rgba(0,0,0,0.3),
                  2px 2px 30px rgba(0,0,0,0.1) inset,
                  0 0 25px ${item.iconColor.replace('text-', '')}50
                `;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = `3px 3px 15px rgba(0,0,0,0.15), 1px 1px 20px rgba(0,0,0,0.05) inset`;
              }}
            >
              <span
                className={`${item.baseSize} ${item.iconColor}
                           transition-transform duration-300 group-hover:scale-115 group-hover:drop-shadow-[0_0_15px_currentColor]`}
              >
                {item.icon}
              </span>
              <span
                className={`${item.textBaseSize} font-semibold whitespace-nowrap
                           transition-colors duration-300 group-hover:text-[var(--text-primary)]`}
                style={{ color: `var(--text-secondary)`, textShadow: `1px 1px 2px rgba(0,0,0,0.1)` }}
              >
                {t(item.key)}
              </span>
              {/* Необычный блеск/отражение внутри карточки */}
              <div className="absolute inset-0 rounded-full overflow-hidden hidden md:block"> {/* Скрыто на мобильных */}
                <div className="absolute top-0 right-0 w-1/3 h-1/3 rounded-full bg-white opacity-8 blur-md"></div>
              </div>
            </motion.div>
          ))}
      </Marquee>

      {/* Третья строка Marquee (Меньшие, Дальше всего) - СКРЫТА НА МОБИЛЬНЫХ! */}
     
    </section>
  );
};

export default React.memo(MarqueeSection);