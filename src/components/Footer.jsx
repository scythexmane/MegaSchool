import { useTranslation } from "react-i18next";
import React from "react";
const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-white dark:bg-gray-950 text-center py-6 mt-10">
      <p className="text-sm text-gray-600 dark:text-gray-300">
        &copy; {new Date().getFullYear()} MegaSchool. {t("all_rights_reserved") || "All rights reserved."}
      </p>
    </footer>
  );
};

export default Footer;
