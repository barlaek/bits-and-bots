import React from 'react';
import logoIcon from '../images/apple-touch-icon.png';
import profileIcon from '../images/person_outline.svg';
import cartIcon from '../images/shopping_cart.svg';
import * as styles from './Header.styles.js';

function Header() {
  return (
    <styles.Container>
      <styles.Header>
        <img src={logoIcon} alt="logo" />
        <styles.Ul>
          <styles.Li>
            <img src={profileIcon} alt="profile" />
          </styles.Li>
          <styles.Li>
            <img src={cartIcon} alt="cart" />
          </styles.Li>
        </styles.Ul>
      </styles.Header>
    </styles.Container>
  );
}

export default Header;
