import { string, object } from 'yup';

const signInSchema = object().shape({
  login: string().required('Login is required'),
  password: string().required('Enter your password'),
});

export default signInSchema;
