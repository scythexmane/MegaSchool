import React from "react";
import Marquee from "react-fast-marquee";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import {
  Code, FlaskConical, Brain, Languages, Bot, BookOpen, Lightbulb, Rocket, TrendingUp, Compass, Infinity,
  Laptop, Server, GitBranch, Database, Shield, Monitor, Palette, Megaphone,
} from "lucide-react";

const marqueeItemsPrimary = [
  { id: "py", key: "python", icon: <Code size={48} />, iconColor: "text-blue-500" }, // Adjusted icon size
  { id: "scr", key: "scratch", icon: <Bot size={48} />, iconColor: "text-green-500" },
  { id: "front", key: "frontend", icon: <Monitor size={48} />, iconColor: "text-pink-500" },
  { id: "back", key: "backend", icon: <Server size={48} />, iconColor: "text-indigo-500" },
  { id: "cpp", key: "cpp", icon: <GitBranch size={48} />, iconColor: "text-purple-500" },
  { id: "robo", key: "robotics", icon: <Bot size={48} />, iconColor: "text-red-500" },
  { id: "bio", key: "biology", icon: <Brain size={48} />, iconColor: "text-yellow-500" },
  { id: "chem", key: "chemistry", icon: <FlaskConical size={48} />, iconColor: "text-orange-500" },
  { id: "eng_l", key: "english_lang", icon: <Languages size={48} />, iconColor: "text-teal-500" },
  { id: "rus_l", key: "russian_lang", icon: <Languages size={48} />, iconColor: "text-fuchsia-500" },
  { id: "uzb_l", key: "uzbek_lang", icon: <Languages size={48} />, iconColor: "text-lime-500" },
  { id: "data_science", key: "data_science", icon: <Database size={48} />, iconColor: "text-cyan-500" },
  { id: "cyber_security", key: "cyber_security", icon: <Shield size={48} />, iconColor: "text-emerald-500" },
  { id: "design", key: "design", icon: <Palette size={48} />, iconColor: "text-violet-500" },
  { id: "marketing", key: "marketing", icon: <Megaphone size={48} />, iconColor: "text-rose-500" },
];

const marqueeItemsSecondary = [
  { id: "know", key: "knowledge", icon: <BookOpen size={32} />, iconColor: "text-gray-400" }, // Adjusted icon size
  { id: "innov", key: "innovation", icon: <Lightbulb size={32} />, iconColor: "text-yellow-300" },
  { id: "future", key: "future", icon: <Rocket size={32} />, iconColor: "text-indigo-300" },
  { id: "develop", key: "development", icon: <TrendingUp size={32} />, iconColor: "text-green-300" },
  { id: "discover", key: "discovery", icon: <Compass size={32} />, iconColor: "text-purple-300" },
  { id: "infinity", key: "infinity_concept", icon: <Infinity size={32} />, iconColor: "text-teal-300" },
   { id: "data_science", key: "data_science", icon: <Database size={32} />, iconColor: "text-cyan-500" },
  { id: "cyber_security", key: "cyber_security", icon: <Shield size={32} />, iconColor: "text-emerald-500" },
  { id: "design", key: "design", icon: <Palette size={32} />, iconColor: "text-violet-500" },
  { id: "marketing", key: "marketing", icon: <Megaphone size={32} />, iconColor: "text-rose-500" },
];

const MarqueeSection = () => {
  const { t } = useTranslation();

  return (
    <section className="py-12 sm:py-16 md:py-20 relative overflow-hidden animated-bg"> {/* Adjusted vertical padding */}
      {/* Fade effects for marquee edges */}
      <div className="absolute inset-y-0 left-0 w-16 sm:w-20 md:w-24 lg:w-32 marquee-fade-left z-20"></div> {/* Adjusted width */}
      <div className="absolute inset-y-0 right-0 w-16 sm:w-20 md:w-24 lg:w-32 marquee-fade-right z-20"></div> {/* Adjusted width */}

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
        className="text-center p-3 px-4 text-3xl sm:text-4xl md:text-5xl font-extrabold mb-8 sm:mb-10" // Adjusted font size and margin-bottom
        style={{
          background: "linear-gradient(to right, var(--gradient-from), var(--gradient-to))",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        {t("marqueeSectionTitle")}
      </motion.h2>

      <Marquee pauseOnHover gradient={false} speed={40} className="relative z-10 py-3 sm:py-4 mt-6">
        {marqueeItemsPrimary.map((item) => (
          <motion.div
            key={item.id}
            className="inline-flex items-center justify-center gap-3 sm:gap-4 {/* Adjusted gap */}
                       mx-4 sm:mx-6 md:mx-8 px-5 py-2.5 sm:px-6 sm:py-3 md:px-8 md:py-4 {/* Adjusted padding and horizontal margin */}
                       rounded-full shadow-xl backdrop-blur-md bg-[var(--card-bg)]
                       border border-[var(--card-border)] transition-all duration-300 ease-in-out
                       transform hover:scale-105 hover:shadow-2xl pulsing-shadow pulse"
          >
            <span className={`text-4xl sm:text-5xl md:text-6xl ${item.iconColor}`}>{item.icon}</span> {/* Adjusted icon size classes */}
            <span className="text-base sm:text-lg md:text-xl font-semibold text-[var(--text-primary)] whitespace-nowrap"> {/* Adjusted text size classes */}
              {t(item.key)}
            </span>
          </motion.div>
        ))}
      </Marquee>

      <Marquee pauseOnHover gradient={false} speed={25} direction="right" className="relative z-0 py-2 mt-4 sm:mt-6">
        {marqueeItemsPrimary.map((item) => (
          <motion.div
            key={`${item.id}-alt`}
            className="inline-flex items-center justify-center gap-2 sm:gap-3 {/* Adjusted gap */}
                       mx-3 sm:mx-5 md:mx-7 px-4 py-2 sm:px-5 sm:py-2.5 md:px-7 md:py-3 {/* Adjusted padding and horizontal margin */}
                       rounded-full shadow-md backdrop-blur-sm bg-[var(--card-bg)]
                       border border-[var(--card-border)] transition-all duration-300 ease-in-out
                       transform hover:scale-105"
          >
            <span className={`text-3xl sm:text-4xl md:text-5xl ${item.iconColor}`}>{item.icon}</span> {/* Adjusted icon size classes */}
            <span className="text-sm sm:text-base md:text-lg font-medium text-[var(--text-secondary)] whitespace-nowrap"> {/* Adjusted text size classes */}
              {t(item.key)}
            </span>
          </motion.div>
        ))}
      </Marquee>

      <Marquee pauseOnHover gradient={false} speed={55} className="relative z-0 py-1.5 mt-4 sm:mt-6">
        {marqueeItemsSecondary.map((item) => (
          <motion.div
            key={`${item.id}-abstract`}
            className="inline-flex items-center justify-center gap-1.5 sm:gap-2 {/* Adjusted gap */}
                       mx-2.5 sm:mx-4 md:mx-6 px-3.5 py-1 sm:px-4 sm:py-1.5 md:px-6 md:py-2 {/* Adjusted padding and horizontal margin */}
                       rounded-full backdrop-blur-xs bg-[var(--card-bg)]
                       border border-[var(--card-border)] transition-all duration-300 ease-in-out
                       transform hover:scale-105"
          >
            <span className={`text-2xl sm:text-3xl opacity-80 ${item.iconColor}`}>{item.icon}</span> {/* Adjusted icon size classes */}
            <span className="text-xs sm:text-sm md:text-base font-normal text-[var(--text-secondary)] whitespace-nowrap"> {/* Adjusted text size classes */}
              {t(item.key)}
            </span>
          </motion.div>
        ))}
      </Marquee>
    </section>
  );
};

export default MarqueeSection;