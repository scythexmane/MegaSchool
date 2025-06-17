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

// Kurslar ma'lumotlari
const ALL_COURSES_DATA = [
  {
    id: 1,
    title: "course_en_title",
    description: "course_en_description",
    category: "languages",
    image: "/images/courses/english.webp",
    price: "55$",
    level: "beginner",
    duration: "3 months",
  },
  {
    id: 2,
    title: "course_ru_title",
    description: "course_ru_description",
    category: "languages",
    image: "/images/courses/russian.webp",
    price: "55$",
    level: "beginner",
    duration: "2 months",
  },
  {
    id: 3,
    title: "course_uz_title",
    description: "course_uz_description",
    category: "languages",
    image: "/images/courses/uzbek.webp",
    price: "55$",
    level: "intermediate",
    duration: "2.5 months",
  },
  {
    id: 4,
    title: "course_bio_title",
    description: "course_bio_description",
    category: "science",
    image: "/images/courses/biology.webp",
    price: "55$",
    level: "advanced",
    duration: "4 months",
  },
  {
    id: 5,
    title: "course_chem_title",
    description: "course_chem_description",
    category: "science",
    image: "/images/courses/chemistry.webp",
    price: "55$",
    level: "intermediate",
    duration: "3 months",
  },
  {
    id: 6,
    title: "course_robot_title",
    description: "course_robot_description",
    category: "it",
    image: "/images/courses/robotics.webp",
    price: "80$",
    level: "beginner",
    duration: "5 months",
  },
  {
    id: 7,
    title: "course_frontend_title",
    description: "course_frontend_description",
    category: "it",
    image: "/images/courses/frontend.webp",
    price: "100$",
    level: "advanced",
    duration: "6 months",
  },
  {
    id: 8,
    title: "course_backend_title",
    description: "course_backend_description",
    category: "it",
    image: "/images/courses/backend.webp",
    price: "100$",
    level: "advanced",
    duration: "7 months",
  },
  {
    id: 9,
    title: "course_cpp_title",
    description: "course_cpp_description",
    category: "it",
    image: "/images/courses/cpp.webp",
    price: "100$",
    level: "intermediate",
    duration: "5 months",
  },
  {
    id: 10,
    title: "course_scratch_title",
    description: "course_scratch_description",
    category: "it",
    image: "/images/courses/scratch.webp",
    price: "55$",
    level: "beginner",
    duration: "3 months",
  },
  {
    id: 11,
    title: "course_python_title",
    description: "course_python_description",
    category: "it",
    image: "/images/courses/python.webp",
    price: "80$",
    level: "intermediate",
    duration: "4 months",
  },
];

const Courses = () => {
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  // Filtrlash optimizatsiyasi
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
            { label: t("home"), path: "/" },
            { label: t("coursesPageTitle"), path: "/courses" },
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