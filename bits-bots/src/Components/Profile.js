import React, { useState } from 'react';
import * as styled from './Profile.styles.js';

const Profile = (props) => {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };

  return (
    <styled.Container>
      <styled.Profile onClick={toggle}>{props.label}</styled.Profile>
      {open && <div>{props.children}</div>}
    </styled.Container>
  );
};

export default Profile;
