import React from "react";
import { Moon, Sun } from "lucide-react"; // react-icons o‘rniga lucide ishlatyapsan

const DarkModeToggle = ({ darkMode, setDarkMode }) => {
  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="text-xl p-1 hover:text-yellow-500 dark:hover:text-blue-400"
    >
      {darkMode ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
};

export default DarkModeToggle;
