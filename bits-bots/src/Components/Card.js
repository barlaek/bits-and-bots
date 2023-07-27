import React from 'react';
import * as styled from "./Card.styles.js";

function Card(props) {
  const content = props.data.map((prop) => {
    return (
      <styled.Card key={prop.name}>
        <styled.GameImage src={prop.images[0].src} alt={prop.images[0].alt} />
        <styled.Data>
          <h3 key={prop.name}>{prop.name}</h3>
          <h3>${prop.prices.sale_price}</h3>
        </styled.Data>
      </styled.Card>
    );
  });
  return <div>{content}</div>;
}

export default Card;
