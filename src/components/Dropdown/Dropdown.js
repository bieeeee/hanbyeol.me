import { useState } from 'react';
import { MenuItems } from './Menuitem';
import './Dropdown.css';

function Dropdown({ t }) {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const smoothScrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <ul
      onClick={handleClick}
      className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
    >
      {MenuItems.map((item, index) => {
        return (
          <li key={index}>
            <span
              className={item.cName}
              onClick={() => {
                smoothScrollToSection(item.id);
                setClick(false);
              }}
            >
              {t(item.title)}
            </span>
          </li>
        );
      })}
    </ul>
  );
}

export default Dropdown;
