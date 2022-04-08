import React from 'react';

import { SignTypes } from 'types/signIn';

import { SignMain, SignInWrapper } from './styled';
import SignInForm from './SignInForm';
import SignInImage from './SignInImage';

const SignIn: React.FC<SignTypes> = ({
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
