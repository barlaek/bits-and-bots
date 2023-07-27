import React from 'react';
import * as styled from './GameDetails.styles.js';

function GameDetails(props) {
  const details = props.data;

  // const gallery = details.images.map((image) => {
  //     return (
  //         <img src={image.src} alt={image.alt} />
  //     )
  // })

  return (
    <styled.Container>
      <h2>{details.name}</h2>
    </styled.Container>
  );
}

export default GameDetails;
