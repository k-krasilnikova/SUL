import { string, object } from 'yup';

import {
  signInMinHeight,
  signInMaxHeight,
  requiredLogin,
  requiredPass,
} from './signValidationReceiver';

const signInSchema = object().shape({
  login: string().min(4, signInMinHeight).max(15, signInMaxHeight).required(requiredLogin),
  password: string().min(4, signInMinHeight).max(15, signInMaxHeight).required(requiredPass),
});

export default signInSchema;
