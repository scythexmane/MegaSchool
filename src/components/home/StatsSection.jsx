import React from "react";
import CountUp from "react-countup";
import { useTranslation } from "react-i18next";

const stats = [
  { value: 1200, labelKey: "students" },
  { value: 35, labelKey: "coursesCount" },
  { value: 15, labelKey: "teachersCount" },
  { value: 5, labelKey: "yearsExperience" }
];

const StatsSection = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-10">
          {t("ourAchievements")}
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {stats.map((stat, index) => (
            <div key={index}>
              <h3 className="text-4xl font-extrabold text-blue-600 dark:text-blue-400">
                <CountUp end={stat.value} duration={2} />
                {stat.labelKey === "yearsExperience" && "+"}
              </h3>
              <p className="mt-2 text-lg text-gray-700 dark:text-gray-300">
                {t(stat.labelKey)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
