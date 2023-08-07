import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as styled from './Register.styles.js';
import { schema } from '../Utilities/Constants/schema.js';

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema)
  })

  function onSubmit(data) {
    console.log(data);
  }
  return (
      <styled.Form onSubmit={handleSubmit(onSubmit)}>
        <styled.Input type="email" placeholder="Email address" {...register("email")}/>
        <p>{errors.email?.message}</p>
        <styled.Input type="password" placeholder='Password' {...register("password")}/>
        <p>{errors.password?.message}</p>
        <styled.RegBtn type='submit' value="Register account"/>
      </styled.Form>
  );
};

export default Register;