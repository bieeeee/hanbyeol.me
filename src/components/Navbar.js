import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Dropdown from './Dropdown';
import './Navbar.css';
import Time from './Time';
import '../i18n';
import { useTranslation } from 'react-i18next';

function Navbar() {
  const[dropdown, setDropdown] = useState(false);

  const onMouseEnter = () => {
    setDropdown(true);
  };

  const onMouseLeave = () => {
    setDropdown(false);
  };

  const onClick = () => {
    setDropdown(!dropdown);
  };

  const { t } = useTranslation();


  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
            <div className='nav-item' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} onClick={onClick}>
              <Link className={dropdown ? 'nav-hover' : 'nav-links'}>
                <img src='assets/icons/logo-icon.png' alt='Logo' className='navbar-logo' />
                {t('Start')}
              </Link>
              {dropdown && <Dropdown />}
            </div>
            <div className='nav-item'><Time /></div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
