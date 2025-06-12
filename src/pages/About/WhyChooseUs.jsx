// src/pages/About/WhyChooseUs.jsx
import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const WhyChooseUs = () => {
  const { t } = useTranslation();
  const features = t("whyChooseUs.items", { returnObjects: true });

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-white dark:bg-gray-900"
    >
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-semibold text-blue-600 dark:text-blue-400 mb-8">
          {t("whyChooseUs.title")}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
          {features.map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-3 bg-gray-100 dark:bg-gray-800 p-5 rounded-xl shadow"
            >
              <CheckCircle className="text-blue-500 mt-1" />
              <p className="text-left text-gray-700 dark:text-gray-200">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default WhyChooseUs;
