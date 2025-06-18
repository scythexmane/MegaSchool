import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import image from "../../assets/image.png";

const Hero = () => {
  const { t } = useTranslation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
        stiffness: 120,
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
      scale: 1.05,
      boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.2)",
      transition: { duration: 0.2 },
    },
    tap: { scale: 0.95 },
  };

  return (
    <section
      className="relative overflow-hidden animated-bg
                 min-h-[calc(100vh-80px)] flex items-center justify-center py-16 sm:py-20 md:py-24 lg:py-0"
    >
      {/* Background blobs - Adjusted positioning for better mobile visibility */}
      <div className="absolute inset-0 z-0 opacity-20 dark:opacity-30">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 sm:w-96 sm:h-96 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"
             style={{ backgroundColor: 'var(--blob-blue)' }}></div>
        <div className="absolute top-1/2 right-1/4 w-64 h-64 sm:w-80 sm:h-80 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"
             style={{ backgroundColor: 'var(--blob-purple)' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-56 h-56 sm:w-72 sm:h-72 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"
             style={{ backgroundColor: 'var(--blob-pink)' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 md:gap-12 items-center">
        {/* Text content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center md:text-left md:pr-10 order-2 md:order-1" /* Adjusted order for mobile first, text below image */
        >
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-4 sm:mb-6
                        bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] text-transparent bg-clip-text"
          >
            MegaSchool <br className="sm:hidden" /> {t("yourFutureStartsHere")} {/* Line break for smaller screens */}
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl md:text-2xl text-[var(--text-secondary)] mb-8 sm:mb-10 max-w-xl mx-auto md:mx-0" /* Centered on mobile */
          >
            {t("heroSubtitle")}
          </motion.p>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start" /* Centered buttons on mobile */
          >
            <motion.div
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <Link
                to="/courses"
                className="group inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 w-full
                           bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)]
                           text-white font-semibold text-base sm:text-lg rounded-xl shadow-lg
                           hover:shadow-xl transition-all duration-300 ease-in-out
                           relative overflow-hidden"
              >
                <span className="relative z-10">{t("exploreCourses")}</span>
                <span className="absolute inset-0 bg-gradient-to-r from-[var(--gradient-to)] to-[var(--gradient-from)] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </Link>
            </motion.div>

            <motion.div
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 w-full
                           bg-[var(--card-bg)] border border-[var(--card-border)]
                           text-[var(--text-primary)] font-semibold text-base sm:text-lg rounded-xl
                           hover:bg-gray-100 dark:hover:bg-gray-700
                           shadow-md transition-all duration-300 ease-in-out"
              >
                {t("contactUs")}
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Visual element */}
        <motion.div
          initial={{ opacity: 0, x: 100, scale: 0.8 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.5 }}
          whileHover={{ scale: 1.02, rotate: 1 }}
          className="relative w-full h-64 sm:h-80 md:h-[500px] bg-[var(--card-bg)] rounded-3xl
                     flex items-center justify-center overflow-hidden
                     shadow-2xl transition-transform duration-500 ease-in-out order-1 md:order-2" /* Adjusted order for mobile first, image on top */
          style={{
            backgroundImage:
              "radial-gradient(at 20% 50%, var(--blob-blue) 0%, transparent 50%), radial-gradient(at 80% 20%, var(--blob-purple) 0%, transparent 50%)",
          }}
        >
          <motion.img
            src={image}
            alt="MegaSchool Building"
            className="w-full h-full object-cover rounded-3xl"
            whileHover={{ scale: 1.05, rotate: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          />
          <div className="absolute -bottom-5 -right-5 w-24 h-24 sm:w-40 sm:h-40 rounded-full opacity-10 blur-xl"
               style={{ backgroundColor: 'var(--blob-purple)' }}></div>
          <div className="absolute -top-5 -left-5 w-20 h-20 sm:w-32 sm:h-32 rounded-full opacity-10 blur-xl"
               style={{ backgroundColor: 'var(--blob-blue)' }}></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;