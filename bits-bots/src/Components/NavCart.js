import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as styled from './NavCart.styles.js';

/**
 * @param {image} props
 * @returns a button that navigates to /cart
 */
const NavCart = (props) => {
  const navigate = useNavigate();

  const traverse = () => {
    navigate('/cart');
  };
  return <styled.Btn onClick={traverse}>{props.label}</styled.Btn>;
};

export default NavCart;
