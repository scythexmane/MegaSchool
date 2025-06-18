import React, { useState, useEffect } from "react";
import Select from "react-select";
import ReactCountryFlag from "react-country-flag";
import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const languageOptions = [
    { value: "en", label: "Eng", countryCode: "GB" },
    { value: "ru", label: "Rus", countryCode: "RU" },
    { value: "uz", label: "Uzb", countryCode: "UZ" },
  ];

  const getSelectedOption = (lang) => {
    // Ensure 'en' maps to 'GB' for consistency with flag codes
    return languageOptions.find((option) => option.value === lang) || languageOptions[0]; // Fallback to English
  };

  const [selectedOption, setSelectedOption] = useState(
    getSelectedOption(i18n.language)
  );

  useEffect(() => {
    setSelectedOption(getSelectedOption(i18n.language));
  }, [i18n.language]);

  const handleChange = (option) => {
    setSelectedOption(option);

    const newLang = option.value;
    if (i18n.language === newLang) return;

    // Optional: Add CSS transitions for a smoother language change
    document.body.classList.add("fade-out");
    setTimeout(() => {
      i18n.changeLanguage(newLang);
      document.body.classList.remove("fade-out");
      document.body.classList.add("fade-in");
      setTimeout(() => {
        document.body.classList.remove("fade-in");
      }, 500);
    }, 400);
  };

  // Custom component for rendering the selected value in the control
  const CustomControl = ({ children, ...props }) => (
    <div
      {...props.innerProps}
      className="flex items-center justify-between w-full h-10 px-2 cursor-pointer"
      // Цвет текста будет задан через reactSelectClassNames.singleValue и CustomOption
      style={{ color: 'var(--select-text-color)' }} // Применяем цвет текста из переменной
    >
      {props.hasValue && props.selectProps.value ? (
        <div className="flex items-center flex-grow">
          <ReactCountryFlag
            countryCode={props.selectProps.value.countryCode}
            svg
            className="w-4 h-4 rounded-[2px] shadow-sm"
          />
          <span className="ml-2 font-normal text-sm">
            {props.selectProps.value.label}
          </span>
        </div>
      ) : (
        <div className="flex items-center"></div>
      )}
      {children}
    </div>
  );

  // Custom component for rendering each option in the dropdown list
  const CustomOption = (props) => (
    <div
      {...props.innerProps}
      className={`flex items-center px-3 py-2 cursor-pointer text-sm transition-colors duration-200 ease-in-out`}
      style={{
        backgroundColor: props.isFocused
          ? 'var(--select-option-hover-bg)'
          : props.isSelected
          ? 'var(--select-option-selected-bg)'
          : 'transparent',
        color: 'var(--select-text-color)' // Цвет текста опции
      }}
    >
      <ReactCountryFlag
        countryCode={props.data.countryCode}
        svg
        className="w-4 h-4 mr-2 rounded-[2px] shadow-sm"
      />
      <span>{props.data.label}</span>
    </div>
  );

  // Define custom classNames for react-select components
  const reactSelectClassNames = {
    control: (state) => `!bg-transparent !border-none !shadow-none !cursor-pointer min-h-10 ${state.isFocused ? 'outline-none' : ''}`,
    valueContainer: () => '!p-0 flex-nowrap overflow-hidden',
    singleValue: () => '!m-0 !p-0',
    indicatorSeparator: () => '!hidden',
    dropdownIndicator: (state) => `transition-transform duration-200 ease-in-out ${state.isFocused ? 'rotate-180' : ''}`,
    menu: () => `rounded-lg shadow-md mt-2 overflow-hidden`,
    menuList: () => `p-2`,
    option: (state) => ``, // Handled by CustomOption's className and style directly for more control
  };

  // Важно: для menu и menuList нужно явно указать цвет фона через style,
  // так как Tailwind не может напрямую работать с CSS-переменными в своих классах,
  // если переменные определены вне utility-классов Tailwind.
  const customStylesForReactSelect = {
    menu: (provided) => ({
      ...provided,
      backgroundColor: 'var(--select-menu-bg)', // Фон выпадающего списка
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
      marginTop: '8px',
      overflow: 'hidden',
    }),
    dropdownIndicator: (provided) => ({
      ...provided,
      color: 'var(--select-arrow-color)', // Цвет стрелки
    }),
  };

  return (
    <div className="min-w-[120px] font-sans text-sm relative z-10">
      <Select
        value={selectedOption}
        onChange={handleChange}
        options={languageOptions}
        isSearchable={false}
        classNames={reactSelectClassNames}
        components={{
          Control: CustomControl,
          Option: CustomOption,
          SingleValue: () => null,
        }}
        styles={customStylesForReactSelect} // Используем customStyles для переменных
        classNamePrefix="language-select"
      />
    </div>
  );
};

export default LanguageSwitcher;