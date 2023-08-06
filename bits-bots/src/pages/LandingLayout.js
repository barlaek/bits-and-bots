import React from 'react';
import * as styled from './LandingLayout.styles.js';
import Landing from './Landing.js';
import Login from '../Components/Login.js';

function LandingLayout() {
  return (
    <styled.Container>
      <Landing label="Login">
        <Login />
      </Landing>
    </styled.Container>
  );
}

export default LandingLayout;
