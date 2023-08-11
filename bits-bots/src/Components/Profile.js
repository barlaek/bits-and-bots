import React, { useState } from 'react';
import * as styled from './Profile.styles.js';

/**
 * Button component
 * @param {image} props object
 * @returns an/close button
 */
const Profile = (props) => {
  /**
   * Initializes the button state
   */
  const [open, setOpen] = useState(false);

  /**
   * Open / close on click function
   */
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
