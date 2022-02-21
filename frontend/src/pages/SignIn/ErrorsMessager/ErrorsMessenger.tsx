import React from 'react';
import { ErrorMessage } from 'formik';

import { WarningHelper } from './styled';

export interface IErrorFieldTypes {
  focusHistory: Array<string | undefined>;
  loginHelper: string;
  passwordHelper: string;
  historyLimiter: number;
  loginError?: string;
  passwordError?: string;
  labelState?: string;
  labelHandler?: {
    [key: string]: string | undefined;
  };
  isLoginHistory?: boolean;
  isPasswordHistory?: boolean;
}

const ErrorsMessenger = ({
  labelState,
  loginError,
  passwordError,
  isLoginHistory,
  isPasswordHistory,
  focusHistory,
  loginHelper,
  passwordHelper,
  historyLimiter,
}: IErrorFieldTypes): JSX.Element => (
  <>
    {!labelState && loginError && passwordError && (
      <ErrorMessage component={WarningHelper} name={loginHelper} />
    )}
    {isLoginHistory && !isPasswordHistory && loginError && passwordError && (
      <ErrorMessage component={WarningHelper} name={loginHelper} />
    )}
    {isLoginHistory && isPasswordHistory && loginError && passwordError && (
      <ErrorMessage component={WarningHelper} name={loginHelper} />
    )}
    {isLoginHistory && loginError && !passwordError && (
      <ErrorMessage component={WarningHelper} name={loginHelper} />
    )}
    {isPasswordHistory &&
      !isLoginHistory &&
      loginError &&
      !passwordError &&
      focusHistory.length === historyLimiter && (
        <ErrorMessage component={WarningHelper} name={loginHelper} />
      )}
    {isPasswordHistory && !isLoginHistory && loginError && passwordError && (
      <ErrorMessage component={WarningHelper} name={passwordHelper} />
    )}
    {isPasswordHistory && !loginError && passwordError && (
      <ErrorMessage component={WarningHelper} name={passwordHelper} />
    )}
    {isLoginHistory &&
      !isPasswordHistory &&
      !loginError &&
      passwordError &&
      focusHistory.length === historyLimiter && (
        <ErrorMessage component={WarningHelper} name={passwordHelper} />
      )}
  </>
);

export default ErrorsMessenger;
