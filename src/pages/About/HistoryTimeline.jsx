import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Building2, Milestone, Trophy, Rocket } from "lucide-react";

const timelineEvents = [
  {
    year: "2018",
    icon: Building2,
    key: "event1",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070",
  },
  {
    year: "2020",
    icon: Milestone,
    key: "event2",
    image:
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070",
  },
  {
    year: "2023",
    icon: Trophy,
    key: "event3",
    image:
      "https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?q=80&w=2070",
  },
  {
    year: "2025",
    icon: Rocket,
    key: "event4",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070",
  },
];

const TimelineItem = ({ event, isOdd }) => {
  const { t } = useTranslation();
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  return (
    <div
      ref={ref}
      className={`mb-12 flex justify-between items-center w-full ${
        isOdd ? "flex-row-reverse" : ""
      }`}
    >
      <div className="hidden md:block order-1 w-5/12"></div>

      <motion.div
        className="z-20 flex items-center order-1 bg-gray-900 shadow-xl w-14 h-14 rounded-full border-2 border-blue-500/50"
        style={{ scale: useTransform(scrollYProgress, [0.5, 1], [0.8, 1.2]) }}
      >
        <event.icon className="mx-auto text-blue-400" size={28} />
      </motion.div>

      <motion.div
        style={{ scale, opacity, x: isOdd ? "10%" : "-10%" }}
        className={`order-1 w-full md:w-5/12 p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg shadow-2xl shadow-blue-500/10 ${
          isOdd ? "md:text-right" : "md:text-left"
        }`}
      >
        <p className="mb-2 text-sm font-bold text-blue-400">{event.year}</p>
        <h3 className="mb-3 font-bold text-white text-xl">
          {t(`about.history.${event.key}.title`)}
        </h3>
        <p className="text-sm leading-relaxed tracking-wide text-gray-300 mb-4">
          {t(`about.history.${event.key}.description`)}
        </p>
        <div className="w-full h-32 rounded-lg overflow-hidden mt-4 border border-white/10">
          <img
            src={event.image}
            alt={t(`about.history.${event.key}.title`)}
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>
    </div>
  );
};

const HistoryTimeline = () => {
  const { t } = useTranslation();
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const pathHeight = useTransform(scrollYProgress, [0, 0.8], ["0%", "100%"]);

  return (
    <section className="relative py-20 sm:py-24 overflow-hidden">
    

      <motion.div
        className="text-center mb-16 relative z-10"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400">
          {t("about.history.title")}
        </h2>
        <p className="mt-4 text-lg text-gray-400">
          {t("about.history.subtitle")}
        </p>
      </motion.div>

      <div ref={ref} className="relative max-w-4xl mx-auto z-10">
        {/* Линия */}
        <div className="absolute left-1/2 top-0 h-full w-1 bg-gray-800 -translate-x-1/2 z-0"></div>
        <motion.div
          className="absolute left-1/2 top-0 h-full w-1 bg-gradient-to-b from-blue-400 via-blue-500 to-purple-600 -translate-x-1/2 z-0"
          style={{ height: pathHeight }}
        />

        {/* Timeline Items */}
        <div className="space-y-8 md:space-y-0">
          {timelineEvents.map((event, index) => (
            <TimelineItem key={index} event={event} isOdd={index % 2 !== 0} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HistoryTimeline;
