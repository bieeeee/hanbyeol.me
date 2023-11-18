import { useState } from 'react';
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

  const MenuItems = [
      {
        title: `${t('navbar.about')}`,
        id: 'about',
        cName: 'dropdown-link'
      },
      {
        title: 'Files',
        id: 'files',
        cName: 'dropdown-link'
      },
      {
        title: 'Contact',
        id: 'contact',
        cName: 'dropdown-link'
      }
    ];

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
              {item.title}
            </span>
          </li>
        );
      })}
    </ul>
  );
}

export default Dropdown;
