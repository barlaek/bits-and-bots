import * as yup from 'yup';

export const schema = yup
  .object({
    email: yup.string().required('Please enter a valid email address'),
    password: yup.string().required('Please enter your password'),
  })
  .required();

export const checkoutSchema = yup
  .object({
    name: yup.string().min(3).required('Please enter your name'),
    address: yup.string().min(3).required('Please enter your address'),
    creditCard: yup
      .string()
      .min(16)
      .required('Please enter your credit card number, 16 numbers'),
  })
  .required();
