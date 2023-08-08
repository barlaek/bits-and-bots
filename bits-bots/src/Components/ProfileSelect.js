import React, { useContext } from 'react';
import * as styled from './ProfileSelect.styles.js';
import { useNavigate } from 'react-router-dom';
import Logout from './Logout.js';
import { UserContext } from '../Utilities/Context/UserContext.js';
import useStorage from '../Utilities/Hooks/useStorage.js';

const ProfileSelect = () => {
  // const { currentUser, setCurrentUser } = useContext(UserContext)
  // const { userBody } = useStorage();
  const landing = useNavigate();

  const handleClick = () => {
    landing('/landing');
  };

  // const isLoggedin = setCurrentUser(userBody);
  // let button;

  // if(isLoggedin) {
  //   button = <Logout />
  // } else {
  //   button = <styled.Login onClick={handleClick}>Login</styled.Login>
  // }


  // const checkAuth = () => {
  //   if(!currentUser) {
  //     return <styled.Login>Login</styled.Login>
  //   } else {

  //   }
  // }

  // if(!currentUser) {
  //   return <styled.Login onClick={handleClick}>Login</styled.Login>
  // } else {
  //   return <Logout />
  // }
  // const checkAuth = () => {
  //   if(currentUser === null) {
  //     if(!userBody) {
  //       return <styled.Login>Login</styled.Login>
  //     }
  //   }
  //   return <Logout />
  // }


  return (
    <styled.Container>
      {/* {user ? <Logout /> : <styled.Login onClick={handleClick}>Login</styled.Login>} */}
      {/* {!user ? (
        <styled.Login onClick={handleClick}>Login</styled.Login>
      ) : (
        <Logout />
      )} */}
      {/* {!currentUser ? <styled.Login onClick={handleClick}>Login</styled.Login> : <Logout />} */}
    </styled.Container>
  );
};

export default ProfileSelect;
