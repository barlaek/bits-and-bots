import React from 'react';
import Login from '../Components/Login.js';
import * as styled from './Landing.styles.js';

const Landing = () => {
  return (
    <styled.Background>
      <styled.Container>
        <h1>Log in</h1>
        <p>You must be logged in to use this application</p>
        <Login />
      </styled.Container>
    </styled.Background>
  );
};

export default Landing;
