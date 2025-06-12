import React from "react";
import { useTranslation } from "react-i18next";

const CategoryFilter = ({ category, setCategory }) => {
  const { t } = useTranslation();

  const categories = [
    { key: "all", label: t("all") },
    { key: "languages", label: t("languages") },
    { key: "science", label: t("science") },
    { key: "it", label: t("itCourses") },
  ];

  return (
    <div className="flex flex-wrap gap-3 justify-center mb-6">
      {categories.map((cat) => (
        <button
          key={cat.key}
          onClick={() => setCategory(cat.key)}
          className={`px-4 py-2 rounded-full border transition ${
            category === cat.key
              ? "bg-blue-600 text-white"
              : "bg-gray-100 dark:bg-gray-800 dark:text-white"
          }`}
        >
          {cat.label}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
