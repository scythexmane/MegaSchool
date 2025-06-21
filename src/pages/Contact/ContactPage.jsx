import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import ContactSection from "../Contact/ContactFormSection";

const ContactPage = () => {
  const { t } = useTranslation();

  const pageVariants = {
    hidden: { opacity: 0, scale: 0.98 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
  };

  return (
    <motion.div
      className="min-h-screen bg-[var(--bg-from)] text-[var(--text-primary)] p-4 sm:p-6 md:p-8 relative overflow-hidden"
      variants={pageVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="absolute top-10 left-10 w-96 h-96 bg-[var(--gradient-from)]/10 rounded-full filter blur-3xl opacity-30 z-0"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-[var(--gradient-to)]/10 rounded-full filter blur-3xl opacity-30 z-0"></div>

      
        <ContactSection />
    </motion.div>
  );
};

export default ContactPage;