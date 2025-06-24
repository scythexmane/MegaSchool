import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import { Pagination, Navigation, Autoplay, EffectCoverflow } from "swiper/modules";

const allTestimonials = [
  {
    id: 1,
    name: "Zuhra Karimova",
    commentKey: "zuhraComment",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    id: 2,
    name: "Bekzod Akhmedov",
    commentKey: "bekzodComment",
    rating: 4,
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    id: 3,
    name: "Malika Tursunova",
    commentKey: "malikaComment",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/women/3.jpg",
  },
  {
    id: 4,
    name: "Alisher Nematov",
    commentKey: "alisherComment",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    id: 5,
    name: "Diyora Rustamova",
    commentKey: "diyoraComment",
    rating: 4,
    avatar: "https://randomuser.me/api/portraits/women/5.jpg",
  },
  {
    id: 6,
    name: "Javlon Saidov",
    commentKey: "javlonComment",
    rating: 3,
    avatar: "https://randomuser.me/api/portraits/men/6.jpg",
  },
  {
    id: 7,
    name: "Dilnoza Rashidova",
    commentKey: "dilnozaComment",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/women/7.jpg",
  },
  {
    id: 8,
    name: "Sarvar Khakimov",
    commentKey: "sarvarComment",
    rating: 4,
    avatar: "https://randomuser.me/api/portraits/men/8.jpg",
  },
  {
    id: 9,
    name: "Madina G'aniyeva",
    commentKey: "madinaComment",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/women/9.jpg",
  },
  {
    id: 10,
    name: "Otabek Komilov",
    commentKey: "otabekComment",
    rating: 3,
    avatar: "https://randomuser.me/api/portraits/men/10.jpg",
  },
];

const Feedback = () => {
  const { t } = useTranslation();
  const [selectedRating, setSelectedRating] = useState(0);

  const filteredTestimonials = selectedRating
    ? allTestimonials.filter((item) => item.rating === selectedRating)
    : allTestimonials;

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const starVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { type: "spring", stiffness: 200, damping: 12 },
    },
  };

  return (
    <section className="py-20 md:py-32 relative overflow-hidden animated-bg">
      <div
        className="absolute top-0 left-[10%] w-64 h-64 rounded-full mix-blend-soft-light filter blur-3xl opacity-20 animate-blob"
        style={{ backgroundColor: "var(--blob-blue)" }}
      ></div>
      <div
        className="absolute bottom-0 right-[15%] w-72 h-72 rounded-full mix-blend-soft-light filter blur-3xl opacity-20 animate-blob animation-delay-3000"
        style={{ backgroundColor: "var(--blob-purple)" }}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, type: "spring", stiffness: 100 }}
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-12 bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] text-transparent bg-clip-text"
        >
          {t("studentFeedback", "Student Feedback")}
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mb-12 flex justify-center flex-wrap gap-4"
        >
          <button
            onClick={() => setSelectedRating(0)}
            className={`px-6 py-2 rounded-full text-lg font-medium transition-all duration-300 ease-in-out bg-[var(--card-bg)] text-[var(--text-primary)] hover:bg-gray-100 dark:hover:bg-gray-800 ${
              selectedRating === 0
                ? "bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] text-white"
                : ""
            }`}
            aria-label={t("allReviews", "Show all reviews")}
          >
            {t("allReviews", "All Reviews")} ({allTestimonials.length})
          </button>
          {[5, 4, 3, 2, 1].map((rating) => (
            <button
              key={rating}
              onClick={() => setSelectedRating(rating)}
              className={`px-6 py-2 rounded-full text-lg font-medium transition-all duration-300 ease-in-out bg-[var(--card-bg)] text-[var(--text-primary)] hover:bg-gray-100 dark:hover:bg-gray-800 flex items-center gap-2 ${
                selectedRating === rating
                  ? "bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] text-white"
                  : ""
              }`}
              aria-label={t(`show${rating}StarReviews`, `Show ${rating}-star reviews`)}
            >
              {rating} <FaStar className="text-yellow-400" />
              <span className="text-sm opacity-75">
                ({allTestimonials.filter((item) => item.rating === rating).length})
              </span>
            </button>
          ))}
        </motion.div>

        {filteredTestimonials.length > 0 ? (
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: false,
            }}
            pagination={{ clickable: true }}
            navigation={true}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            loop={true}
            modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
            className="mySwiper py-10"
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {filteredTestimonials.map((item) => (
              <SwiperSlide key={item.id} className="p-4">
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={fadeIn}
                  className="bg-[var(--card-bg)] backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-[var(--card-border)] flex flex-col items-center h-full pulse"
                >
                  <div className="mb-4">
                    <img
                      src={item.avatar}
                      alt={`Profile picture of ${item.name}`}
                      className="w-20 h-20 rounded-full border-4 border-[var(--gradient-from)] shadow-md"
                      onError={(e) => {
                        e.target.src = "/fallback-avatar.jpg";
                      }}
                    />
                  </div>
                  <p className="text-[var(--text-secondary)] text-lg mb-6 flex-grow italic">
                    "{t(item.commentKey, "Comment not available")}"
                  </p>
                  <div className="flex justify-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        variants={starVariants}
                        initial="hidden"
                        animate="visible"
                        custom={i}
                      >
                        <FaStar
                          className={
                            i < item.rating
                              ? "text-yellow-400"
                              : "text-gray-500 opacity-50"
                          }
                        />
                      </motion.div>
                    ))}
                  </div>
                  <h4 className="font-semibold text-xl text-[var(--gradient-from)] mt-auto">
                    – {item.name}
                  </h4>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-[var(--text-secondary)] text-2xl mt-10"
          >
            {t("noReviewsFound", "No reviews found")}
          </motion.p>
        )}
      </div>
    </section>
  );
};

export default Feedback;