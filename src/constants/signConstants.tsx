interface SignIn {
  readonly [key: string]: string;
}
interface SignLabel {
  readonly [key: string]: string;
}
interface TextFieldName {
  readonly [key: string]: string;
}

const signConstants: SignIn = {
  login: 'Enter a valid login',
  signInMinHeight: 'Folder must contain at least 4 characters',
  signInMaxHeight: 'Folder must contain no more than 15 characters',
  requiredLogin: 'Login is required',
  requiredPass: 'Enter your password',
};

const signLabel: SignLabel = {
  authLabel: 'Log In',
  signUpLabel: 'Sign Up',
  afterSignUp: 'Welcome to the club buddy. Log In',
  userExist: 'User already exist',
  authGreetings: 'Log in with your corporate account to access internal applications and services',
};

const textsFieldConstants: TextFieldName = {
  input_login: 'login',
  label_login: 'Login',
  autoComplete_login: 'login',

  input_password: 'password',
  label_password: 'Password',
  autoComplete_password: 'password',
};

const { login, signInMinHeight, signInMaxHeight, requiredLogin, requiredPass } = signConstants;
const { authLabel, signUpLabel, afterSignUp, authGreetings } = signLabel;
const {
  input_login,
  label_login,
  autoComplete_login,
  input_password,
  label_password,
  autoComplete_password,
} = textsFieldConstants;

export {
  login,
  signInMinHeight,
  signInMaxHeight,
  requiredLogin,
  requiredPass,
  authLabel,
  signUpLabel,
  afterSignUp,
  authGreetings,
  input_login,
  label_login,
  autoComplete_login,
  input_password,
  label_password,
  autoComplete_password,
};
