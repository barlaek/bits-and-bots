import React from 'react';
import * as styled from './ProfileSelect.styles.js';
import { useNavigate } from 'react-router-dom';
import Logout from './Logout.js';
import useStorage from '../Utilities/Hooks/useStorage.js';

const ProfileSelect = () => {
  const { userBody } = useStorage();
  const landing = useNavigate();

  const handleClick = () => {
    landing('/landing');
  };

  return (
    <styled.Container>
      {userBody ? (
        <Logout />
      ) : (
        <styled.Login onClick={handleClick}>Login</styled.Login>
      )}
    </styled.Container>
  );
};

export default ProfileSelect;
