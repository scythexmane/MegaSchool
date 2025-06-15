import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import GoogleMapSection from "./GoogleMapSection";
import ContactFormSection from "./ContactFormSection";
import RealtimeContactSection from "./RealtimeContactSection";

const ContactPage = () => {
  const { t } = useTranslation();

  const pageVariants = {
    hidden: { opacity: 0, scale: 0.98 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-slate-900 text-white p-4 sm:p-6 md:p-8 relative overflow-hidden"
      variants={pageVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Мягкие фоновые свечения (стиль Apple/футуризм) */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl opacity-30 animate-blob-slow mix-blend-screen z-0"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500/10 rounded-full filter blur-3xl opacity-30 animate-blob-reverse mix-blend-screen z-0"></div>
      <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-emerald-500/10 rounded-full filter blur-3xl opacity-20 animate-blob-slow mix-blend-screen z-0"></div>


      <div className="max-w-7xl mx-auto py-12 lg:py-20 relative z-10">
        <motion.h1
          className="text-5xl lg:text-6xl font-extrabold text-center mb-6
                     bg-gradient-to-r from-blue-300 via-white to-purple-300 text-transparent bg-clip-text
                     drop-shadow-glow"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {t("contact.title")}
        </motion.h1>
        <motion.p
          className="text-xl text-gray-300 text-center mb-16 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {t("contact.subtitle")}
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-16">
          <GoogleMapSection />
          <ContactFormSection />
        </div>

        <RealtimeContactSection />
      </div>
    </motion.div>
  );
};

export default ContactPage;