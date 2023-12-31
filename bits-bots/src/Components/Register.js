import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as styled from './Register.styles.js';
import { schema } from '../Utilities/Constants/schema.js';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../Utilities/Context/UserContext.js';

/**
 * Registration component that
 * @returns a registration form
 */
const Register = () => {
  /**
   * Initializes navigation
   */
  const navigate = useNavigate();
  /**
   * Initializes user context
   */
  const { currentUser, setCurrentUser } = useContext(UserContext);

  /**
   * Validates form input
   */
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  /**
   * Submission function that takes
   * @param {input} data
   */
  function onSubmit(data) {
    const user = {
      email: data.email,
      password: data.password,
    };

    /**
     * Sets input data to the localStorage
     */
    localStorage.setItem('userBody', JSON.stringify(user));

    /**
     * Fetches the stored user from localStorage
     */
    const localData = JSON.parse(localStorage.getItem('userBody'));
    /**
     * Sets the localStorage userBody to user context
     */
    setCurrentUser(localData);
    /**
     * Checks for validation and navigates to login
     */
    if (currentUser) {
      alert('Thank you for registering with Bits & Bots');
      navigate('/');
    }
  }
  return (
    <styled.Form onSubmit={handleSubmit(onSubmit)}>
      <styled.Input
        type="email"
        placeholder="Email address"
        {...register('email')}
      />
      <p>{errors.email?.message}</p>
      <styled.Input
        type="password"
        placeholder="Password"
        {...register('password')}
      />
      <p>{errors.password?.message}</p>
      <styled.RegBtn type="submit" value="Register account" />
    </styled.Form>
  );
};

export default Register;
