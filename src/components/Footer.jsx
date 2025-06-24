import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Instagram,
  Facebook,
  Linkedin,
  Youtube,
  Send,
  ArrowRight,
} from "lucide-react";

import logoDark from "../assets/bl-logo.png"; // светлый логотип (на темной теме)
import logoLight from "../assets/wh-logo.png"; // тёмный логотип (на светлой теме)

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  const [isDarkMode, setIsDarkMode] = useState(false);

  const socialLinks = [
    { Icon: Instagram, url: "https://instagram.com/megaschooluz" },
    { Icon: Send, url: "https://t.me/megaschooluz" },
    { Icon: Facebook, url: "https://facebook.com/megaschooluz" },
    { Icon: Linkedin, url: "https://linkedin.com/company/megaschooluz" },
    { Icon: Youtube, url: "https://youtube.com/@megaschooluz" },
  ];

  // Обновляем тему при изменении className на html
  useEffect(() => {
    const checkTheme = () =>
      setIsDarkMode(document.documentElement.classList.contains("dark"));

    checkTheme();

    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  const footerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const linkVariants = {
    rest: { opacity: 0.8, x: 0 },
    hover: {
      opacity: 1,
      x: 5,
      transition: { duration: 0.2, ease: "easeOut" },
    },
  };

  const socialIconVariants = {
    rest: { scale: 1, opacity: 0.7 },
    hover: {
      scale: 1.15,
      opacity: 1,
      transition: { duration: 0.2, ease: "easeOut" },
    },
  };

  const handleSubmitNewsletter = (e) => {
    e.preventDefault();
    console.log("Newsletter subscribed:", e.target.email.value);
    alert(t("footer.newsletterSuccess"));
    e.target.reset();
  };

  return (
    <motion.footer
      variants={footerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="relative bg-[var(--bg-from)] text-[var(--text-secondary)] py-16 px-6 overflow-hidden border-t border-[var(--card-border)] shadow-lg"
    >
      {/* Абстрактные фоны */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--bg-from)] via-[var(--bg-to)] to-[var(--gradient-to)] opacity-10"></div>
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-[var(--gradient-from)]/5 rounded-full mix-blend-screen blur-3xl opacity-50 animate-blob-bounce-1" />
      <div className="absolute bottom-1/4 right-1/4 w-60 h-60 bg-[var(--gradient-to)]/5 rounded-full mix-blend-screen blur-3xl opacity-50 animate-blob-bounce-2 delay-700" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 relative z-10">
        {/* Лого и описание */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <Link to="/" className="flex-shrink-0" aria-label="Home">
            <img
              src={isDarkMode ? logoDark : logoLight}
              alt="Логотип"
              className="h-10 md:h-14 w-auto transition-all duration-500"
            />
          </Link>
          <p className="text-base leading-relaxed max-w-sm mt-4">
            {t("footer.description")}
          </p>
        </div>

        {/* Быстрые ссылки и контакты */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div>
            <h4 className="text-xl font-semibold mb-6 bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] text-transparent bg-clip-text">
              {t("footer.quickLinks")}
            </h4>
            <ul className="space-y-3">
              {["aboutUs", "allCourses", "contact1"].map((key) => (
                <motion.li
                  key={key}
                  variants={linkVariants}
                  initial="rest"
                  whileHover="hover"
                  className="relative"
                >
                  <Link
                    to={`/${key
                      .toLowerCase()
                      .replace("all", "")
                      .replace("us", "")
                      .replace("1", "")}`}
                    className="transition-colors duration-200"
                  >
                    {t(key)}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-6 bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] text-transparent bg-clip-text">
              {t("footer.contactInfo")}
            </h4>
            <ul className="space-y-3">
              <motion.li
                variants={linkVariants}
                initial="rest"
                whileHover="hover"
                className="flex items-center gap-3"
              >
                <Phone size={20} />
                <a href="tel:+998901234567">+998 90 123 45 67</a>
              </motion.li>
              <motion.li
                variants={linkVariants}
                initial="rest"
                whileHover="hover"
                className="flex items-center gap-3"
              >
                <Mail size={20} />
                <a href="mailto:info@megaschool.uz">info@megaschool.uz</a>
              </motion.li>
              <motion.li
                variants={linkVariants}
                initial="rest"
                whileHover="hover"
                className="flex items-start gap-3"
              >
                <MapPin size={20} className="mt-1" />
                <address className="not-italic">{t("footer.address")}</address>
              </motion.li>
            </ul>
          </div>
        </div>

        {/* Соцсети и подписка */}
        <div className="flex flex-col items-center md:items-start">
          <h4 className="text-xl font-semibold mb-6 bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] text-transparent bg-clip-text">
            {t("footer.followUs")}
          </h4>
          <div className="flex flex-wrap gap-4 mb-8">
            {socialLinks.map(({ Icon, url }, i) => (
              <motion.a
                key={i}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--text-secondary)] hover:text-[var(--gradient-from)] transition"
                variants={socialIconVariants}
                initial="rest"
                whileHover="hover"
              >
                <Icon size={26} />
              </motion.a>
            ))}
          </div>
          <h4 className="text-xl font-semibold mb-4 bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] text-transparent bg-clip-text">
            {t("footer.newsletter")}
          </h4>
          <form
            onSubmit={handleSubmitNewsletter}
            className="flex flex-col gap-3 w-full max-w-sm"
          >
            <input
              type="tel"
              name="phone"
              placeholder={t("footer.yourEmailPlaceholder")}
              required
              pattern="[0-9+ ]*"
              inputMode="tel"
              className="p-3 rounded-lg bg-[var(--card-bg)] border border-[var(--card-border)] placeholder-[var(--text-secondary)] focus:outline-none"
            />

            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] text-white font-semibold py-2 px-4 rounded-lg flex items-center justify-center gap-2"
            >
              {t("footer.subscribe")} <ArrowRight size={20} />
            </motion.button>
          </form>
        </div>
      </div>

      {/* Нижняя часть */}
      <div className="max-w-7xl mx-auto mt-10 border-t border-[var(--card-border)] text-xs text-[var(--text-secondary)] px-4 pt-5 pb-5 flex flex-col sm:flex-row justify-between items-center gap-y-2 sm:gap-0">
        <p className="whitespace-nowrap text-center sm:text-left">
          © {currentYear} MegaSchool. {t("footer.allRightsReserved")}
        </p>
        <div className="flex items-center gap-4 text-center sm:text-right">
          <span className="opacity-60">By Megaschool Students</span>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
