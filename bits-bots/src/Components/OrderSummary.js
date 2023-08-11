import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as styled from './OrderSummary.styles.js';

/**
 * Summarizes an
 * @param {array} props of cart items
 * @returns a sum total
 */
const OrderSummary = (props) => {
  /**
   * Initializes navigation
   */
  const navigate = useNavigate();
  /**
   * Initializes the price variable
   */
  let prodPrice;

  /**
   * Checks the array and returns a string value with 2 decimals and sets them to price variable
   */
  if (props) {
    prodPrice = props.cartItems.map((prop) => {
      return parseInt(`${prop.prices.price}` / 100).toFixed(2);
    });
  }

  /**
   * Calculates the sum total of the array
   */
  let sum = prodPrice.reduce(
    (total, value) => (total = total + parseInt(value)),
    0,
  );

  return (
    <styled.Container>
      <styled.Summary>Order summary</styled.Summary>
      <styled.LineBox>
        <styled.Line />
      </styled.LineBox>
      <styled.TotalBox>
        <styled.Total>Total: ${!sum ? 0.0 : sum.toFixed(2)}</styled.Total>
      </styled.TotalBox>
      <styled.CheckoutBox>
        {!sum ? null : (
          <styled.CheckoutBtn onClick={() => navigate('/checkout')}>
            Checkout
          </styled.CheckoutBtn>
        )}
      </styled.CheckoutBox>
    </styled.Container>
  );
};

export default OrderSummary;
