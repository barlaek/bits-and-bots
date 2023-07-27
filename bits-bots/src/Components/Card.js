import React from 'react';
import * as styled from "./Card.styles.js";

function Card(props) {
  const content = props.data.map((prop) => {
    return (
      <styled.Card key={prop.name}>
        <img src={prop.images[0].src} alt={prop.images[0].alt} />
        <h3 key={prop.name}>{prop.name}</h3>
        <p>${prop.prices.sale_price}</p>
      </styled.Card>
    );
  });
  return <div>{content}</div>;
}

export default Card;
