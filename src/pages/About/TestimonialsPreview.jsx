// src/components/about/TestimonialsPreview.jsx
import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { Quote } from 'lucide-react';

const testimonials = [
  { id: 1, name: 'Сардор', course: 'python_dev', text_key: 'review1', avatar: 'https://randomuser.me/api/portraits/men/32.jpg' },
  { id: 2, name: 'Мария', course: 'ux_design', text_key: 'review2', avatar: 'https://randomuser.me/api/portraits/women/44.jpg' },
  { id: 3, name: 'Алексей', course: 'frontend_dev', text_key: 'review3', avatar: 'https://randomuser.me/api/portraits/men/34.jpg' },
];

const TestimonialsPreview = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 sm:py-24 bg-white/5 rounded-3xl my-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">{t('about.testimonials.title')}</h2>
      </div>
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        className="pb-12"
        breakpoints={{
          640: { slidesPerView: 2 },
        }}
      >
        {testimonials.map(testimonial => (
          <SwiperSlide key={testimonial.id} className="h-full">
            <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700 h-full flex flex-col">
              <Quote className="text-blue-400 mb-4" size={32} />
              <p className="text-gray-300 flex-grow">"{t(`about.testimonials.${testimonial.text_key}`)}"</p>
              <div className="flex items-center mt-6">
                <img src={testimonial.avatar} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-sm text-gray-400">{t(`about.testimonials.courses.${testimonial.course}`)}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default TestimonialsPreview;