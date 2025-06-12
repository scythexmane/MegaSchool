import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Breadcrumb = () => {
  const { t } = useTranslation();

  return (
    <nav className="text-sm text-gray-500 mb-4">
      <Link to="/" className="hover:underline">{t("home")}</Link> &gt;{" "}
      <span>{t("courses")}</span>
    </nav>
  );
};

export default Breadcrumb;
