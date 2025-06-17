import React from "react";
import Marquee from "react-fast-marquee";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import {
  Code, FlaskConical, Brain, Languages, Bot, BookOpen, Lightbulb, Rocket, TrendingUp, Compass, Infinity,
  Laptop, Server, GitBranch, Database, Shield, Monitor, Palette, Megaphone,
} from "lucide-react";

const marqueeItemsPrimary = [
  { id: "py", key: "python", icon: <Code size={60} />, iconColor: "text-blue-500" },
  { id: "scr", key: "scratch", icon: <Bot size={60} />, iconColor: "text-green-500" },
  { id: "front", key: "frontend", icon: <Monitor size={60} />, iconColor: "text-pink-500" },
  { id: "back", key: "backend", icon: <Server size={60} />, iconColor: "text-indigo-500" },
  { id: "cpp", key: "cpp", icon: <GitBranch size={60} />, iconColor: "text-purple-500" },
  { id: "robo", key: "robotics", icon: <Bot size={60} />, iconColor: "text-red-500" },
  { id: "bio", key: "biology", icon: <Brain size={60} />, iconColor: "text-yellow-500" },
  { id: "chem", key: "chemistry", icon: <FlaskConical size={60} />, iconColor: "text-orange-500" },
  { id: "eng_l", key: "english_lang", icon: <Languages size={60} />, iconColor: "text-teal-500" },
  { id: "rus_l", key: "russian_lang", icon: <Languages size={60} />, iconColor: "text-fuchsia-500" },
  { id: "uzb_l", key: "uzbek_lang", icon: <Languages size={60} />, iconColor: "text-lime-500" },
  { id: "data_science", key: "data_science", icon: <Database size={60} />, iconColor: "text-cyan-500" },
  { id: "cyber_security", key: "cyber_security", icon: <Shield size={60} />, iconColor: "text-emerald-500" },
  { id: "design", key: "design", icon: <Palette size={60} />, iconColor: "text-violet-500" },
  { id: "marketing", key: "marketing", icon: <Megaphone size={60} />, iconColor: "text-rose-500" },
];

const marqueeItemsSecondary = [
  { id: "know", key: "knowledge", icon: <BookOpen size={40} />, iconColor: "text-gray-400" },
  { id: "innov", key: "innovation", icon: <Lightbulb size={40} />, iconColor: "text-yellow-300" },
  { id: "future", key: "future", icon: <Rocket size={40} />, iconColor: "text-indigo-300" },
  { id: "develop", key: "development", icon: <TrendingUp size={40} />, iconColor: "text-green-300" },
  { id: "discover", key: "discovery", icon: <Compass size={40} />, iconColor: "text-purple-300" },
  { id: "infinity", key: "infinity_concept", icon: <Infinity size={40} />, iconColor: "text-teal-300" },
];

const MarqueeSection = () => {
  const { t } = useTranslation();

  return (
    <section className="py-12 md:py-20 lg:py-24 relative overflow-hidden animated-bg">
      <div className="absolute inset-y-0 left-0 w-24 md:w-32 lg:w-40 marquee-fade-left z-20"></div>
      <div className="absolute inset-y-0 right-0 w-24 md:w-32 lg:w-40 marquee-fade-right z-20"></div>

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
        className="text-center text-4xl md:text-5xl font-extrabold mb-12
                   bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] text-transparent bg-clip-text"
      >
        {t("marqueeSectionTitle")}
      </motion.h2>

      <Marquee pauseOnHover gradient={false} speed={50} className="relative z-10 py-4">
        {marqueeItemsPrimary.map((item) => (
          <motion.div
            key={item.id}
            className="inline-flex items-center justify-center gap-4
                       mx-8 md:mx-12 lg:mx-16 px-6 py-3 md:px-8 md:py-4 lg:px-10 lg:py-5
                       rounded-full shadow-xl backdrop-blur-md bg-[var(--card-bg)]
                       border border-[var(--card-border)] transition-all duration-300 ease-in-out
                       transform hover:scale-105 hover:shadow-2xl pulsing-shadow pulse"
          >
            <span className={`text-5xl md:text-6xl lg:text-7xl ${item.iconColor}`}>{item.icon}</span>
            <span className="text-xl md:text-2xl lg:text-3xl font-semibold text-[var(--text-primary)] whitespace-nowrap">
              {t(item.key)}
            </span>
          </motion.div>
        ))}
      </Marquee>

      <Marquee pauseOnHover gradient={false} speed={30} direction="right" className="relative z-0 py-2 mt-6">
        {marqueeItemsPrimary.map((item) => (
          <motion.div
            key={`${item.id}-alt`}
            className="inline-flex items-center justify-center gap-3
                       mx-6 md:mx-10 lg:mx-14 px-5 py-2 md:px-7 md:py-3
                       rounded-full shadow-md backdrop-blur-sm bg-[var(--card-bg)]
                       border border-[var(--card-border)] transition-all duration-300 ease-in-out
                       transform hover:scale-105"
          >
            <span className={`text-4xl md:text-5xl lg:text-6xl ${item.iconColor}`}>{item.icon}</span>
            <span className="text-lg md:text-xl lg:text-2xl font-medium text-[var(--text-secondary)] whitespace-nowrap">
              {t(item.key)}
            </span>
          </motion.div>
        ))}
      </Marquee>

      <Marquee pauseOnHover gradient={false} speed={70} className="relative z-0 py-1 mt-6">
        {marqueeItemsSecondary.map((item) => (
          <motion.div
            key={`${item.id}-abstract`}
            className="inline-flex items-center justify-center gap-2
                       mx-4 md:mx-8 lg:mx-12 px-4 py-1 md:px-6 md:py-2
                       rounded-full backdrop-blur-xs bg-[var(--card-bg)]
                       border border-[var(--card-border)] transition-all duration-300 ease-in-out
                       transform hover:scale-105"
          >
            <span className={`text-3xl md:text-4xl opacity-80 ${item.iconColor}`}>{item.icon}</span>
            <span className="text-base md:text-lg lg:text-xl font-normal text-[var(--text-secondary)] whitespace-nowrap">
              {t(item.key)}
            </span>
          </motion.div>
        ))}
      </Marquee>
    </section>
  );
};

export default MarqueeSection;