import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import {
  Code, FlaskConical, Brain, Languages, Bot, BookOpen, Database, Shield,
  Palette, Megaphone, Rocket, Zap, Globe, UsersRound, Cloud, Cpu, Layers,
  Lightbulb, TrendingUp, Wifi, Fingerprint
} from "lucide-react";

// Expanded primary marquee items with descriptions
const marqueeItemsPrimary = [
  { id: "code", key: "coding", icon: <Code />, iconColor: "text-blue-500", description: { en: "Programming and software development", ru: "Программирование и разработка ПО", uz: "Dasturlash va dasturiy ta'minotni ishlab chiqish" } },
  { id: "science", key: "science", icon: <FlaskConical />, iconColor: "text-green-500", description: { en: "Scientific research and discovery", ru: "Научные исследования и открытия", uz: "Ilmiy tadqiqotlar va kashfiyotlar" } },
  { id: "ai", key: "artificialIntelligence", icon: <Brain />, iconColor: "text-purple-500", description: { en: "Machine learning and AI technologies", ru: "Машинное обучение и технологии ИИ", uz: "Sun'iy intellekt va mashina o‘qitish texnologiyalari" } },
  { id: "languages", key: "languages", icon: <Languages />, iconColor: "text-yellow-500", description: { en: "Multilingual communication and translation", ru: "Многоязычная коммуникация и перевод", uz: "Ko‘p tilli aloqa va tarjima" } },
  { id: "robotics", key: "robotics", icon: <Bot />, iconColor: "text-red-500", description: { en: "Automation and robotic systems", ru: "Автоматизация и робототехника", uz: "Avtomatlashtirish va robototexnika" } },
  { id: "education", key: "education", icon: <BookOpen />, iconColor: "text-indigo-500", description: { en: "Learning and educational platforms", ru: "Образование и обучающие платформы", uz: "Ta’lim va o‘quv platformalari" } },
  { id: "data", key: "dataScience", icon: <Database />, iconColor: "text-teal-500", description: { en: "Data analysis and visualization", ru: "Анализ и визуализация данных", uz: "Ma’lumotlarni tahlil qilish va vizualizatsiya" } },
  { id: "security", key: "cyberSecurity", icon: <Shield />, iconColor: "text-gray-500", description: { en: "Protecting digital systems and networks", ru: "Защита цифровых систем и сетей", uz: "Raqamli tizimlar va tarmoqlarni himoyalash" } },
  { id: "design", key: "design", icon: <Palette />, iconColor: "text-pink-500", description: { en: "Creative and visual design", ru: "Креативный и визуальный дизайн", uz: "Ijodiy va vizual dizayn" } },
  { id: "marketing", key: "marketing", icon: <Megaphone />, iconColor: "text-orange-500", description: { en: "Digital and social media marketing", ru: "Маркетинг в цифровой среде и соцсетях", uz: "Raqamli va ijtimoiy tarmoq marketingi" } },
];


// Expanded secondary marquee items with descriptions
const marqueeItemsSecondary = [
  { id: "innovation", key: "innovation", icon: <Rocket />, iconColor: "text-sky-500", description: { en: "Cutting-edge technological advancements", ru: "Передовые технологические достижения", uz: "Zamonaviy texnologik yutuqlar" } },
  { id: "energy", key: "energy", icon: <Zap />, iconColor: "text-amber-500", description: { en: "Sustainable energy solutions", ru: "Устойчивые энергетические решения", uz: "Barqaror energiya yechimlari" } },
  { id: "global", key: "global", icon: <Globe />, iconColor: "text-emerald-500", description: { en: "Global connectivity and collaboration", ru: "Глобальная связь и сотрудничество", uz: "Global aloqa va hamkorlik" } },
  { id: "community", key: "community", icon: <UsersRound />, iconColor: "text-rose-500", description: { en: "Building inclusive communities", ru: "Создание инклюзивных сообществ", uz: "Inklyuziv jamiyatlarni shakllantirish" } },
  { id: "cloud", key: "cloudComputing", icon: <Cloud />, iconColor: "text-blue-400", description: { en: "Scalable cloud infrastructure", ru: "Масштабируемая облачная инфраструктура", uz: "Masshtablanadigan bulutli infratuzilma" } },
  { id: "cpu", key: "processing", icon: <Cpu />, iconColor: "text-gray-400", description: { en: "High-performance processing systems", ru: "Высокопроизводительные системы обработки", uz: "Yuqori samarali ishlov berish tizimlari" } },
  { id: "architecture", key: "architecture", icon: <Layers />, iconColor: "text-cyan-400", description: { en: "System design and architecture", ru: "Системный дизайн и архитектура", uz: "Tizim dizayni va arxitekturasi" } },
  { id: "creativity", key: "creativity", icon: <Lightbulb />, iconColor: "text-yellow-400", description: { en: "Innovation through creative thinking", ru: "Инновации через креативное мышление", uz: "Ijodiy fikrlash orqali innovatsiyalar" } },
];

const MarqueeSection = () => {
  const { t } = useTranslation();
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile devices
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section className="relative overflow-hidden py-12 sm:py-16">
      {/* Background with gradient and simplified blobs */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,var(--bg-to)_0%,var(--bg-from)_70%)]">
        {!isMobile && (
          <>
            <div
              className="absolute top-0 left-[5%] h-[200px] w-[200px] animate-[blob-wiggle_12s_infinite_alternate] rounded-full mix-blend-soft-light filter blur-[80px] opacity-40"
              style={{ backgroundColor: "var(--blob-blue)" }}
            />
            <div
              className="absolute bottom-10 right-[15%] h-[250px] w-[250px] animate-[blob-drift_18s_linear_infinite_reverse] rounded-full mix-blend-soft-light filter blur-[100px] opacity-35"
              style={{ backgroundColor: "var(--blob-pink)" }}
            />
          </>
        )}
      </div>

      {/* Simplified keyframe animations and soft shadows */}
      <style jsx>{`
        @keyframes blob-wiggle {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(10px, -10px) scale(1.02); }
        }
        @keyframes blob-drift {
          0% { transform: translate(-20px, -15px); opacity: 0.3; }
          50% { transform: translate(40px, 25px); opacity: 0.4; }
          100% { transform: translate(-20px, -15px); opacity: 0.3; }
        }
        .marquee-container {
          position: relative;
        }
        .marquee-container::before,
        .marquee-container::after {
          content: '';
          position: absolute;
          top: 0;
          bottom: 0;
          width: 60px;
          z-index: 15;
          pointer-events: none;
        }
        .marquee-container::before {
          left: 0;
          background: linear-gradient(to right, rgba(0, 0, 0, 0.15), transparent);
        }
        .marquee-container::after {
          right: 0;
          background: linear-gradient(to left, rgba(0, 0, 0, 0.15), transparent);
        }
        @media (max-width: 640px) {
          .marquee-container::before,
          .marquee-container::after {
            width: 30px;
          }
        }
      `}</style>

      {/* Section title */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center p-4 text-3xl sm:text-4xl font-bold mb-8 bg-clip-text text-transparent relative z-10"
        style={{ backgroundImage: `linear-gradient(45deg, var(--gradient-from) 30%, var(--gradient-to) 70%)` }}
      >
        {t("marqueeSectionTitle")}
      </motion.h2>

      {/* Primary Marquee */}
      <div className="marquee-container relative">
        <Marquee
          pauseOnHover={!isMobile}
          gradient={false}
          speed={isMobile ? 30 : 40}
          className="relative z-10 py-4"
        >
          {marqueeItemsPrimary.map((item) => (
            <motion.div
              key={item.id}
              className={`inline-flex items-center justify-center gap-4 mx-5 px-5 py-3 rounded-lg shadow-md transition-all duration-300 ${isMobile ? "" : "hover:scale-105"}`}
              style={{
                backgroundColor: `rgba(var(--card-bg-rgb), 0.85)`,
                border: `1px solid rgba(var(--card-border-rgb), 0.6)`,
              }}
              title={t(item.description)} // Tooltip for description
            >
              <span className={`${item.baseSize} ${item.iconColor}`}>{item.icon}</span>
              <span className={`${item.textBaseSize} font-semibold whitespace-nowrap`} style={{ color: `var(--text-primary)` }}>
                {t(item.key)}
              </span>
            </motion.div>
          ))}
        </Marquee>
      </div>

      {/* Secondary Marquee - Hidden on mobile */}
      {!isMobile && (
        <div className="marquee-container relative">
          <Marquee
            pauseOnHover
            gradient={false}
            speed={30}
            direction="right"
            className="relative z-10 py-3 mt-4"
          >
            {marqueeItemsSecondary.map((item) => (
              <motion.div
                key={item.id}
                className="inline-flex items-center justify-center gap-2 mx-3 px-3 py-2 rounded-lg shadow-sm transition-all duration-300 hover:scale-105"
                style={{
                  backgroundColor: `rgba(var(--card-bg-rgb), 0.75)`,
                  border: `1px solid rgba(var(--card-border-rgb), 0.5)`,
                }}
                title={t(item.description)} // Tooltip for description
              >
                <span className={`${item.baseSize} ${item.iconColor}`}>{item.icon}</span>
                <span className={`${item.textBaseSize} font-medium whitespace-nowrap`} style={{ color: `var(--text-secondary)` }}>
                  {t(item.key)}
                </span>
              </motion.div>
            ))}
          </Marquee>
        </div>
      )}
    </section>
  );
};

export default React.memo(MarqueeSection);