import React from 'react';
import logoIcon from '../images/apple-touch-icon.png';
import profileIcon from "../images/person_outline.svg";
import cartIcon from "../images/shopping_cart.svg";
import * as styles from "./Header.styles";


function Header() {
  return (
    <div>
      <styles.Header>
        <img src={logoIcon} alt="logo" />
        <styles.Ul>
          <li><img src={profileIcon} alt='profile'/></li>
          <li><img src={cartIcon} alt='cart' /></li>
        </styles.Ul>
      </styles.Header>
    </div>
  );
}

export default Header;
