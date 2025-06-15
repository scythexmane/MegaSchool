import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import image from "../../assets/image.png";

const Hero = () => {
  const { t } = useTranslation();

  // Варианты анимации для Framer Motion
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Задержка между появлением дочерних элементов
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 120, // Более пружинистая анимация
        damping: 15,
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 150,
        damping: 20,
      },
    },
    hover: {
      scale: 1.05, // Немного увеличиваем при наведении
      boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.2)", // Добавляем более выраженную тень
      transition: { duration: 0.2 },
    },
    tap: { scale: 0.95 }, // Эффект нажатия
  };

  return (
    <section
      className="relative overflow-hidden
                  bg-gradient-to-tb   from-purple-50/50 to-blue-50/5 dark:from-gray-950 dark:to-blue-950/20
                 min-h-[calc(100vh-80px)] md:min-h-[700px] flex items-center justify-center py-20 lg:py-0" // Увеличиваем высоту секции
    >
      {/* Фоновые градиентные круги / абстрактные формы для глубины */}
      <div className="absolute inset-0 z-0 opacity-20 dark:opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Левая часть: Текстовый контент */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-left md:pr-10" // Выравнивание влево для десктопа
        >
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-extrabold leading-tight mb-6
                       bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text
                       dark:from-blue-400 dark:to-purple-400" // Адаптация градиента для темной темы
          >
            MegaSchool <br className="hidden md:block" />{" "}
            {t("yourFutureStartsHere")}
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-10 max-w-xl"
          >
            {t("heroSubtitle")}
          </motion.p>

          <motion.div
            variants={containerVariants} // Используем контейнер для кнопок, чтобы они появлялись вместе
            initial="hidden"
            animate="visible"
            className="flex flex-col sm:flex-row gap-4" // Кнопки в ряд на больших экранах
          >
            <motion.div
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <Link
                to="/courses"
                className="group inline-flex items-center justify-center px-8 py-4
                           bg-gradient-to-r from-blue-600 to-purple-600
                           text-white font-semibold text-lg rounded-xl shadow-lg shadow-blue-600/30
                           hover:shadow-xl hover:shadow-blue-600/40
                           transition-all duration-300 ease-in-out
                           relative overflow-hidden" // Для градиентного ховера
              >
                {/* Эффект перемещения градиента при ховере */}
                <span className="relative z-10">{t("exploreCourses")}</span>
                <span className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </Link>
            </motion.div>

            <motion.div
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4
                           bg-transparent border border-gray-300 dark:border-gray-700
                           text-gray-800 dark:text-gray-200 font-semibold text-lg rounded-xl
                           hover:bg-gray-100 dark:hover:bg-gray-800
                           shadow-md shadow-gray-200/20 dark:shadow-gray-900/20
                           transition-all duration-300 ease-in-out"
              >
                {t("contactUs")}
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Правая часть: Визуальный элемент (Placeholder) */}
        <motion.div
          initial={{ opacity: 0, x: 100, scale: 0.8 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 20,
            delay: 0.5,
          }}
          whileHover={{ scale: 1.02, rotate: 1 }}
          className="relative w-full h-80 md:h-[500px] bg-blue-300/20 dark:bg-blue-900/20 rounded-3xl
             flex items-center justify-center overflow-hidden
             shadow-2xl shadow-blue-500/20 dark:shadow-blue-900/40
             transition-transform duration-500 ease-in-out"
          style={{
            backgroundImage:
              "radial-gradient(at 20% 50%, #60A5FA 0%, transparent 50%), radial-gradient(at 80% 20%, #A78BFA 0%, transparent 50%)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <motion.img
            src={image}
            alt="Здание MegaSchool"
            className="w-full h-full object-cover rounded-3xl"
            whileHover={{ scale: 1.05, rotate: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          />

          {/* Декор */}
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-purple-400 rounded-full opacity-10 blur-xl"></div>
          <div className="absolute -top-10 -left-10 w-32 h-32 bg-blue-400 rounded-full opacity-10 blur-xl"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
