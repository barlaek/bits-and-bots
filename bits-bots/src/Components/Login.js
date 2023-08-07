import React from 'react';
import * as styled from './Login.styles.js';

const Login = (props) => {
  return (
    <styled.Container>
      <h1>Log in to Bits & Bots</h1>
      <p>You must be logged in to use this application</p>
      <styled.Form>
        <styled.Input type="email" placeholder="Email address"/>
        <styled.Input type="password" placeholder='Password'/>
        <styled.LoginBtn>Login</styled.LoginBtn>
      </styled.Form>
    </styled.Container>
  );
};

export default Login;
