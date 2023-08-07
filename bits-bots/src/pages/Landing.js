import React from 'react';
import Login from '../Components/Login.js';
import Tab from '../Components/Tab.js';
import * as styled from './Landing.styles.js';

const Landing = () => {
  return (
    <styled.Background>
      <styled.Container>
        <Tab />
        <h1>Log in</h1>
        <styled.p>You must be logged in to use this application</styled.p>
        <Login />
      </styled.Container>
    </styled.Background>
  );
};

export default Landing;
