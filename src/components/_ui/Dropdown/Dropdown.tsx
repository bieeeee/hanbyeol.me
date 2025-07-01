import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "./Dropdown.scss";

const MenuItems = [
  { title: "navbar.about", id: "about" },
  { title: "navbar.projects", id: "projects" },
  { title: "navbar.contact", id: "contact" }
];

const Dropdown: React.FC = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);

  const smoothScrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
    setIsVisible(false);
  };

  return (
    <div
      className="dropdown-wrapper"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      <button className="btn">
        <img
          src="/src/assets/icons/logo-icon.png"
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
                <span
                  className="dropdown-link"
                  onClick={() =>
                    smoothScrollToSection(item.id)
                  }
                >
                  {t(item.title)}
                </span>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default Dropdown;
