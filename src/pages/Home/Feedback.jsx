import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow"; // For a more dynamic look
import { Pagination, Navigation, Autoplay, EffectCoverflow } from "swiper/modules"; // Import modules

// --- Mock Testimonials Data (Expanded for realism) ---
const allTestimonials = [
  {
    id: 1,
    name: "Zuhra Karimova",
    commentKey: "zuhraComment", // Key for i18n
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/women/1.jpg" // Placeholder avatar
  },
  {
    id: 2,
    name: "Bekzod Akhmedov",
    commentKey: "bekzodComment",
    rating: 4,
    avatar: "https://randomuser.me/api/portraits/men/2.jpg"
  },
  {
    id: 3,
    name: "Malika Tursunova",
    commentKey: "malikaComment",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/women/3.jpg"
  },
  {
    id: 4,
    name: "Alisher Nematov",
    commentKey: "alisherComment",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/men/4.jpg"
  },
  {
    id: 5,
    name: "Diyora Rustamova",
    commentKey: "diyoraComment",
    rating: 4,
    avatar: "https://randomuser.me/api/portraits/women/5.jpg"
  },
  {
    id: 6,
    name: "Javlon Saidov",
    commentKey: "javlonComment",
    rating: 3, // Lower rating for realism
    avatar: "https://randomuser.me/api/portraits/men/6.jpg"
  },
  {
    id: 7,
    name: "Dilnoza Rashidova",
    commentKey: "dilnozaComment",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/women/7.jpg"
  },
  {
    id: 8,
    name: "Sarvar Khakimov",
    commentKey: "sarvarComment",
    rating: 4,
    avatar: "https://randomuser.me/api/portraits/men/8.jpg"
  },
  {
    id: 9,
    name: "Madina G'aniyeva",
    commentKey: "madinaComment",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/women/9.jpg"
  },
  {
    id: 10,
    name: "Otabek Komilov",
    commentKey: "otabekComment",
    rating: 3, // Another lower rating
    avatar: "https://randomuser.me/api/portraits/men/10.jpg"
  }
];

const Feedback = () => {
  const { t } = useTranslation();
  const [selectedRating, setSelectedRating] = useState(0); // 0 means all ratings

  const filteredTestimonials = selectedRating
    ? allTestimonials.filter(item => item.rating === selectedRating)
    : allTestimonials;

  // Animation variants for Framer Motion
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const starVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { type: "spring", stiffness: 200, damping: 12 } },
  };

  return (
    <>
      {/* Global CSS for animations and custom properties - MOVE TO GLOBAL CSS FILE */}
      <style>
        {`
        /* Animated background for the section */
        @keyframes feedback-section-gradient-flow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .animated-feedback-section-bg {
          background-size: 200% 200%;
          animation: feedback-section-gradient-flow 30s ease infinite alternate;
        }

        /* Card glow and hover effect */
        .feedback-card-glow {
          box-shadow: 0 10px 30px rgba(0,0,0,0.2), 0 0 0 0px rgba(0,255,255,0); /* Initial subtle shadow */
          transition: all 0.3s ease-in-out;
        }

        .feedback-card-glow:hover {
          box-shadow: 0 15px 40px rgba(0,0,0,0.3), 0 0 25px rgba(0,255,255,0.7); /* Enhanced shadow with glow */
          transform: translateY(-5px);
        }

        /* Swiper custom navigation/pagination styles */
        .swiper-button-next, .swiper-button-prev {
          color: #4A90E2 !important; /* Blue color for arrows */
          transition: transform 0.3s ease;
        }
        .swiper-button-next:hover, .swiper-button-prev:hover {
          transform: scale(1.1);
        }

        .swiper-pagination-bullet {
          background: #A0AEC0 !important; /* Light gray for inactive bullets */
          opacity: 0.7 !important;
          transition: background-color 0.3s ease, opacity 0.3s ease;
        }

        .swiper-pagination-bullet-active {
          background: #4A90E2 !important; /* Blue for active bullet */
          opacity: 1 !important;
          transform: scale(1.2); /* Slightly larger active bullet */
        }

        /* Rating filter button active state */
        .rating-filter-button.active {
            background-image: linear-gradient(to right, #4A90E2, #7B41C7);
            color: white;
            box-shadow: 0 4px 15px rgba(74,144,226,0.6);
            transform: translateY(-2px);
        }
        `}
      </style>

      <section
        className="py-20 md:py-32 relative overflow-hidden
                   animated-feedback-section-bg
                    bg-gradient-to-tb   from-purple-50/50 to-blue-50/5 dark:from-black dark:to-gray-900"
      >
        {/* Decorative background elements for dynamism */}
        <div className="absolute top-0 left-[10%] w-64 h-64 bg-cyan-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-20 animate-blob animation-delay-0"></div>
        <div className="absolute bottom-0 right-[15%] w-72 h-72 bg-purple-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-20 animate-blob animation-delay-3000"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, type: "spring", stiffness: 100 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-12
                       bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text"
          >
            {t("studentFeedback")}
          </motion.h2>

          {/* Rating Filter Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mb-12 flex justify-center flex-wrap gap-4"
          >
            <button
              onClick={() => setSelectedRating(0)}
              className={`
                rating-filter-button
                px-6 py-2 rounded-full text-lg font-medium
                transition-all duration-300 ease-in-out
                bg-gray-700 text-gray-200 hover:bg-gray-600
                ${selectedRating === 0 ? "active" : ""}
              `}
            >
              {t("allReviews")} ({allTestimonials.length})
            </button>
            {[5, 4, 3, 2, 1].map((rating) => (
              <button
                key={rating}
                onClick={() => setSelectedRating(rating)}
                className={`
                  rating-filter-button
                  px-6 py-2 rounded-full text-lg font-medium
                  transition-all duration-300 ease-in-out
                  bg-gray-700 text-gray-200 hover:bg-gray-600
                  flex items-center gap-2
                  ${selectedRating === rating ? "active" : ""}
                `}
              >
                {rating} <FaStar className="text-yellow-400" />
                <span className="text-sm opacity-75">
                  ({allTestimonials.filter(item => item.rating === rating).length})
                </span>
              </button>
            ))}
          </motion.div>

          {/* Swiper Carousel for Testimonials */}
          {filteredTestimonials.length > 0 ? (
            <Swiper
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={"auto"} // Adjust based on screen size or fixed number for desktop
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              pagination={{ clickable: true }}
              navigation={true}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              loop={true}
              modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
              className="mySwiper py-10" // Add padding to make space for pagination/navigation if needed
              breakpoints={{
                640: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
            >
              {filteredTestimonials.map((item) => (
                <SwiperSlide key={item.id} className="p-4"> {/* Added padding for spacing */}
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={fadeIn}
                    className="
                      bg-gradient-to-br from-blue-900/40 to-purple-900/40 dark:from-gray-800/50 dark:to-gray-900/50
                      backdrop-blur-lg
                      rounded-3xl p-8
                      shadow-2xl feedback-card-glow
                      border border-white/10 dark:border-gray-700/20
                      flex flex-col items-center
                      h-full
                    "
                  >
                    <div className="mb-4">
                      <img
                        src={item.avatar}
                        alt={item.name}
                        className="w-20 h-20 rounded-full border-4 border-blue-500 shadow-md"
                      />
                    </div>
                    <p className="text-gray-200 dark:text-gray-300 text-lg mb-6 flex-grow italic">
                      "{t(item.commentKey)}"
                    </p>
                    <div className="flex justify-center gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <motion.div
                          key={i}
                          variants={starVariants}
                          initial="hidden"
                          animate="visible"
                          custom={i} // Pass index to stagger animation
                        >
                          <FaStar
                            className={i < item.rating ? "text-yellow-400" : "text-gray-500 opacity-50"}
                          />
                        </motion.div>
                      ))}
                    </div>
                    <h4 className="font-semibold text-xl text-blue-300 dark:text-blue-400 mt-auto">
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
              className="text-gray-400 text-2xl mt-10"
            >
              {t("noReviewsFound")}
            </motion.p>
          )}
        </div>
      </section>
    </>
  );
};

export default Feedback;