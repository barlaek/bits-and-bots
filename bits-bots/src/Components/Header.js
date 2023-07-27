import React from 'react';
import logo from '../apple-touch-icon.png';
import profile from "../person_outline.svg";


function Header() {
  return (
    <div>
      <img src={logo} alt="logo" />
      <ul>
        <li><img src={profile} alt='profile'/></li>
        <li>Cart</li>
      </ul>
    </div>
  );
}

export default Header;
