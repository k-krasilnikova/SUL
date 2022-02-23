import { ErrorMessage } from 'formik';
import { useEffect, useState } from 'react';
import { WarningHelper } from '../styled';

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

const ErrorsMessenger = ({ errorKey }: { errorKey?: string }): JSX.Element => {
  const [keyName, setName] = useState<string | undefined>();

  useEffect(() => {
    setName(errorKey);
    console.log('error key', errorKey);
  }, [errorKey]);

  return (
    <>
      {keyName === 'login' && <ErrorMessage component={WarningHelper} name="login" />}
      {keyName === 'password' && <ErrorMessage component={WarningHelper} name="password" />}
    </>
  );
};
export default ErrorsMessenger;
