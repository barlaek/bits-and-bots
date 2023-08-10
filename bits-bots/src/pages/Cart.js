import React, { useEffect, useState } from 'react';
import CartList from '../Components/CartList';
import { useCartState } from '../Utilities/Context/CartContext';
import * as styled from './Cart.styles.js';

function Cart() {
  const state = useCartState();
  // const [cart, setCart] = useState([]);

  // useEffect(() => {
  //   async function getCart() {
  //     const localCart = JSON.parse(localStorage.getItem("cart"));
  //     console.log(localCart);
  //     setCart(localCart);
  //   }

  //   getCart();
  // }, [])
  let cartItems;

  if(localStorage.getItem("cart")) {
    const localCart = JSON.parse(localStorage.getItem("cart"))
    cartItems = localCart.map((items) => {
      return items;
    })
  } else {
    return null;
  }

  // const cartItems = cart.map((item) => {
  //   if(!item) {
  //     return <p>boo!</p>
  //   } else {
  //     return item;
  //   }
  // })

  return (
    <styled.Container>
      <CartList cartItems={cartItems} />
    </styled.Container>
  )
}

export default Cart;
