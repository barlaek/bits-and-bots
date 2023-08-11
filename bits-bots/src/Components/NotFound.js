import React from 'react';
import Error from './Error.js';
import * as styled from './NotFound.styles.js';

const NotFound = () => {
  return (
    <styled.Wrapper>
      <Error />
    </styled.Wrapper>
  );
};

export default NotFound;
