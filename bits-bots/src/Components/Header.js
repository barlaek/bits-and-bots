import React from 'react';
import logoIcon from '../images/apple-touch-icon.png';
import profileIcon from "../images/person_outline.svg";
import cartIcon from "../images/shopping_cart.svg";


function Header() {
  return (
    <div>
      <img src={logoIcon} alt="logo" />
      <ul>
        <li><img src={profileIcon} alt='profile'/></li>
        <li><img src={cartIcon} alt='cart' /></li>
      </ul>
    </div>
  );
}

export default Header;
