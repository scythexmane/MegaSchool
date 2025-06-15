import React, { useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send, Globe } from "lucide-react"; // Иконки

// --- Mock Data for Branches (для выпадающего списка и отображения информации) ---
const branches = [
  {
    id: 1,
    name: "MegaSchool Center (Центральный)",
    address: "ул. Амира Темура, 107, Ташкент",
    phone: "+998 71 234 56 78",
    email: "center@megaschool.uz",
  },
  {
    id: 2,
    name: "MegaSchool Chilanzar (Чиланзар)",
    address: "Чиланзарский район, квартал 15, дом 20",
    phone: "+998 71 271 22 33",
    email: "chilanzar@megaschool.uz",
  },
  {
    id: 3,
    name: "MegaSchool Mirzo-Ulugbek (Мирзо-Улугбек)",
    address: "Мирзо-Улугбекский район, ул. Буюк Ипак Йули, 12",
    phone: "+998 71 267 89 00",
    email: "ulugbek@megaschool.uz",
  },
  {
    id: 4,
    name: "MegaSchool Yunusabad (Юнусабад)",
    address: "Юнусабадский район, Ц-5, дом 35",
    phone: "+998 71 200 55 66",
    email: "yunusabad@megaschool.uz",
  }
];

const ContactSection = () => {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    branch: "", // Для выбора филиала в форме
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert(t("formSubmittedMessage"));
    setFormData({ name: "", email: "", message: "", branch: "" });
  };

  // --- Animation Variants ---
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
  };

  // Варианты для карточек контактов и обертки карты
  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 100, damping: 15 } },
    hover: {
      scale: 1.02,
      boxShadow: "0 15px 30px rgba(0,0,0,0.2), 0 0 20px rgba(74,144,226,0.2)",
      transition: { duration: 0.2, ease: "easeOut" }
    },
  };

  // Варианты для полей ввода формы
  const inputVariants = {
    rest: { borderColor: "#4B5563", boxShadow: "0 0 0px transparent" },
    focus: {
      borderColor: "#3B82F6", // Blue-600
      boxShadow: "0 0 15px rgba(59,130,246,0.6), 0 0 25px rgba(123,65,199,0.3)",
      transition: { duration: 0.3, ease: "easeOut" }
    }
  };

  // Варианты для кнопки отправки формы
  const submitButtonVariants = {
    rest: { scale: 1, backgroundPosition: "0% 50%" },
    hover: {
      scale: 1.03,
      backgroundPosition: "100% 50%", // Анимируем фон градиента
      boxShadow: "0 10px 25px rgba(59,130,246,0.6), 0 0 40px rgba(123,65,199,0.4)",
      transition: { duration: 0.3, ease: "easeOut" }
    },
    tap: { scale: 0.97 }
  };

  // --- Mouse move effect for map card (тот же, что и раньше, для качества) ---
  const [mapCardTransform, setMapCardTransform] = useState({ rotateX: 0, rotateY: 0, scale: 1, boxShadow: "0 10px 25px rgba(0,0,0,0.1)" });
  const mapCardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!mapCardRef.current) return;

    const { clientX, clientY } = e;
    const { left, top, width, height } = mapCardRef.current.getBoundingClientRect();

    const x = (clientX - (left + width / 2)) / (width / 2); // -1 to 1
    const y = (clientY - (top + height / 2)) / (height / 2); // -1 to 1

    const rotateY = x * 8; // Max 8 degrees rotation
    const rotateX = -y * 8; // Max 8 degrees rotation

    setMapCardTransform({
        rotateX,
        rotateY,
        scale: 1.01,
        boxShadow: `0 ${(Math.abs(x) + Math.abs(y)) * 10 + 15}px ${(Math.abs(x) + Math.abs(y)) * 20 + 40}px rgba(0,0,0,0.3), 0 0 25px rgba(74,144,226,0.3)` // Динамическая тень
    });
  };

  const handleMouseLeave = () => {
    setMapCardTransform({ rotateX: 0, rotateY: 0, scale: 1, boxShadow: "0 10px 25px rgba(0,0,0,0.1)" });
  };


  return (
    <motion.section
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="py-20 md:py-32 bg-white dark:bg-gray-950 text-gray-900 dark:text-white relative overflow-hidden"
      // Без фоновых анимаций, просто чистый цвет
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, type: "spring", stiffness: 100 }}
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-center mb-16
                     bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text
                     drop-shadow-lg" // Добавим тень для глубины текста
        >
          {t("contactUsTitleSimple")}
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column: Map and Branch Selector */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.2, staggerChildren: 0.1 }} // Анимация детей с задержкой
            className="flex flex-col gap-6"
          >
            <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
              {t("ourBranches")}
            </h3>
            <motion.div variants={cardVariants} whileHover="hover"> {/* Общий эффект для селектора */}
              <label htmlFor="branch-select" className="block text-gray-700 dark:text-gray-300 text-lg font-medium mb-3">
                {t("selectBranch")}
              </label>
              <select
                id="branch-select"
                name="branch"
                onChange={handleChange}
                value={formData.branch}
                className="w-full p-3 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700
                           text-gray-900 dark:text-gray-100 shadow-sm focus:ring-blue-500 focus:border-blue-500
                           transition-colors duration-200"
              >
                <option value="">{t("chooseBranchOption")}</option>
                {branches.map((branch) => (
                  <option key={branch.id} value={branch.name}>
                    {branch.name}
                  </option>
                ))}
              </select>
            </motion.div>

            {/* Карта Ташкента - теперь с интерактивной оберткой */}
            <motion.div
              ref={mapCardRef}
              variants={cardVariants}
              initial="hidden" // Анимируем появление
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              style={{
                transform: `perspective(1000px) rotateX(${mapCardTransform.rotateX}deg) rotateY(${mapCardTransform.rotateY}deg) scale(${mapCardTransform.scale})`,
                boxShadow: mapCardTransform.boxShadow,
              }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="rounded-2xl overflow-hidden bg-gray-100 dark:bg-gray-800 transition-all duration-100 ease-out" // Более чистый фон
            >
              <iframe
                src="https://maps.google.com/?cid=11937127517559049112"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Map of Tashkent"
              ></iframe>
            </motion.div>

            {/* Информация о выбранном филиале - с более плавными анимациями */}
            {formData.branch && (
              <motion.div
                initial={{ opacity: 0, y: 20, height: 0 }}
                animate={{ opacity: 1, y: 0, height: "auto" }}
                exit={{ opacity: 0, y: -20, height: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="mt-6 bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg border border-gray-200 dark:border-gray-700
                           flex flex-col gap-2 overflow-hidden" // overflow-hidden для анимации height
              >
                <h4 className="font-bold text-xl mb-2 text-blue-600 dark:text-blue-400">{formData.branch}</h4>
                <p className="text-gray-700 dark:text-gray-300 flex items-center gap-2"><MapPin size={18} className="text-purple-600 dark:text-purple-400" /> {branches.find(b => b.name === formData.branch)?.address}</p>
                <p className="text-gray-700 dark:text-gray-300 flex items-center gap-2"><Phone size={18} className="text-cyan-600 dark:text-cyan-400" /> {branches.find(b => b.name === formData.branch)?.phone}</p>
                <p className="text-gray-700 dark:text-gray-300 flex items-center gap-2"><Mail size={18} className="text-emerald-600 dark:text-emerald-400" /> {branches.find(b => b.name === formData.branch)?.email}</p>
              </motion.div>
            )}
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            variants={cardVariants} // Используем те же варианты для появления
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.4 }}
            className="bg-white dark:bg-gray-800 rounded-2xl p-8 md:p-10 shadow-lg border border-gray-200 dark:border-gray-700"
          >
            <h3 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-8 bg-gradient-to-r from-cyan-600 to-emerald-600 text-transparent bg-clip-text">
              {t("sendUsAMessage")}
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 text-lg font-medium mb-2">
                  {t("yourName")}
                </label>
                <motion.input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={t("namePlaceholder")}
                  className="w-full p-3 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600
                             text-gray-900 dark:text-gray-100 shadow-sm focus:ring-blue-500 focus:border-blue-500
                             transition-all duration-200"
                  required
                  variants={inputVariants} // Применяем варианты анимации
                  whileFocus="focus" // Анимация при фокусе
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 text-lg font-medium mb-2">
                  {t("yourEmail")}
                </label>
                <motion.input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={t("emailPlaceholder")}
                  className="w-full p-3 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600
                             text-gray-900 dark:text-gray-100 shadow-sm focus:ring-blue-500 focus:border-blue-500
                             transition-all duration-200"
                  required
                  variants={inputVariants}
                  whileFocus="focus"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 text-lg font-medium mb-2">
                  {t("yourMessage")}
                </label>
                <motion.textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  placeholder={t("messagePlaceholder")}
                  className="w-full p-3 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600
                             text-gray-900 dark:text-gray-100 shadow-sm focus:ring-blue-500 focus:border-blue-500 resize-y
                             transition-all duration-200"
                  required
                  variants={inputVariants}
                  whileFocus="focus"
                ></motion.textarea>
              </div>
              <motion.button
                type="submit"
                variants={submitButtonVariants}
                initial="rest"
                whileHover="hover"
                whileTap="tap"
                className="w-full flex items-center justify-center gap-3
                           bg-gradient-to-r from-blue-600 to-purple-600 text-white
                           px-6 py-3 rounded-full font-bold text-lg
                           transition-all duration-300 ease-in-out shadow-lg
                           bg-size-200% bg-pos-0% hover:bg-pos-100% relative overflow-hidden" // bg-size-200% и bg-pos-0% для анимации градиента
              >
                <Send size={20} className="group-hover:rotate-6 transition-transform" />
                {t("sendMessage")}
                {/* Эффект свечения при наведении */}
                <span
                  className="absolute inset-0 w-full h-full bg-white opacity-0 group-hover:opacity-10
                             transition-opacity duration-300 pointer-events-none"
                ></span>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default ContactSection;