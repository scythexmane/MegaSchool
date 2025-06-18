import React, { useState, useEffect } from "react";
import CountUp from "react-countup";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Users, GraduationCap, Briefcase, Trophy, BarChart2, PieChart, LineChart, AreaChart } from "lucide-react";
import {
  ResponsiveContainer,
  AreaChart as RechartsAreaChart,
  XAxis,
  YAxis,
  Tooltip,
  Area,
  BarChart as RechartsBarChart,
  Bar,
  PieChart as RechartsPieChart,
  Pie,
  Cell,
  LineChart as RechartsLineChart,
  Line
} from "recharts"; // Импорт компонентов Recharts

// Define color palettes for each stat card for vibrant gradients and shadows
const statColors = {
  students: {
    from: "#6D28D9", to: "#8B5CF6", shadow: "rgba(109, 40, 217, 0.5)",
    graphColor: "#8884d8", // Purple for graph
    gradientId: "colorStudents"
  },
  coursesCount: {
    from: "#0D9488", to: "#2DD4BF", shadow: "rgba(13, 148, 136, 0.5)",
    graphColor: "#82ca9d", // Green for graph
    gradientId: "colorCourses"
  },
  teachersCount: {
    from: "#DC2626", to: "#EF4444", shadow: "rgba(220, 38, 38, 0.5)",
    graphColors: ["#FFBB28", "#FF8042", "#00C49F", "#0088FE"], // Colors for Pie Chart
    gradientId: "colorTeachers"
  },
  yearsExperience: {
    from: "#F59E0B", to: "#FCD34D", shadow: "rgba(245, 158, 11, 0.5)",
    graphColor: "#ffc658", // Amber for graph
    gradientId: "colorYears"
  }
};

// Mock data for graphs
// Students: Growth over months
const studentsData = [
  { name: 'Jan', count: 400 }, { name: 'Feb', count: 500 }, { name: 'Mar', count: 650 },
  { name: 'Apr', count: 800 }, { name: 'May', count: 950 }, { name: 'Jun', count: 1200 }
];

// Courses: Number of courses by category
const coursesData = [
  { name: 'Programming', count: 10 }, { name: 'Languages', count: 8 },
  { name: 'Science', count: 7 }, { name: 'Design', count: 5 }, { name: 'Others', count: 5 }
];

// Teachers: Distribution by subject expertise (mock data for pie chart)
const teachersData = [
  { name: 'Programming', value: 5 }, { name: 'Languages', value: 4 },
  { name: 'Science', value: 3 }, { name: 'Arts', value: 3 }
];

// Years Experience: Consistent growth
const yearsData = [
  { name: '2020', value: 1 }, { name: '2021', value: 2 }, { name: '2022', value: 3 },
  { name: '2023', value: 4 }, { name: '2024', value: 5 }
];


const stats = [
  { value: 1200, labelKey: "students", icon: <Users size={50} />, colorKey: "students", graphData: studentsData },
  { value: 35, labelKey: "coursesCount", icon: <GraduationCap size={50} />, colorKey: "coursesCount", graphData: coursesData },
  { value: 15, labelKey: "teachersCount", icon: <Briefcase size={50} />, colorKey: "teachersCount", graphData: teachersData },
  { value: 5, labelKey: "yearsExperience", icon: <Trophy size={50} />, colorKey: "yearsExperience", graphData: yearsData }
];

const StatsSection = () => {
  const { t } = useTranslation();
  const [hasAnimated, setHasAnimated] = useState(false);

  // Trigger animations when component comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the component is visible
    );

    const section = document.getElementById("stats-section");
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, [hasAnimated]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
    hover: {
      y: -10,
      scale: 1.03,
      transition: { duration: 0.2 },
    },
  };

  return (
    <>
      {/* Global CSS for animations and custom properties - MOVE TO GLOBAL CSS FILE */}
      <style>
        {`
        /* Animated background for the section */
        @keyframes section-gradient-flow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .animated-section-background {
          background-size: 200% 200%;
          animation: section-gradient-flow 25s ease infinite alternate;
        }

        /* Pulse animation for the background glow of stat cards */
        @keyframes card-glow-pulse {
          0%, 100% { transform: scale(1); opacity: 0.7; }
          50% { transform: scale(1.05); opacity: 1; }
        }

        .card-glowing-effect::before {
          content: '';
          position: absolute;
          inset: -5px; /* Adjust to control the size of the glow */
          z-index: -1;
          border-radius: inherit;
          opacity: 0;
          transition: opacity 0.3s ease-in-out;
          filter: blur(15px); /* Increased blur for softer glow */
        }

        .stat-card-base:hover .card-glowing-effect::before {
          opacity: 1;
          animation: card-glow-pulse 2s ease infinite;
        }
        `}
      </style>

      <section
        id="stats-section"
        className="py-20 md:py-32 relative overflow-hidden
                   animated-section-background
                    bg-gradient-to-tb   from-from-gray-950 to-to-gray-950 dark:from-gray-950 dark:to-gray-950"
      >
        {/* Decorative background blobs/shapes for added dynamism */}
        <div className="absolute top-1/4 left-[5%] w-72 h-72 bg-blue-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-30 animate-blob animation-delay-0"></div>
        <div className="absolute bottom-1/3 right-[10%] w-64 h-64 bg-purple-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-[25%] w-56 h-56 bg-teal-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, type: "spring", stiffness: 100 }}
            className="text-4xl p-3 md:text-5xl lg:text-6xl font-extrabold mb-16
                       bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text"
          >
            {t("ourAchievements")}
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12"
          >
            {stats.map((stat, index) => {
              const colors = statColors[stat.colorKey];

              return (
                <motion.div
                  key={stat.labelKey}
                  variants={itemVariants}
                  whileHover="hover"
                  className={`
                    relative group
                    p-8 md:p-10 lg:p-12
                    rounded-3xl
                    shadow-xl
                    transition-all duration-300 ease-in-out
                    transform-gpu
                    overflow-hidden
                    backdrop-blur-md
                    border border-white/20 dark:border-gray-700/30
                    stat-card-base
                    flex flex-col items-center justify-between
                  `}
                  style={{
                    background: `linear-gradient(145deg, ${colors.from}33, ${colors.to}33)`, // Semi-transparent gradient
                    boxShadow: `0px 15px 40px ${colors.shadow}`,
                  }}
                >
                  {/* Inner glow effect on hover */}
                  <div
                    className="card-glowing-effect absolute inset-0 rounded-3xl"
                    style={{
                      backgroundImage: `radial-gradient(circle at center, ${colors.from}80, transparent 70%)`,
                    }}
                  ></div>

                  {/* Icon */}
                  <div className="mb-4 text-5xl md:text-6xl" style={{ color: colors.graphColor }}>
                    {stat.icon}
                  </div>

                  {/* CountUp Number */}
                  <h3
                    className={`text-5xl md:text-6xl font-extrabold mb-4
                               bg-clip-text text-transparent`}
                    style={{
                      backgroundImage: `linear-gradient(to right, ${colors.to}, ${colors.from})`,
                    }}
                  >
                    <CountUp
                      end={stat.value}
                      duration={2.5}
                      enableScrollSpy
                      scrollSpyOnce
                      startOnMount={false} // Ensure it triggers on intersection
                    />
                    {stat.labelKey === "yearsExperience" && "+"}
                  </h3>

                  {/* Label */}
                  <p className="mt-2 text-xl md:text-2xl font-semibold text-gray-300 dark:text-gray-200 mb-6">
                    {t(stat.labelKey)}
                  </p>

                  {/* Recharts Graph */}
                  <div className="w-full h-32 flex items-center justify-center -mb-4"> {/* Adjusted height and negative margin */}
                    {stat.labelKey === "students" && (
                      <ResponsiveContainer width="95%" height="95%">
                        <RechartsAreaChart data={stat.graphData} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                          <defs>
                            <linearGradient id={colors.gradientId} x1="0" y1="0" x2="0" y2="1">
                              <stop offset="5%" stopColor={colors.graphColor} stopOpacity={0.8}/>
                              <stop offset="95%" stopColor={colors.graphColor} stopOpacity={0}/>
                            </linearGradient>
                          </defs>
                          <XAxis dataKey="name" hide />
                          <YAxis hide domain={[0, 1500]} />
                          <Tooltip
                            contentStyle={{ background: 'rgba(255,255,255,0.8)', border: 'none', borderRadius: '8px' }}
                            labelStyle={{ color: '#333' }}
                            itemStyle={{ color: '#333' }}
                          />
                          <Area type="monotone" dataKey="count" stroke={colors.graphColor} fillOpacity={1} fill={`url(#${colors.gradientId})`} animationDuration={1500} animationBegin={hasAnimated ? 500 : 0}/>
                        </RechartsAreaChart>
                      </ResponsiveContainer>
                    )}

                    {stat.labelKey === "coursesCount" && (
                      <ResponsiveContainer width="95%" height="95%">
                        <RechartsBarChart data={stat.graphData} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                          <XAxis dataKey="name" hide />
                          <YAxis hide domain={[0, 15]} />
                          <Tooltip
                            contentStyle={{ background: 'rgba(255,255,255,0.8)', border: 'none', borderRadius: '8px' }}
                            labelStyle={{ color: '#333' }}
                            itemStyle={{ color: '#333' }}
                          />
                          <Bar dataKey="count" fill={colors.graphColor} animationDuration={1500} animationBegin={hasAnimated ? 500 : 0}/>
                        </RechartsBarChart>
                      </ResponsiveContainer>
                    )}

                    {stat.labelKey === "teachersCount" && (
                      <ResponsiveContainer width="95%" height="95%">
                        <RechartsPieChart margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                          <Pie
                            data={stat.graphData}
                            dataKey="value"
                            nameKey="name"
                            cx="50%"
                            cy="50%"
                            outerRadius={40}
                            fill="#8884d8"
                            animationDuration={1500} animationBegin={hasAnimated ? 500 : 0}
                            labelLine={false}
                          >
                            {stat.graphData.map((entry, idx) => (
                              <Cell key={`cell-${idx}`} fill={colors.graphColors[idx % colors.graphColors.length]} />
                            ))}
                          </Pie>
                          <Tooltip
                            contentStyle={{ background: 'rgba(255,255,255,0.8)', border: 'none', borderRadius: '8px' }}
                            labelStyle={{ color: '#333' }}
                            itemStyle={{ color: '#333' }}
                          />
                        </RechartsPieChart>
                      </ResponsiveContainer>
                    )}

                    {stat.labelKey === "yearsExperience" && (
                      <ResponsiveContainer width="95%" height="95%">
                        <RechartsLineChart data={stat.graphData} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                          <XAxis dataKey="name" hide />
                          <YAxis hide domain={[0, 6]} />
                          <Tooltip
                            contentStyle={{ background: 'rgba(255,255,255,0.8)', border: 'none', borderRadius: '8px' }}
                            labelStyle={{ color: '#333' }}
                            itemStyle={{ color: '#333' }}
                          />
                          <Line type="monotone" dataKey="value" stroke={colors.graphColor} strokeWidth={3} dot={false} animationDuration={1500} animationBegin={hasAnimated ? 500 : 0}/>
                        </RechartsLineChart>
                      </ResponsiveContainer>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default StatsSection;