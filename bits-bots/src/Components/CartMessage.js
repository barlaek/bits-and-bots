import React from 'react';
import * as styled from './CartMessage.styles.js';

/**
 * Checks for an
 * @param {array} props from localStorage
 * @returns a message if empty, else only title
 */
const CartMessage = (props) => {
  let message = props.cartItems;

  if (props) {
    message = props.cartItems.map((prop) => {
      return prop;
    });
  }

  return (
    <styled.Container>
      <styled.Title>Cart</styled.Title>
      {message.length ? null : (
        <styled.Message>Your cart is empty!</styled.Message>
      )}
    </styled.Container>
  );
};

export default CartMessage;
