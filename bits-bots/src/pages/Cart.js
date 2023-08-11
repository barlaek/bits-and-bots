import React from 'react';
import CartList from '../Components/CartList';
import OrderSummary from '../Components/OrderSummary';
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
      <CartList cartItems={cartItems} />
      <OrderSummary cartItems={cartItems} />
    </styled.Container>
  );
}

export default Cart;
