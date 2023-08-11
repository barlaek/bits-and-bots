import React from 'react';
import * as styled from './ProfileSelect.styles.js';
import { useNavigate } from 'react-router-dom';
import useStorage from '../Utilities/Hooks/useStorage.js';

const ProfileSelect = () => {
  const { userBody } = useStorage();
  const landing = useNavigate();

  const handleClick = () => {
    landing('/');
  };

  const logOut = () => {
    localStorage.clear();
    landing("/");
  };

  return (
    <styled.Container>
      {userBody ? (
        <styled.Logout onClick={logOut}>Logout</styled.Logout>
      ) : (
        <styled.Login onClick={handleClick}>Login</styled.Login>
      )}
    </styled.Container>
  );
};

export default ProfileSelect;
