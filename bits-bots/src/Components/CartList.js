import React from 'react';
import * as styled from './CartList.styles';
import { useCartState } from '../Utilities/Context/CartContext';
import CartMessage from './CartMessage';

function CartList(props) {
  const dispatch = useCartState();
  let item;

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
