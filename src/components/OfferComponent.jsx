import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";

const OfferComponent = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: "easeOut" } },
    exit: { opacity: 0, scale: 0.9, transition: { duration: 0.3 } },
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold text-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
      >
        {t("specialOffer")}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-gray-900/70 z-50 flex items-center justify-center"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              className="bg-white p-8 rounded-xl shadow-2xl border border-gray-200 max-w-lg w-full mx-4 overflow-y-auto max-h-[85vh] text-gray-800"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-3xl font-bold mb-4 text-indigo-700 border-b-2 border-indigo-200 pb-2">Mega School Special Offer</h2>
              <p className="text-lg mb-6 leading-relaxed">{t("megaOfferDescription")}</p>
              <ul className="list-disc list-inside mb-6 space-y-2">
                <li className="text-md">{t("megaOfferBenefit1")}</li>
                <li className="text-md">{t("megaOfferBenefit2")}</li>
                <li className="text-md">{t("megaOfferBenefit3")}</li>
                <li className="text-md">{t("megaOfferBenefit4")}</li>
              </ul>
              <div className="flex justify-between items-center">
                <button
                  onClick={() => setIsOpen(false)}
                  className="px-5 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors duration-200 text-gray-700"
                >
                  {t("close")}
                </button>
                <a
                  href="/enroll"
                  className="px-5 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-200"
                >
                  {t("enrollNow")}
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default OfferComponent;