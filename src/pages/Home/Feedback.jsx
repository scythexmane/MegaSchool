import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination, Autoplay } from "swiper/modules";

const allTestimonials = [
  { id: 1, name: "Ali", avatar: "https://picsum.photos/150", commentKey: "testimonial1", rating: 5 },
  { id: 2, name: "Vali", avatar: "https://picsum.photos/150", commentKey: "testimonial2", rating: 4 },
  { id: 3, name: "Hasan", avatar: "https://picsum.photos/150", commentKey: "testimonial3", rating: 3 },
  { id: 4, name: "Husan", avatar: "https://picsum.photos/150", commentKey: "testimonial4", rating: 5 },
];

const Feedback = () => {
  const { t } = useTranslation();
  const [selectedRating, setSelectedRating] = useState(0);

  const filteredTestimonials = Array.isArray(allTestimonials) 
    ? (selectedRating ? allTestimonials.filter((item) => item.rating === selectedRating) : allTestimonials)
    : [];

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute top-0 left-[10%] w-64 h-64 rounded-full mix-blend-soft-light filter blur-3xl opacity-20 animate-blob" style={{ backgroundColor: "var(--blob-blue)" }}></div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.h2 initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-12 bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] text-transparent bg-clip-text">
          {t("studentFeedback")}
        </motion.h2>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }} className="mb-12 flex justify-center flex-wrap gap-4">
          <button onClick={() => setSelectedRating(0)} className={`px-6 py-2 rounded-full text-lg font-medium transition-all duration-300 ease-in-out bg-[var(--card-bg)] text-[var(--text-primary)] hover:bg-gray-100 dark:hover:bg-gray-800 ${selectedRating === 0 ? "bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] text-white" : ""}`}>
            {t("allReviews")} ({allTestimonials.length})
          </button>
          {[5, 4, 3, 2, 1].map((rating) => (
            <button key={rating} onClick={() => setSelectedRating(rating)} className={`px-6 py-2 rounded-full text-lg font-medium transition-all duration-300 ease-in-out bg-[var(--card-bg)] text-[var(--text-primary)] hover:bg-gray-100 dark:hover:bg-gray-800 flex items-center gap-2 ${selectedRating === rating ? "bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] text-white" : ""}`}>
              {rating} <FaStar className="text-yellow-400" />
              <span className="text-sm opacity-75">({allTestimonials.filter((item) => item.rating === rating).length})</span>
            </button>
          ))}
        </motion.div>
        {filteredTestimonials.length > 0 ? (
          <Swiper slidesPerView={1} spaceBetween={20} pagination={{ clickable: true }} autoplay={{ delay: 5000, disableOnInteraction: false }} loop={true} modules={[Pagination, Autoplay]} className="mySwiper py-10" breakpoints={{ 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}>
            {filteredTestimonials.map((item) => (
              <SwiperSlide key={item.id} className="p-4">
                <motion.div variants={fadeIn} initial="hidden" animate="visible" className="bg-[var(--card-bg)] backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-[var(--card-border)] flex flex-col items-center h-full">
                  <div className="mb-4">
                    <img src={item.avatar} alt={item.name} className="w-20 h-20 rounded-full border-4 border-[var(--gradient-from)] shadow-md" onError={(e) => { e.target.src = "https://picsum.photos/150"; }} />
                  </div>
                  <p className="text-[var(--text-secondary)] text-lg mb-6 flex-grow italic">"{t(item.commentKey)}"</p>
                  <div className="flex justify-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => <FaStar key={i} className={i < item.rating ? "text-yellow-400" : "text-gray-500 opacity-50"} />)}
                  </div>
                  <h4 className="font-semibold text-xl text-[var(--gradient-from)] mt-auto">– {item.name}</h4>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-[var(--text-secondary)] text-2xl mt-10">
            {t("noReviewsFound")}
          </motion.p>
        )}
      </div>
    </section>
  );
};

export default React.memo(Feedback);