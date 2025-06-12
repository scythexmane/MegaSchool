import React from "react";
import Marquee from "react-fast-marquee";
import { useTranslation } from "react-i18next";

const MarqueeSection = () => {
  const { t } = useTranslation();

  const items = [
    "Python",
    "Scratch",
    "Frontend",
    "Backend",
    "C++",
    "Robotics",
    "Biologiya",
    "Kimyo",
    "Ingliz tili",
    "Rus tili",
    "O‘zbek tili"
  ];

  return (
    <section className="py-10 bg-white dark:bg-gray-950">
      <Marquee pauseOnHover gradient={false} speed={50}>
        {items.map((item, index) => (
          <span
            key={index}
            className="text-xl font-medium mx-10 text-blue-600 dark:text-blue-400"
          >
            {item}
          </span>
        ))}
      </Marquee>
    </section>
  );
};

export default MarqueeSection;
