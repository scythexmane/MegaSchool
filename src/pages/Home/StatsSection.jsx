import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Users, GraduationCap, Briefcase, Trophy } from "lucide-react";

const statColors = {
  students: { from: "#4CAF50", to: "#81C784", graphColor: "#4CAF50", shadow: "rgba(76, 175, 80, 0.6)" },
  graduates: { from: "#2196F3", to: "#42A5F5", graphColor: "#2196F3", shadow: "rgba(33, 150, 243, 0.6)" },
  placements: { from: "#FF9800", to: "#FFB300", graphColor: "#FF9800", shadow: "rgba(255, 152, 0, 0.6)" },
  awards: { from: "#9C27B0", to: "#AB47BC", graphColor: "#9C27B0", shadow: "rgba(156, 39, 176, 0.6)" },
};

const stats = [
  { labelKey: "students", value: 15000, icon: <Users /> },
  { labelKey: "graduates", value: 8000, icon: <GraduationCap /> },
  { labelKey: "placements", value: 6000, icon: <Briefcase /> },
  { labelKey: "awards", value: 50, icon: <Trophy /> },
];

const StatsSection = () => {
  const { t } = useTranslation();
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !hasAnimated) setHasAnimated(true);
    }, { threshold: 0.5 });
    const section = document.getElementById("stats-section");
    if (section) observer.observe(section);
    return () => section && observer.unobserve(section);
  }, [hasAnimated]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.3 } },
  };

  return (
    <section id="stats-section" className="py-20 md:py-32 relative overflow-hidden bg-gradient-to-tb from-gray-950 to-gray-950 dark:from-gray-950 dark:to-gray-950">
      <div className="absolute top-1/4 left-[5%] w-72 h-72 rounded-full mix-blend-soft-light filter blur-3xl opacity-30 animate-blob" style={{ backgroundColor: "blue-500" }}></div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.h2 initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-16 bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
          {t("ourAchievements")}
        </motion.h2>
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {Array.isArray(stats) && stats.map((stat) => {
            const colors = statColors[stat.labelKey];
            return (
              <motion.div key={stat.labelKey} variants={itemVariants} className="p-8 md:p-10 rounded-3xl shadow-xl transition-all duration-300 ease-in-out bg-[var(--card-bg)] border border-[var(--card-border)] flex flex-col items-center justify-between" style={{ boxShadow: `0px 15px 40px ${colors.shadow}` }}>
                <div className="mb-4 text-5xl md:text-6xl" style={{ color: colors.graphColor }}>
                  {stat.icon}
                </div>
                <h3 className="text-5xl md:text-6xl font-extrabold mb-4 bg-clip-text text-transparent" style={{ backgroundImage: `linear-gradient(to right, ${colors.to}, ${colors.from})` }}>
                  <CountUp end={stat.value} duration={2} enableScrollSpy scrollSpyOnce />
                  {stat.labelKey === "yearsExperience" && "+"}
                </h3>
                <p className="mt-2 text-xl md:text-2xl font-semibold text-gray-300 dark:text-gray-200 mb-6">
                  {t(stat.labelKey)}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default React.memo(StatsSection);