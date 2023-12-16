import React, { useState, useTransition } from 'react';
import Dropdown from '../Dropdown/Dropdown';
import './Navbar.css';

function Navbar({ t, i18n }) {
  const [dropdown, setDropdown] = useState(false);
  const locales = {
    ko: { title: 'KO' },
    en: { title: 'EN' },
  };

  const onMouseEnter = () => {
    setDropdown(true);
  };
  const onMouseLeave = () => {
    setDropdown(false);
  };
  const onClick = () => {
    setDropdown(!dropdown);
  };

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <div className='nav-item' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} onClick={onClick}>
            <div className={dropdown ? 'nav-hover' : 'nav-links'}>
              <img rel='preload' src='assets/icons/logo-icon.png' alt='Logo' className='navbar-logo' style={{ width: '19px', height: '19px' }} />
              {t('navbar.start')}
            </div>
            {dropdown && <Dropdown t={t} />}
          </div>

          <div className='nav-item'>
            {Object.keys(locales).map((locale) => (
              <div
                className='nav-links'
                key={locale}
                style={{ cursor: 'pointer' }}
              >
                <div
                  style={{ fontWeight: i18n.resolvedLanguage === locale ? 'bold' : 'normal' }}
                  type="submit"
                  onClick={() => i18n.changeLanguage(locale)}
                >
                  {locales[locale].title}
                </div>
              </div>
            ))}
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
