// src/components/Breadcrumb.jsx
import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const Breadcrumb = ({ items }) => {
  const { t } = useTranslation();

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <nav
      className="flex items-center text-sm text-[var(--text-secondary)] mb-8"
      aria-label="Breadcrumb"
    >
      <ol className="inline-flex items-center space-x-2">
        {items.map((item, index) => (
          <motion.li
            key={index}
            className="flex items-center"
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: index * 0.1 }}
          >
            {index > 0 && (
              <ChevronRight size={16} className="mx-2 text-[var(--text-secondary)]" />
            )}
            {item.path ? (
              <Link
                to={item.path}
                className="hover:text-[var(--gradient-from)] transition-colors duration-200"
              >
                {t(item.label)}
              </Link>
            ) : (
              <span className="text-[var(--text-primary)] font-medium">{t(item.label)}</span>
            )}
          </motion.li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;