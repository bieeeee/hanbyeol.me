import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "./Dropdown.scss";

const MenuItems = [
  {
    id: "github",
    title: "navbar.github",
    url: "https://github.com/bieeeee",
    icon: "https://cdn.simpleicons.org/github/383838"
  },
  {
    id: "linkedin",
    title: "navbar.linkedin",
    url: "https://www.linkedin.com/in/hanbyeol-kwon",
    icon: "src/assets/icons/linkedin.png"
  },
  {
    id: "blog",
    title: "navbar.blog",
    url: "https://velog.io/@bieeeee",
    icon: "https://cdn.simpleicons.org/velog"
  }
];

const Dropdown: React.FC = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div
      className="dropdown-wrapper"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      <button className="btn">
        <img
          src="src/assets/icons/logo-icon.png"
          alt="Logo"
          className="navbar-logo"
        />
        {t("navbar.start")}
      </button>

      {isVisible && (
        <>
          <div className="spacing" />
          <ul className="dropdown-menu">
            {MenuItems.map((item) => (
              <li key={item.id}>
                <a
                  href={item.url}
                  className="dropdown-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={item.icon} alt={item.id} />
                  <span>{t(item.title)}</span>
                </a>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default Dropdown;
