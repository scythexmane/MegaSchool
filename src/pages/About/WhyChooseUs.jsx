import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Brain, Users, Medal, Zap } from "lucide-react";

const features = [
  { icon: Brain, key: "feature1" },
  { icon: Users, key: "feature2" },
  { icon: Medal, key: "feature3" },
  { icon: Zap, key: "feature4" },
];

const WhyChooseUs = () => {
  const { t } = useTranslation();

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { delayChildren: 0.2, staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0, scale: 0.9 },
    visible: { y: 0, opacity: 1, scale: 1, transition: { type: "spring", stiffness: 100, damping: 10 } },
  };

  const fadeInUpText = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] } },
  };

  return (
    <section className="relative py-20 sm:py-28 lg:py-36 overflow-hidden bg-[var(--bg-from)]">
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-[var(--gradient-from)]/10 rounded-full mix-blend-screen filter blur-3xl opacity-70 animate-blob-bounce-1" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[var(--gradient-to)]/10 rounded-full mix-blend-screen filter blur-3xl opacity-70 animate-blob-bounce-2 delay-500" />
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] leading-tight mb-4 drop-shadow-lg"
            variants={fadeInUpText}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {t("about.whyUs.title")}
          </motion.h2>
          <motion.p
            className="mt-6 text-xl text-[var(--text-secondary)] max-w-3xl mx-auto leading-relaxed"
            variants={fadeInUpText}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.2 }}
          >
            {t("about.whyUs.subtitle")}
          </motion.p>
        </div>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                className="group bg-[var(--card-bg)] p-8 rounded-2xl border border-[var(--card-border)] backdrop-blur-lg shadow-xl relative overflow-hidden hover:border-[var(--gradient-from)]/50 hover:shadow-2xl transition-all duration-500 ease-in-out"
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--gradient-from)]/5 to-[var(--gradient-to)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-[var(--gradient-from)]/10 text-[var(--gradient-from)] rounded-full flex items-center justify-center mb-6 shadow-lg group-hover:shadow-[var(--gradient-from)]/40 transition-shadow duration-300 transform group-hover:scale-105">
                    <Icon size={32} />
                  </div>
                  <h3 className="font-bold text-xl text-[var(--text-primary)] mb-3">
                    {t(`about.whyUs.${feature.key}.title`)}
                  </h3>
                  <p className="mt-2 text-[var(--text-secondary)] leading-relaxed">
                    {t(`about.whyUs.${feature.key}.description`)}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;