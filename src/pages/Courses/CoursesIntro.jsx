import React from "react";
import { useTranslation } from "react-i18next";

const CoursesIntro = () => {
  const { t } = useTranslation();

  return (
    <div className="text-center my-8">
      <h1 className="text-4xl font-bold mb-4">{t("ourCourses")}</h1>
      <p className="text-lg text-gray-600 dark:text-gray-300">
        {t("coursesIntroText")}
      </p>
    </div>
  );
};

export default CoursesIntro;
