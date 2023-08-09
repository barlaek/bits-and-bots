import React from 'react';
import * as styled from './GameDetails.styles.js';

function GameDetails(props) {
  const details = props.data;
  console.log(details.description);

  return (
    <div>
      <styled.P>{details.description}</styled.P>
    </div>
  );
}

export default GameDetails;
