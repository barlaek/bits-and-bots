import React from 'react';
import * as styled from './Login.styles.js';

const Login = (props) => {

  return (
      <styled.Form>
        <styled.Input type="email" placeholder="Email address" value={props.email}/>
        <styled.Input type="password" placeholder='Password' value={props.password}/>
        <styled.LoginBtn>Login</styled.LoginBtn>
      </styled.Form>
  );
};

export default Login;
