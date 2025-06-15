import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CourseCard from './CourseCard';
import NoCoursesFound from './NoCoursesFound';

const CoursesGrid = ({ courses }) => {
  // Варианты анимации для сетки контейнера
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08, // Карточки будут появляться по очереди с небольшой задержкой
        delayChildren: 0.1 // Небольшая задержка перед началом анимации первой карточки
      }
    }
  };

  if (courses.length === 0) {
    return <NoCoursesFound />;
  }

  return (
    <motion.div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-10"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="hidden" // Для AnimatePresence
    >
      <AnimatePresence>
        {courses.map((course) => (
          // CourseCard уже имеет свою анимацию 'hidden' и 'visible'
          <CourseCard key={course.id} course={course} />
        ))}
      </AnimatePresence>
    </motion.div>
  );
};

export default CoursesGrid;