import React from "react";
import Marquee from "react-fast-marquee";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Code, FlaskConical, Brain, Languages, Bot, BookOpen, Database, Shield, Palette, Megaphone } from "lucide-react";

const marqueeItemsPrimary = [
  { id: "code", key: "coding", icon: <Code />, iconColor: "text-blue-500" },
  { id: "science", key: "science", icon: <FlaskConical />, iconColor: "text-green-500" },
  { id: "ai", key: "artificialIntelligence", icon: <Brain />, iconColor: "text-purple-500" },
  { id: "languages", key: "languages", icon: <Languages />, iconColor: "text-yellow-500" },
  { id: "robotics", key: "robotics", icon: <Bot />, iconColor: "text-red-500" },
  { id: "education", key: "education", icon: <BookOpen />, iconColor: "text-indigo-500" },
  { id: "data", key: "dataScience", icon: <Database />, iconColor: "text-teal-500" },
  { id: "security", key: "cyberSecurity", icon: <Shield />, iconColor: "text-gray-500" },
  { id: "design", key: "design", icon: <Palette />, iconColor: "text-pink-500" },
  { id: "marketing", key: "marketing", icon: <Megaphone />, iconColor: "text-orange-500" },
];

const marqueeItemsSecondary = [
  { id: "code-alt", key: "coding", icon: <Code />, iconColor: "text-blue-400" },
  { id: "science-alt", key: "science", icon: <FlaskConical />, iconColor: "text-green-400" },
  { id: "ai-alt", key: "artificialIntelligence", icon: <Brain />, iconColor: "text-purple-400" },
  { id: "languages-alt", key: "languages", icon: <Languages />, iconColor: "text-yellow-400" },
  { id: "robotics-alt", key: "robotics", icon: <Bot />, iconColor: "text-red-400" },
  { id: "education-alt", key: "education", icon: <BookOpen />, iconColor: "text-indigo-400" },
  { id: "data-alt", key: "dataScience", icon: <Database />, iconColor: "text-teal-400" },
  { id: "security-alt", key: "cyberSecurity", icon: <Shield />, iconColor: "text-gray-400" },
  { id: "design-alt", key: "design", icon: <Palette />, iconColor: "text-pink-400" },
  { id: "marketing-alt", key: "marketing", icon: <Megaphone />, iconColor: "text-orange-400" },
];

const MarqueeSection = () => {
  const { t } = useTranslation();

  return (
    <section className="py-12 sm:py-16 md:py-20 relative overflow-hidden">
      <motion.h2 initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center p-3 px-4 text-3xl sm:text-4xl md:text-5xl font-extrabold mb-8 sm:mb-10" style={{ background: "linear-gradient(to right, var(--gradient-from), var(--gradient-to))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
        {t("marqueeSectionTitle")}
      </motion.h2>
      <Marquee pauseOnHover gradient={false} speed={20} className="relative z-10 py-3 sm:py-4 mt-6">
        {Array.isArray(marqueeItemsPrimary) && marqueeItemsPrimary.map((item) => (
          <motion.div key={item.id} className="inline-flex items-center justify-center gap-3 sm:gap-4 mx-4 sm:mx-6 px-5 py-2.5 sm:px-6 sm:py-3 rounded-full shadow-xl backdrop-blur-md bg-[var(--card-bg)] border border-[var(--card-border)] transition-all duration-300 ease-in-out">
            <span className={`text-4xl sm:text-5xl md:text-6xl ${item.iconColor}`}>{item.icon}</span>
            <span className="text-base sm:text-lg md:text-xl font-semibold text-[var(--text-primary)] whitespace-nowrap">{t(item.key)}</span>
          </motion.div>
        ))}
      </Marquee>
      <Marquee pauseOnHover gradient={false} speed={15} direction="right" className="relative z-0 py-2 mt-4 sm:mt-6">
        {Array.isArray(marqueeItemsSecondary) && marqueeItemsSecondary.map((item) => (
          <motion.div key={`${item.id}-alt`} className="inline-flex items-center justify-center gap-2 sm:gap-3 mx-3 sm:mx-5 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full shadow-md backdrop-blur-sm bg-[var(--card-bg)] border border-[var(--card-border)] transition-all duration-300 ease-in-out">
            <span className={`text-3xl sm:text-4xl md:text-5xl ${item.iconColor}`}>{item.icon}</span>
            <span className="text-sm sm:text-base md:text-lg font-medium text-[var(--text-secondary)] whitespace-nowrap">{t(item.key)}</span>
          </motion.div>
        ))}
      </Marquee>
    </section>
  );
};

export default React.memo(MarqueeSection);