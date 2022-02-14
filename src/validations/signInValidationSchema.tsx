import { string, object } from 'yup';

const signInSchema = object().shape({
  login: string()
    // .min(4, 'Folder must contain at least 4 characters')
    // .max(15, 'Folder must contain no more than 15 characters')
    .required('Login is required'),
  password: string()
    // .min(4, 'Folder must contain at least 4 characters')
    // .max(15, 'Folder must contain no more than 15 characters')
    .required('Enter your password'),
});

export default signInSchema;
