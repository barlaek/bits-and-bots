import React from 'react';
import * as styled from './GameDetails.styles.js';

function GameDetails(props) {
  const details = props.data;
  console.log(details.description);

  return (
    <styled.Container>
      <styled.Details>Game details</styled.Details>
      <styled.P>{details.description}</styled.P>
    </styled.Container>
  );
}

export default GameDetails;
