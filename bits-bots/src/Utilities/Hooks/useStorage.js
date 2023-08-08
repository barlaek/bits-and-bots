import React, { useContext } from 'react';
import { UserContext } from '../Context/UserContext';

function useStorage() {
  const userBody = JSON.parse(localStorage.getItem('userBody'));
  const { currentUser, setCurrentUser } = useContext(UserContext);
  setCurrentUser(userBody)
  console.log(currentUser);

  return { currentUser };
}

export default useStorage;
