import React, { useEffect, useState } from 'react';
import * as styled from './AddToCart.styles.js';
import { useCartState } from '../Utilities/Context/CartContext.js';
import { useNavigate } from 'react-router-dom';

/**
 * Returns an add to cart component on the Details page
 */
function AddToCart(props) {
  /**
   * Fetches the cart context
   */
  const dispatch = useCartState();
  /**
   * Returns the name of the game
   */
  const [name, setName] = useState('');

  /**
   * Returns the price of the game
   */
  const [prices, setPrice] = useState('');

  /**
   * Asynchronously fetches the data to prevent application crash
   */
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

  /**
   * Converts the returned string to an integer and converts it back to string with decimal point
   */
  const convertedPrice = parseInt(prices / 100).toFixed(2);

  /**
   * Initializes navigation
   */
  const navigate = useNavigate();
  /**
   * Click function that dispatches the reducer and navigates
   */
  const onAdd = () => {
    dispatch.dispatch({ type: 'addProduct', payload: props.data });
    setTimeout(() => {
      navigate("/cart")
    }, 1000)
  }
  return (
    <styled.Container>
      <styled.Header>{name}</styled.Header>
      <styled.PriceContainer>
        <styled.PriceDeclaration>Price:</styled.PriceDeclaration>
        <styled.Price>${convertedPrice}</styled.Price>
      </styled.PriceContainer>
      <styled.BtnCont>
        <styled.AddToCart onClick={onAdd}>
          Add to cart
        </styled.AddToCart>
      </styled.BtnCont>
    </styled.Container>
  );
}

export default AddToCart;
