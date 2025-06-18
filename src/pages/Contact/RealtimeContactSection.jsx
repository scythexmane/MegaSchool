import React from "react";
import { motion } from "framer-motion";
import { Send, Mail, PhoneCall } from "lucide-react";
import { useTranslation } from "react-i18next";

const RealtimeContactSection = () => {
  const { t } = useTranslation();

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.2 } },
  };

  const buttonVariants = {
    rest: { scale: 1, boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" },
    hover: {
      scale: 1.05,
      boxShadow: "0 8px 20px rgba(var(--gradient-from-rgb), 0.4)",
      transition: { duration: 0.2, ease: "easeOut" },
    },
    tap: { scale: 0.95 },
  };

  return (
    <motion.section
      className="w-full p-6 md:p-8 bg-[var(--card-bg)] rounded-2xl shadow-xl text-center flex flex-col items-center justify-center relative overflow-hidden border border-[var(--card-border)]"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <h2 className="text-3xl p-3 lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] mb-8 drop-shadow-[0_0_10px_var(--gradient-from)]">
        {t("contact.realtime.title")}
      </h2>

      <p className="text-[var(--text-secondary)] text-lg mb-10 max-w-2xl">
        {t("contact.realtime.description")}
      </p>

      <div className="flex flex-wrap justify-center gap-6 md:gap-8">
        {/* Telegram Button */}
        <motion.a
          href="https://t.me/megaschool"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-4 rounded-full bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] text-[var(--text-primary)] flex items-center gap-3 font-semibold text-lg shadow-lg"
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
        >
          <Send size={24} />
          {t("contact.realtime.telegram")}
        </motion.a>

        {/* Email Button */}
        <motion.a
          href="mailto:info@megaschool.uz"
          className="px-6 py-4 rounded-full bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] text-[var(--text-primary)] flex items-center gap-3 font-semibold text-lg shadow-lg"
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
        >
          <Mail size={24} />
          {t("contact.realtime.email")}
        </motion.a>

        {/* Phone Call Button */}
        <motion.a
          href="tel:+998901234567"
          className="px-6 py-4 rounded-full bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] text-[var(--text-primary)] flex items-center gap-3 font-semibold text-lg shadow-lg"
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
        >
          <PhoneCall size={24} />
          {t("contact.realtime.phone")}
        </motion.a>
      </div>
    </motion.section>
  );
};

export default RealtimeContactSection;    