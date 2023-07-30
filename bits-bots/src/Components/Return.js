import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as styled from './Return.styles.js';

function Return() {
  const history = useNavigate();

  return <styled.Return onClick={() => history(-1)}>Back</styled.Return>;
}

export default Return;