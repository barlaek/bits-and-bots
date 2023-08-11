import React from 'react';
import * as styled from './OrderSummary.styles.js';

/**
 * Checkout summary component that takes
 * @param {localStorage array} props
 * @returns an order summary
 */
const CheckoutSummary = (props) => {
  /**
   * Initializing the price variable
   */
  let prodPrice;

  /**
   * Checks for the array and returns a price string
   */
  if (props) {
    prodPrice = props.cartItems.map((prop) => {
      return parseInt(`${prop.prices.price}` / 100).toFixed(2);
    });
  }
  /**
   * Calculates the total sum and returns an integer.
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
    </styled.Container>
  );
};

export default CheckoutSummary;
