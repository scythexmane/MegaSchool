import React from "react";
import { useTranslation } from "react-i18next";

const CourseCard = ({ title }) => {
  const { t } = useTranslation();

  return (
    <div className="p-5 bg-white dark:bg-gray-800 border rounded shadow hover:shadow-lg transition">
      <h3 className="text-xl font-semibold">{t(title)}</h3>
    </div>
  );
};

export default CourseCard;
