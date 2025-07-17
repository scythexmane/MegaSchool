import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import IntroSplash from "./pages/IntroSplash.jsx";
import NotFound from "./NotFound.jsx";

import Home from "./pages/Home/Home.jsx";
import Courses from "./pages/Courses/Courses.jsx";
import About from "./pages/About/About.jsx";
import ContactPage from "./pages/Contact/ContactPage.jsx";
import CoursePage from "./pages/Courses/CoursePage.jsx";
import OfferPage from "./pages/OfferPage.jsx";



const App = () => {
  const { i18n } = useTranslation();
  const location = useLocation();

  const [darkMode, setDarkMode] = useState(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) return storedTheme === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  const [introShown, setIntroShown] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <>
      {!introShown ? (
        <IntroSplash onFinish={() => setIntroShown(true)} />
      ) : (
        <div className="min-h-screen flex flex-col bg-[var(--bg-from)] text-[var(--text-primary)]">
          <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

          {/* Анимированный main */}
          <AnimatePresence mode="wait">
            <motion.main
              key={location.pathname + i18n.language}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="flex-grow"
            >
              <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />} />
                <Route path="/courses" element={<Courses />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/offer" element={<OfferPage />} />
                <Route path="/courses/:id" element={<CoursePage />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </motion.main>
          </AnimatePresence>

          <Footer />
        </div>
      )}
    </>
  );
};

export default App;
