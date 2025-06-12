import React from "react";
import { useTranslation } from "react-i18next";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Zuhra Karimova",
    comment: "MegaSchoolda IT kurslariga qatnashdim va juda ko‘p narsalarni o‘rgandim!",
    rating: 5
  },
  {
    name: "Bekzod Akhmedov",
    comment: "Ingliz tili kurslari orqali IELTS balim oshdi. O‘qituvchilar juda kuchli!",
    rating: 4
  },
  {
    name: "Malika Tursunova",
    comment: "Kimyo va biologiyadan chuqur bilim oldim. Juda foydali va zamonaviy metodika.",
    rating: 5
  }
];

const Feedback = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-white dark:bg-gray-950">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-12">
          {t("studentFeedback")}
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6"
            >
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                "{item.comment}"
              </p>
              <div className="flex justify-center gap-1 mb-2">
                {[...Array(item.rating)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400" />
                ))}
              </div>
              <h4 className="font-semibold text-blue-600 dark:text-blue-400">
                – {item.name}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Feedback;
