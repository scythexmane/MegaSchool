// src/pages/About/MissionSection.jsx
import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const MissionSection = () => {
  const { t } = useTranslation();

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="text-blue-600 dark:text-blue-400 rounded-2xl p-6 md:p-10 shadow-md"
    >
      <h2 className="text-3xl font-semibold text-blue-600 dark:text-blue-400 mb-4">
        {t("mission.title")}
      </h2>
      <p className="text-lg text-gray-800 dark:text-gray-200">
        {t("mission.description")}
      </p>
    </motion.section>
  );
};

export default MissionSection;
