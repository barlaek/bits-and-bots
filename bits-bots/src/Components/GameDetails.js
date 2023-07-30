import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as styled from './GameDetails.styles.js';

function GameDetails(props) {
  const details = props.data;
  const history = useNavigate();

  // const gallery = details.images.map((image) => {
  //     return (
  //         <img src={image.src} alt={image.alt} />
  //     )
  // })

  return (
    <div>
      <styled.Return onClick={() => history(-1)}>Back</styled.Return>
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
