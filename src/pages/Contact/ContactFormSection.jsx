// src/pages/Contact/ContactFormSection.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, User, Tag, Send, CheckCircle, XCircle } from "lucide-react";
import { useTranslation } from "react-i18next";

const ContactFormSection = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState(null); // 'success', 'error', 'loading', null
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = t("contact.form.errors.nameRequired");
    }
    if (!formData.email.trim()) {
      newErrors.email = t("contact.form.errors.emailRequired");
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = t("contact.form.errors.emailInvalid");
    }
    if (!formData.subject.trim()) {
      newErrors.subject = t("contact.form.errors.subjectRequired");
    }
    if (!formData.message.trim()) {
      newErrors.message = t("contact.form.errors.messageRequired");
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    // Очищаем ошибку при изменении поля
    if (errors[name]) {
      setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      setStatus('error'); // Показываем общую ошибку, если форма невалидна
      return;
    }

    setStatus("loading");

    // Имитация отправки данных
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500)); // Задержка 1.5 секунды
      console.log("Form data submitted:", formData);
      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" }); // Очищаем форму
      setErrors({}); // Очищаем ошибки
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus("error");
    } finally {
      // Скрыть статус через некоторое время
      setTimeout(() => {
        setStatus(null);
      }, 5000);
    }
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const inputVariants = {
    focused: {
      borderColor: "hsl(217, 91%, 60%)", // blue-500
      boxShadow: "0 0 0 3px rgba(59, 130, 246, 0.4)", // blue-500 shadow
      transition: { duration: 0.2 },
    },
    rest: {
      borderColor: "hsl(217, 10%, 40%)", // gray-600
      boxShadow: "none",
      transition: { duration: 0.2 },
    },
  };

  return (
    <motion.section
      className="w-full p-4 md:p-8 bg-gray-900 rounded-2xl shadow-xl flex flex-col"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <h2 className="text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-8 text-center drop-shadow-lg">
        {t("contact.form.title")}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name Input */}
        <motion.div className="relative group">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-400 mb-2 transition-colors duration-200 group-focus-within:text-blue-400"
          >
            {t("contact.form.name")}
          </label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-blue-500 transition-colors" size={20} />
            <motion.input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder={t("contact.form.namePlaceholder")}
              className={`w-full p-3 pl-10 rounded-lg bg-gray-800 text-white placeholder-gray-500
                         focus:outline-none ring-offset-2 ring-offset-gray-900
                         ${errors.name ? 'border-red-500 ring-red-500' : 'border-gray-700 focus:border-blue-500 focus:ring-blue-500'}
                         transition-all duration-200`}
              variants={inputVariants}
              whileFocus="focused"
              initial="rest"
            />
          </div>
          <AnimatePresence>
            {errors.name && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="text-red-400 text-sm mt-1 ml-1"
              >
                {errors.name}
              </motion.p>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Email Input */}
        <motion.div className="relative group">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-400 mb-2 transition-colors duration-200 group-focus-within:text-blue-400"
          >
            {t("contact.form.email")}
          </label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-blue-500 transition-colors" size={20} />
            <motion.input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder={t("contact.form.emailPlaceholder")}
              className={`w-full p-3 pl-10 rounded-lg bg-gray-800 text-white placeholder-gray-500
                         focus:outline-none ring-offset-2 ring-offset-gray-900
                         ${errors.email ? 'border-red-500 ring-red-500' : 'border-gray-700 focus:border-blue-500 focus:ring-blue-500'}
                         transition-all duration-200`}
              variants={inputVariants}
              whileFocus="focused"
              initial="rest"
            />
          </div>
          <AnimatePresence>
            {errors.email && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="text-red-400 text-sm mt-1 ml-1"
              >
                {errors.email}
              </motion.p>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Subject Input */}
        <motion.div className="relative group">
          <label
            htmlFor="subject"
            className="block text-sm font-medium text-gray-400 mb-2 transition-colors duration-200 group-focus-within:text-blue-400"
          >
            {t("contact.form.subject")}
          </label>
          <div className="relative">
            <Tag className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-blue-500 transition-colors" size={20} />
            <motion.input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder={t("contact.form.subjectPlaceholder")}
              className={`w-full p-3 pl-10 rounded-lg bg-gray-800 text-white placeholder-gray-500
                         focus:outline-none ring-offset-2 ring-offset-gray-900
                         ${errors.subject ? 'border-red-500 ring-red-500' : 'border-gray-700 focus:border-blue-500 focus:ring-blue-500'}
                         transition-all duration-200`}
              variants={inputVariants}
              whileFocus="focused"
              initial="rest"
            />
          </div>
          <AnimatePresence>
            {errors.subject && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="text-red-400 text-sm mt-1 ml-1"
              >
                {errors.subject}
              </motion.p>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Message Textarea */}
        <motion.div className="relative group">
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-400 mb-2 transition-colors duration-200 group-focus-within:text-blue-400"
          >
            {t("contact.form.message")}
          </label>
          <div className="relative">
            <motion.textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              placeholder={t("contact.form.messagePlaceholder")}
              className={`w-full p-3 rounded-lg bg-gray-800 text-white placeholder-gray-500
                         focus:outline-none ring-offset-2 ring-offset-gray-900
                         ${errors.message ? 'border-red-500 ring-red-500' : 'border-gray-700 focus:border-blue-500 focus:ring-blue-500'}
                         transition-all duration-200`}
              variants={inputVariants}
              whileFocus="focused"
              initial="rest"
            ></motion.textarea>
          </div>
          <AnimatePresence>
            {errors.message && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="text-red-400 text-sm mt-1 ml-1"
              >
                {errors.message}
              </motion.p>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Submit Button */}
        <motion.button
          type="submit"
          className={`w-full py-3 px-6 rounded-lg text-lg font-semibold flex items-center justify-center gap-3
                     transition-all duration-300 transform
                     ${
                       status === "loading"
                         ? "bg-gray-700 text-gray-400 cursor-not-allowed"
                         : "bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-blue-500/50"
                     }
                     `}
          whileHover={status !== "loading" ? { scale: 1.02 } : {}}
          whileTap={status !== "loading" ? { scale: 0.98 } : {}}
          disabled={status === "loading"}
        >
          {status === "loading" ? (
            <>
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
              {t("contact.form.sending")}
            </>
          ) : (
            <>
              {t("contact.form.send")} <Send size={20} />
            </>
          )}
        </motion.button>
      </form>

      {/* Submission Status Pop-up */}
      <AnimatePresence>
        {status && status !== 'loading' && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.8 }}
            className={`fixed bottom-8 left-1/2 transform -translate-x-1/2 p-4 rounded-lg shadow-xl flex items-center gap-3 z-50
                        ${
                          status === "success"
                            ? "bg-green-600 text-white"
                            : "bg-red-600 text-white"
                        }`}
          >
            {status === "success" ? (
              <CheckCircle size={24} />
            ) : (
              <XCircle size={24} />
            )}
            <span>
              {status === "success"
                ? t("contact.form.successMessage")
                : t("contact.form.errorMessage")}
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
};

export default ContactFormSection;