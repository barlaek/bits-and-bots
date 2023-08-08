import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as styled from './Register.styles.js';
import { schema } from '../Utilities/Constants/schema.js';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../Utilities/Context/UserContext.js';

const Register = () => {
  const navigate = useNavigate();
  const { currentUser, setCurrentUser } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function onSubmit(data) {
    const user = {
      email: data.email,
      password: data.password,
    };

    localStorage.setItem('userBody', JSON.stringify(user));

    const localData = JSON.parse(localStorage.getItem('userBody'));

    setCurrentUser(localData);

    if (currentUser) {
      setTimeout(() => {
        navigate('/landing');
      }, 2000);
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
