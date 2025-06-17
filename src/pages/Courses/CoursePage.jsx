import React from "react";
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
  Palette,
  Megaphone,
  Laptop,
  DollarSign,
  Calendar,
  Award,
  CircleCheck,
  ArrowLeft,
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
      base: "#4A90E2",
      accent: "#6ECFF6",
      iconBg: "linear-gradient(45deg, #4A90E2, #6ECFF6)",
      shadow: "rgba(74, 144, 226, 0.4)",
      gradientFrom: "#4A90E2",
      gradientTo: "#6ECFF6",
    },
    descriptionKey: "englishDescriptionLong",
    costUSD: 599,
    costUZS: 7500000,
    durationKey: "6 месяцев",
    certificatesKeys: [
      "certificateEnglish1", // Замените на ключи перевода
      "certificateEnglish2",
    ],
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
      base: "#F5A623",
      accent: "#F8E71C",
      iconBg: "linear-gradient(45deg, #F5A623, #F8E71C)",
      shadow: "rgba(245, 166, 35, 0.4)",
      gradientFrom: "#F5A623",
      gradientTo: "#F8E71C",
    },
    descriptionKey: "mathDescriptionLong",
    costUSD: 450,
    costUZS: 5600000,
    durationKey: "4 месяца",
    certificatesKeys: [
      "certificateMath1",
      "certificateMath2",
    ],
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
      base: "#7ED321",
      accent: "#417505",
      iconBg: "linear-gradient(45deg, #7ED321, #417505)",
      shadow: "rgba(126, 211, 33, 0.4)",
      gradientFrom: "#7ED321",
      gradientTo: "#417505",
    },
    descriptionKey: "biologyDescriptionLong",
    costUSD: 520,
    costUZS: 6500000,
    durationKey: "5 месяцев",
    certificatesKeys: [
      "certificateBiology1",
      "certificateBiology2",
    ],
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
      base: "#BD10E0",
      accent: "#9013FE",
      iconBg: "linear-gradient(45deg, #BD10E0, #9013FE)",
      shadow: "rgba(189, 16, 224, 0.4)",
      gradientFrom: "#BD10E0",
      gradientTo: "#9013FE",
    },
    descriptionKey: "chemistryDescriptionLong",
    costUSD: 480,
    costUZS: 6000000,
    durationKey: "4 месяца",
    certificatesKeys: [
      "certificateChemistry1",
      "certificateChemistry2",
    ],
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
      base: "#50E3C2",
      accent: "#B8E986",
      iconBg: "linear-gradient(45deg, #50E3C2, #B8E986)",
      shadow: "rgba(80, 227, 194, 0.4)",
      gradientFrom: "#50E3C2",
      gradientTo: "#B8E986",
    },
    descriptionKey: "itDescriptionLong",
    costUSD: 899,
    costUZS: 11200000,
    durationKey: "8 месяцев",
    certificatesKeys: [
      "certificateIt1",
      "certificateIt2",
      "certificateIt3",
    ],
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
      base: "#8B572A",
      accent: "#D6A76C",
      iconBg: "linear-gradient(45deg, #8B572A, #D6A76C)",
      shadow: "rgba(139, 87, 42, 0.4)",
      gradientFrom: "#8B572A",
      gradientTo: "#D6A76C",
    },
    descriptionKey: "roboticsDescriptionLong",
    costUSD: 750,
    costUZS: 9400000,
    durationKey: "7 месяцев",
    certificatesKeys: [
      "certificateRobotics1",
      "certificateRobotics2",
    ],
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
  drawing: {
    titleKey: "drawing",
    icon: <Palette size={40} />,
    color: {
      base: "#FF6F61",
      accent: "#FFB6C1",
      iconBg: "linear-gradient(45deg, #FF6F61, #FFB6C1)",
      shadow: "rgba(255, 111, 97, 0.4)",
      gradientFrom: "#FF6F61",
      gradientTo: "#FFB6C1",
    },
    descriptionKey: "drawingDescriptionLong",
    costUSD: 399,
    costUZS: 5000000,
    durationKey: "3 месяца",
    certificatesKeys: [
      "certificateDrawing1",
      "certificateDrawing2",
    ],
    modulesKeys: [
      {
        titleKey: "drawingModule1",
        descriptionKey: "drawingModule1Desc",
      },
      {
        titleKey: "drawingModule2",
        descriptionKey: "drawingModule2Desc",
      },
      {
        titleKey: "drawingModule3",
        descriptionKey: "drawingModule3Desc",
      },
      {
        titleKey: "drawingModule4",
        descriptionKey: "drawingModule4Desc",
      },
    ],
  },
  russian: {
    titleKey: "russian",
    icon: <BookOpen size={40} />,
    color: {
      base: "#417505",
      accent: "#7ED321",
      iconBg: "linear-gradient(45deg, #417505, #7ED321)",
      shadow: "rgba(65, 117, 5, 0.4)",
      gradientFrom: "#417505",
      gradientTo: "#7ED321",
    },
    descriptionKey: "russianDescriptionLong",
    costUSD: 499,
    costUZS: 6200000,
    durationKey: "5 месяцев",
    certificatesKeys: [
      "certificateRussian1",
      "certificateRussian2",
    ],
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
  oratory: {
    titleKey: "oratory",
    icon: <Megaphone size={40} />,
    color: {
      base: "#D0021B",
      accent: "#F5A623",
      iconBg: "linear-gradient(45deg, #D0021B, #F5A623)",
      shadow: "rgba(208, 2, 27, 0.4)",
      gradientFrom: "#D0021B",
      gradientTo: "#F5A623",
    },
    descriptionKey: "oratoryDescriptionLong",
    costUSD: 350,
    costUZS: 4400000,
    durationKey: "8 недель",
    certificatesKeys: [
      "certificateOratory1",
      "certificateOratory2",
    ],
    modulesKeys: [
      {
        titleKey: "oratoryModule1",
        descriptionKey: "oratoryModule1Desc",
      },
      {
        titleKey: "oratoryModule2",
        descriptionKey: "oratoryModule2Desc",
      },
      {
        titleKey: "oratoryModule3",
        descriptionKey: "oratoryModule3Desc",
      },
      {
        titleKey: "oratoryModule4",
        descriptionKey: "oratoryModule4Desc",
      },
    ],
  },
  computerLiteracy: {
    titleKey: "computerLiteracy",
    icon: <Laptop size={40} />,
    color: {
      base: "#001F3F",
      accent: "#0074D9",
      iconBg: "linear-gradient(45deg, #001F3F, #0074D9)",
      shadow: "rgba(0, 31, 63, 0.4)",
      gradientFrom: "#001F3F",
      gradientTo: "#0074D9",
    },
    descriptionKey: "computerLiteracyDescriptionLong",
    costUSD: 250,
    costUZS: 3100000,
    durationKey: "6 недель",
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

const CoursePage = () => {
  const { id } = useParams();
  const { t, i18n } = useTranslation(); // Получаем i18n объект для смены языка
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

  // Define CSS variables for theming based on light/dark mode and course colors
  const rootStyle = {
    "--gradient-from": course.color.gradientFrom,
    "--gradient-to": course.color.gradientTo,
    "--accent-color": course.color.accent,
  };

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
    <div style={rootStyle} className="min-h-screen bg-[var(--bg-from)] text-[var(--text-primary)] transition-colors duration-500">
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

          <motion.div
            variants={itemVariants}
            className="max-w-5xl mx-auto relative z-10"
          >
            <div className="mb-10 flex justify-between items-center">
              <motion.button
                onClick={() => navigate(-1)}
                className="text-[var(--text-secondary)] hover:text-[var(--accent-color)] transition-colors duration-300 flex items-center gap-2"
                whileHover={{ x: -5 }}
              >
                <ArrowLeft size={20} />
                {t("back")}
              </motion.button>
              {/* Кнопка переключения языка */}
              <motion.button
                onClick={toggleLanguage}
                className="px-4 py-2 rounded-full text-sm font-semibold bg-[var(--card-bg)] border-[var(--card-border)] text-[var(--text-primary)] hover:bg-[var(--card-border)] transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {i18n.language === "ru" ? "O'zbek" : "Русский"}
              </motion.button>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.7, type: "spring", stiffness: 100 }}
              className="rounded-3xl p-10 shadow-2xl bg-[var(--card-bg)] border-[var(--card-border)] backdrop-blur-md relative overflow-hidden"
              style={{
                boxShadow: `0 20px 40px ${course.color.shadow}`,
                borderColor: `${course.color.accent}40`,
              }}
            >
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

              <motion.div
                variants={itemVariants}
                className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 text-lg"
              >
                <div className="flex items-center gap-3">
                  <DollarSign size={24} className="text-[var(--accent-color)]" />
                  <span>
                    <strong>{t("cost")}:</strong> ${course.costUSD} /{" "}
                    {course.costUZS.toLocaleString()} {t("costSuffix")}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar size={24} className="text-[var(--accent-color)]" />
                  <span>
                    <strong>{t("duration")}:</strong> {t(course.durationKey)}
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <Award size={24} className="text-[var(--accent-color)] flex-shrink-0 mt-1" />
                  <div>
                    <strong>{t("certification")}:</strong>
                    <ul className="mt-1 space-y-1">
                      {course.certificatesKeys.map((certKey, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <CircleCheck size={16} className="text-[var(--accent-color)]" />
                          {t(certKey)}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="mt-12"
              >
                <a
                  href="#enroll"
                  className="inline-block px-10 py-5 rounded-full text-xl font-bold text-white bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 ease-in-out"
                >
                  {t("enrollNow")}
                </a>
              </motion.div>
            </motion.div>

            {/* Modules Section */}
            <motion.div
              variants={itemVariants}
              className="mt-20"
            >
              <h2 className="text-4xl font-extrabold text-center mb-12" style={{ color: course.color.accent }}>
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
                    className="bg-[var(--card-bg)] rounded-2xl p-6 border-[var(--card-border)] shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 ease-in-out cursor-pointer"
                    style={{ borderColor: `${course.color.accent}40` }}
                  >
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center text-white mb-4"
                      style={{
                        background: course.color.iconBg,
                        boxShadow: `0 5px 15px ${course.color.shadow}`,
                      }}
                    >
                      {index + 1}
                    </div>
                    <h3 className="text-2xl font-bold mb-3" style={{ color: course.color.accent }}>
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