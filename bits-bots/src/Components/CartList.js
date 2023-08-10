import React from 'react';
import * as styled from './CartList.styles';

function CartList(props) {
  let item;

  if (props) {
    item = props.cartItems.map((prop) => {
      return (
        <styled.Box>
          <styled.Image src={prop.images[0].src} alt={prop.images[0].alt} />
          <styled.Data>
            <styled.Header>{prop.name}</styled.Header>
            <styled.Select>
              <option value="1">Qty 1</option>
              <option value="2">Qty 2</option>
              <option value="3">Qty 3</option>
              <option value="4">Qty 4</option>
              <option value="5">Qty 5</option>
            </styled.Select>
            <styled.Remove>Remove item</styled.Remove>
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
