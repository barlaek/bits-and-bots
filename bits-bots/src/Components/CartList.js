import React from 'react';
import * as styled from './CartList.styles';
import { useCartState } from '../Utilities/Context/CartContext';

/**
 *
 * @param {array} props from localStorage
 * @returns returns a list component of products in cart
 */
function CartList(props) {
  /**
   * Fetches the cart context for the removeProduct function
   */
  const dispatch = useCartState();
  let item;

  /**
   * Checks for an array to prevent application crash
   */
  if (props) {
    item = props.cartItems.map((prop) => {
      return (
        <styled.Box>
          <styled.Image src={prop.images[0].src} alt={prop.images[0].alt} />
          <styled.Data>
            <styled.Header>{prop.name}</styled.Header>
            <styled.Price>
              ${parseInt(`${prop.prices.price}` / 100).toFixed(2)}
            </styled.Price>
            <styled.Remove
              onClick={() =>
                dispatch.dispatch({ type: 'removeProduct', payload: prop })
              }
            >
              Remove item
            </styled.Remove>
          </styled.Data>
        </styled.Box>
      );
    });
  } else {
    return null;
  }

  return <styled.Container key={item}>{item}</styled.Container>;
}

export default CartList;
