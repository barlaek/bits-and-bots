import React from 'react';
import * as styled from './GameDetails.styles.js';

/**
 * Takes an
 * @param {object} props and
 * @returns a text component
 */
function GameDetails(props) {
  const details = props.data;

  return (
    <styled.Container>
      <styled.Details>Game details</styled.Details>
      <styled.P>{details.description}</styled.P>
    </styled.Container>
  );
}

export default GameDetails;
