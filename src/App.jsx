import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import IntroSplash from "./pages/IntroSplash.jsx";
import FakeReload from "./pages/FakeReload";

import Home from "./pages/Home/Home.jsx";
import Courses from "./pages/Courses/Courses.jsx";
import About from "./pages/About/About.jsx";
import ContactPage from "./pages/Contact/ContactPage.jsx";
import CoursePage from "./pages/Courses/CoursePage.jsx";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [introShown, setIntroShown] = useState(false);
  const [fakeReloading, setFakeReloading] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  // 👇 Метод для смены языка с фейк-загрузкой
  const changeLangWithEffect = (lng) => {
    setFakeReloading(true);
    setTimeout(() => {
      import("./i18n/i18n.js").then(({ default: i18n }) => {
        i18n.changeLanguage(lng);
        setFakeReloading(false);
      });
    }, 800); // Продолжительность "перезагрузки"
  };

  return (
    <BrowserRouter>
      {/* Интро логотип при первом заходе */}
      {!introShown ? (
        <IntroSplash onFinish={() => setIntroShown(true)} />
      ) : (
        <>
          <FakeReload visible={fakeReloading} />
          <div className="min-h-screen flex flex-col bg-[var(--bg-from)] text-[var(--text-primary)]">
            {/* Передаем смену языка внутрь навбара */}
            <Navbar
              darkMode={darkMode}
              setDarkMode={setDarkMode}
              changeLangWithEffect={changeLangWithEffect}
            />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/courses" element={<Courses />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/courses/:id" element={<CoursePage />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </>
      )}
    </BrowserRouter>
  );
};

export default App;
