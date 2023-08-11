import React from 'react';
import * as styled from './Error.styles.js';

const Error = () => {
  return (
    <styled.Wrapper>
      <styled.Container>
        <styled.Message>An error occurred</styled.Message>
      </styled.Container>
    </styled.Wrapper>
  );
};

export default Error;
