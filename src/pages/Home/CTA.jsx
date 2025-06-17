import React, { useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send } from "lucide-react";

const branches = [
  { id: 1, name: "MegaSchool Center", address: "Amir Temur St, 107, Tashkent", phone: "+998 71 234 56 78", email: "center@megaschool.uz" },
  { id: 2, name: "MegaSchool Chilanzar", address: "Chilanzar, Block 15, House 20", phone: "+998 71 271 22 33", email: "chilanzar@megaschool.uz" },
  { id: 3, name: "MegaSchool Mirzo-Ulugbek", address: "Buyuk Ipak Yuli St, 12, Mirzo-Ulugbek", phone: "+998 71 267 89 00", email: "ulugbek@megaschool.uz" },
  { id: 4, name: "MegaSchool Yunusabad", address: "Yunusabad, C-5, House 35", phone: "+998 71 200 55 66", email: "yunusabad@megaschool.uz" },
];

const ContactSection = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({ name: "", email: "", message: "", branch: "" });
  const [mapCardTransform, setMapCardTransform] = useState({
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
  });
  const mapCardRef = useRef(null);

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

  const handleMouseMove = (e) => {
    if (!mapCardRef.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = mapCardRef.current.getBoundingClientRect();
    const x = (clientX - (left + width / 2)) / (width / 2);
    const y = (clientY - (top + height / 2)) / (height / 2);
    const rotateY = x * 8;
    const rotateX = -y * 8;
    setMapCardTransform({
      rotateX,
      rotateY,
      scale: 1.01,
      boxShadow: `0 ${(Math.abs(x) + Math.abs(y)) * 10 + 15}px ${
        (Math.abs(x) + Math.abs(y)) * 20 + 40
      }px rgba(0,0,0,0.3), 0 0 25px rgba(59,130,246,0.3)`,
    });
  };

  const handleMouseLeave = () => {
    setMapCardTransform({
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
    });
  };

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
    hover: {
      scale: 1.02,
      boxShadow: "0 15px 30px rgba(0,0,0,0.2)",
      transition: { duration: 0.2 },
    },
  };

  const inputVariants = {
    rest: { borderColor: "var(--card-border)", boxShadow: "0 0 0px transparent" },
    focus: {
      borderColor: "var(--gradient-from)",
      boxShadow: "0 0 15px rgba(59,130,246,0.6)",
      transition: { duration: 0.3 },
    },
  };

  const submitButtonVariants = {
    rest: { scale: 1, backgroundPosition: "0% 50%" },
    hover: {
      scale: 1.03,
      backgroundPosition: "100% 50%",
      boxShadow: "0 10px 25px rgba(59,130,246,0.6)",
      transition: { duration: 0.3 },
    },
    tap: { scale: 0.97 },
  };

  return (
    <motion.section
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="py-20 md:py-32 animated-bg relative overflow-hidden"
    >
      {/* Background blobs */}
      <div className="absolute inset-0 z-0 opacity-20 dark:opacity-30">
        <div
          className="absolute top-1/4 left-[10%] w-64 h-64 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob"
          style={{ backgroundColor: "var(--blob-blue)" }}
        ></div>
        <div
          className="absolute bottom-1/3 right-[15%] w-72 h-72 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-2000"
          style={{ backgroundColor: "var(--blob-purple)" }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, type: "spring", stiffness: 100 }}
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-center mb-16 bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] text-transparent bg-clip-text"
        >
          {t("contactUsTitleSimple")}
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Branches and Map */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.2, staggerChildren: 0.1 }}
            className="flex flex-col gap-6"
          >
            <h3 className="text-3xl font-bold text-[var(--text-primary)] mb-4">
              {t("ourBranches")}
            </h3>
            <motion.div variants={cardVariants} whileHover="hover">
              <label
                htmlFor="branch-select"
                className="block text-[var(--text-secondary)] text-lg font-medium mb-3"
              >
                {t("selectBranch")}
              </label>
              <select
                id="branch-select"
                name="branch"
                onChange={handleChange}
                value={formData.branch}
                className="w-full p-3 rounded-lg bg-[var(--card-bg)] border border-[var(--card-border)] text-[var(--text-primary)] shadow-sm focus:ring-[var(--gradient-from)] focus:border-[var(--gradient-from)] transition-colors duration-200"
              >
                <option value="">{t("chooseBranchOption")}</option>
                {branches.map((branch) => (
                  <option key={branch.id} value={branch.name}>
                    {branch.name}
                  </option>
                ))}
              </select>
            </motion.div>

            <motion.div
              ref={mapCardRef}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              style={{
                transform: `perspective(1000px) rotateX(${mapCardTransform.rotateX}deg) rotateY(${mapCardTransform.rotateY}deg) scale(${mapCardTransform.scale})`,
                boxShadow: mapCardTransform.boxShadow,
              }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="rounded-2xl overflow-hidden bg-[var(--card-bg)] border border-[var(--card-border)] transition-all duration-100 ease-out"
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

            {formData.branch && (
              <motion.div
                initial={{ opacity: 0, y: 20, height: 0 }}
                animate={{ opacity: 1, y: 0, height: "auto" }}
                exit={{ opacity: 0, y: -20, height: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="mt-6 bg-[var(--card-bg)] rounded-lg p-6 shadow-lg border border-[var(--card-border)] flex flex-col gap-2 overflow-hidden"
              >
                <h4 className="font-bold text-xl bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] text-transparent bg-clip-text">
                  {formData.branch}
                </h4>
                <p className="text-[var(--text-secondary)] flex items-center gap-2">
                  <MapPin size={18} className="text-[var(--gradient-to)]" />{" "}
                  {branches.find((b) => b.name === formData.branch)?.address}
                </p>
                <p className="text-[var(--text-secondary)] flex items-center gap-2">
                  <Phone size={18} className="text-[var(--gradient-from)]" />{" "}
                  {branches.find((b) => b.name === formData.branch)?.phone}
                </p>
                <p className="text-[var(--text-secondary)] flex items-center gap-2">
                  <Mail size={18} className="text-[var(--gradient-to)]" />{" "}
                  {branches.find((b) => b.name === formData.branch)?.email}
                </p>
              </motion.div>
            )}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="bg-[var(--card-bg)] rounded-2xl p-8 md:p-10 shadow-xl border border-[var(--card-border)]"
          >
            <h3 className="text-3xl font-extrabold text-center mb-8 bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] text-transparent bg-clip-text">
              {t("sendUsAMessage")}
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-[var(--text-secondary)] text-lg font-medium mb-2"
                >
                  {t("yourName")}
                </label>
                <motion.input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={t("namePlaceholder")}
                  className="w-full p-4 rounded-lg bg-[var(--card-bg)] border border-[var(--card-border)] text-[var(--text-primary)] shadow-sm focus:ring-[var(--gradient-from)] focus:border-[var(--gradient-from)] transition-all duration-200 ease-in-out"
                  required
                  variants={inputVariants}
                  whileFocus="focus"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-[var(--text-secondary)] text-lg font-medium mb-2"
                >
                  {t("yourEmail")}
                </label>
                <motion.input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={t("emailPlaceholder")}
                  className="w-full p-4 rounded-lg bg-[var(--card-bg)] border border-[var(--card-border)] text-[var(--text-primary)] shadow-sm focus:ring-[var(--gradient-from)] focus:border-[var(--gradient-from)] transition-all duration-200 ease-in-out"
                  required
                  variants={inputVariants}
                  whileFocus="focus"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-[var(--text-secondary)] text-lg font-medium mb-2"
                >
                  {t("yourMessage")}
                </label>
                <motion.textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  placeholder={t("messagePlaceholder")}
                  className="w-full p-4 rounded-lg bg-[var(--card-bg)] border border-[var(--card-border)] text-[var(--text-primary)] shadow-sm focus:ring-[var(--gradient-from)] focus:border-[var(--gradient-from)] transition-all duration-200 ease-in-out"
                  required
                  variants={inputVariants}
                  whileFocus="focus"
                />
              </div>
              <motion.button
                type="submit"
                variants={submitButtonVariants}
                initial="rest"
                whileHover="hover"
                whileTap="tap"
                className="w-full px-6 py-3 rounded-full bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] text-white font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out relative overflow-hidden flex items-center justify-center gap-2"
              >
                <span className="relative z-10">{t("submit")}</span>
                <Send size={20} className="relative z-10" />
                <span className="absolute inset-0 bg-gradient-to-r from-[var(--gradient-to)] to-[var(--gradient-from)] opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default ContactSection;