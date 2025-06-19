
import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, MapPin, Send, X } from "lucide-react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Leaflet marker ikonkasini sozlash
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

// Xarita markazini yangilash komponenti
const MapUpdater = ({ selectedBranch }) => {
  const map = useMap();
  useEffect(() => {
    if (selectedBranch) {
      map.setView([selectedBranch.lat, selectedBranch.lng], 16);
    } else {
      map.setView([41.347, 69.277], 12); // Tashkent markazi
    }
  }, [selectedBranch, map]);
  return null;
};

// Maxsus xabar oynasi komponenti
const Notification = ({ message, type, onClose }) => (
  <motion.div
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -50 }}
    transition={{ duration: 0.3 }}
    className={`fixed top-4 left-1/2 transform -translate-x-1/2 p-4 rounded-lg shadow-lg text-white flex items-center gap-2 max-w-sm z-50 ${
      type === "success" ? "bg-green-600" : "bg-red-600"
    }`}
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

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = t("contact.form.errors.nameRequired");
    
    const cleanedPhone = formData.phone.replace(/[^\d]/g, "").replace(/^\+998/, "");
    console.log("Input phone:", formData.phone, "Cleaned phone:", cleanedPhone); // Debug
    if (!formData.phone.trim()) {
      newErrors.phone = t("contact.form.errors.phoneRequired");
    } else if (!/^[0-9]{9}$/.test(cleanedPhone)) {
      newErrors.phone = t("contact.form.errors.phoneInvalid");
    }
    
    if (!formData.message.trim()) newErrors.message = t("contact.form.errors.messageRequired");
    if (!formData.branch) newErrors.branch = t("contact.form.errors.branchRequired");
    setErrors(newErrors);
    console.log("Validation errors:", newErrors); // Debug
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
            text: encodeURIComponent(messageText),
          }),
        }
      );

      const responseData = await response.json();
      console.log("Telegram API response:", responseData); // Debug

      if (response.ok && responseData.ok) {
        setNotification({ message: t("formSubmittedMessage"), type: "success" });
        setTimeout(() => {
          setNotification(null);
          window.location.reload(); // Sahifa yangilanadi
        }, 1000);
      } else {
        console.error("Telegram API error:", responseData);
        setNotification({
          message: `${t("contact.form.errors.submitFailed")}: ${responseData.description || "Unknown error"}`,
          type: "error",
        });
        setTimeout(() => setNotification(null), 3000);
      }
    } catch (error) {
      console.error("Submission error:", error);
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
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
    hover: {
      scale: 1.02,
      boxShadow: "0 15px 30px rgba(0,0,0,0.1)",
      transition: { duration: 0.2 },
    },
  };

  const inputVariants = {
    rest: { borderColor: "#e2e8f0", boxShadow: "0 0 0px transparent" },
    focus: {
      borderColor: "#3b82f6",
      boxShadow: "0 0 15px rgba(59,130,246,0.6)",
      transition: { duration: 0.3 },
    },
  };

  const submitButtonVariants = {
    rest: { scale: 1 },
    hover: {
      scale: 1.03,
      boxShadow: "0 10px 25px rgba(59,130,246,0.6)",
      transition: { duration: 0.3 },
    },
    tap: { scale: 0.97 },
  };

  const selectedBranch = branches.find((b) => b.name === formData.branch);

  return (
    <motion.section
      className="py-16 md:py-20 lg:py-32 bg-gray-100 dark:bg-gray-900 relative overflow-hidden"
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
      <div className="absolute inset-0 opacity-20 dark:opacity-30 z-0">
        <div
          className="absolute top-1/4 left-[10%] w-48 h-48 sm:w-64 sm:h-64 rounded-full mix-blend-multiply blur-3xl opacity-40 animate-pulse"
          style={{ backgroundColor: "#3b82f6" }}
        ></div>
        <div
          className="absolute bottom-1/3 right-[15%] w-48 h-48 sm:w-72 sm:h-72 rounded-full mix-blend-multiply blur-3xl opacity-40 animate-pulse animation-delay-2000"
          style={{ backgroundColor: "#a855f7" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-center mb-10 sm:mb-12 md:mb-16 bg-gradient-to-r from-blue-600 to-purple-700 text-transparent bg-clip-text"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, type: "spring", stiffness: 100 }}
        >
          {t("contactUsTitleSimple")}
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <motion.div
            className="flex flex-col gap-6"
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2, staggerChildren: 0.1 }}
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-200 mb-4">
              {t("ourBranches")}
            </h3>
            <motion.div variants={cardVariants} whileHover="hover">
              <label
                htmlFor="branch-select"
                className="block text-sm sm:text-lg font-medium text-gray-600 dark:text-gray-400 mb-2"
              >
                {t("selectBranch")}
              </label>
              <select
                id="branch-select"
                name="branch"
                value={formData.branch}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 ${
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
              className="rounded-2xl overflow-hidden border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800"
            >
              <MapContainer
                center={[41.347, 69.277]}
                zoom={12}
                style={{ height: "300px", width: "100%", minHeight: "300px" }}
                scrollWheelZoom={false}
                className="sm:h-[400px] md:h-[450px]"
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
                className="mt-6 bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg border border-gray-300 dark:border-gray-700 flex flex-col gap-2"
              >
                <h4 className="font-bold text-xl bg-gradient-to-r from-blue-600 to-purple-700 text-transparent bg-clip-text">
                  {formData.branch}
                </h4>
                <p className="text-gray-600 dark:text-gray-400 flex items-center gap-2 text-sm sm:text-base">
                  <MapPin size={18} className="text-purple-600" />
                  {branches.find((b) => b.name === formData.branch)?.address}
                </p>
                <p className="text-gray-600 dark:text-gray-400 flex items-center gap-2 text-sm sm:text-base">
                  <Phone size={18} className="text-blue-600" />
                  {branches.find((b) => b.name === formData.branch)?.phone}
                </p>
                <p className="text-gray-600 dark:text-gray-400 flex items-center gap-2 text-sm sm:text-base">
                  <Mail size={18} className="text-purple-600" />
                  {branches.find((b) => b.name === formData.branch)?.email}
                </p>
              </motion.div>
            )}
          </motion.div>

          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            className="bg-white dark:bg-gray-800 rounded-2xl p-6 sm:p-8 md:p-10 shadow-xl border border-gray-300 dark:border-gray-700"
          >
            <h3 className="text-2xl sm:text-3xl font-extrabold text-center mb-6 bg-gradient-to-r from-blue-600 to-purple-700 text-transparent bg-clip-text">
              {t("sendUsAMessage")}
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-600 dark:text-gray-400 text-sm sm:text-lg font-medium mb-2"
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
                  className={`w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 ${
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
                  className="block text-gray-600 dark:text-gray-400 text-sm sm:text-lg font-medium mb-2"
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
                  className={`w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 ${
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
                  className="block text-gray-600 dark:text-gray-400 text-sm sm:text-lg font-medium mb-2"
                >
                  {t("contact.form.message")}
                </label>
                <motion.textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  placeholder={t("contact.form.messagePlaceholder")}
                  className={`w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 ${
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
                initial="rest"
                whileHover="hover"
                whileTap="tap"
                className="w-full px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-700 text-white font-semibold text-sm sm:text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
              >
                <span>{t("enrollNow")}</span>
                <Send size={20} />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default ContactSection;