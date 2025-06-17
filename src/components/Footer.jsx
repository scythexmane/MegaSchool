import React from "react";
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

  const linkVariants = {
    rest: { opacity: 0.8, x: 0, color: "var(--text-secondary)" },
    hover: {
      opacity: 1,
      x: 5,
      color: "var(--gradient-from)",
      transition: { duration: 0.2, ease: "easeOut" },
    },
  };

  const socialIconVariants = {
    rest: { scale: 1, opacity: 0.7, filter: "none" },
    hover: {
      scale: 1.15,
      opacity: 1,
      filter: "drop-shadow(0 0 10px rgba(59, 130, 246, 0.7))",
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
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--bg-from)] via-[var(--bg-to)] to-[var(--gradient-to)] opacity-10"></div>

      {/* Abstract glowing blobs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-[var(--gradient-from)]/5 rounded-full mix-blend-screen filter blur-3xl opacity-50 animate-blob-bounce-1" />
      <div className="absolute bottom-1/4 right-1/4 w-60 h-60 bg-[var(--gradient-to)]/5 rounded-full mix-blend-screen filter blur-3xl opacity-50 animate-blob-bounce-2 delay-700" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 relative z-10">
        {/* Column 1: Logo & Description */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <Link
            to="/"
            className="text-4xl font-extrabold tracking-tight text-[var(--text-primary)] mb-4"
            aria-label="MegaSchool Home"
          >
            <span className="bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] text-transparent bg-clip-text">
              Mega
            </span>
            School
          </Link>
          <p className="text-[var(--text-secondary)] text-base leading-relaxed max-w-sm">
            {t("footer.description")}
          </p>
        </div>

        {/* Column 2: Quick Links & Contact Info */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12">
          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)]">
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
                    to={`/${key
                      .toLowerCase()
                      .replace("all", "")
                      .replace("us", "")}`}
                    className="flex items-center text-[var(--text-secondary)] transition-colors duration-200"
                  >
                    {t(key)}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>
          <div className="absolute top-1/4 right-4/4 w-72 h-72 bg-[var(--gradient-from)]/10 rounded-full mix-blend-screen filter blur-3xl opacity-70 animate-blob-bounce-1" />
          <div className="absolute bottom-1/4 right-1/4 w-60 h-60 bg-[var(--gradient-to)]/10 rounded-full mix-blend-screen filter blur-3xl opacity-60 animate-blob-bounce-2 delay-700" />
          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)]">
              {t("footer.contactInfo")}
            </h4>
            <ul className="space-y-3 text-[var(--text-secondary)]">
              <motion.li
                variants={linkVariants}
                initial="rest"
                whileHover="hover"
                className="flex items-center gap-3"
              >
                <Phone
                  size={20}
                  className="text-[var(--gradient-from)] flex-shrink-0"
                />
                <a
                  href="tel:+998901234567"
                  className="transition-colors duration-200"
                >
                  +998 90 123 45 67
                </a>
              </motion.li>
              <motion.li
                variants={linkVariants}
                initial="rest"
                whileHover="hover"
                className="flex items-center gap-3"
              >
                <Mail
                  size={20}
                  className="text-[var(--gradient-to)] flex-shrink-0"
                />
                <a
                  href="mailto:info@megaschool.uz"
                  className="transition-colors duration-200"
                >
                  info@megaschool.uz
                </a>
              </motion.li>
              <motion.li
                variants={linkVariants}
                initial="rest"
                whileHover="hover"
                className="flex items-start gap-3"
              >
                <MapPin
                  size={20}
                  className="text-[var(--gradient-from)] flex-shrink-0 mt-1"
                />
                <address className="not-italic transition-colors duration-200">
                  {t("footer.address")}
                </address>
              </motion.li>
            </ul>
          </div>
        </div>

        {/* Column 3: Social Media & Newsletter */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h4 className="text-xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)]">
            {t("footer.followUs")}
          </h4>
          <div className="flex flex-wrap justify-center md:justify-start gap-5 mb-10">
            {[
              {
                icon: Instagram,
                href: "https://instagram.com/megaschool",
                baseColor: "text-[var(--gradient-from)]",
              },
              {
                icon: Send,
                href: "https://t.me/megaschool",
                baseColor: "text-[var(--gradient-to)]",
              },
              {
                icon: Facebook,
                href: "https://facebook.com/megaschool",
                baseColor: "text-[var(--gradient-from)]",
              },
              {
                icon: Linkedin,
                href: "https://linkedin.com/company/megaschool",
                baseColor: "text-[var(--gradient-to)]",
              },
              {
                icon: Youtube,
                href: "http://youtube.com/megaschool",
                baseColor: "text-[var(--gradient-from)]",
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
                <social.icon size={30} />
              </motion.a>
            ))}
          </div>

          <h4 className="text-xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)]">
            {t("footer.newsletter")}
          </h4>
          <form
            onSubmit={handleSubmitNewsletter}
            className="flex flex-col gap-4 w-full max-w-sm"
          >
            <input
              type="email"
              name="email"
              placeholder={t("footer.yourEmailPlaceholder")}
              className="p-3 rounded-lg bg-[var(--card-bg)] border border-[var(--card-border)] text-[var(--text-primary)] placeholder-[var(--text-secondary)] focus:outline-none focus:ring-2 focus:ring-[var(--gradient-from)] transition-all duration-200 shadow-inner"
              required
            />
            <motion.button
              type="submit"
              whileHover={{
                scale: 1.02,
                boxShadow: "0 5px 20px rgba(59, 130, 246, 0.5)",
              }}
              whileTap={{ scale: 0.98 }}
              className="bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] text-white font-bold py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition-all duration-200 shadow-md"
            >
              {t("footer.subscribe")} <ArrowRight size={20} />
            </motion.button>
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-[var(--card-border)] text-center text-[var(--text-secondary)] text-sm relative z-10">
        <p className="mb-2">
          © {currentYear} MegaSchool. {t("footer.allRightsReserved")}
        </p>
        <p>
          <Link
            to="/privacy-policy"
            className="transition-colors duration-200 mx-2 text-[var(--text-secondary)] hover:text-[var(--gradient-from)]"
          >
            {t("footer.privacyPolicy")}
          </Link>
          <span className="text-[var(--text-secondary)]">|</span>
          <Link
            to="/terms-of-service"
            className="transition-colors duration-200 mx-2 text-[var(--text-secondary)] hover:text-[var(--gradient-from)]"
          >
            {t("footer.termsOfService")}
          </Link>
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;
