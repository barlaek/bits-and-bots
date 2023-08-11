import React from 'react';
import * as styled from './ProfileSelect.styles.js';
import { useNavigate } from 'react-router-dom';
import useStorage from '../Utilities/Hooks/useStorage.js';

/**
 * Button component that
 * @returns a login or logout button based on the user
 */
const ProfileSelect = () => {
  /**
   * Fetches the user from localStorage
   */
  const { userBody } = useStorage();
  /**
   * Initializes navigation
   */
  const landing = useNavigate();

  /**
   * Login button function
   */
  const handleClick = () => {
    landing('/');
  };

  /**
   * Logout button function.
   * Clears the localstorage and navigates to login page
   */
  const logOut = () => {
    localStorage.clear();
    landing('/');
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
