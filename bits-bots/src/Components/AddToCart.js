import React, { useEffect, useState } from 'react';
import * as styled from './AddToCart.styles.js';

function AddToCart(props) {
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
      <styled.Price>${convertedPrice}</styled.Price>
    </styled.Container>
  );
}

export default AddToCart;
