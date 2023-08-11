import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as styled from './CheckoutForm.styles.js';
import { checkoutSchema } from '../Utilities/Constants/schema.js';
import { useNavigate } from 'react-router-dom';

const CheckoutForm = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(checkoutSchema),
  });

  function onSubmit(data) {
    const checkoutDetails = {
      name: data.name,
      address: data.address,
      creditCard: data.creditCard,
    };
    console.log(checkoutDetails);
    clear(checkoutDetails);
  }

  const clear = (checkoutDetails) => {
    if(checkoutDetails) {
        localStorage.removeItem("cart");
        alert("Thank you for your order!");
        navigate("/");
    }
  }

  return (
    <styled.Form onSubmit={handleSubmit(onSubmit)}>
      <styled.Input
        type="name"
        placeholder="Name"
        {...register('name')}
      />
      <p>{errors.name?.message}</p>
      <styled.Input
        type="address"
        placeholder="Address"
        {...register('address')}
      />
      <p>{errors.address?.message}</p>
      <styled.Input
        type="creditCard"
        placeholder="Credit card number"
        {...register('creditCard')}
      />
      <p>{errors.creditCard?.message}</p>
      <styled.Submit type="submit" value="Place order" />
    </styled.Form>
  );
};

export default CheckoutForm;