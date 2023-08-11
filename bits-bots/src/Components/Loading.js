import React from 'react';
import Spinner from "./Spinner.js";
import * as styled from "./Loading.styles.js";

function Loading() {

  return (
    <styled.Container>
      <styled.LoadingBox>
        <Spinner />
      </styled.LoadingBox>
    </styled.Container>
  )
}

export default Loading;
