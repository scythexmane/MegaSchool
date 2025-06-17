import React from "react";
import { useTranslation } from "react-i18next";

const NoCoursesFound = () => {
  const { t } = useTranslation();

  return (
    <p className="text-center text-lg text-[var(--text-secondary)]">
      {t("noCoursesFound")}
    </p>
  );
};

export default NoCoursesFound;