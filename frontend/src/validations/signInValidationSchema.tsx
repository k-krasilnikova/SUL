import { string, object } from 'yup';

const signInSchema = object().shape({
  login: string().required('Login is required'),
  password: string().required('Password is required'),
});

export default signInSchema;
