import React, { useEffect, useState } from 'react';
import * as styled from './AddToCart.styles.js';
import { useCartState } from '../Utilities/Context/CartContext.js';

function AddToCart(props) {
    const dispatch = useCartState();
    console.log(dispatch);
  const [name, setName] = useState('');
  const [prices, setPrice] = useState('');

  useEffect(() => {
    async function checkPrice() {
      try {
        const details = props.data;
        const name = details.name;
        const pricesObject = details.prices.price;
        setName(name);
        setPrice(pricesObject);
      } catch (error) {
        console.log(error);
      }
    }
    checkPrice();
  }, [props]);

  const convertedPrice = parseInt(prices / 100).toFixed(2);

  return (
    <styled.Container>
      <styled.Header>{name}</styled.Header>
      <styled.PriceContainer>
        <styled.PriceDeclaration>Price:</styled.PriceDeclaration>
        <styled.Price>${convertedPrice}</styled.Price>
      </styled.PriceContainer>
      <styled.BtnCont>
        <styled.AddToCart onClick={() => dispatch.dispatch({type: "addProduct", payload: props})}>Add to cart</styled.AddToCart>
      </styled.BtnCont>
    </styled.Container>
  );
}

export default AddToCart;
