import React from 'react';
import Login from '../Components/Login.js';
import * as styled from './Landing.styles.js';

const Landing = () => {
  const login = (e) => {
    e.prevent.default();
    const body = {
      email: e.email.value,
      password: e.password.value,
    }
    console.log(body)
  }
  // const [login, setLogin] = useState(false);
  // const [register, setRegister] = useState(false);

  // const toggleLogin = () => {
  //   setLogin(!login);
  // };

  // const toggleReg = () => {
  //   setRegister(!register);
  // };

  return (
    <styled.Background>
      <styled.Container>
        {/* <div>
          <styled.Login onClick={toggleLogin}>{props.label}</styled.Login>
          {login && <div>{props.children}</div>}
        </div>
        <div>
          <styled.Login onClick={toggleReg}>{props.label}</styled.Login>
          {register && <div>{props.children}</div>}
        </div> */}
        <h1>Log in</h1>
        <p>You must be logged in to use this application</p>
        <Login login={login}/>
      </styled.Container>
    </styled.Background>
  );
};

export default Landing;
