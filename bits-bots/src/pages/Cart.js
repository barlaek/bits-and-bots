import React from 'react';
import CartList from '../Components/CartList';
import CartMessage from '../Components/CartMessage';
import OrderSummary from '../Components/OrderSummary';
import Return from '../Components/Return';
import * as styled from './Cart.styles.js';

function Cart() {
  let cartItems;

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
      <CartList cartItems={cartItems} />
      <OrderSummary cartItems={cartItems} />
    </styled.Container>
  );
}

export default Cart;
