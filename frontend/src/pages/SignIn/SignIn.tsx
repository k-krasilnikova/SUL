import React from 'react';

import { ISignInForm } from 'types/signIn';

import { SignMain, SignInWrapper } from './styled';
import SignInImage from './SignInImage';
import SignInForm from './SignInForm';

const SignIn: React.FC<ISignInForm> = ({
  formik,
  warningHandler,
  getFieldName,
  outOfFocusFiled,
  isLoading,
  fieldStatus,
  isAuthError,
}) => (
  <SignMain>
    <SignInWrapper justifyContent="space-between" container spacing={{ xl: 2, lg: 2 }}>
      <SignInImage />
      <SignInForm
        formik={formik}
        fieldStatus={fieldStatus}
        warningHandler={warningHandler}
        outOfFocusFiled={outOfFocusFiled}
        getFieldName={getFieldName}
        isAuthError={isAuthError}
        isLoading={isLoading}
      />
    </SignInWrapper>
  </SignMain>
);

export default SignIn;
