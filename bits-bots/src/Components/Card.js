import React from 'react';
import { Link } from 'react-router-dom';
import * as styled from './Card.styles.js';

/**
 * Returns a card component that takes
 * @param {array} props of filtered products
 * @returns card to be display at /home
 */

function Card(props) {
  const content = props.filteredProductList.map((prop) => {
    return (
      <styled.Card key={prop.name}>
        <styled.GameImage src={prop.images[0].src} alt={prop.images[0].alt} />
        <styled.Data>
          <h3 key={prop.name}>{prop.name}</h3>
          <h3>${parseInt(`${prop.prices.sale_price}` / 100).toFixed(2)}</h3>
          <Link to={`${prop.id}`} style={{ color: '#fff', hover: 'cursor' }}>
            View details
          </Link>
        </styled.Data>
      </styled.Card>
    );
  });
  return <styled.Wrapper>{content}</styled.Wrapper>;
}

export default Card;
