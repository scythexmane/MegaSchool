import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { ArrowRight } from "lucide-react";

const CallToAction = () => {
  const { t } = useTranslation();
  const containerRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    }
  };

  // Анимационные варианты для каскадного появления элементов
  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const fadeInUp = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100 } },
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      variants={staggerContainer}
      viewport={{ once: true, amount: 0.5 }}
      className="py-20 sm:py-24"
    >
      <motion.div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        className="relative rounded-3xl lg:rounded-4xl p-8 sm:p-12 lg:p-16 overflow-hidden bg-gray-900/50 border border-white/10"
        style={{
          // Стиль для интерактивного "прожектора"
          background: `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(45, 122, 253, 0.15), transparent 80%)`,
        }}
        variants={fadeInUp}
      >
        {/* Декоративные элементы */}
        <div className="absolute inset-0 -z-20 backdrop-blur-xl"></div>
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-purple-600/10 via-blue-500/10 to-indigo-600/20"></div>
        <div className="absolute -top-1/2 -left-1/3 w-2/3 h-2/3 -z-10 bg-purple-500/30 rounded-full blur-3xl opacity-30 animate-pulse"></div>
        <div
          className="absolute -bottom-1/2 -right-1/4 w-1/2 h-1/2 -z-10 bg-blue-400/30 rounded-full blur-3xl opacity-40 animate-pulse"
          style={{ animationDelay: "3s" }}
        ></div>

        <div className="absolute inset-0 z-0 blur-3xl opacity-30">
          <div className="absolute top-[-20%] left-[-15%] w-[400px] h-[400px] bg-blue-500 rounded-full mix-blend-screen filter animate-blob-pulse-slow" />
          <div className="absolute bottom-[-20%] right-[-15%] w-[500px] h-[500px] bg-purple-500 rounded-full mix-blend-screen filter animate-blob-pulse-slow delay-500" />
        </div>
        <div className="relative z-10 text-center">
          <motion.h2
            variants={fadeInUp}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-300"
          >
            {t("about.cta.title")}
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto"
          >
            {t("about.cta.subtitle")}
          </motion.p>

          <motion.form
            variants={fadeInUp}
            className="mt-8 max-w-sm mx-auto flex flex-col sm:flex-row gap-4 group"
          >
            <input
              type="email"
              placeholder={t("about.cta.email_placeholder")}
              className="w-full px-5 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 focus:outline-none transition-all duration-300"
            />
            <motion.button
              type="submit"
              className="flex-shrink-0 bg-white text-gray-900 font-semibold px-6 py-3 rounded-lg flex items-center justify-center space-x-2 overflow-hidden"
              whileHover="hover"
              whileTap={{ scale: 0.95 }}
              initial="rest"
            >
              <motion.span variants={{ rest: { x: 0 }, hover: { x: -8 } }}>
                {t("about.cta.button")}
              </motion.span>
              <motion.div
                variants={{
                  rest: { x: -50, opacity: 0 },
                  hover: { x: 0, opacity: 1 },
                }}
                transition={{ ease: "easeOut" }}
              >
                <ArrowRight size={20} />
              </motion.div>
            </motion.button>
          </motion.form>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default CallToAction;
