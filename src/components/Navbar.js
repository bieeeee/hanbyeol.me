import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Dropdown from './Dropdown';
import { Button } from './Button';
import './Navbar.css';
import Time from './Time';

function Navbar() {
  const[dropdown, setDropdown] = useState(false);

  const onMouseEnter = () => {
      setDropdown(true);
      setIsHovering(true);
  };

  const onMouseLeave = () => {
      setDropdown(false);
  };

  const [isHovering, setIsHovering] = useState(false);

  const handleStartButtonMouseEnter = () => {
    setIsHovering(true);
  };

  const handleStartButtonMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
            <div className='nav-item' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
              <Link to='/' className={dropdown ? 'nav-links nav-hover' : 'nav-links'}>
                Start
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
