import React from 'react';
import logoIcon from '../images/apple-touch-icon.png';
import profileIcon from '../images/person_outline.svg';
import cartIcon from '../images/shopping_cart.svg';
import * as styles from './Header.styles.js';
import { useNavigate } from 'react-router-dom';
import Profile from './Profile';
import ProfileSelect from './ProfileSelect';
import NavCart from './NavCart';

/**
 * Header component that
 * @returns a functional header that can traverse the application
 */
function Header() {
  /**
   * Initializes the navigation hook
   */
  const home = useNavigate();
  /**
   * Button click function that navigates to /home
   */
  const handleClick = () => {
    home('/home');
  };

  return (
    <styles.Container>
      <styles.Header>
        <styles.HomeBtn onClick={handleClick}>
          <styles.LogoBtn src={logoIcon} alt="logo" />
        </styles.HomeBtn>
        <styles.Ul>
          <styles.Li>
            <Profile label={<img src={profileIcon} alt="profile" />}>
              <ProfileSelect />
            </Profile>
          </styles.Li>
          <styles.Li>
            <NavCart label={<img src={cartIcon} alt="cart" />} />
          </styles.Li>
        </styles.Ul>
      </styles.Header>
    </styles.Container>
  );
}

export default Header;
