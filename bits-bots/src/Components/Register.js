import React from 'react';
import * as styled from './Register.styles.js';

const Register = (props) => {
  return (
    <styled.Container>
      <h1>Register an account</h1>
      <styled.Form>
        <styled.Input type="text" placeholder='Username' />
        <styled.Input type="email" placeholder="Email address"/>
        <styled.Input type="password" placeholder='Password'/>
        <styled.RegBtn>Register</styled.RegBtn>
      </styled.Form>
    </styled.Container>
  );
};

export default Register;