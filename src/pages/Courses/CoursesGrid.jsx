import React from "react";
import CourseCard from "./CourseCard";
import NoCoursesFound from "./NoCoursesFound";

const CoursesGrid = ({ courses }) => {
  if (courses.length === 0) return <NoCoursesFound />;

  return (
    <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
      {courses.map((course) => (
        <CourseCard key={course.id} title={course.title} />
      ))}
    </div>
  );
};

export default CoursesGrid;
