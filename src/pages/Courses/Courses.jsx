import React, { useState } from "react";
import CoursesIntro from "./CoursesIntro.jsx";
import CategoryFilter from "./CategoryFilter.jsx";
import CoursesGrid from "./CoursesGrid.jsx";
import SearchBar from "./SearchBar.jsx";
import Breadcrumb from "./Breadcrumb.jsx";
import NoCoursesFound from "./NoCoursesFound.jsx";
import CourseCard from "./CourseCard.jsx";

const allCourses = [
  { id: 1, title: "course_en", category: "languages" },
  { id: 2, title: "course_ru", category: "languages" },
  { id: 3, title: "course_uz", category: "languages" },
  { id: 4, title: "course_bio", category: "science" },
  { id: 5, title: "course_chem", category: "science" },
  { id: 6, title: "course_robot", category: "it" },
  { id: 7, title: "course_frontend", category: "it" },
  { id: 8, title: "course_backend", category: "it" },
  { id: 9, title: "course_cpp", category: "it" },
  { id: 10, title: "course_scratch", category: "it" },
  { id: 11, title: "course_python", category: "it" },
];

const Courses = () => {
  const [category, setCategory] = useState("all");
  const [search, setSearch] = useState("");

  const filteredCourses = allCourses.filter((course) => {
    const matchesCategory = category === "all" || course.category === category;
    const matchesSearch = course.title.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <Breadcrumb />
      <CoursesIntro />
      <SearchBar search={search} setSearch={setSearch} />
      <CategoryFilter category={category} setCategory={setCategory} />
      <CoursesGrid courses={filteredCourses} />
    </div>
  );
};

export default Courses;
