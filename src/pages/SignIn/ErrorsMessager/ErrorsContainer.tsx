/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';

import ErrorsMessager from './ErrorsMessenger';

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

const ErrorsMessenger = ({ error, labelState }: ITextFieldTypes): JSX.Element => {
  const { login, password } = error;
  const [focusHistory, setfocusHistory] = useState<Array<string | undefined>>([]);
  const [isLoginHistory, setLoginHistory] = useState<boolean>();
  const [isPasswordHistory, setPasswordHistory] = useState<boolean>();
  const ERRORS_LABEL = { login: 'login', password: 'password', limiter: 2 };

  useEffect(() => {
    setfocusHistory([...focusHistory, labelState]);
  }, [labelState]);

  useEffect(() => {
    const loginStatus = focusHistory.includes(ERRORS_LABEL.login);
    const passwordStatus = focusHistory.includes(ERRORS_LABEL.password);
    setLoginHistory(loginStatus);
    setPasswordHistory(passwordStatus);
  }, [focusHistory]);

  return (
    <ErrorsMessager
      labelState={labelState}
      loginError={login}
      passwordError={password}
      isLoginHistory={isLoginHistory}
      isPasswordHistory={isPasswordHistory}
      focusHistory={focusHistory}
      loginHelper={ERRORS_LABEL.login}
      passwordHelper={ERRORS_LABEL.password}
      historyLimiter={ERRORS_LABEL.limiter}
    />
  );
};

export default ErrorsMessenger;
