import React from 'react';
import img from '../apple-touch-icon.png';

function Header() {
  return (
    <div>
      <img src={img} alt="logo" />
      <ul>
        <li>Profile</li>
        <li>Cart</li>
      </ul>
    </div>
  );
}

export default Header;
