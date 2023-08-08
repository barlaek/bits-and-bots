import React from 'react';
import * as styled from './ProfileSelect.styles.js';
import { useNavigate } from 'react-router-dom';
import Logout from './Logout.js';

const ProfileSelect = () => {
  const landing = useNavigate();

  const handleClick = () => {
    landing('/landing');
  };

  const checkAuth = () => {
    if(!localStorage) {
      console.log(localStorage);
    }
  }

  return (
    <styled.Container>
      <styled.Login onClick={handleClick}>Login</styled.Login>
      <Logout />
    </styled.Container>
  );
};

export default ProfileSelect;
