import React from 'react';
import { ErrorMessage } from 'formik';

import { WarningHelper } from './styled';

export interface ITextFieldTypes {
  error: {
    login?: string;
    password?: string;
  };
  labelState?: string;
  labelHandler: {
    [key: string]: string | undefined;
  };
}

const ErrorsMessenger = ({ error, labelState, labelHandler }: ITextFieldTypes): JSX.Element => {
  const { loginLabel, passwordLabel } = labelHandler;

  return (
    <>
      {labelState === loginLabel && error.login && error.password && (
        <ErrorMessage component={WarningHelper} name="login" />
      )}
      {labelState === passwordLabel && error.login && error.password && (
        <ErrorMessage component={WarningHelper} name="password" />
      )}
      {!error.password && error.login && <ErrorMessage component={WarningHelper} name="login" />}
      {!error.login && error.password && <ErrorMessage component={WarningHelper} name="password" />}
      {!labelState && error.login && error.password && (
        <ErrorMessage component={WarningHelper} name="login" />
      )}
    </>
  );
};

export default ErrorsMessenger;
