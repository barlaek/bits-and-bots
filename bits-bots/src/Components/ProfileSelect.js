import React, { useState } from 'react';
import Modal from './Modal.js';
import * as styled from './ProfileSelect.styles.js';
import { useNavigate } from 'react-router-dom';

const ProfileSelect = () => {
  const landing = useNavigate();

  const handleClick = () => {
    landing("/landing")
  }

  return (
    <styled.Container>
      <styled.Login onClick={handleClick}>Login</styled.Login>
    </styled.Container>
  );
};

export default ProfileSelect;
