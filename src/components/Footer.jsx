import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom"; // useLocation не используется, можно убрать
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Instagram,
  Facebook,
  Linkedin,
  Youtube,
  Send, // Send для Telegram
  ArrowRight, // Новая иконка для кнопки подписки
} from "lucide-react";

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  // Variants for Framer Motion animations
  const footerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  // Варианты для анимированных ссылок (уже без подчеркивания, но с цветом)
  const linkVariants = {
    rest: { opacity: 0.8, x: 0, color: "var(--tw-color-gray-400)" },
    hover: {
      opacity: 1,
      x: 5, // Небольшое смещение для интерактивности
      color: "var(--tw-color-blue-400)", // Ярче синий при наведении
      transition: { duration: 0.2, ease: "easeOut" },
    },
  };

  // Варианты для иконок соцсетей
  const socialIconVariants = {
    rest: { scale: 1, opacity: 0.7, filter: "none" },
    hover: {
      scale: 1.15,
      opacity: 1,
      filter: "drop-shadow(0 0 10px rgba(59, 130, 246, 0.7))", // Более заметное синее свечение
      transition: { duration: 0.2, ease: "easeOut" },
    },
  };

  const handleSubmitNewsletter = (e) => {
    e.preventDefault();
    console.log("Newsletter subscribed:", e.target.email.value);
    alert(t("footer.newsletterSuccess"));
    e.target.reset(); // Clear the form
  };

  return (
    <motion.footer
      variants={footerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="relative bg-gray-950 text-gray-300 py-16 px-6 overflow-hidden
                 border-t border-gray-800 shadow-lg"
    >
      {/* Очень тонкий фоновый градиент для глубины, почти незаметный */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-indigo-950 opacity-10"></div>

      {/* Абстрактные светящиеся "шары" для дополнительной атмосферы */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/5 rounded-full mix-blend-screen filter blur-3xl opacity-50 animate-blob-bounce-1" />
      <div className="absolute bottom-1/4 right-1/4 w-60 h-60 bg-purple-500/5 rounded-full mix-blend-screen filter blur-3xl opacity-50 animate-blob-bounce-2 delay-700" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 relative z-10">
        {/* Column 1: Logo & Description */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <Link
            to="/"
            className="text-4xl font-extrabold tracking-tight text-white mb-4" // Увеличил размер лого
            aria-label="MegaSchool Home"
          >
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
              Mega
            </span>
            School
          </Link>
          <p className="text-gray-400 text-base leading-relaxed max-w-sm">
            {t("footer.description")}
          </p>
        </div>

        {/* Column 2: Quick Links & Contact Info (Combined for cleaner layout) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12">
          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              {t("footer.quickLinks")}
            </h4>
            <ul className="space-y-3">
              {["aboutUs", "allCourses", "contact"].map((key) => (
                <motion.li
                  key={key}
                  variants={linkVariants}
                  initial="rest"
                  whileHover="hover"
                  className="relative"
                >
                  <Link
                    to={`/${key.toLowerCase().replace("all", "", ).replace("us", "", )}`}
                    className="flex items-center text-gray-400 hover:text-blue-400 transition-colors duration-200"
                  >
                    {t(key)}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              {t("footer.contactInfo")}
            </h4>
            <ul className="space-y-3 text-gray-400">
              <motion.li
                variants={linkVariants}
                initial="rest"
                whileHover="hover"
                className="flex items-center gap-3"
              >
                <Phone size={20} className="text-blue-400 flex-shrink-0" />
                <a href="tel:+998901234567" className="hover:text-blue-400 transition-colors duration-200">
                  +998 90 123 45 67
                </a>
              </motion.li>
              <motion.li
                variants={linkVariants}
                initial="rest"
                whileHover="hover"
                className="flex items-center gap-3"
              >
                <Mail size={20} className="text-purple-400 flex-shrink-0" />
                <a href="mailto:info@megaschool.uz" className="hover:text-purple-400 transition-colors duration-200">
                  info@megaschool.uz
                </a>
              </motion.li>
              <motion.li
                variants={linkVariants}
                initial="rest"
                whileHover="hover"
                className="flex items-start gap-3"
              >
                <MapPin size={20} className="text-emerald-400 flex-shrink-0 mt-1" />
                <address className="not-italic hover:text-emerald-400 transition-colors duration-200">
                  {t("footer.address")}
                </address>
              </motion.li>
            </ul>
          </div>
        </div>

        {/* Column 3: Social Media & Newsletter */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h4 className="text-xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
            {t("footer.followUs")}
          </h4>
          <div className="flex flex-wrap justify-center md:justify-start gap-5 mb-10"> {/* Увеличен gap */}
            {[
              { icon: Instagram, href: "https://instagram.com/megaschool", baseColor: "text-pink-400" },
              { icon: Send, href: "https://t.me/megaschool", baseColor: "text-blue-400" },
              { icon: Facebook, href: "https://facebook.com/megaschool", baseColor: "text-blue-500" },
              { icon: Linkedin, href: "https://linkedin.com/company/megaschool", baseColor: "text-blue-600" },
              { icon: Youtube, href: "http://youtube.com/megaschool", baseColor: "text-red-500" },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`transition-colors duration-220 ${social.baseColor} hover:text-white`} // Сделал hover-цвет белым
                variants={socialIconVariants}
                initial="rest"
                whileHover="hover"
              >
                <social.icon size={30} /> {/* Увеличенный размер иконок */}
              </motion.a>
            ))}
          </div>

          <h4 className="text-xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
            {t("footer.newsletter")}
          </h4>
          <form onSubmit={handleSubmitNewsletter} className="flex flex-col gap-4 w-full max-w-sm">
            <input
              type="email"
              name="email"
              placeholder={t("footer.yourEmailPlaceholder")}
              className="p-3 rounded-lg bg-gray-800 border border-gray-700
                         text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500
                         transition-all duration-200 shadow-inner" // Добавил тень для глубины
              required
            />
            <motion.button
              type="submit"
              whileHover={{
                scale: 1.02,
                backgroundColor: "#4F46E5", // bg-indigo-600
                boxShadow: "0 5px 20px rgba(79, 70, 229, 0.5)", // Более сильная тень
              }}
              whileTap={{ scale: 0.98 }}
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg
                         flex items-center justify-center gap-2 transition-all duration-200 shadow-md"
            >
              {t("footer.subscribe")} <ArrowRight size={20} /> {/* Иконка справа */}
            </motion.button>
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-gray-800/50 text-center text-gray-500 text-sm relative z-10">
        <p className="mb-2">
          © {currentYear} MegaSchool. {t("footer.allRightsReserved")}
        </p>
        <p>
          <Link
            to="/privacy-policy"
            className="hover:text-white transition-colors duration-200 mx-2 text-gray-500 hover:text-blue-400"
          >
            {t("footer.privacyPolicy")}
          </Link>
          <span className="text-gray-700">|</span>
          <Link
            to="/terms-of-service"
            className="hover:text-white transition-colors duration-200 mx-2 text-gray-500 hover:text-blue-400"
          >
            {t("footer.termsOfService")}
          </Link>
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;