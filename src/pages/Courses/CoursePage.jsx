import React from "react";
import { Link } from "react-router-dom";

import { useParams, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import {
  BookOpen,
  Code,
  FlaskConical,
  Brain,
  Languages,
  Bot,
  Atom,
  Megaphone,
  Laptop,
  DollarSign,
  Calendar,
  Award,
  CircleCheck,
  ArrowLeft,
  Users,
  Star,
  Hourglass,
} from "lucide-react";

// Helper for parallax effect
const Parallax = ({ children, offset = 50 }) => {
  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: [0, offset, 0] }}
      transition={{
        duration: 8,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
};

const coursesData = {
  english: {
    titleKey: "english",
    icon: <Languages size={40} />,
    color: {
      base: "#1A6AA5",
      accent: "#3FA0D5",
      iconBg: "linear-gradient(45deg, #1A6AA5, #3FA0D5)",
      shadow: "rgba(26, 106, 165, 0.6)",
      gradientFrom: "#1A6AA5",
      gradientTo: "#3FA0D5",
    },
    descriptionKey: "englishDescriptionLong",
    costUSD: 599,
    costUZS: 7500000,
    durationKey: "6",
    studentsEnrolled: 1250,
    averageRating: 4.8,
    difficulty: "Средняя",
    certificatesKeys: ["certificateEnglish1", "certificateEnglish2"],
    modulesKeys: [
      {
        titleKey: "englishModule1",
        descriptionKey: "englishModule1Desc",
      },
      {
        titleKey: "englishModule2",
        descriptionKey: "englishModule2Desc",
      },
      {
        titleKey: "englishModule3",
        descriptionKey: "englishModule3Desc",
      },
      {
        titleKey: "englishModule4",
        descriptionKey: "englishModule4Desc",
      },
      {
        titleKey: "englishModule5",
        descriptionKey: "englishModule5Desc",
      },
    ],
  },
  math: {
    titleKey: "math",
    icon: <Brain size={40} />,
    color: {
      base: "#C2185B",
      accent: "#D81B60",
      iconBg: "linear-gradient(45deg, #C2185B, #D81B60)",
      shadow: "rgba(194, 24, 91, 0.6)",
      gradientFrom: "#C2185B",
      gradientTo: "#D81B60",
    },
    descriptionKey: "mathDescriptionLong",
    costUSD: 450,
    costUZS: 5600000,
    durationKey: "4",
    studentsEnrolled: 980,
    averageRating: 4.6,
    difficulty: "Высокая",
    certificatesKeys: ["certificateMath1", "certificateMath2"],
    modulesKeys: [
      {
        titleKey: "mathModule1",
        descriptionKey: "mathModule1Desc",
      },
      {
        titleKey: "mathModule2",
        descriptionKey: "mathModule2Desc",
      },
      {
        titleKey: "mathModule3",
        descriptionKey: "mathModule3Desc",
      },
      {
        titleKey: "mathModule4",
        descriptionKey: "mathModule4Desc",
      },
    ],
  },
  biology: {
    titleKey: "biology",
    icon: <FlaskConical size={40} />,
    color: {
      base: "#FF8F00",
      accent: "#FFB300",
      iconBg: "linear-gradient(45deg, #FF8F00, #FFB300)",
      shadow: "rgba(255, 143, 0, 0.6)",
      gradientFrom: "#FF8F00",
      gradientTo: "#FFB300",
    },
    descriptionKey: "biologyDescriptionLong",
    costUSD: 520,
    costUZS: 6500000,
    durationKey: "5",
    studentsEnrolled: 720,
    averageRating: 4.5,
    difficulty: "Средняя",
    certificatesKeys: ["certificateBiology1", "certificateBiology2"],
    modulesKeys: [
      {
        titleKey: "biologyModule1",
        descriptionKey: "biologyModule1Desc",
      },
      {
        titleKey: "biologyModule2",
        descriptionKey: "biologyModule2Desc",
      },
      {
        titleKey: "biologyModule3",
        descriptionKey: "biologyModule3Desc",
      },
      {
        titleKey: "biologyModule4",
        descriptionKey: "biologyModule4Desc",
      },
      {
        titleKey: "biologyModule5",
        descriptionKey: "biologyModule5Desc",
      },
    ],
  },
  chemistry: {
    titleKey: "chemistry",
    icon: <Atom size={40} />,
    color: {
      base: "#BF360C",
      accent: "#E64A19",
      iconBg: "linear-gradient(45deg, #BF360C, #E64A19)",
      shadow: "rgba(191, 54, 12, 0.6)",
      gradientFrom: "#BF360C",
      gradientTo: "#E64A19",
    },
    descriptionKey: "chemistryDescriptionLong",
    costUSD: 480,
    costUZS: 6000000,
    durationKey: "4",
    studentsEnrolled: 650,
    averageRating: 4.7,
    difficulty: "Высокая",
    certificatesKeys: ["certificateChemistry1", "certificateChemistry2"],
    modulesKeys: [
      {
        titleKey: "chemistryModule1",
        descriptionKey: "chemistryModule1Desc",
      },
      {
        titleKey: "chemistryModule2",
        descriptionKey: "chemistryModule2Desc",
      },
      {
        titleKey: "chemistryModule3",
        descriptionKey: "chemistryModule3Desc",
      },
      {
        titleKey: "chemistryModule4",
        descriptionKey: "chemistryModule4Desc",
      },
    ],
  },
  it: {
    titleKey: "it",
    icon: <Code size={40} />,
    color: {
      base: "#558B2F",
      accent: "#7CB342",
      iconBg: "linear-gradient(45deg, #558B2F, #7CB342)",
      shadow: "rgba(85, 139, 47, 0.6)",
      gradientFrom: "#558B2F",
      gradientTo: "#7CB342",
    },
    descriptionKey: "itDescriptionLong",
    costUSD: 899,
    costUZS: 11200000,
    durationKey: "8",
    studentsEnrolled: 2100,
    averageRating: 4.9,
    difficulty: "Высокая",
    certificatesKeys: ["certificateIt1", "certificateIt2", "certificateIt3"],
    modulesKeys: [
      {
        titleKey: "itModule1",
        descriptionKey: "itModule1Desc",
      },
      {
        titleKey: "itModule2",
        descriptionKey: "itModule2Desc",
      },
      {
        titleKey: "itModule3",
        descriptionKey: "itModule3Desc",
      },
      {
        titleKey: "itModule4",
        descriptionKey: "itModule4Desc",
      },
      {
        titleKey: "itModule5",
        descriptionKey: "itModule5Desc",
      },
      {
        titleKey: "itModule6",
        descriptionKey: "itModule6Desc",
      },
    ],
  },
  robotics: {
    titleKey: "robotics",
    icon: <Bot size={40} />,
    color: {
      base: "#006064",
      accent: "#00838F",
      iconBg: "linear-gradient(45deg, #006064, #00838F)",
      shadow: "rgba(0, 96, 100, 0.6)",
      gradientFrom: "#006064",
      gradientTo: "#00838F",
    },
    descriptionKey: "roboticsDescriptionLong",
    costUSD: 750,
    costUZS: 9400000,
    durationKey: "7",
    studentsEnrolled: 500,
    averageRating: 4.7,
    difficulty: "Очень высокая",
    certificatesKeys: ["certificateRobotics1", "certificateRobotics2"],
    modulesKeys: [
      {
        titleKey: "roboticsModule1",
        descriptionKey: "roboticsModule1Desc",
      },
      {
        titleKey: "roboticsModule2",
        descriptionKey: "roboticsModule2Desc",
      },
      {
        titleKey: "roboticsModule3",
        descriptionKey: "roboticsModule3Desc",
      },
      {
        titleKey: "roboticsModule4",
        descriptionKey: "roboticsModule4Desc",
      },
      {
        titleKey: "roboticsModule5",
        descriptionKey: "roboticsModule5Desc",
      },
    ],
  },
  physics: {
    titleKey: "physics",
    icon: <Atom size={40} />,
    color: {
      base: "#283593",
      accent: "#3F51B5",
      iconBg: "linear-gradient(45deg, #283593, #3F51B5)",
      shadow: "rgba(40, 53, 147, 0.6)",
      gradientFrom: "#283593",
      gradientTo: "#3F51B5",
    },
    descriptionKey: "physicsDescriptionLong",
    costUSD: 399,
    costUZS: 5000000,
    durationKey: "3",
    studentsEnrolled: 400,
    averageRating: 4.3,
    difficulty: "Средняя",
    certificatesKeys: ["certificatePhysics1", "certificatePhysics2"],
    modulesKeys: [
      {
        titleKey: "physicsModule1",
        descriptionKey: "physicsModule1Desc",
      },
      {
        titleKey: "physicsModule2",
        descriptionKey: "physicsModule2Desc",
      },
      {
        titleKey: "physicsModule3",
        descriptionKey: "physicsModule3Desc",
      },
      {
        titleKey: "physicsModule4",
        descriptionKey: "physicsModule4Desc",
      },
    ],
  },
  russian: {
    titleKey: "russian",
    icon: <BookOpen size={40} />,
    color: {
      base: "#4B2A80",
      accent: "#7C4FC0",
      iconBg: "linear-gradient(45deg, #4B2A80, #7C4FC0)",
      shadow: "rgba(75, 42, 128, 0.6)",
      gradientFrom: "#4B2A80",
      gradientTo: "#7C4FC0",
    },
    descriptionKey: "russianDescriptionLong",
    costUSD: 499,
    costUZS: 6200000,
    durationKey: "5",
    studentsEnrolled: 890,
    averageRating: 4.7,
    difficulty: "Легкая",
    certificatesKeys: ["certificateRussian1", "certificateRussian2"],
    modulesKeys: [
      {
        titleKey: "russianModule1",
        descriptionKey: "russianModule1Desc",
      },
      {
        titleKey: "russianModule2",
        descriptionKey: "russianModule2Desc",
      },
      {
        titleKey: "russianModule3",
        descriptionKey: "russianModule3Desc",
      },
      {
        titleKey: "russianModule4",
        descriptionKey: "russianModule4Desc",
      },
      {
        titleKey: "russianModule5",
        descriptionKey: "russianModule5Desc",
      },
    ],
  },
  marketing: {
    titleKey: "marketing",
    icon: <Megaphone size={40} />,
    color: {
      base: "#E65100",
      accent: "#FB8C00",
      iconBg: "linear-gradient(45deg, #E65100, #FB8C00)",
      shadow: "rgba(230, 81, 0, 0.6)",
      gradientFrom: "#E65100",
      gradientTo: "#FB8C00",
    },
    descriptionKey: "marketingDescriptionLong",
    costUSD: 350,
    costUZS: 4400000,
    durationKey: "8 недель",
    studentsEnrolled: 1500,
    averageRating: 4.6,
    difficulty: "Легкая",
    certificatesKeys: ["certificateMarketing1", "certificateMarketing2"],
    modulesKeys: [
      {
        titleKey: "marketingModule1",
        descriptionKey: "marketingModule1Desc",
      },
      {
        titleKey: "marketingModule2",
        descriptionKey: "marketingModule2Desc",
      },
      {
        titleKey: "marketingModule3",
        descriptionKey: "marketingModule3Desc",
      },
      {
        titleKey: "marketingModule4",
        descriptionKey: "marketingModule4Desc",
      },
    ],
  },
  computerLiteracy: {
    titleKey: "computerLiteracy",
    icon: <Laptop size={40} />,
    color: {
      base: "#004D40",
      accent: "#00695C",
      iconBg: "linear-gradient(45deg, #004D40, #00695C)",
      shadow: "rgba(0, 77, 64, 0.6)",
      gradientFrom: "#004D40",
      gradientTo: "#00695C",
    },
    descriptionKey: "computerLiteracyDescriptionLong",
    costUSD: 250,
    costUZS: 3100000,
    durationKey: "6 недель",
    studentsEnrolled: 1800,
    averageRating: 4.4,
    difficulty: "Очень легкая",
    certificatesKeys: [
      "certificateComputerLiteracy1",
      "certificateComputerLiteracy2",
    ],
    modulesKeys: [
      {
        titleKey: "computerLiteracyModule1",
        descriptionKey: "computerLiteracyModule1Desc",
      },
      {
        titleKey: "computerLiteracyModule2",
        descriptionKey: "computerLiteracyModule2Desc",
      },
      {
        titleKey: "computerLiteracyModule3",
        descriptionKey: "computerLiteracyModule3Desc",
      },
      {
        titleKey: "computerLiteracyModule4",
        descriptionKey: "computerLiteracyModule4Desc",
      },
    ],
  },
};

// CoursePage теперь НЕ принимает пропсы theme и toggleTheme
const CoursePage = () => {
  const { id } = useParams();
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  const course = coursesData[id];

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[var(--bg-from)] text-[var(--text-primary)] transition-colors duration-500">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center p-8 bg-[var(--card-bg)] rounded-xl shadow-lg border-[var(--card-border)] backdrop-blur-md"
        >
          <h2 className="text-3xl font-bold mb-4">{t("courseNotFound")}</h2>
          <p className="text-lg mb-6">{t("courseNotFound")}</p>
          <button
            onClick={() => navigate("/")}
            className="px-6 py-3 bg-[var(--gradient-from)] text-white rounded-full hover:opacity-90 transition duration-300 ease-in-out"
          >
            {t("backToHome")}
          </button>
        </motion.div>
      </div>
    );
  }

  // Define CSS variables for theming based on course colors
  // Переменные --bg-from, --text-primary и другие глобальные переменные темы
  // должны быть установлены в вашем ThemeProvider или напрямую в body/html через useEffect
  const rootStyle = {
    "--gradient-from": course.color.gradientFrom,
    "--gradient-to": course.color.gradientTo,
    "--accent-color": course.color.accent,
    "--glow-color": `${course.color.accent}`,
  };

  // Удален блок if (theme === 'dark') / else,
  // так как эти переменные будут управляться глобально через ThemeContext
  // и будут доступны через CSS-переменные, установленные на :root или body
  // Например, в вашем ThemeContext/Provider, вы должны устанавливать класс 'dark'
  // или соответствующие CSS-переменные на document.documentElement (html) или body
  // на основе текущей темы.

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  const moduleCardVariants = {
    offscreen: {
      y: 50,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };

  // Функция для переключения языка
  const toggleLanguage = () => {
    const newLang = i18n.language === "ru" ? "uz" : "ru";
    i18n.changeLanguage(newLang);
  };

  return (
    // Классы bg-[var(--bg-from)] и text-[var(--text-primary)]
    // будут работать, если эти CSS-переменные установлены глобально
    // (например, на элементе html или body)
    <div
      style={rootStyle}
      className="min-h-screen bg-[var(--bg-from)] text-[var(--text-primary)] transition-colors duration-500"
    >
      <AnimatePresence mode="wait">
        <motion.section
          key={id}
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={containerVariants}
          className="py-24 px-6 relative overflow-hidden"
        >
          {/* Background Gradient Blob */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.3 }}
            transition={{ duration: 1.5, type: "spring", delay: 0.5 }}
            className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob"
            style={{ background: course.color.base }}
          ></motion.div>
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.3 }}
            transition={{ duration: 1.5, type: "spring", delay: 0.7 }}
            className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob animation-delay-2000"
            style={{ background: course.color.accent }}
          ></motion.div>
          <motion.button
            onClick={() => navigate(-1)}
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 150 }}
            className="absolute top-24 left-6 md:left-50 p-3 rounded-full bg-[var(--card-bg)] border-[var(--card-border)] text-[var(--text-primary)] hover:bg-[var(--accent-color)] hover:text-white transition-all duration-300 ease-in-out z-20 group"
            style={{
              backdropFilter: "blur(15px) saturate(180%)",
              WebkitBackdropFilter: "blur(15px) saturate(180%)",
              boxShadow: `0 0 15px ${course.color.shadow}`,
            }}
          >
            <ArrowLeft
              size={24}
              className="group-hover:scale-110 transition-transform"
            />
          </motion.button>
          <motion.div
            variants={itemVariants}
            className="max-w-5xl mx-auto relative z-10"
          >
            {/* Кнопка "Назад" */}

            {/* УДАЛЕН DarkModeToggle компонент отсюда */}
            {/* <motion.div ...> <DarkModeToggle ... /> </motion.div> */}

            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.7, type: "spring", stiffness: 100 }}
              className="rounded-3xl p-10 shadow-2xl bg-[var(--card-bg)] border-[var(--card-border)] relative overflow-hidden group"
              style={{
                boxShadow: `0 20px 40px ${course.color.shadow}`,
                backdropFilter: "blur(20px) saturate(180%)", // Liquid glass effect
                WebkitBackdropFilter: "blur(20px) saturate(180%)", // For Safari
                border: "var(--card-border)",
              }}
            >
              {/* Subtle glowing border effect */}
              <div
                className="absolute inset-0 rounded-3xl pointer-events-none"
                style={{
                  boxShadow: `inset 0 0 10px var(--glow-color), 0 0 20px var(--glow-color), 0 0 30px var(--glow-color)`,
                  opacity: 0.2, // Adjust glow intensity
                  transition: "opacity 0.3s ease-in-out",
                }}
              ></div>
              {/* Hover glow effect */}
              <div
                className="absolute inset-0 rounded-3xl pointer-events-none opacity-0 group-hover:opacity-100"
                style={{
                  boxShadow: `0 0 40px var(--glow-color)`,
                  transition: "opacity 0.3s ease-in-out",
                }}
              ></div>

              <Parallax offset={10}>
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6, type: "spring" }}
                  className="mb-8 w-20 h-20 rounded-full flex items-center justify-center text-white text-4xl"
                  style={{
                    background: course.color.iconBg,
                    boxShadow: `0 10px 20px ${course.color.shadow}`,
                  }}
                >
                  {course.icon}
                </motion.div>
              </Parallax>

              <motion.h1
                variants={itemVariants}
                className="text-5xl font-extrabold mb-4 leading-tight"
                style={{ color: course.color.accent }}
              >
                {t(course.titleKey)}
              </motion.h1>
              <motion.p
                variants={itemVariants}
                className="text-xl text-[var(--text-secondary)] leading-relaxed max-w-3xl"
              >
                {t(course.descriptionKey)}
              </motion.p>

              {/* Added Stats Section */}
              <motion.div
                variants={itemVariants}
                className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-lg"
              >
                <div
                  className="flex items-center gap-3 bg-[var(--card-bg)] rounded-xl p-4 shadow-inner"
                  style={{
                    backdropFilter: "blur(10px) saturate(150%)",
                    WebkitBackdropFilter: "blur(10px) saturate(150%)",
                  }}
                >
                  <DollarSign
                    size={24}
                    className="text-[var(--accent-color)]"
                  />
                  <span>
                    <strong>{t("cost")}:</strong> ${course.costUSD} /{" "}
                    {course.costUZS.toLocaleString()} {t("costSuffix")}
                  </span>
                </div>
                <div
                  className="flex items-center gap-3 bg-[var(--card-bg)] rounded-xl p-4 shadow-inner"
                  style={{
                    backdropFilter: "blur(10px) saturate(150%)",
                    WebkitBackdropFilter: "blur(10px) saturate(150%)",
                  }}
                >
                  <Calendar size={24} className="text-[var(--accent-color)]" />
                  <span>
                    <strong>{t("duration")}:</strong> {t(course.durationKey)}
                  </span>
                </div>
                <div
                  className="flex items-center gap-3 bg-[var(--card-bg)] rounded-xl p-4 shadow-inner"
                  style={{
                    backdropFilter: "blur(10px) saturate(150%)",
                    WebkitBackdropFilter: "blur(10px) saturate(150%)",
                  }}
                >
                  <Users size={24} className="text-[var(--accent-color)]" />
                  <span>
                    <strong>{t("students")}:</strong>{" "}
                    {course.studentsEnrolled.toLocaleString()}
                  </span>
                </div>
                
              </motion.div>

              <motion.div variants={itemVariants} className="mt-10">
                <div
                  className="flex items-start gap-3 bg-[var(--card-bg)] rounded-xl p-4 shadow-inner"
                  style={{
                    backdropFilter: "blur(10px) saturate(150%)",
                    WebkitBackdropFilter: "blur(10px) saturate(150%)",
                  }}
                >
                  <Award
                    size={24}
                    className="text-[var(--accent-color)] flex-shrink-0 mt-1"
                  />
                  <div>
                    <strong>{t("certification")}:</strong>
                    <ul className="mt-1 space-y-1">
                      {course.certificatesKeys.map((certKey, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <CircleCheck
                            size={16}
                            className="text-[var(--accent-color)]"
                          />
                          {t(certKey)}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="mt-12">
    
                 <Link
                to="/contact"
                  className="inline-block px-10 py-5 rounded-full text-xl font-bold text-white bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 ease-in-out relative z-10"
                >
                  {t("enrollNow")}
                </Link>
              </motion.div>
            </motion.div>

            {/* Modules Section */}
            <motion.div variants={itemVariants} className="mt-20">
              <h2
                className="text-4xl font-extrabold text-center mb-12"
                style={{ color: course.color.accent }}
              >
                {t("learningStages")}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {course.modulesKeys.map((module, index) => (
                  <motion.div
                    key={index}
                    variants={moduleCardVariants}
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0.3 }}
                    className="bg-[var(--card-bg)] rounded-2xl p-6 border-[var(--card-border)] shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 ease-in-out cursor-pointer group relative"
                    style={{
                      backdropFilter: "blur(15px) saturate(160%)", // Liquid glass effect for modules
                      WebkitBackdropFilter: "blur(15px) saturate(160%)", // For Safari
                    }}
                  >
                    {/* Subtle glowing border effect for module cards */}
                    <div
                      className="absolute inset-0 rounded-2xl pointer-events-none"
                      style={{
                        boxShadow: `inset 0 0 8px var(--glow-color), 0 0 15px var(--glow-color)`,
                        opacity: 0.15, // Adjust glow intensity
                        transition: "opacity 0.3s ease-in-out",
                      }}
                    ></div>
                    {/* Hover glow effect for module cards */}
                    <div
                      className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100"
                      style={{
                        boxShadow: `0 0 30px var(--glow-color)`,
                        transition: "opacity 0.3s ease-in-out",
                      }}
                    ></div>
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center text-white mb-4"
                      style={{
                        background: course.color.iconBg,
                        boxShadow: `0 5px 15px ${course.color.shadow}`,
                      }}
                    >
                      {index + 1}
                    </div>
                    <h3
                      className="text-2xl font-bold mb-3"
                      style={{ color: course.color.accent }}
                    >
                      {t(module.titleKey)}
                    </h3>
                    <p className="text-[var(--text-secondary)] leading-relaxed">
                      {t(module.descriptionKey)}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </motion.section>
      </AnimatePresence>
    </div>
  );
};

export default CoursePage;
