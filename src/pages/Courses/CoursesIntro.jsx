import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Hero = () => {
  const { t } = useTranslation();

  // Добавляем интерактивный эффект на фоне
  useEffect(() => {
    const handleMouseMove = (e) => {
      document.documentElement.style.setProperty("--mouse-x", `${e.clientX}px`);
      document.documentElement.style.setProperty("--mouse-y", `${e.clientY}px`);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 120, damping: 15 },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 150, damping: 20 },
    },
    hover: {
      scale: 1.05,
      boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.2)",
      transition: { duration: 0.2 },
    },
    tap: { scale: 0.95 },
  };

  return (
    <section
      className="relative overflow-hidden min-h-[calc(100vh-80px)] md:min-h-[700px] flex items-center justify-center py-20 lg:py-0"
    >
      {/* Абстрактные анимированные background blobs */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="blob w-[400px] h-[400px] bg-purple-600 top-[20%] left-[10%]" />
        <div className="blob w-[300px] h-[300px] bg-blue-500 top-[60%] left-[70%] animation-delay-2000" />
        <div className="blob w-[350px] h-[350px] bg-pink-500 top-[80%] left-[20%] animation-delay-4000" />
      </div>

      {/* Контент */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Текстовая часть */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-left md:pr-10"
        >
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-extrabold leading-tight mb-6
              bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text
              dark:from-blue-300 dark:to-purple-400 drop-shadow-[0_2px_12px_rgba(124,58,237,0.5)]"
          >
            MegaSchool <br className="hidden md:block" />
            {t("yourFutureStartsHere")}
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-gray-300 dark:text-gray-400 mb-10 max-w-xl"
          >
            {t("heroSubtitle")}
          </motion.p>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col sm:flex-row gap-4"
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
                transition-all duration-300 ease-in-out relative overflow-hidden"
              >
                <span className="relative z-10">{t("exploreCourses")}</span>
                <span className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
                text-white font-semibold text-lg rounded-xl
                hover:bg-gray-100/10 dark:hover:bg-gray-800
                shadow-md shadow-gray-200/20 dark:shadow-gray-900/20
                transition-all duration-300 ease-in-out"
              >
                {t("contactUs")}
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Визуальный блок */}
        <motion.div
          initial={{ opacity: 0, x: 100, scale: 0.8 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.5 }}
          whileHover={{ scale: 1.02, rotate: 1 }}
          className="relative w-full h-80 md:h-[500px] bg-blue-300/20 dark:bg-blue-900/20 rounded-3xl
          flex items-center justify-center overflow-hidden
          shadow-2xl shadow-blue-500/20 dark:shadow-blue-900/40 transition-transform duration-500 ease-in-out"
          style={{
            backgroundImage:
              "radial-gradient(at 20% 50%, #60A5FA 0%, transparent 50%), radial-gradient(at 80% 20%, #A78BFA 0%, transparent 50%)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <motion.img
            src="/assets/image.png"
            alt="MegaSchool Building"
            className="w-full h-full object-cover rounded-3xl"
            whileHover={{ scale: 1.05, rotate: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
