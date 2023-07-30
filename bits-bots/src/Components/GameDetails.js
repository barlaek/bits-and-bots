import React from 'react';
import Return from './Return.js';
import * as styled from './GameDetails.styles.js';

function GameDetails(props) {
  const details = props.data;

  return (
    <div>
      <Return />
      <styled.Container>
        <div>
          <styled.Image src={details.images} alt="product image" />
        </div>
        <h2>{details.name}</h2>
      </styled.Container>
    </div>
  );
}

export default GameDetails;
