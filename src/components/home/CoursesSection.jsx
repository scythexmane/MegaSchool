import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { BookOpen, Code, FlaskConical, Brain, Languages, Bot, CircuitBoard } from "lucide-react";

const courses = [
  { titleKey: "english", icon: <Languages size={32} />, color: "bg-blue-100" },
  { titleKey: "russian", icon: <Languages size={32} />, color: "bg-purple-100" },
  { titleKey: "uzbek", icon: <Languages size={32} />, color: "bg-green-100" },
  { titleKey: "chemistry", icon: <FlaskConical size={32} />, color: "bg-pink-100" },
  { titleKey: "biology", icon: <Brain size={32} />, color: "bg-yellow-100" },
  { titleKey: "robotics", icon: <Bot size={32} />, color: "bg-red-100" },
  { titleKey: "programming", icon: <Code size={32} />, color: "bg-orange-100" },
];

const CoursesSection = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-gray-900 dark:text-white">
          {t("ourCourses")}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {courses.map((course, index) => (
            <div
              key={index}
              className={`rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 ${course.color} dark:bg-gray-800`}
            >
              <div className="mb-4 text-blue-600 dark:text-blue-400">{course.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {t(course.titleKey)}
              </h3>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <Link
            to="/courses"
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
          >
            {t("viewAllCourses")}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
