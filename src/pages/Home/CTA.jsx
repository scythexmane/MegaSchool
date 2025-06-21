import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence, useMotionValue, useTransform } from "framer-motion";
import { Phone, Mail, MapPin, Send, X, Sun, Moon } from "lucide-react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Leaflet marker setup
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

const branches = [
  {
    id: 1,
    name: "MegaSchool Yunusabad",
    address: "Yunusabad, Tashkent",
    phone: "+998977201222",
    email: "yunusabad@megaschool.uz",
    lat: 41.372415,
    lng: 69.277172,
  },
  {
    id: 2,
    name: "MegaSchool Eco Bozor",
    address: "Eco Bozor, Yunusabad District, Tashkent",
    phone: "+998977201222",
    email: "ecobozor@megaschool.uz",
    lat: 41.351020,
    lng: 69.352978,
  },
  {
    id: 3,
    name: "MegaSchool Qora Suv 6",
    address: "Qora Suv 6, Tashkent",
    phone: "+998977201222",
    email: "qorasuv@megaschool.uz",
    lat: 41.321130,
    lng: 69.355067,
  },
  {
    id: 4,
    name: "MegaSchool Servo Vostok",
    address: "Servo Vostok, Tashkent",
    phone: "+998997401222",
    email: "servovostok@megaschool.uz",
    lat: 41.355440,
    lng: 69.361550,
  },
];

// MapUpdater component
const MapUpdater = ({ selectedBranch }) => {
  const map = useMap();
  useEffect(() => {
    if (selectedBranch) {
      map.setView([selectedBranch.lat, selectedBranch.lng], 16);
    } else {
      map.setView([41.347, 69.277], 12); // Tashkent center
    }
  }, [selectedBranch, map]);
  return null;
};

// Enhanced Notification component
const Notification = ({ message, type, onClose }) => (
  <motion.div
    initial={{ opacity: 0, x: "100%", scale: 0.8 }}
    animate={{ opacity: 1, x: 0, scale: 1 }}
    exit={{ opacity: 0, x: "100%", scale: 0.8 }}
    transition={{ duration: 0.4, ease: "easeOut" }}
    className={`fixed top-4 right-4 p-4 rounded-lg shadow-lg text-white flex items-center gap-2 max-w-sm z-50 ${
      type === "success" ? "bg-green-600" : "bg-red-600"
    } backdrop-blur-md glow-${type}`}
  >
    <span>{message}</span>
    <button onClick={onClose} className="ml-auto">
      <X size={20} />
    </button>
  </motion.div>
);

const ContactSection = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({ name: "", phone: "", message: "", branch: "" });
  const [errors, setErrors] = useState({});
  const [notification, setNotification] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const formRef = useRef(null);

  // Mouse position tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const blobX = useTransform(mouseX, (x) => x * 0.3);
  const blobY = useTransform(mouseY, (y) => y * 0.3);

  // Handle mouse movement within form
  const handleMouseMove = (e) => {
    if (formRef.current) {
      const rect = formRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      mouseX.set(x);
      mouseY.set(y);
    }
  };

  // Theme toggle
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = t("contact.form.errors.nameRequired");
    
    const cleanedPhone = formData.phone.replace(/[^\d]/g, "").replace(/^\+998/, "");
    if (!formData.phone.trim()) {
      newErrors.phone = t("contact.form.errors.phoneRequired");
    } else if (!/^[0-9]{9}$/.test(cleanedPhone)) {
      newErrors.phone = t("contact.form.errors.phoneInvalid");
    }
    
    if (!formData.message.trim()) newErrors.message = t("contact.form.errors.messageRequired");
    if (!formData.branch) newErrors.branch = t("contact.form.errors.branchRequired");
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const cleanedPhone = formData.phone.replace(/[^\d]/g, "").replace(/^\+998/, "");
    const messageText = `📩 New Contact Form Submission\n👤 Name: ${formData.name}\n📞 Phone: ${cleanedPhone}\n🏢 Branch: ${formData.branch}\n💬 Message: ${formData.message}`;
    if (messageText.length > 4096) {
      setNotification({ message: t("contact.form.errors.messageTooLong"), type: "error" });
      setTimeout(() => setNotification(null), 3000);
      return;
    }

    try {
      const response = await fetch(
        `https://api.telegram.org/bot7897650391:AAFgCxaXbPqD0zIxvfZ2O8Cb8RFvgIIpcEI/sendMessage`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            chat_id: "1105646647",
            text: messageText,
          }),
        }
      );

      const responseData = await response.json();
      if (response.ok && responseData.ok) {
        setNotification({ message: t("formSubmittedMessage"), type: "success" });
        setTimeout(() => {
          setNotification(null);
          window.location.reload();
        }, 1000);
      } else {
        setNotification({
          message: `${t("contact.form.errors.submitFailed")}: ${responseData.description || "Unknown error"}`,
          type: "error",
        });
        setTimeout(() => setNotification(null), 3000);
      }
    } catch (error) {
      setNotification({ message: `${t("contact.form.errors.submitFailed")}: ${error.message}`, type: "error" });
      setTimeout(() => setNotification(null), 3000);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
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
      transition: { type: "spring", stiffness: 120, damping: 15 },
    },
    hover: {
      scale: 1.03,
      boxShadow: "0 15px 30px rgba(0,0,0,0.15)",
      transition: { duration: 0.2 },
    },
  };

  const inputVariants = {
    rest: { borderColor: "var(--card-border)", boxShadow: "0 0 0px transparent" },
    focus: {
      borderColor: "var(--gradient-from)",
      boxShadow: "0 0 15px var(--gradient-from)",
      transition: { duration: 0.3 },
    },
  };

  const submitButtonVariants = {
    rest: { scale: 1 },
    hover: {
      scale: 1.05,
      boxShadow: "0 10px 25px var(--gradient-from)",
      transition: { duration: 0.3 },
    },
    tap: { scale: 0.95 },
  };

  const selectedBranch = branches.find((b) => b.name === formData.branch);

  return (
    <motion.section
      className="py-8 md:py-12 lg:py-16 bg-gradient-to-b from-[var(--bg-from)] to-[var(--bg-to)] relative overflow-hidden p-4 sm:p-8"
      variants={sectionVariants}
      initial="hidden"
      animate="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <AnimatePresence>
        {notification && (
          <Notification
            message={notification.message}
            type={notification.type}
            onClose={() => setNotification(null)}
          />
        )}
      </AnimatePresence>

 
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.h2
          className="text-2xl p-3 sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-center mb-6 sm:mb-8 md:mb-12 bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] text-transparent bg-clip-text"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, type: "spring", stiffness: 120 }}
        >
          {t("contactUsTitleSimple")}
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8">
          <motion.div
            className="flex flex-col gap-4"
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2, staggerChildren: 0.1 }}
          >
            <h3 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] mb-4">
              {t("ourBranches")}
            </h3>
            <motion.div variants={cardVariants} whileHover="hover">
              <label
                htmlFor="branch-select"
                className="block text-sm sm:text-base font-medium text-[var(--text-secondary)] mb-2"
              >
                {t("selectBranch")}
              </label>
              <select
                id="branch-select"
                name="branch"
                value={formData.branch}
                onChange={handleChange}
                className={`w-full px-3 py-2 sm:px-4 sm:py-3 rounded-lg bg-[var(--select-menu-bg)] border border-[var(--card-border)] text-[var(--select-text-color)] focus:ring-2 focus:ring-[var(--gradient-from)] focus:border-[var(--gradient-from)] transition-all duration-200 ${
                  errors.branch ? "border-red-500" : ""
                }`}
              >
                <option value="">{t("chooseBranchOption")}</option>
                {branches.map((branch) => (
                  <option key={branch.id} value={branch.name}>
                    {branch.name}
                  </option>
                ))}
              </select>
              {errors.branch && (
                <p className="text-red-500 text-sm mt-1">{errors.branch}</p>
              )}
            </motion.div>

            <motion.div
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              className="rounded-2xl overflow-hidden border border-[var(--card-border)] bg-[var(--card-bg)]"
            >
              <MapContainer
                center={[41.347, 69.277]}
                zoom={12}
                style={{ height: "250px", width: "100%", minHeight: "250px" }}
                scrollWheelZoom={false}
                className="sm:h-[350px] md:h-[400px]"
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                {branches.map((branch) => (
                  <Marker key={branch.id} position={[branch.lat, branch.lng]}>
                    <Popup>
                      <b>{branch.name}</b>
                      <p>{branch.address}</p>
                      <p>{branch.phone}</p>
                      <p>{branch.email}</p>
                    </Popup>
                  </Marker>
                ))}
                <MapUpdater selectedBranch={selectedBranch} />
              </MapContainer>
            </motion.div>

            {formData.branch && (
              <motion.div
                initial={{ opacity: 0, y: 20, height: 0 }}
                animate={{ opacity: 1, y: 0, height: "auto" }}
                exit={{ opacity: 0, y: -20, height: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="mt-4 bg-[var(--card-bg)] rounded-lg p-4 sm:p-6 shadow-lg border border-[var(--card-border)] flex flex-col gap-2"
              >
                <h4 className="font-bold text-lg sm:text-xl bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] text-transparent bg-clip-text">
                  {formData.branch}
                </h4>
                <p className="text-[var(--text-secondary)] flex items-center gap-2 text-sm sm:text-base">
                  <MapPin size={18} className="text-[var(--gradient-to)]" />
                  {branches.find((b) => b.name === formData.branch)?.address}
                </p>
                <p className="text-[var(--text-secondary)] flex items-center gap-2 text-sm sm:text-base">
                  <Phone size={18} className="text-[var(--gradient-from)]" />
                  {branches.find((b) => b.name === formData.branch)?.phone}
                </p>
                <p className="text-[var(--text-secondary)] flex items-center gap-2 text-sm sm:text-base">
                  <Mail size={18} className="text-[var(--gradient-to)]" />
                  {branches.find((b) => b.name === formData.branch)?.email}
                </p>
              </motion.div>
            )}
          </motion.div>

          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            className="bg-[var(--card-bg)] backdrop-blur-xl rounded-2xl p-4 sm:p-6 md:p-8 shadow-xl border border-[var(--card-border)] relative overflow-hidden"
            ref={formRef}
            onMouseMove={handleMouseMove}
          >
            <motion.div
              className="absolute w-32 sm:w-48 h-32 sm:h-48 rounded-full blur-3xl opacity-30 z-0"
              style={{
                backgroundColor: "var(--blob-blue)",
                x: blobX,
                y: blobY,
              }}
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 15, -15, 0],
                opacity: [0.3, 0.4, 0.3],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <h3 className="text-xl sm:text-2xl font-extrabold text-center mb-4 sm:mb-6 bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] text-transparent bg-clip-text relative z-10">
              {t("sendUsAMessage")}
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
              <div>
                <label
                  htmlFor="name"
                  className="block text-[var(--text-secondary)] text-sm sm:text-base font-medium mb-2"
                >
                  {t("contact.form.name")}
                </label>
                <motion.input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={t("contact.form.namePlaceholder")}
                  className={`w-full px-3 py-2 sm:px-4 sm:py-3 rounded-lg bg-[var(--card-bg)] border border-[var(--card-border)] text-[var(--text-primary)] focus:ring-2 focus:ring-[var(--gradient-from)] focus:border-[var(--gradient-from)] transition-all duration-200 ${
                    errors.name ? "border-red-500" : ""
                  }`}
                  variants={inputVariants}
                  whileFocus="focus"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                )}
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-[var(--text-secondary)] text-sm sm:text-base font-medium mb-2"
                >
                  {t("contact.form.phone")}
                </label>
                <motion.input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="991234567"
                  className={`w-full px-3 py-2 sm:px-4 sm:py-3 rounded-lg bg-[var(--card-bg)] border border-[var(--card-border)] text-[var(--text-primary)] focus:ring-2 focus:ring-[var(--gradient-from)] focus:border-[var(--gradient-from)] transition-all duration-200 ${
                    errors.phone ? "border-red-500" : ""
                  }`}
                  variants={inputVariants}
                  whileFocus="focus"
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                )}
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-[var(--text-secondary)] text-sm sm:text-base font-medium mb-2"
                >
                  {t("contact.form.message")}
                </label>
                <motion.textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  placeholder={t("contact.form.messagePlaceholder")}
                  className={`w-full px-3 py-2 sm:px-4 sm:py-3 rounded-lg bg-[var(--card-bg)] border border-[var(--card-border)] text-[var(--text-primary)] focus:ring-2 focus:ring-[var(--gradient-from)] focus:border-[var(--gradient-from)] transition-all duration-200 ${
                    errors.message ? "border-red-500" : ""
                  }`}
                  variants={inputVariants}
                  whileFocus="focus"
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                )}
              </div>
              <motion.button
                type="submit"
                variants={submitButtonVariants}
                whileHover="hover"
                whileTap="tap"
                className="w-full px-4 py-2 sm:px-6 sm:py-3 rounded-full bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] text-white font-semibold text-sm sm:text-base shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
              >
                <span>{t("enrollNow")}</span>
                <Send size={18} />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute top-[30%] left-[5%] w-64 sm:w-80 h-64 sm:h-80 rounded-full blur-3xl opacity-40 z-0"
        style={{ backgroundColor: "var(--blob-blue)" }}
        animate={{
          x: [0, 25, -25, 0],
          y: [0, 25, -25, 0],
          scale: [1, 1.15, 1],
          opacity: [0.4, 0.5, 0.4],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-[15%] right-[5%] w-56 sm:w-72 h-56 sm:h-72 rounded-full blur-3xl opacity-40 z-0"
        style={{ backgroundColor: "var(--blob-purple)" }}
        animate={{
          x: [0, -35, 35, 0],
          y: [0, 35, -35, 0],
          scale: [1, 1.2, 1],
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </motion.section>
  );
};

export default ContactSection;