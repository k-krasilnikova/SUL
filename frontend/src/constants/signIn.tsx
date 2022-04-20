import { SignInFields } from 'types/signIn';

export const SIGN_IN_STYLES = {
  focusedColor: '#1D1D1D',
  basicColor: '#C6C6C9',
  loginLabel: 'login',
  passwordLabel: 'password',
};

export const FIELD_NAME = {
  loginField: 'login',
  passwordField: 'password',
};

export const INITIAL_VALUES: SignInFields = {
  login: '',
  password: '',
};

export const SIGN_IN_TEXT = {
  invalid: 'Invalid login or password',
};

export const FIELD_TOUCHED = true;
export const FIELD_VALIDATE = false;
