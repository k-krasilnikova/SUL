import { string, object } from 'yup';

const signInValidationSchema = object().shape({
  login: string().required('Login is required'),
  password: string().required('Password is required'),
});

export default signInValidationSchema;
