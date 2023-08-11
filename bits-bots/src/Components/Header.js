import React from 'react';
import logoIcon from '../images/apple-touch-icon.png';
import profileIcon from '../images/person_outline.svg';
import cartIcon from '../images/shopping_cart.svg';
import * as styles from './Header.styles.js';
import { useNavigate } from 'react-router-dom';
import Profile from './Profile';
import ProfileSelect from './ProfileSelect';
import NavCart from './NavCart';

function Header() {
  const home = useNavigate();
  const handleClick = () => {
    home('/home');
  };

  // let checkCart;

  // if (localStorage.getItem('cart')) {
  //   const localCart = JSON.parse(localStorage.getItem('cart'));
  //   checkCart = localCart.map((items) => {
  //     return items;
  //   });
  // }

  // console.log(checkCart)

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
            {/* {!checkCart ? null : <styles.Notification><styles.Number>{checkCart.length}</styles.Number></styles.Notification>} */}
          </styles.Li>
        </styles.Ul>
      </styles.Header>
    </styles.Container>
  );
}

export default Header;
