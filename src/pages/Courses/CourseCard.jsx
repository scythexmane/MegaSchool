import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import {
  DollarSign,
  Calendar,
  TrendingUp,
  Info,
  UserRound,
  BookOpen,
  FlaskConical,
  BrainCircuit,
  Stethoscope,
  Languages,
  PenTool,
  Lightbulb,
  Code,
} from 'lucide-react';

// Языковые логотипы (можно подключить как SVG или CDN)
const languageLogos = {
  javascript: '/logos/js.svg',
  python: '/logos/python.svg',
  html: '/logos/html.svg',
  cpp: '/logos/cpp.svg',
  java: '/logos/java.svg',
  default: '/logos/code.svg',
};

const getProgrammingLogo = (course) => {
  const lang = course.language?.toLowerCase();
  return languageLogos[lang] || languageLogos.default;
};

const CourseCard = ({ course }) => {
  const { t } = useTranslation();

  const categoryIcons = {
    science: <FlaskConical size={48} className="text-red-400" />,
    ai: <BrainCircuit size={48} className="text-purple-400" />,
    medicine: <Stethoscope size={48} className="text-emerald-400" />,
    languages: <Languages size={48} className="text-orange-400" />,
    design: <PenTool size={48} className="text-pink-400" />,
    creativity: <Lightbulb size={48} className="text-yellow-400" />,
    default: <BookOpen size={48} className="text-white" />,
  };

  const IconWrapper = ({ children, color }) => (
    <div
      className={`w-8 h-8 rounded-full flex items-center justify-center bg-opacity-10`}
      style={{ backgroundColor: color }}
    >
      {children}
    </div>
  );

  const iconVariants = {
    initial: { scale: 1, rotate: 0 },
    hover: {
      scale: 1.1,
      rotate: [0, 5, -5, 0],
      transition: { duration: 0.6, ease: 'easeInOut' },
    },
  };

  return (
    <motion.div
      className="bg-gray-800 rounded-xl overflow-hidden shadow-xl flex flex-col h-full cursor-pointer relative
        transform transition-all duration-300 ease-in-out border border-gray-700 hover:border-blue-500"
      whileHover="hover"
      onClick={() => console.log(`Navigating to course: ${course.title}`)}
    >
      {/* Верхний блок с иконкой или логотипом */}
      <motion.div
        className="relative h-48 bg-gradient-to-tr from-gray-900 to-gray-700 flex items-center justify-center"
        initial="initial"
        whileHover="hover"
      >
        {course.category === 'development' ? (
          <motion.img
            src={getProgrammingLogo(course)}
            alt={course.language}
            className="h-20 w-20 object-contain"
            variants={iconVariants}
          />
        ) : (
          <motion.div variants={iconVariants}>
            {categoryIcons[course.category?.toLowerCase()] ||
              categoryIcons.default}
          </motion.div>
        )}

        <span className="absolute bottom-3 left-4 text-sm font-semibold bg-blue-600 px-3 py-1 rounded-full text-white shadow-md">
          {t(course.category + 'Category')}
        </span>
      </motion.div>

      {/* Контент карточки */}
      <div className="p-6 flex flex-col justify-between flex-grow">
        <h3 className="text-2xl font-bold text-white mb-3 leading-tight">
          {t(course.title)}
        </h3>
        <p className="text-gray-400 text-sm mb-4 line-clamp-3">
          {t(course.description)}
        </p>

        <div className="grid grid-cols-2 gap-y-3 gap-x-4 text-sm text-gray-300 mb-6">
          <div className="flex items-center gap-2">
            <IconWrapper color="rgba(16,185,129,0.2)">
              <DollarSign size={18} className="text-emerald-400" />
            </IconWrapper>
            <span>{course.price || t('priceNotSpecified')}</span>
          </div>

          <div className="flex items-center gap-2">
            <IconWrapper color="rgba(250,204,21,0.2)">
              <TrendingUp size={18} className="text-yellow-400" />
            </IconWrapper>
            <span>{t('level')}: {t(course.level)}</span>
          </div>

          <div className="flex items-center gap-2">
            <IconWrapper color="rgba(129,140,248,0.2)">
              <Calendar size={18} className="text-indigo-400" />
            </IconWrapper>
            <span>{course.duration || t('durationNotSpecified')}</span>
          </div>

          <div className="flex items-center gap-2">
            <IconWrapper color="rgba(248,113,113,0.2)">
              <BookOpen size={18} className="text-red-400" />
            </IconWrapper>
            <span>{t('lessonsCount', { count: course.lessons || 0 })}</span>
          </div>

          {course.instructor && (
            <div className="flex items-center gap-2 col-span-2">
              <IconWrapper color="rgba(34,211,238,0.2)">
                <UserRound size={18} className="text-cyan-400" />
              </IconWrapper>
              <span>{t('instructor')}: {course.instructor}</span>
            </div>
          )}
        </div>

        <motion.button
          className="mt-auto bg-blue-600 text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2
                     hover:bg-blue-700 transition-colors duration-200 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Info size={20} /> {t('learnMore')}
        </motion.button>
      </div>
    </motion.div>
  );
};

export default CourseCard;
