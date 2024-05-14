import React, { useState } from 'react';
import './Header.css';
import { BiMenuAltRight } from 'react-icons/bi';
import OutsideClickHandler from 'react-outside-click-handler';

const Header = () => {
  const [menuOpened, setOpened] = useState(false);

  const getMenuStyles = () => {
    if (document.documentElement.clientWidth <= 800) {
      return { right: !menuOpened ? "-100%" : 0 };
    }
    return {};
  };

  return (
    <section className='h-wrapper'>
      <div className='flexCenter paddings h-container'>
        <h2>ApnaGhar</h2>
    
      <OutsideClickHandler onOutsideClick={() => { setOpened(false) }}>
        <div className='flexCenter h-menu' style={getMenuStyles()}>
          <a href=''>property</a>
          <a href=''>Our Value</a>
          <a href=''>Contact us</a>
          <a href=''>Get Started</a>
          <button className='button'>
            <a href=''>Contact</a>
          </button>
        </div>
      </OutsideClickHandler>
      <div className='menu-icon' onClick={() => setOpened(prev => !prev)}>
        <BiMenuAltRight size={30} />
      </div>
      </div>
      

    
    </section>
  );
};

export default Header;
