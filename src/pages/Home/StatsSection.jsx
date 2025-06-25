import React from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useTranslation } from "react-i18next";
import { Users, GraduationCap, Presentation, Trophy } from "lucide-react";

const statColors = {
  students: {
    bgGradient: "from-[#2a0a4a] to-[#5e1f8c]",
    iconColor: "text-[#d6b1ff]",
    shadow: "shadow-[#5e1f8c]/40",
    chartColor: "#c287fa",
  },
  courses: {
    bgGradient: "from-[#0c3a3d] to-[#1a7872]",
    iconColor: "text-[#7eebe4]",
    shadow: "shadow-[#1a7872]/50",
    chartColor: "#2ee2d8",
  },
  teachers: {
    bgGradient: "from-[#4d0f1d] to-[#8b1932]",
    iconColor: "text-[#ff9eb5]",
    shadow: "shadow-[#8b1932]/40",
    chartColors: ["#ffc107", "#2196f3", "#4caf50", "#e91e63"],
  },
  experience: {
    bgGradient: "from-[#5c420a] to-[#a1731a]",
    iconColor: "text-[#ffe68a]",
    shadow: "shadow-[#a1731a]/40",
    chartColor: "#ffd64a",
  },
};

const stats = [
  {
    labelKey: "students",
    value: 1200,
    icon: <Users size={32} aria-label="Students icon" />,
    chartType: "area",
  },
  {
    labelKey: "courses",
    value: 35,
    icon: <GraduationCap size={32} aria-label="Courses icon" />,
    chartType: "bar",
  },
  {
    labelKey: "teachers",
    value: 15,
    icon: <Presentation size={32} aria-label="Teachers icon" />,
    chartType: "pie",
  },
  {
    labelKey: "experience",
    value: 5,
    suffix: "+",
    icon: <Trophy size={32} aria-label="Experience icon" />,
    chartType: "line",
  },
];

const AreaChart = ({ color }) => (
  <svg width="100%" height="50" viewBox="0 0 100 50" preserveAspectRatio="none">
    <path
      d="M0,50 L0,30 Q25,10 50,25 T100,20 L100,50 Z"
      fill="url(#areaGradient)"
    />
    <defs>
      <linearGradient id="areaGradient" x1="0" x2="0" y1="0" y2="1">
        <stop offset="0%" stopColor={color} stopOpacity={0.4} />
        <stop offset="100%" stopColor={color} stopOpacity={0} />
      </linearGradient>
    </defs>
    <path d="M0,30 Q25,10 50,25 T100,20" stroke={color} fill="none" strokeWidth="2" />
  </svg>
);

const BarChart = ({ color }) => (
  <svg width="100%" height="40" viewBox="0 0 100 40" preserveAspectRatio="none">
    <rect x="5" y="25" width="15" height="15" fill={color} rx="2" opacity="0.4" />
    <rect x="25" y="15" width="15" height="25" fill={color} rx="2" opacity="0.6" />
    <rect x="45" y="20" width="15" height="20" fill={color} rx="2" opacity="0.5" />
    <rect x="65" y="5" width="15" height="35" fill={color} rx="2" opacity="0.8" />
    <rect x="85" y="10" width="15" height="30" fill={color} rx="2" opacity="0.7" />
  </svg>
);

const PieChart = ({ colors }) => (
  <div
    className="w-12 h-12 rounded-full"
    style={{
      background: `conic-gradient(
                ${colors[0]} 0% 25%, 
                ${colors[1]} 25% 55%, 
                ${colors[2]} 55% 85%, 
                ${colors[3]} 85% 100%
            )`,
    }}
  ></div>
);

const LineChart = ({ color }) => (
  <svg width="100%" height="50" viewBox="0 0 100 50" preserveAspectRatio="none">
    <path
      d="M5,45 Q25,30 50,20 T95,5"
      stroke={color}
      fill="none"
      strokeWidth="3"
      strokeLinecap="round"
    />
  </svg>
);

const renderChart = (stat) => {
  const colors = statColors[stat.labelKey];
  switch (stat.chartType) {
    case "area":
      return <AreaChart color={colors.chartColor} />;
    case "bar":
      return <BarChart color={colors.chartColor} />;
    case "pie":
      return <PieChart colors={colors.chartColors} />;
    case "line":
      return <LineChart color={colors.chartColor} />;
    default:
      return null;
  }
};

const AchievementsSection = () => {
  const { t } = useTranslation();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0, scale: 0.95 },
    visible: { y: 0, opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section
      ref={ref}
      className="py-16 md:py-24 bg-gradient-to-b from-[var(--bg-from)] to-[var(--bg-to)]"
    >
      <div className="max-w-7xl mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl p-3 md:text-5xl font-bold mb-16 bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] text-transparent bg-clip-text"
        >
          {t("ourAchievements", "Our Achievements")}
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8"
        >
          {stats.map((stat) => {
            const colors = statColors[stat.labelKey];
            return (
              <motion.div
                key={stat.labelKey}
                variants={itemVariants}
                className={`p-6 rounded-2xl flex flex-col justify-between h-[240px] md:h-[260px] text-white ${colors.bgGradient} ${colors.shadow} shadow-2xl transition-transform duration-300 hover:scale-105`}
              >
                <div className={`self-start p-2 rounded-lg bg-white/10 ${colors.iconColor}`}>
                  {stat.icon}
                </div>
                <div className="text-left">
                  <h3 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] text-transparent bg-clip-text">
                    {inView && (
                      <CountUp
                        end={stat.value}
                        duration={2.5}
                        separator=","
                        suffix={stat.suffix || ""}
                      />
                    )}
                  </h3>
                  <p className="text-base md:text-lg bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] text-transparent bg-clip-text">{t(stat.labelKey)}</p>
                </div>
                <div className="h-[50px] mt-2 flex items-center justify-center opacity-80">
                  {renderChart(stat)}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default AchievementsSection;