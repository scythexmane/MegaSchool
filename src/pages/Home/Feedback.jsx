import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaStar } from "react-icons/fa";
import { User } from "lucide-react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Import Swiper modules
import { Pagination, Autoplay, Navigation } from "swiper/modules";

// --- Данные отзывов ---
const allTestimonials = [
  { id: 1, name: "Ali", commentKey: "testimonial1", rating: 5 },
  { id: 2, name: "Vali", commentKey: "testimonial2", rating: 4 },
  { id: 3, name: "Hasan", commentKey: "testimonial3", rating: 3 },
  { id: 4, name: "Husan", commentKey: "testimonial4", rating: 5 },
  { id: 5, name: "Gulnora", commentKey: "testimonial5", rating: 5 },
  { id: 6, name: "Farida", commentKey: "testimonial6", rating: 4 },
  { id: 7, name: "Botir", commentKey: "testimonial7", rating: 5 },
  { id: 8, name: "Madina", commentKey: "testimonial8", rating: 3 },
  { id: 9, name: "Rustam", commentKey: "testimonial9", rating: 5 },
  { id: 10, name: "Nigina", commentKey: "testimonial10", rating: 4 },
];

const Feedback = () => {
  const { t } = useTranslation();
  const [selectedRating, setSelectedRating] = useState(0);

  const filteredTestimonials = Array.isArray(allTestimonials)
    ? selectedRating
      ? allTestimonials.filter((item) => item.rating === selectedRating)
      : allTestimonials
    : [];

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="py-20 md:py-32 relative overflow-hidden perspective-1200">
      {/* Фоновые Blob'ы для декора */}
      <div
        className="absolute top-0 left-[10%] w-72 h-72 rounded-full mix-blend-soft-light filter blur-3xl opacity-30 animate-blob"
        style={{ background: "linear-gradient(135deg, var(--blob-blue), var(--blob-pink))" }}
      ></div>
      <div
        className="absolute bottom-10 right-[15%] w-96 h-96 rounded-full mix-blend-soft-light filter blur-3xl opacity-30 animate-blob-alt"
        style={{ background: "linear-gradient(135deg, var(--blob-pink), var(--blob-blue))" }}
      ></div>
      <style jsx="true">{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-30px, 40px) scale(1.2); }
        }
        @keyframes blob-alt {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(30px, -40px) scale(0.8); }
        }

        /* Стили для стрелок */
        .swiper-button-prev,
        .swiper-button-next {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--gradient-from), var(--gradient-to));
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3), inset 0 2px 5px rgba(255, 255, 255, 0.3);
          color: white;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0.9;
        }

        .swiper-button-prev:hover,
        .swiper-button-next:hover {
          transform: scale(1.2) rotate(5deg);
          opacity: 1;
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.4);
        }

        .swiper-button-prev.swiper-button-disabled,
        .swiper-button-next.swiper-button-disabled {
          opacity: 0.3;
          cursor: not-allowed;
          transform: scale(1);
        }

        .swiper-button-prev {
          left: -80px;
        }
        .swiper-button-next {
          right: -80px;
        }

        /* Кастомные SVG иконки для стрелок */
        .swiper-button-prev::after,
        .swiper-button-next::after {
          content: none;
        }
        .swiper-button-prev svg,
        .swiper-button-next svg {
          width: 24px;
          height: 24px;
          fill: white;
          transition: transform 0.3s ease;
        }
        .swiper-button-prev:hover svg {
          transform: translateX(-3px);
        }
        .swiper-button-next:hover svg {
          transform: translateX(3px);
        }

        @media (max-width: 767px) {
          .swiper-button-prev,
          .swiper-button-next {
            width: 40px;
            height: 40px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
          }
          .swiper-button-prev {
            left: 10px;
          }
          .swiper-button-next {
            right: 10px;
          }
          .swiper-button-prev svg,
          .swiper-button-next svg {
            width: 18px;
            height: 18px;
          }
        }

        /* Стили для пагинации */
        .swiper-pagination-bullet {
          background: var(--text-secondary) !important;
          opacity: 0.5;
          width: 12px;
          height: 12px;
          transition: all 0.3s ease;
        }
        .swiper-pagination-bullet-active {
          background: var(--gradient-from) !important;
          opacity: 1;
          transform: scale(1.3);
        }

        /* 3D-эффект для карточек */
        .swiper-slide {
          perspective: 1200px;
          transform-style: preserve-3d;
          transition: opacity 0.5s ease;
        }
        .swiper-slide-active .card {
          transform: rotateY(0deg) translateZ(80px) scale(1.05);
          opacity: 1;
          z-index: 10;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        }
        .swiper-slide-prev .card,
        .swiper-slide-next .card {
          transform: rotateY(25deg) translateZ(20px) scale(0.95);
          opacity: 0.85;
          z-index: 5;
        }
        .swiper-slide-prev .card {
          transform: rotateY(-25deg) translateZ(20px) scale(0.95);
        }
        .swiper-slide:not(.swiper-slide-active):not(.swiper-slide-prev):not(.swiper-slide-next) .card {
          transform: translateZ(-80px) scale(0.85);
          opacity: 0.4;
          z-index: 1;
        }
        .card {
          transition: transform 0.6s ease, opacity 0.6s ease, box-shadow 0.6s ease;
        }
        .card:hover {
          transform: translateZ(100px) scale(1.1);
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.4), inset 0 0 10px rgba(255, 255, 255, 0.2);
          background: linear-gradient(135deg, rgba(var(--card-bg-rgb), 0.95), rgba(var(--gradient-to-rgb), 0.8));
        }
      `}</style>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        {/* Заголовок секции */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl p-3 md:text-5xl lg:text-6xl font-extrabold mb-12
                     bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)]
                     text-transparent bg-clip-text drop-shadow-lg"
        >
          {t("studentFeedback")}
        </motion.h2>

        {/* Кнопки фильтрации по рейтингу */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12 flex justify-center flex-wrap gap-4"
        >
          <button
            onClick={() => setSelectedRating(0)}
            className={`px-6 py-2 rounded-full text-lg font-medium transition-all duration-300 ease-in-out
                       bg-[var(--card-bg)] text-[var(--text-primary)] shadow-md
                       hover:bg-gradient-to-r hover:from-[var(--gradient-from)] hover:to-[var(--gradient-to)]
                       hover:text-white hover:shadow-lg
                       ${selectedRating === 0 ? "bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] text-white shadow-lg" : ""}`}
          >
            {t("allReviews")} ({allTestimonials.length})
          </button>
          {[5, 4, 3, 2, 1].map((rating) => (
            <button
              key={rating}
              onClick={() => setSelectedRating(rating)}
              className={`px-6 py-2 rounded-full text-lg font-medium transition-all duration-300 ease-in-out
                         bg-[var(--card-bg)] text-[var(--text-primary)] shadow-md
                         hover:bg-gradient-to-r hover:from-[var(--gradient-from)] hover:to-[var(--gradient-to)]
                         hover:text-white hover:shadow-lg flex items-center gap-2
                         ${selectedRating === rating ? "bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] text-white shadow-lg" : ""}`}
            >
              {rating} <FaStar className="text-yellow-400" />
              <span className="text-sm opacity-75">
                ({allTestimonials.filter((item) => item.rating === rating).length})
              </span>
            </button>
          ))}
        </motion.div>

        {/* Слайдер с отзывами */}
        {filteredTestimonials.length > 0 ? (
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            loop={true}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            modules={[Pagination, Autoplay, Navigation]}
            className="mySwiper py-12 relative"
            breakpoints={{
              768: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
            }}
          >
            {filteredTestimonials.map((item) => (
              <SwiperSlide key={item.id} className="p-4 flex justify-center">
                <motion.div
                  variants={fadeIn}
                  initial="hidden"
                  animate="visible"
                  className="
                    bg-[var(--card-bg)] backdrop-blur-lg rounded-3xl p-8 shadow-xl
                    border border-[var(--card-border)] flex flex-col items-center
                    relative overflow-hidden cursor-pointer card
                    w-full max-w-[360px] h-[420px]
                  "
                  style={{ transformStyle: "preserve-3d" }}
                >
                  {/* Голографический эффект на фоне */}
                  <div
                    className="absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-500
                               bg-gradient-to-br from-white/20 to-transparent via-transparent
                               hover:opacity-100"
                  ></div>
                  <div className="mb-4">
                    <User
                      className="w-24 h-24 rounded-full border-4 border-[var(--gradient-from)] shadow-lg text-[var(--gradient-from)] bg-[var(--bg-from)] p-3"
                    />
                  </div>
                  <p className="text-[var(--text-secondary)] text-lg mb-6 flex-grow italic text-center line-clamp-6">
                    "{t(item.commentKey)}"
                  </p>
                  <div className="flex justify-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <FaStar
                        key={i}
                        className={i < item.rating ? "text-yellow-400" : "text-gray-500 opacity-50"}
                      />
                    ))}
                  </div>
                  <h4 className="font-semibold text-xl text-[var(--gradient-from)] mt-auto">
                    – {item.name}
                  </h4>
                </motion.div>
              </SwiperSlide>
            ))}
            {/* Кастомные стрелки */}
            <div className="swiper-button-prev">
              <svg viewBox="0 0 24 24">
                <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="swiper-button-next">
              <svg viewBox="0 0 24 24">
                <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </Swiper>
        ) : (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-[var(--text-secondary)] text-2xl mt-10"
          >
            {t("noReviewsFound")}
          </motion.p>
        )}
      </div>
    </section>
  );
};

export default React.memo(Feedback);