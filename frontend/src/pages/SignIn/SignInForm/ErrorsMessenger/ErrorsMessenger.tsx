import React from 'react';
import { ErrorMessage } from 'formik';

import { FIELD_NAME } from 'constants/signIn';
import { IErrorFieldTypes } from 'types/signIn';

import { WarningHelper } from './styled';

const ErrorsMessenger: React.FC<IErrorFieldTypes> = ({ identificator }): JSX.Element => (
  <>
    {identificator === FIELD_NAME.loginField && (
      <ErrorMessage component={WarningHelper} name={identificator} />
    )}
    {identificator === FIELD_NAME.passwordField && (
      <ErrorMessage component={WarningHelper} name={identificator} />
    )}
  </>
);

export default ErrorsMessenger;
