import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const categories = [
  { value: "all", label: "all" },
  { value: "languages", label: "languages" },
  { value: "it", label: "itCourses" },
  { value: "science", label: "science" },
];

const CategoryFilter = ({ selectedCategory, setSelectedCategory }) => {
  const { t } = useTranslation();

  const buttonVariants = {
    rest: { scale: 1, backgroundColor: "var(--card-bg)" },
    hover: { scale: 1.05, backgroundColor: "rgba(59,130,246,0.7)" },
    active: { scale: 1.05, backgroundColor: "var(--gradient-from)" },
  };

  return (
    <motion.div
      className="flex flex-wrap justify-center md:justify-end gap-3"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      {categories.map((cat) => (
        <motion.button
          key={cat.value}
          onClick={() => setSelectedCategory(cat.value)}
          variants={buttonVariants}
          initial="rest"
          animate={selectedCategory === cat.value ? "active" : "rest"}
          whileHover="hover"
          className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 shadow-md ${
            selectedCategory === cat.value
              ? "bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] text-white"
              : "bg-[var(--card-bg)] text-[var(--text-secondary)] hover:bg-[var(--gradient-from)]/70"
          }`}
        >
          {t(cat.label)}
        </motion.button>
      ))}
    </motion.div>
  );
};

export default CategoryFilter;