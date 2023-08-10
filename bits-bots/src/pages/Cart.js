import React, { useEffect, useState } from 'react';
import CartList from '../Components/CartList';
import { useCartState } from '../Utilities/Context/CartContext';
import * as styled from './Cart.styles.js';

function Cart() {
  const state = useCartState();
  const [cart, setCart] = useState([]);

  useEffect(() => {
    async function getCart() {
      const localCart = JSON.parse(localStorage.getItem("cart"));
      console.log(localCart);
      setCart(localCart);
    }

    getCart();
  }, [])

  const cartItems = cart.map((item) => {
    console.log(item)
  })

  return (
    <styled.Container>
      <CartList cartItems={cartItems} />
    </styled.Container>
  )
}

export default Cart;
