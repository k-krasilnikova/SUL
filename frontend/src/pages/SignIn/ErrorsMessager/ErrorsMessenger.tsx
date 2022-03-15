/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { ErrorMessage } from 'formik';

import { WarningHelper } from '../styled';

export interface IErrorFieldTypes {
  loginFiled: string;
  passwordField: string;
  identificator?: string;
}

const ErrorsMessenger = ({
  identificator,
  loginFiled,
  passwordField,
}: IErrorFieldTypes): JSX.Element => {
  return (
    <>
      {identificator === loginFiled && (
        <ErrorMessage component={WarningHelper} name={identificator} />
      )}
      {identificator === passwordField && (
        <ErrorMessage component={WarningHelper} name={identificator} />
      )}
    </>
  );
};

export default ErrorsMessenger;
