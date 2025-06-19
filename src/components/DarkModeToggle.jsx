// DarkModeToggle.jsx
import React from "react";
import { Sun, Moon } from "lucide-react";

const DarkModeToggle = ({ darkMode, setDarkMode }) => {
  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode); // Обновляем состояние в родительском компоненте

    if (newMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="p-2 rounded-full transition-colors duration-300 hover:bg-[var(--card-border)] text-[var(--text-primary)]"
      aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
    >
      {darkMode ?  <Sun size={24} />  : <Moon size={24}/>}
    </button>
  );
};

export default DarkModeToggle;
