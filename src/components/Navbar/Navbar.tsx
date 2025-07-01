import React from "react";
import { useTranslation } from "react-i18next";
import { DropDown } from "@components";
import "./Navbar.scss";

const locales = [
  { lang: "ko", title: "KO" },
  { lang: "en", title: "EN" }
];

const Navbar: React.FC = () => {
  const { i18n } = useTranslation();

  return (
    <nav className="navbar">
      <DropDown />

      <div className="locales-box">
        {locales.map(({ lang, title }) => (
          <button
            key={lang}
            className={`btn ${
              i18n.resolvedLanguage === lang
                ? "is-resolved clicked"
                : ""
            }`}
            onClick={() => i18n.changeLanguage(lang)}
          >
            {title}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
