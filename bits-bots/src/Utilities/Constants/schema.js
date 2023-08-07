import * as yup from 'yup';

export const schema = yup.
    object({
        email: yup
            .string()
            .required("Please enter a valid email address"),
        password: yup
            .string()
            .required("Please enter your password")
}).required();