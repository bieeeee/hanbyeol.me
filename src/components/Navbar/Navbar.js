import { useEffect, useState } from 'react';
import Dropdown from '../Dropdown/Dropdown';
import './Navbar.css';
import Time from '../Time/Time.js';

function Navbar() {
  const [dropdown, setDropdown] = useState(false);
  const [startAnimation, setStartAnimation] = useState(false);
  useEffect(() => {
    const handleLoad = () => {
      setStartAnimation(true);
    };
    window.onload = handleLoad;
  }, []);

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
              <img src='assets/icons/logo-icon.png?as=webp' alt='Logo' className='navbar-logo' style={{ width: '19px', height: '19px' }} />
              Start
            </div>
            {dropdown && <Dropdown />}
          </div>
          <div className='nav-item'>
            {startAnimation && <Time />}
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
