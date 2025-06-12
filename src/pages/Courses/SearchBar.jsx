import React from "react";
import { useTranslation } from "react-i18next";

const SearchBar = ({ search, setSearch }) => {
  const { t } = useTranslation();

  return (
    <div className="mb-6 text-center">
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="px-4 py-2 w-72 rounded border dark:bg-gray-800 dark:text-white"
        placeholder={t("searchCourses")}
      />
    </div>
  );
};

export default SearchBar;
