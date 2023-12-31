import React from 'react';
import * as styled from './Tab.styles.js';
import { useNavigate } from 'react-router-dom';

/**
 * Tab component mounted on login and registration form
 * @returns navigation
 */
const Tab = () => {
  const navigate = useNavigate();

  const login = () => {
    navigate('/');
  };

  const register = () => {
    navigate('/registration');
  };
  return (
    <styled.Container>
      <styled.Button onClick={login}>Log in</styled.Button>
      <styled.Button onClick={register}>Register account</styled.Button>
    </styled.Container>
  );
};

export default Tab;
