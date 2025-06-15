import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { BrainCircuit, Users, Medal, Zap } from 'lucide-react';

const features = [
  { icon: BrainCircuit, key: 'feature1' },
  { icon: Users, key: 'feature2' },
  { icon: Medal, key: 'feature3' },
  { icon: Zap, key: 'feature4' },
];

const WhyChooseUs = () => {
  const { t } = useTranslation();

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const fadeInUpText = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <section className="relative py-20 sm:py-28 lg:py-36 overflow-hidden bg-gradient-to-br from-gray-950 to-gray-950"> {/* Темный фон для всей секции */}
      {/* Абстрактные светящиеся фоновые элементы */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full mix-blend-screen filter blur-3xl opacity-70 animate-blob-bounce-1" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full mix-blend-screen filter blur-3xl opacity-70 animate-blob-bounce-2 delay-500" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-teal-300 to-blue-300 leading-tight mb-4 drop-shadow-lg"
            variants={fadeInUpText}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {t('about.whyUs.title')}
          </motion.h2>
          <motion.p
            className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            variants={fadeInUpText}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.2 }}
          >
            {t('about.whyUs.subtitle')}
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
                className="group bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-lg shadow-xl relative overflow-hidden
                           hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-500 ease-in-out"
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {/* Тонкий внутренний градиент на карточке при наведении */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-700/5 to-purple-700/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10"> {/* Убедитесь, что контент поверх градиента */}
                  <div className="w-16 h-16 bg-blue-500/10 text-blue-400 rounded-full flex items-center justify-center mb-6 shadow-lg group-hover:shadow-blue-400/40 transition-shadow duration-300 transform group-hover:scale-105">
                    <Icon size={32} /> {/* Увеличенный размер иконки */}
                  </div>
                  <h3 className="font-bold text-xl text-white mb-3">
                    {t(`about.whyUs.${feature.key}.title`)}
                  </h3>
                  <p className="mt-2 text-gray-400 leading-relaxed">
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