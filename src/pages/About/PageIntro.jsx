import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import AnimatedIcon from "./AnimetedIcons"; // Убедитесь, что этот путь верен
import { Brain, Sparkles, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const FloatingStars = () => {
  const numberOfStars = 80; // Еще больше звезд для лучшего эффекта
  const stars = Array.from({ length: numberOfStars }, (_, index) => {
    const size = Math.random() * 2 + 3; // Размеры от 1.5px до 3.5px
    const speed = Math.random() * 4 + 1.5; // Еще быстрее скорость (1.5-5.5 секунд)
    const startX = Math.random() * 100; // Начальная позиция по X (0-100vw)
    const startY = Math.random() * 100; // Начальная позиция по Y (0-100vh)
    const animationDelay = Math.random() * 2; // Задержка перед началом анимации

    return (
      <motion.div
        key={index}
        className="absolute rounded-full bg-white" // Звезды белые и более видимые
        style={{
          width: `${size}px`,
          height: `${size}px`,
          top: `${startY}vh`,
          left: `${startX}vw`,
        }}
        initial={{ x: 0, y: 0, opacity: 0.7 }}
        // Движение вверх-влево и исчезновение, покрывая большую область
        animate={{ x: -250, y: -250, opacity: 0 }}
        transition={{
          duration: speed,
          repeat: Infinity,
          repeatType: "loop",
          delay: animationDelay,
          ease: "linear",
        }}
      />
    );
  });

  return <>{stars}</>;
};

const PageIntro = () => {
  const { t } = useTranslation();

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.9,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <motion.section
      // Темный, глубокий синий фон
      className="relative overflow-hidden py-24 sm:py-32 lg:py-48 flex items-center justify-center min-h-[70vh] text-center bg-gradient-to-br from-gray-950 to-gray-950 " // Затемненный синий градиент
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      variants={staggerContainer}
    >
      <FloatingStars /> {/* Добавление летающих звездочек */}
      {/* Более тонкие слои градиентов для глубины */}
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 to-gray-950 nimate-gradient-shift"></div>
        <div className="absolute inset-0 bg-radial-gradient-bottom opacity-15"></div>
      </div>
      {/* Узор из линий для тонкой текстуры (почти невидимый) */}
      <div
        className="absolute inset-0 z-0 opacity-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.01) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.01) 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      ></div>
      <div className="relative z-10 max-w-5xl px-6 sm:px-12 lg:px-20 mx-auto">
        {/* Анимированный бейдж "О нас" */}
        <motion.div variants={fadeInUp}>
          <div className="inline-flex items-center space-x-4 mb-8 bg-white/10 px-6 py-3 rounded-full backdrop-blur-sm border border-white/20 shadow-lg animate-fade-in-slow">
            <AnimatedIcon
              name="Sparkles"
              size={32}
              className="text-yellow-300 drop-shadow-lg"
              animateProps={{ scale: [1, 1.2, 1], rotate: [0, 10, -10, 0] }}
              initialProps={{ scale: 0.8 }}
              transitionProps={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <span className="text-lg font-semibold tracking-wide text-white uppercase">
              {t("header.about")}
            </span>
            <AnimatedIcon
              name="Brain"
              size={32}
              className="text-purple-300 drop-shadow-lg"
              animateProps={{ rotateY: [0, 180, 0] }}
              initialProps={{ rotateY: 0 }}
              transitionProps={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          </div>
        </motion.div>

        {/* Главный Заголовок - размер шрифта уменьшен для лучшей вместимости */}
        <motion.h1
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 leading-tight mb-8 drop-shadow-2xl animate-text-gradient-pulse"
          variants={fadeInUp}
        >
          {t("about1.pageIntro.title")}
        </motion.h1>

        {/* Подзаголовок с мягким затуханием */}
        <motion.p
          className="text-lg sm:text-xl text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed opacity-90"
          variants={fadeInUp}
        >
          {t("about1.pageIntro.subtitle")}
        </motion.p>

        {/* Кнопка Призыва к Действию */}
        <Link to="/courses">
          <motion.button
            className="relative inline-flex items-center px-10 py-5 text-xl font-bold text-white bg-gradient-to-r from-blue-600 to-purple-700 rounded-full shadow-2xl overflow-hidden transform transition-all duration-700 ease-out hover:scale-105 hover:shadow-purple-glow-lg active:scale-95 group focus:outline-none focus:ring-4 focus:ring-purple-500 focus:ring-opacity-70"
            variants={fadeInUp}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-800 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"></span>
            <span className="absolute inset-0 z-0 pointer-events-none">
              <motion.div
                className="absolute top-1/4 left-1/4 w-8 h-8 bg-white rounded-full opacity-0 blur-sm group-hover:opacity-50"
                animate={{
                  opacity: [0, 0.5, 0],
                  scale: [0.5, 1, 0.5],
                  x: [0, 20, 0],
                  y: [0, -20, 0],
                }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0.1 }}
              />
              <motion.div
                className="absolute bottom-1/4 right-1/4 w-10 h-10 bg-white rounded-full opacity-0 blur-sm group-hover:opacity-50"
                animate={{
                  opacity: [0, 0.6, 0],
                  scale: [0.6, 1.1, 0.6],
                  x: [0, -25, 0],
                  y: [0, 15, 0],
                }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
              />
            </span>
            <span className="relative z-10 flex items-center">
              {t("about1.pageIntro.cta")}
              <AnimatedIcon
                name="ArrowRight"
                size={28}
                className="ml-3 transition-transform duration-300 group-hover:translate-x-2"
                animateProps={{ x: [0, 5, 0] }}
                transitionProps={{
                  duration: 0.5,
                  repeat: Infinity,
                  repeatType: "mirror",
                }}
              />
            </span>
          </motion.button>
        </Link>
      </div>
    </motion.section>
  );
};

export default PageIntro;
