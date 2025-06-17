import React from "react";
import { useTranslation } from "react-i18next";
import { Search } from "lucide-react";
import { motion } from "framer-motion";

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  const { t } = useTranslation();

  return (
    <motion.div
      className="relative w-full md:w-1/2 lg:w-2/5 flex items-center bg-[var(--card-bg)] rounded-full shadow-lg border border-[var(--card-border)] focus-within:border-[var(--gradient-from)] transition-colors duration-200"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <Search className="absolute left-5 text-[var(--gradient-from)]" size={20} />
      <input
        type="text"
        placeholder={t("searchCoursesPlaceholder")}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full pl-14 pr-6 py-3 bg-transparent text-[var(--text-primary)] placeholder-[var(--text-secondary)] focus:outline-none rounded-full"
      />
    </motion.div>
  );
};

export default SearchBar;