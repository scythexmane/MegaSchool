import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { useTranslation } from "react-i18next";

const NotFound = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center justify-center text-center min-h-screen p-4 bg-[var(--bg-from)] text-[var(--text-primary)]">
      <h1 className="text-2xl sm:text-3xl font-bold mb-2">{t("notfound.title")}</h1>
      <p className="text-base sm:text-lg text-[var(--text-secondary)] mb-6">{t("notfound.subtitle")}</p>
      <Link
        to="/"
        className="px-6 py-3 rounded-lg bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] text-white font-medium hover:scale-105 transition-transform"
      >
        ⬅ {t("notfound.home")}
      </Link>
      <div className="w-[500px] h-[500px] sm:w-[500px] sm:h-[500px] mb-6">
        <DotLottieReact
          src="https://lottie.host/8ee70f4d-e545-44c8-ace6-20688d05f1f1/7Z8iRqn6bR.lottie"
          loop
          autoplay
        />
      </div>
    </div>
  );
};

export default NotFound;
