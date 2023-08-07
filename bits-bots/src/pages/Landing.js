import React from 'react';
import Login from '../Components/Login.js';
import * as styled from './Landing.styles.js';
import { useNavigate } from 'react-router-dom';

const Landing = () => {
  const registerAccount = useNavigate();

  const handleClick = () => {
    registerAccount("/registration");
  };
  return (
    <styled.Background>
      <styled.Container>
        <button onClick={handleClick}>Register account</button>
        <h1>Log in</h1>
        <p>You must be logged in to use this application</p>
        <Login />
      </styled.Container>
    </styled.Background>
  );
};

export default Landing;
