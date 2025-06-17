// src/pages/Courses.jsx

import React, { useState, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";

// Komponentlar
import CoursesIntro from "./CoursesIntro";
import CategoryFilter from "./CategoryFilter";
import CoursesGrid from "./CoursesGrid";
import SearchBar from "./SearchBar";
import Breadcrumb from "./Breadcrumb";
import NoCoursesFound from "./NoCoursesFound";

// Обновленные данные курсов с использованием строковых ID,
// которые совпадают с ключами в coursesData на странице CoursePage.jsx,
// и с ключами переводов для title, description, level и duration.
const ALL_COURSES_DATA = [
  {
    id: "english",
    title: "english", // Используем ключ перевода "english"
    description: "englishDescriptionLong", // Используем ключ перевода для описания
    category: "languages",
    image: "/images/courses/english.webp",
    price: "55$",
    level: "level_beginner", // Ключ перевода
    duration: "duration_3_months", // Ключ перевода
  },
  {
    id: "russian",
    title: "russian", // Используем ключ перевода "russian"
    description: "russianDescriptionLong", // Используем ключ перевода для описания
    category: "languages",
    image: "/images/courses/russian.webp",
    price: "55$",
    level: "level_beginner", // Ключ перевода
    duration: "duration_2_months", // Ключ перевода
  },
  {
    id: "biology",
    title: "biology", // Используем ключ перевода "biology"
    description: "biologyDescriptionLong", // Используем ключ перевода для описания
    category: "science",
    image: "/images/courses/biology.webp",
    price: "55$",
    level: "level_advanced", // Ключ перевода
    duration: "duration_4_months", // Ключ перевода
  },
  {
    id: "chemistry",
    title: "chemistry", // Используем ключ перевода "chemistry"
    description: "chemistryDescriptionLong", // Используем ключ перевода для описания
    category: "science",
    image: "/images/courses/chemistry.webp",
    price: "55$",
    level: "level_intermediate", // Ключ перевода
    duration: "duration_3_months", // Ключ перевода
  },
  {
    id: "robotics",
    title: "robotics", // Используем ключ перевода "robotics"
    description: "roboticsDescriptionLong", // Используем ключ перевода для описания
    category: "it",
    image: "/images/courses/robotics.webp",
    price: "80$",
    level: "level_beginner", // Ключ перевода
    duration: "duration_5_months", // Ключ перевода
  },
  {
    id: "it",
    title: "it", // Используем ключ перевода "it"
    description: "itDescriptionLong", // Используем ключ перевода для описания
    category: "it",
    image: "/images/courses/it.webp",
    price: "899$",
    level: "level_advanced", // Ключ перевода
    duration: "duration_8_months", // Ключ перевода
  },
  {
    id: "math",
    title: "math", // Используем ключ перевода "math"
    description: "mathDescriptionLong", // Используем ключ перевода для описания
    category: "science",
    image: "/images/courses/math.webp",
    price: "450$",
    level: "level_high", // Ключ перевода
    duration: "duration_4_months", // Ключ перевода
  },
  {
    id: "physics",
    title: "physics", // Используем ключ перевода "physics"
    description: "physicsDescriptionLong", // Используем ключ перевода для описания
    category: "science",
    image: "/images/courses/physics.webp",
    price: "399$",
    level: "level_medium", // Ключ перевода
    duration: "duration_3_months", // Ключ перевода
  },
  {
    id: "marketing",
    title: "marketing", // Используем ключ перевода "marketing" (для ораторского искусства)
    description: "marketingDescriptionLong", // Используем ключ перевода для описания
    category: "business", // новая категория, если нужно
    image: "/images/courses/marketing.webp",
    price: "350$",
    level: "level_easy", // Ключ перевода
    duration: "duration_8_weeks", // Ключ перевода
  },
  {
    id: "computerLiteracy",
    title: "computerLiteracy", // Используем ключ перевода "computerLiteracy"
    description: "computerLiteracyDescriptionLong", // Используем ключ перевода для описания
    category: "it",
    image: "/images/courses/computer-literacy.webp",
    price: "250$",
    level: "level_very_easy", // Ключ перевода
    duration: "duration_6_weeks", // Ключ перевода
  },
];

const Courses = () => {
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCourses = useMemo(() => {
    return ALL_COURSES_DATA.filter((course) => {
      const matchesCategory =
        selectedCategory === "all" || course.category === selectedCategory;
      const matchesSearch =
        t(course.title).toLowerCase().includes(searchQuery.toLowerCase()) ||
        t(course.description).toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery, t]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  return (
    <div className="bg-[var(--bg-from)] min-h-screen text-[var(--text-primary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <Breadcrumb
          items={[
            { label: "home", path: "/" }, // Используем ключ "home" для перевода
            { label: "coursesPageTitle", path: "/courses" }, // Используем ключ "coursesPageTitle" для перевода
          ]}
        />
        <CoursesIntro />
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 justify-between items-center mb-12 mt-10">
          <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
          <CategoryFilter
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        </div>
        <AnimatePresence mode="wait">
          {filteredCourses.length > 0 ? (
            <motion.div key="courses-grid" variants={containerVariants} initial="hidden" animate="visible">
              <CoursesGrid courses={filteredCourses} />
            </motion.div>
          ) : (
            <motion.div key="no-courses-found" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <NoCoursesFound />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Courses;