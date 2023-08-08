import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as styled from './Login.styles.js';
import { schema } from '../Utilities/Constants/schema.js';
import useStorage from '../Utilities/Hooks/useStorage.js';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const { userBody } = useStorage();

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

    console.log(user, userBody);

    if (user === userBody) {
      // setInterval(() => {
      //   window.location.reload();
      // }, 1000)
      // useEffect(() => {
      //   navigate("/")
      // }, [navigate])
      // console.log("is this ok?")
      // setInterval(() => {
      //   navigate("/");
      // }, 1000);
    } else {
      console.log('who is you?');
    }
  }


  // const onSubmit = (data) => {
  //   const user = {
  //     email: data.email,
  //     password: data.password
  //   }

  //   return user;
  // }

  // const checkAuth = () => {
  //   if(onSubmit.user.email === userBody.email && onSubmit.user.password === userBody.password) {
  //     navigate("/")
  //     console.log(onSubmit);
  //   }
  // }

  // useEffect(() => {
  //   window.addEventListener("storage", checkAuth);
  //   return () => {
  //     window.removeEventListener("storage", checkAuth);
  //   }
  // }, [])
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
      <styled.LoginBtn type="submit" value="Login" />
    </styled.Form>
  );
};

export default Login;
