import { FC } from 'react';

import { ISignInForm } from 'types/signIn';

import { SignMain, SignInWrapper } from './styled';
import SignInImage from './SignInImage';
import SignInForm from './SignInForm';

const SignIn: FC<ISignInForm> = ({ ...props }) => (
  <SignMain>
    <SignInWrapper justifyContent="space-between" container spacing={{ xl: 2, lg: 2 }}>
      <SignInImage />
      <SignInForm {...props} />
    </SignInWrapper>
  </SignMain>
);

export default SignIn;
