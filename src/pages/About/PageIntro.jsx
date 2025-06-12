// src/pages/About/PageIntro.jsx
import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const PageIntro = () => {
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="text-center"
    >
      <h1 className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-4">
        {t("aboutPage.title")}
      </h1>
      <p className="text-lg max-w-2xl mx-auto text-gray-700 dark:text-gray-300">
        {t("aboutPage.subtitle")}
      </p>
    </motion.div>
  );
};

export default PageIntro;
