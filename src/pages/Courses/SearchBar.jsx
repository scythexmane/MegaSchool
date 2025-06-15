import React from 'react';
import { useTranslation } from 'react-i18next';
import { Search } from 'lucide-react';
import { motion } from 'framer-motion';

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  const { t } = useTranslation();

  return (
    <motion.div
      className="relative w-full md:w-1/2 lg:w-2/5 flex items-center bg-gray-800 rounded-full shadow-lg border border-gray-700 focus-within:border-blue-500 transition-colors duration-200"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <Search className="absolute left-5 text-gray-400" size={20} />
      <input
        type="text"
        placeholder={t("searchCoursesPlaceholder")}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full pl-14 pr-6 py-3 bg-transparent text-gray-200 placeholder-gray-400
                   focus:outline-none rounded-full" // focus:ring-2 focus:ring-blue-500 удален, так как border уже анимирован
      />
    </motion.div>
  );
};

export default SearchBar;