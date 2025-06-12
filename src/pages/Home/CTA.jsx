import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const CTA = () => {
  const { t } = useTranslation();

  return (
    <section className="py-16bg-white dark:bg-gray-950 text-white">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          {t("readyToStart")}
        </h2>
        <p className="text-lg mb-6">{t("joinNowText")}</p>
        <Link
          to="/contact"
          className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
        >
          {t("contactUs")}
        </Link>
      </div>
    </section>
  );
};

export default CTA;
