import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import image from "../../assets/image.png";

const Hero = () => {
  const { t } = useTranslation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  const buttonVariants = {
    hover: { scale: 1.05, transition: { duration: 0.2 } },
    tap: { scale: 0.95 },
  };

  return (
    <section className="relative overflow-hidden min-h-[calc(100vh-80px)] flex items-center justify-center py-16 sm:py-20 md:py-24 lg:py-0">
      <div className="absolute inset-0 z-0 opacity-20 dark:opacity-30">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 sm:w-96 sm:h-96 rounded-full filter blur-3xl opacity-30 animate-blob" style={{ backgroundColor: 'var(--blob-blue)' }}></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 md:gap-12 items-center">
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="text-center md:text-left md:pr-10 order-2 md:order-1">
          <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-4 sm:mb-6 bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] text-transparent bg-clip-text">
            MegaSchool <br className="sm:hidden" /> {t("yourFutureStartsHere")}
          </motion.h1>
          <motion.p variants={itemVariants} className="text-lg sm:text-xl md:text-2xl text-[var(--text-secondary)] mb-8 sm:mb-10 max-w-xl mx-auto md:mx-0">
            {t("heroSubtitle")}
          </motion.p>
          <motion.div variants={containerVariants} initial="hidden" animate="visible" className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
              <Link to="/courses" className="group inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 w-full bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] text-white font-semibold text-base sm:text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out relative overflow-hidden">
                <span className="relative z-10">{t("exploreCourses")}</span>
                <span className="absolute inset-0 bg-gradient-to-r from-[var(--gradient-to)] to-[var(--gradient-from)] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </Link>
            </motion.div>
            <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
              <Link to="/contact" className="inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 w-full bg-[var(--card-bg)] border border-[var(--card-border)] text-[var(--text-primary)] font-semibold text-base sm:text-lg rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 shadow-md transition-all duration-300 ease-in-out">
                {t("contactUs")}
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} className="relative w-full h-64 sm:h-80 md:h-[500px] bg-[var(--card-bg)] rounded-3xl flex items-center justify-center overflow-hidden shadow-2xl order-1 md:order-2" style={{ backgroundImage: "radial-gradient(at 20% 50%, var(--blob-blue) 0%, transparent 50%), radial-gradient(at 80% 20%, var(--blob-purple) 0%, transparent 50%)" }}>
          <motion.img src={image} alt="MegaSchool Building" className="w-full h-full object-cover rounded-3xl" />
        </motion.div>
      </div>
    </section>
  );
};

export default React.memo(Hero);