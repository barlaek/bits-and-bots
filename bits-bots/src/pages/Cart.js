import React from 'react';
import CartList from '../Components/CartList';
import CartMessage from '../Components/CartMessage';
import OrderSummary from '../Components/OrderSummary';
import Return from '../Components/Return';
import * as styled from './Cart.styles.js';

/**
 * Cart page component
 * @returns the cart page
 */
function Cart() {
  /**
   * Initializes the cart array
   */
  let cartItems;
  /**
   * Checks the local storage for the cart array and returns an array
   */
  if (localStorage.getItem('cart')) {
    const localCart = JSON.parse(localStorage.getItem('cart'));
    cartItems = localCart.map((items) => {
      return items;
    });
  } else {
    return null;
  }

  return (
    <styled.Container>
      <Return />
      <CartMessage cartItems={cartItems} />
      <styled.Wrapper>
        <CartList cartItems={cartItems} />
        <OrderSummary cartItems={cartItems} />
      </styled.Wrapper>
    </styled.Container>
  );
}

export default Cart;
