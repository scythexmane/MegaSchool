import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { Users, GraduationCap, Briefcase, Trophy } from "lucide-react";

const statColors = {
  students: { from: "#4CAF50", to: "#81C784", graphColor: "#4CAF50", shadow: "rgba(76, 175, 80, 0.6)" },
  graduates: { from: "#2196F3", to: "#42A5F5", graphColor: "#2196F3", shadow: "rgba(33, 150, 243, 0.6)" },
  placements: { from: "#FF9800", to: "#FFB300", graphColor: "#FF9800", shadow: "rgba(255, 152, 0, 0.6)" },
  awards: { from: "#9C27B0", to: "#AB47BC", graphColor: "#9C27B0", shadow: "rgba(156, 39, 176, 0.6)" },
};

const stats = [
  { labelKey: "students", value: 15000, icon: <Users />, detailsKey: "studentsDetails" },
  { labelKey: "graduates", value: 8000, icon: <GraduationCap />, detailsKey: "graduatesDetails" },
  { labelKey: "placements", value: 6000, icon: <Briefcase />, detailsKey: "placementsDetails" },
  { labelKey: "awards", value: 50, icon: <Trophy />, detailsKey: "awardsDetails" },
];

const StatsSection = () => {
  const { t } = useTranslation();
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) setHasAnimated(true);
      },
      { threshold: 0.5 }
    );
    const section = document.getElementById("stats-section");
    if (section) observer.observe(section);
    return () => section && observer.unobserve(section);
  }, [hasAnimated]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0, rotateX: -20 },
    visible: { y: 0, opacity: 1, rotateX: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  const numberVariants = {
    hidden: { scale: 0.7, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.6, ease: "backOut" } },
  };

  return (
    <section
      id="stats-section"
      className="py-12 md:py-16 relative overflow-hidden perspective-1200"
      style={{ background: `linear-gradient(to bottom, var(--bg-from), var(--bg-to))` }}
    >
      <style jsx="true">{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-40px, 50px) scale(1.3); }
        }
        @keyframes blob-alt {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(40px, -50px) scale(0.7); }
        }

        /* Мягкий и прозрачный эффект линии */
        @keyframes shine {
          0% { transform: translateX(-150%) skewX(-30deg); }
          100% { transform: translateX(150%) skewX(-30deg); }
        }

        /* Стили карточек */
        .card {
          transform-style: preserve-3d;
          transition: transform 0.5s ease, box-shadow 0.5s ease, background 0.5s ease;
          position: relative;
          overflow: hidden;
          background: var(--card-bg);
          border: 1px solid var(--card-border);
        }
        .card:hover {
          transform: translateZ(100px) rotateY(10deg) scale(1.1);
          box-shadow: 0 35px 70px rgba(0, 0, 0, 0.4), inset 0 0 20px rgba(255, 255, 255, 0.1);
          background: linear-gradient(135deg, var(--card-bg), rgba(var(--gradient-to), 0.3));
        }
        .card::before {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
          opacity: 0;
          transition: opacity 0.5s ease;
          z-index: 1;
        }
        .card:hover::before {
          opacity: 0.4;
          animation: shine 3.5s ease-in-out infinite;
        }

        /* Стили иконок */
        .icon-container {
          transition: transform 0.5s ease, box-shadow 0.5s ease;
          position: relative;
          border-radius: 50%;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 80px;
          height: 80px;
        }
        .card:hover .icon-container {
          transform: scale(1.3);
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
        }
        .icon-container::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.15), transparent);
          opacity: 0;
          transition: opacity 0.5s ease;
        }
        .card:hover .icon-container::after {
          opacity: 0.4;
          animation: shine 3s ease-in-out infinite;
        }

        /* Стили стрелок */
        .details-arrow {
          transition: transform 0.4s ease, opacity 0.4s ease, color 0.4s ease;
          opacity: 0.7;
        }
        .card:hover .details-arrow {
          transform: translateY(10px) scale(1.2);
          opacity: 1;
          color: var(--gradient-from);
        }

        /* Адаптивность */
        @media (max-width: 767px) {
          .card {
            max-width: 240px;
            height: 260px;
            padding: 1.5rem;
          }
          .icon-container {
            width: 64px;
            height: 64px;
          }
          .icon-container svg {
            width: 40px;
            height: 40px;
          }
          .text-5xl {
            font-size: 2.25rem;
          }
          .text-xl {
            font-size: 1rem;
          }
        }
      `}</style>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl p-3 lg:text-6xl font-extrabold mb-16 bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text drop-shadow-lg"
        >
          {t("ourAchievements")}
        </motion.h2>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 lg:gap-10"
        >
          {Array.isArray(stats) &&
            stats.map((stat) => {
              const colors = statColors[stat.labelKey];
              return (
                <motion.div
                  key={stat.labelKey}
                  variants={itemVariants}
                  className="card p-6 md:p-8 rounded-3xl shadow-xl flex flex-col items-center justify-between h-[300px] w-full max-w-[280px] mx-auto"
                  style={{ boxShadow: `0 15px 40px ${colors.shadow}` }}
                >
                  <div
                    className="icon-container mb-4"
                    style={{ background: `linear-gradient(45deg, ${colors.from}, ${colors.to})` }}
                  >
                    <span className="text-white text-4xl md:text-5xl">{stat.icon}</span>
                  </div>
                  <motion.h3
                    variants={numberVariants}
                    className="text-5xl md:text-6xl font-extrabold mb-4 bg-clip-text text-transparent"
                    style={{ backgroundImage: `linear-gradient(to right, ${colors.to}, ${colors.from})` }}
                  >
                    {hasAnimated && (
                      <CountUp end={stat.value} duration={2.5} enableScrollSpy={false} scrollSpyOnce />
                    )}
                    {stat.labelKey === "yearsExperience" && "+"}
                  </motion.h3>
                  <p className="text-xl md:text-2xl font-semibold text-var(--text-secondary) mb-4">
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