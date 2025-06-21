import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import IntroSplash from "./pages/IntroSplash.jsx";
import FakeReload from "./pages/FakeReload";
import NotFound from "./NotFound.jsx";

import Home from "./pages/Home/Home.jsx";
import Courses from "./pages/Courses/Courses.jsx";
import About from "./pages/About/About.jsx";
import ContactPage from "./pages/Contact/ContactPage.jsx";
import CoursePage from "./pages/Courses/CoursePage.jsx";

const App = () => {
  // Инициализация darkMode из localStorage или системных предпочтений
  const [darkMode, setDarkMode] = useState(() => {
    // Проверяем localStorage на наличие предпочтений темы
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      return storedTheme === "dark";
    }
    // Если в localStorage нет, проверяем системные предпочтения пользователя
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  const [introShown, setIntroShown] = useState(false);
  const [fakeReloading, setFakeReloading] = useState(false);

  // Эффект для применения класса 'dark' к html элементу при изменении darkMode
  // и для сохранения предпочтений в localStorage
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
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
              // changeLangWithEffect больше не используется напрямую в LanguageSwitcher,
              // так как LanguageSwitcher сам обрабатывает смену языка через i18n.changeLanguage.
              // Если эта пропса нужна для чего-то другого в Navbar, оставьте ее.
              // Если нет, ее можно убрать.
              changeLangWithEffect={changeLangWithEffect}
            />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/courses" element={<Courses />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/courses/:id" element={<CoursePage />} />
                <Route path="*" element={<NotFound />} />
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
