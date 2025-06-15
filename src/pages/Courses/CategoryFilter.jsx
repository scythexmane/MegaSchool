import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const categories = [
  { value: "all", label: "all" }, // <-- ИЗМЕНЕНО: было "allCategories"
  { value: "languages", label: "languages" }, // <-- ИЗМЕНЕНО: было "languagesCategory"
  { value: "it", label: "itCourses" }, // <-- ИЗМЕНЕНО: было "itCategory"
  { value: "science", label: "science" }, // <-- ИЗМЕНЕНО: было "scienceCategory"
  // Добавьте другие категории по мере необходимости
];

const CategoryFilter = ({ selectedCategory, setSelectedCategory }) => {
  const { t } = useTranslation();

  const buttonVariants = {
    rest: { scale: 1, backgroundColor: 'rgba(55, 65, 81, 0.5)' }, // bg-gray-700 with opacity
    hover: { scale: 1.05, backgroundColor: 'rgba(59, 130, 246, 0.7)' }, // blue-500 with opacity
    active: { scale: 1.05, backgroundColor: 'rgb(59, 130, 246)' } // solid blue-500
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
          className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 shadow-md
                      ${selectedCategory === cat.value ? 'bg-blue-600 text-white' : 'bg-gray-700/50 text-gray-300 hover:bg-blue-500/70'}`}
        >
          {t(cat.label)}
        </motion.button>
      ))}
    </motion.div>
  );
};

export default CategoryFilter;