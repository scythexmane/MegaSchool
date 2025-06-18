import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Github, Linkedin, Twitter, Dribbble, Globe } from "lucide-react";
import { useRef } from "react";

const teamMembers = [
  {
    id: 1,
    name: "Алиса Иванова",
    role: "ceo_founder",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887",
    description: "Визионер, движущий нашу миссию вперед.",
    social: { linkedin: "https://linkedin.com/in/alisaivanova", twitter: "https://twitter.com/alisa" },
    featured: true,
  },
  {
    id: 2,
    name: "Максим Петров",
    role: "cto",
    img: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1887",
    description: "Мастер технологий, создающий нашу платформу.",
    social: { linkedin: "https://linkedin.com/in/maksimpetrov", github: "https://github.com/maksimp" },
  },
  {
    id: 3,
    name: "Елена Сидорова",
    role: "head_of_edu",
    img: "https://avatars.mds.yandex.net/i?id=fb4292f7c3b3ad02a6d0114578d8523a_l-5238039-images-thumbs&ref=rim&n=13&w=640&h=640",
    description: "Главный архитектор наших программ.",
    social: { linkedin: "https://linkedin.com/in/elenasidorova", dribbble: "https://dribbble.com/elenas" },
  },
  {
    id: 4,
    name: "Дмитрий Козлов",
    role: "lead_developer",
    img: "https://avatars.mds.yandex.net/i?id=0685051206bb8d635a0cb47b59df7984-4755486-images-thumbs&ref=rim&n=33&w=480&h=240",
    description: "Ведущий разработчик.",
    social: { linkedin: "https://linkedin.com/in/dmitrykozlov", github: "https://github.com/dmitryk" },
  },
  {
    id: 5,
    name: "Анна Новикова",
    role: "marketing_director",
    img: "https://www.drbarryweintraub.com/wp-content/uploads/2022/09/portrait-beautiful-smiling-blond-model-dressed.jpg",
    description: "Стратег, который доносит наше послание до мира.",
    social: { linkedin: "https://linkedin.com/in/annanovikova", twitter: "https://twitter.com/annan" },
  },
  {
    id: 6,
    name: "Иван Сергеев",
    role: "ux_ui_designer",
    img: "https://avatars.mds.yandex.net/i?id=a0fe3d4e67e6da3bebd7b5bb8e863258_l-10836596-images-thumbs&n=13",
    description: "Художник, создающий интуитивно понятные.",
    social: { linkedin: "https://linkedin.com/in/ivanserg", dribbble: "https://dribbble.com/ivanserg" },
  },
  {
    id: 7,
    name: "София Лебедева",
    role: "community_manager",
    img: "https://avatars.mds.yandex.net/i?id=d61581eafb95ac139e140acfd4a04e1ac58030a1-7732367-images-thumbs&ref=rim&n=33&w=375&h=250",
    description: "Сердце нашей команды, объединяющее всех.",
    social: { linkedin: "https://linkedin.com/in/sofialebedeva", twitter: "https://twitter.com/sofial" },
  },
  {
    id: 8,
    name: "Николай Орлов",
    role: "data_scientist",
    img: "https://avatars.mds.yandex.net/i?id=2eeaf03f4fb7ba2c2123def64c97ce7ff41bf0fe-5147142-images-thumbs&n=13",
    description: "Аналитик, раскрывающий скрытые закономерности.",
    social: { linkedin: "https://linkedin.com/in/nikolayorlov", github: "https://github.com/nikolayo" },
  },
];

const SocialIcon = ({ type, href, size = 20 }) => {
  let IconComponent;
  switch (type) {
    case "linkedin": IconComponent = Linkedin; break;
    case "github": IconComponent = Github; break;
    case "twitter": IconComponent = Twitter; break;
    case "dribbble": IconComponent = Dribbble; break;
    default: IconComponent = Globe;
  }
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-[var(--text-secondary)] hover:text-[var(--gradient-from)] transition-colors duration-300 transform hover:scale-110"
      aria-label={type}
    >
      <IconComponent size={size} />
    </a>
  );
};

const TeamIntro = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-50%", "50%"]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: [0.2, 0.6, 0.3, 0.9] } },
  };

  const featuredCardVariants = {
    hidden: { opacity: 0, y: 100, scale: 0.8 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 1, ease: [0.2, 0.6, 0.3, 0.9], delay: 0.2 } },
  };

  const teamLead = teamMembers.find((member) => member.featured);
  const otherMembers = teamMembers.filter((member) => !member.featured);

  return (
    <motion.section
      ref={ref}
      className="relative py-20 sm:py-24 lg:py-32 overflow-hidden bg-[var(--bg-from)]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <motion.div className="absolute inset-0 z-0 bg-dots opacity-5" style={{ y }}></motion.div>
      <div className="absolute top-40 left-70 w-96 h-96 bg-[var(--gradient-from)]/10 rounded-full mix-blend-screen filter blur-3xl opacity-70 animate-blob-bounce-1" />
      <div className="absolute bottom-40 right-40 w-80 h-80 bg-[var(--gradient-to)]/10 rounded-full mix-blend-screen filter blur-3xl opacity-70 animate-blob-bounce-2 delay-1000" />
      <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-[var(--gradient-from)]/10 rounded-full mix-blend-screen filter blur-3xl opacity-70 animate-blob-bounce-3 delay-500" />
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] leading-tight mb-4 drop-shadow-lg"
            variants={fadeInUp}
          >
            {t("about.team.title")}
          </motion.h2>
          <motion.p
            className="mt-6 text-xl text-[var(--text-secondary)] max-w-3xl mx-auto leading-relaxed"
            variants={fadeInUp}
          >
            {t("about.team.subtitle")}
          </motion.p>
        </div>
        {teamLead && (
          <motion.div
            className="mb-20 px-4 py-8 bg-[var(--card-bg)] rounded-3xl backdrop-blur-lg border border-[var(--gradient-from)]/30 shadow-2xl relative overflow-hidden group hover:border-[var(--gradient-from)]/50 transition-all duration-500 ease-out"
            variants={featuredCardVariants}
            whileHover={{ scale: 1.02, boxShadow: "0 0 50px rgba(59,130,246,0.5)" }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--gradient-from)]/5 to-[var(--gradient-to)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
              <motion.div
                className="relative w-40 h-40 md:w-56 md:h-56 flex-shrink-0 rounded-full overflow-hidden border-4 border-[var(--gradient-from)] shadow-xl"
                whileHover={{ rotate: 5, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200, damping: 10 }}
              >
                <img
                  src={teamLead.img}
                  alt={teamLead.name}
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-transparent transition-colors duration-300"></div>
              </motion.div>
              <div className="text-center md:text-left">
                <h3 className="text-3xl lg:text-4xl font-bold text-[var(--text-primary)] mb-2">
                  {teamLead.name}
                </h3>
                <p className="text-2xl font-semibold text-[var(--gradient-from)] mb-4">
                  {t(`about1.team.roles.${teamLead.role}`)}
                </p>
                <p className="text-lg text-[var(--text-secondary)] max-w-2xl leading-relaxed">
                  {t(`about1.team.descriptions.${teamLead.role}`)}
                </p>
                <div className="flex justify-center md:justify-start space-x-6 mt-6">
                  {Object.entries(teamLead.social).map(([platform, link]) => (
                    <SocialIcon key={platform} type={platform} href={link} size={28} />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {otherMembers.map((member) => (
            <motion.div
              key={member.id}
              className="bg-[var(--card-bg)] rounded-xl p-6 text-center backdrop-blur-lg border border-[var(--card-border)] shadow-lg relative overflow-hidden group hover:border-[var(--gradient-from)]/50 transition-all duration-500 ease-out"
              variants={cardVariants}
              whileHover={{ y: -5, boxShadow: "0 0 30px rgba(59,130,246,0.4)" }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--gradient-from)]/5 to-[var(--gradient-to)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <motion.div
                className="relative w-32 h-32 mx-auto rounded-full overflow-hidden mb-4 border-2 border-transparent group-hover:border-[var(--gradient-from)] transition-colors duration-300"
                whileHover={{ scale: 1.1, rotate: -3 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
              >
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-transparent transition-colors duration-300"></div>
              </motion.div>
              <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-1">
                {member.name}
              </h3>
              <p className="text-md text-[var(--gradient-from)] font-medium mb-3">
                {t(`about1.team.roles.${member.role}`)}
              </p>
              <p className="text-sm text-[var(--text-secondary)] mb-4 h-12 overflow-hidden">
                {t(`about1.team.descriptions.${member.role}`)}
              </p>
              <div className="flex justify-center space-x-4 mt-auto">
                {Object.entries(member.social).map(([platform, link]) => (
                  <SocialIcon key={platform} type={platform} href={link} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default TeamIntro;