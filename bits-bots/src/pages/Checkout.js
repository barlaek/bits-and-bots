import React, { useState } from 'react';
import CartList from '../Components/CartList.js';
import CheckoutForm from '../Components/CheckoutForm.js';
import CheckoutSummary from '../Components/CheckoutSummary.js';
import Return from '../Components/Return';
import * as styled from './Checkout.styles.js';

/**
 * Checkout page component
 * @returns the checkout page
 */
const Checkout = () => {
  /**
   * Initializes toggle state
   */
  const [open, setOpen] = useState(false);
  /**
   * Toggle function that displays or hides an array of cart items
   */
  const toggle = () => {
    setOpen(!open);
  };
  /**
   * Initializes cart array
   */
  let cartItems;
  /**
   * Checks localStorage and returns array
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
      <styled.CartContainer>
        <styled.CartInfo onClick={toggle}>
          Cart: ({cartItems.length} items)
        </styled.CartInfo>
        {open && <CartList cartItems={cartItems} />}
      </styled.CartContainer>
      <CheckoutSummary cartItems={cartItems} />
      <styled.FormContainer>
        <styled.Details>Checkout details</styled.Details>
        <CheckoutForm />
      </styled.FormContainer>
    </styled.Container>
  );
};

export default Checkout;
