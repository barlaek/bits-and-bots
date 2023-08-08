import React, { useContext, useState } from 'react';
import * as styled from './ProfileSelect.styles.js';
import { useNavigate } from 'react-router-dom';
import Logout from './Logout.js';
import { UserContext } from '../Utilities/Context/UserContext.js';
import useStorage from '../Utilities/Hooks/useStorage.js';

const ProfileSelect = () => {
  // const { currentUser, setCurrentUser } = useContext(UserContext)
  const [ loggedIn, setLoggedIn ] = useState(false);
  const { userBody } = useStorage();
  const landing = useNavigate();

  const handleClick = () => {
    landing('/landing');
  };

  function onChange() {
    checkAuth(userBody);
  }

  const checkAuth = (userBody) => {
    if(userBody) {
      setLoggedIn(!loggedIn)
    }
  }

  return (
    <styled.Container key={onChange}>
      {/* {user ? <Logout /> : <styled.Login onClick={handleClick}>Login</styled.Login>} */}
      {/* {!user ? (
        <styled.Login onClick={handleClick}>Login</styled.Login>
      ) : (
        <Logout />
      )} */}
      {/* {!currentUser ? <styled.Login onClick={handleClick}>Login</styled.Login> : <Logout />} */}
      {!loggedIn ? <Logout /> : <styled.Login onClick={handleClick}>Login</styled.Login>}
    </styled.Container>
  );
};

export default ProfileSelect;
