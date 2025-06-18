import React from "react";
import { motion } from "framer-motion";
import { MapPin, Loader2 } from "lucide-react";
import { useTranslation } from "react-i18next";

const GoogleMapSection = () => {
  const { t } = useTranslation();

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <motion.section
      className="w-full h-full p-4 md:p-8 bg-[var(--card-bg)] rounded-2xl shadow-xl flex flex-col items-center justify-center relative overflow-hidden border border-[var(--card-border)]"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <h2 className="text-3xl p-3 lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] mb-8 text-center drop-shadow-[0_0_10px_var(--gradient-from)]">
        {t("contact.mapTitle")}
      </h2>

      <div className="w-full flex-grow relative flex flex-col items-center justify-center min-h-[400px] md:min-h-[500px] lg:min-h-[600px]">
        <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
          <Loader2 className="animate-spin text-[var(--gradient-from)]" size={48} />
        </div>

        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2995.0231143823993!2d69.24007331541937!3d41.299495979272264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8bfb81bbd2ab%3A0xb91f7ff7921a75e4!2z0KLQtdGB0YLQvtCz0YDQsNGG0LjQvdCz0YHQutCw0Y8g0L_QsNGA0Log0KXQvNC10LvRjNC90LjQvQ!5e0!3m2!1sru!2s!4v1718199999999"
          width="100%"
          height="100%"
          loading="lazy"
          allowFullScreen
          className="w-full h-full rounded-xl border border-[var(--card-border)] shadow-xl z-0"
          style={{
            minHeight: "400px",
            border: "1px solid var(--card-border)",
            borderRadius: "0.75rem",
            boxShadow: "0 10px 20px rgba(0, 0, 0, 0.3)",
          }}
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      <div className="mt-8 text-center bg-[var(--card-bg)] p-6 rounded-xl shadow-inner border border-[var(--card-border)]">
        <motion.p
          className="text-lg text-[var(--text-secondary)] mb-2 flex items-center justify-center"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <MapPin size={22} className="inline-block mr-3 text-[var(--gradient-from)] animate-bounce-subtle" />
          <span className="font-semibold text-[var(--text-primary)]">
            {t("contact.branches.tashkent.address")}
          </span>
        </motion.p>
        <motion.p
          className="text-md text-[var(--text-secondary)] flex items-center justify-center"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          <span className="font-semibold text-[var(--gradient-to)] mr-3 text-2xl">🕒</span>
          {t("contact.branches.tashkent.hours")}
        </motion.p>
      </div>
    </motion.section>
  );
};

export default GoogleMapSection;