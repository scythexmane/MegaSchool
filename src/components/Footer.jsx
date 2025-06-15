import React from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";

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
} from "lucide-react";

// Предполагаем, что у вас есть компонент Logo, который используется в Navbar
// Если нет, замените его на <img> и <span> с текстом, как было ранее
// import Logo from './Logo'; // Путь к вашему компоненту логотипа

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

  // Варианты для анимированных ссылок (как в Navbar с подчеркиванием)
  const linkVariants = {
    rest: { opacity: 0.8, x: 0 },
    hover: {
      opacity: 1,
      x: 0, // Убираем смещение, чтобы фокус был на подчеркивании
      color: "hsl(217, 91%, 60%)", // Tailwind blue-500 для текста при наведении
      transition: { duration: 0.2, ease: "easeOut" },
    },
  };

  // Варианты для подчеркивания ссылок (для использования с :after)
  const underlineVariants = {
    rest: {
      width: "0%",
      left: "50%",
      background: "linear-gradient(to right, #60A5FA, #A78BFA)",
    }, // Tailwind blue-400 to purple-400
    hover: {
      width: "100%",
      left: "0%",
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  // Варианты для иконок соцсетей
  const socialIconVariants = {
    rest: { scale: 1, opacity: 0.7, filter: "none" },
    hover: {
      scale: 1.15,
      opacity: 1,
      filter: "drop-shadow(0 0 8px rgba(59, 130, 246, 0.6))", // Мягкое синее свечение
      transition: { duration: 0.2, ease: "easeOut" },
    },
  };

  const handleSubmitNewsletter = (e) => {
    e.preventDefault();
    console.log("Newsletter subscribed:", e.target.email.value);
    alert(t("newsletterSuccess"));
    e.target.reset(); // Clear the form
  };

  return (
    <motion.footer
      variants={footerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="bg-gray-900 text-gray-300 py-16 px-6 relative overflow-hidden
                 border-t border-gray-700 shadow-xl"
    >
      {/* Мягкий градиентный фон для глубины, как в Navbar */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-900 to-blue-950 opacity-20"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 relative z-10">
        {/* Column 1: Logo and Description */}
        <Link
          to="/"
          className="text-3xl font-extrabold tracking-tight text-gray-800 dark:text-white"
          aria-label="MegaSchool Home"
        >
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
            Mega
          </span>
          School
        </Link>

        {/* Column 2: Quick Links */}
        <div className="flex flex-col gap-6">
          <h4
            className="text-xl font-semibold mb-2
                       bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text"
          >
            {t("quickLinks")}
          </h4>
          <ul className="space-y-4">
            {" "}
            {/* Увеличен space-y для лучшего разделения */}
            {["aboutUs", "allCourses", "blog", "faq"].map((key) => (
              <motion.li
                key={key}
                variants={linkVariants}
                initial="rest"
                whileHover="hover"
                className="relative inline-block w-full" // w-full для подчеркивания на всю ширину блока
              >
                <a
                  href={`/${key.toLowerCase().replace("all", "")}`}
                  className="block text-gray-300 hover:text-white transition-colors duration-200 py-1"
                >
                  {" "}
                  {/* Добавлен py-1 для отступа */}
                  {t(key)}
                  <motion.span
                    variants={underlineVariants}
                    className="absolute bottom-0 h-[2px] bg-gradient-to-r from-blue-400 to-purple-400"
                  ></motion.span>
                </a>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Column 3: Contact Info */}
        <div className="flex flex-col gap-6">
          <h4
            className="text-xl font-semibold mb-2
                       bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text"
          >
            {t("contactInfo")}
          </h4>
          <ul className="space-y-4 text-gray-400">
            {" "}
            {/* Увеличен space-y */}
            <motion.li
              variants={linkVariants}
              initial="rest"
              whileHover="hover"
              className="flex items-center gap-3 relative inline-block w-full"
            >
              <Phone size={20} className="text-blue-400 flex-shrink-0" />
              <a
                href="tel:+998901234567"
                className="hover:text-white transition-colors duration-200 py-1"
              >
                +998 90 123 45 67
                <motion.span
                  variants={underlineVariants}
                  className="absolute bottom-0 h-[2px] bg-gradient-to-r from-blue-400 to-purple-400"
                ></motion.span>
              </a>
            </motion.li>
            <motion.li
              variants={linkVariants}
              initial="rest"
              whileHover="hover"
              className="flex items-center gap-3 relative inline-block w-full"
            >
              <Mail size={20} className="text-purple-400 flex-shrink-0" />
              <a
                href="mailto:info@megaschool.uz"
                className="hover:text-white transition-colors duration-200 py-1"
              >
                info@megaschool.uz
                <motion.span
                  variants={underlineVariants}
                  className="absolute bottom-0 h-[2px] bg-gradient-to-r from-blue-400 to-purple-400"
                ></motion.span>
              </a>
            </motion.li>
            <motion.li
              variants={linkVariants}
              initial="rest"
              whileHover="hover"
              className="flex items-start gap-3 relative inline-block w-full"
            >
              <MapPin
                size={20}
                className="text-emerald-400 flex-shrink-0 mt-1"
              />
              <address className="not-italic hover:text-white transition-colors duration-200 py-1">
                ул. Примерная, 123, Ташкент, Узбекистан
                <motion.span
                  variants={underlineVariants}
                  className="absolute bottom-0 h-[2px] bg-gradient-to-r from-blue-400 to-purple-400"
                ></motion.span>
              </address>
            </motion.li>
          </ul>
        </div>

        {/* Column 4: Social Media & Newsletter */}
        <div className="flex flex-col gap-6">
          <h4
            className="text-xl font-semibold mb-2
                       bg-gradient-to-r from-emerald-400 to-cyan-400 text-transparent bg-clip-text"
          >
            {t("followUs")}
          </h4>
          <div className="flex space-x-5">
            {[
              {
                icon: Instagram,
                href: "https://instagram.com/megaschool",
                baseColor: "text-pink-400",
              },
              {
                icon: Send,
                href: "https://t.me/megaschool",
                baseColor: "text-blue-400",
              },
              {
                icon: Facebook,
                href: "https://facebook.com/megaschool",
                baseColor: "text-blue-500",
              },
              {
                icon: Linkedin,
                href: "https://linkedin.com/company/megaschool",
                baseColor: "text-blue-600",
              },
              {
                icon: Youtube,
                href: "https://youtube.com/megaschool",
                baseColor: "text-red-500",
              },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`transition-colors duration-200 ${social.baseColor}`}
                variants={socialIconVariants}
                initial="rest"
                whileHover="hover"
              >
                <social.icon size={28} />
              </motion.a>
            ))}
          </div>

          <h4
            className="text-xl font-semibold mt-4 mb-2
                       bg-gradient-to-r from-yellow-400 to-orange-400 text-transparent bg-clip-text"
          >
            {t("newsletter")}
          </h4>
          <form
            onSubmit={handleSubmitNewsletter}
            className="flex flex-col gap-3"
          >
            <input
              type="email"
              name="email"
              placeholder={t("yourEmailPlaceholder")}
              className="p-3 rounded-lg bg-gray-700 border border-gray-600
                         text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500
                         transition-all duration-200"
              required
            />
            <motion.button
              type="submit"
              whileHover={{
                scale: 1.02,
                backgroundColor: "#4F46E5",
                boxShadow: "0 5px 15px rgba(59, 130, 246, 0.4)",
              }}
              whileTap={{ scale: 0.98 }}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg
                         flex items-center justify-center gap-2 transition-all duration-200 shadow-md"
            >
              <Send size={20} /> {t("subscribe")}
            </motion.button>
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-gray-700/50 text-center text-gray-400 text-sm relative z-10">
        <p>
          © {currentYear} MegaSchool. {t("allRightsReserved")}
        </p>
        <p className="mt-2">
          <a
            href="/privacy-policy"
            className="hover:text-white transition-colors duration-200 mx-2"
          >
            {t("privacyPolicy")}
          </a>
          <span className="text-gray-600">|</span>
          <a
            href="/terms-of-service"
            className="hover:text-white transition-colors duration-200 mx-2"
          >
            {t("termsOfService")}
          </a>
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;
