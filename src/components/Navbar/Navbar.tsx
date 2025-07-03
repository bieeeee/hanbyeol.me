import React from "react";
import { useTranslation } from "react-i18next";
import { useSignals } from "@preact/signals-react/runtime";
import { DropDown } from "@components";
import { modalStore } from "@/stores/modalStore";
import "./Navbar.scss";

const locales = [
  { lang: "ko", title: "KO" },
  { lang: "en", title: "EN" }
];

const Navbar: React.FC = () => {
  useSignals();
  const { i18n } = useTranslation();

  return (
    <nav className="navbar">
      <div className="left-container">
        <DropDown />
        {modalStore.isOpen.value && (
          <button className="btn active-task">
            <img
              src={modalStore.state.value.icon}
              alt={modalStore.title.value}
            />
            <p>{modalStore.title}</p>
          </button>
        )}
      </div>

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
