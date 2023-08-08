import React, { useState } from 'react';
import * as styled from './ProfileSelect.styles.js';
import { useNavigate } from 'react-router-dom';
import Logout from './Logout.js';

const ProfileSelect = () => {
  const [ user, setUser ] = useState(false);
  const landing = useNavigate();

  const handleClick = () => {
    landing('/landing');
  };

  const checkAuth = () => {
    if(!localStorage.length === 0) {
      setUser(!user);
    }
  }

  console.log(user);


  return (
    <styled.Container onChange={checkAuth}>
      {!user ? <Logout /> : <styled.Login onClick={handleClick}>Login</styled.Login>}
    </styled.Container>
  );
};

export default ProfileSelect;
