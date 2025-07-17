// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // Shu qator muhim!
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // --- Основные цвета ---
        "page-bg": "var(--bg-from)", // Основной фон страницы
        "card-bg": "var(--card-bg)", // Фон карточек/контейнеров
        "text-main": "var(--text-primary)", // Основной текст (заголовки, основной контент)
        "text-sub": "var(--text-secondary)", // Второстепенный текст (подписи, описания)
        "border-base": "var(--card-border)", // Базовый цвет границ (карточки, инпуты)
        "border-switch": "var(--switch-border)", // Граница переключателя темы

        // --- Акцентные цвета (для кнопок, ссылок, иконок) ---
        "accent-blue": "var(--gradient-from)", // Яркий синий акцент
        "accent-purple": "var(--gradient-to)", // Яркий фиолетовый акцент

        // --- Цвета для селекторов (выпадающих списков) ---
        // Важно: bg-select-dropdown теперь использует 'page-bg' для непрозрачности!
        "select-dropdown-bg": "var(--bg-from)", // Используем основной фон для выпадающего списка
        "select-hover": "var(--select-option-hover-bg)", // Фон опции при наведении
        "select-selected": "var(--select-option-selected-bg)", // Фон выбранной опции
        "select-text-color": "var(--select-text-color)", // Цвет текста в опциях селектора
        "select-arrow-color": "var(--select-arrow-color)", // Цвет стрелки селектора

        // --- Декоративные цвета (если используются для фоновых элементов, blobs) ---
        "blob-blue": "var(--blob-blue)",
        "blob-purple": "var(--blob-purple)",
        "blob-pink": "var(--blob-pink)",

        // --- Цвета для эффектов (например, затухания) ---
        "fade-from": "var(--marquee-fade-from)",
        "fade-to": "var(--marquee-fade-to)",
      },
      // Можете также расширить другие свойства, если необходимо
      // например, `backgroundColor`, `textColor` и т.д.
      // (но `colors` уже достаточно для большинства случаев)
      fontFamily: {
        // Если используете пользовательские шрифты
        // sans: ['YourFontName', ...fontFamily.sans],
      },
    },
  },

  plugins: [],
};
