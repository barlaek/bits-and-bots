import React, { useState } from 'react';
import Modal from './Modal.js';
import * as styled from './ProfileSelect.styles.js';

const ProfileSelect = () => {

  return (
    <styled.Container>
      <styled.Login onClick={() => setOpen(true)}>Login</styled.Login>
    </styled.Container>
  );
};

export default ProfileSelect;
