import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/intro.png"; // Убедитесь, что путь к вашему логотипу верный

export default function IntroSplash({ onFinish }) {
  // Состояние для контроля видимости всего сплэш-скрина
  const [isVisible, setIsVisible] = useState(true);

  // Цвет фона, определенный из вашего логотипа
  const backgroundColor = "#0A0F1C";

  // Настройки времени анимации для удобства управления
  const LOGO_STAY_DURATION = 1200;     // Сколько логотип виден на экране (в мс)
  const LOGO_FADE_OUT_DURATION = 0.8;  // Длительность исчезновения логотипа (в сек)
  const BG_FADE_OUT_DURATION = 0.5;    // Длительность исчезновения фона (в сек)

  useEffect(() => {
    // Запускаем таймер, который по истечении времени скроет компонент,
    // запустив exit-анимации.
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, LOGO_STAY_DURATION);

    // Очищаем таймер при размонтировании компонента, чтобы избежать утечек памяти
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence
      // onFinish будет вызван после завершения ВСЕХ exit-анимаций
      onExitComplete={onFinish}
    >
      {isVisible && (
        // --- Контейнер фона ---
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center"
          style={{ backgroundColor }}
          initial={{ opacity: 1 }} // Фон появляется сразу, без анимации
          animate={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: {
              // --- КЛЮЧЕВОЙ МОМЕНТ ---
              // Задержка перед началом исчезновения фона.
              // Фон начнет исчезать только ПОСЛЕ того, как исчезнет логотип.
              delay: LOGO_FADE_OUT_DURATION, 
              duration: BG_FADE_OUT_DURATION,
            },
          }}
        >
          {/* --- Логотип --- */}
          <motion.img
            src={logo}
            alt="MegaSchool Logo"
            className="w-40 h-40 md:w-72 md:h-72 object-contain"
            // Анимация появления
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{
              scale: 1,
              opacity: 1,
              transition: { duration: 1, ease: "easeOut" },
            }}
            // Анимация исчезновения (происходит без задержки)
            exit={{
              opacity: 0,
              scale: 0.8,
              transition: { duration: LOGO_FADE_OUT_DURATION, ease: "easeOut" },
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}