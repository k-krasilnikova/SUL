import React from 'react';
import { useFormik, FormikProvider } from 'formik';

import signInSchema from 'validations/signInValidationSchema';

import SignIn from './SignIn';

interface SignInFields {
  login: string;
  password: string;
}

const initSignInvalue: SignInFields = {
  login: '',
  password: '',
};
import React, { useState } from 'react';
import { useFormik } from 'formik';

import { signInSchema, initSignInvalue, usePostWrapper } from './SignReceiver';
import SignIn from './SignIn';

const SignInContainer: React.FC = () => {
  const TOUCHED_STATUS = { isTouchedStatus: true, shouldValidateStatus: false };
  const [userCreds, setUserCreds] = useState({});

  const auth = usePostWrapper(
    'https://jsonplaceholder.typicode.com/users',
    JSON.stringify(userCreds),
  );

const SignInContainer: React.FC = () => {
  const formik = useFormik({
    initialValues: initSignInvalue,
    validationSchema: signInSchema,
    onSubmit: (values, { resetForm }): void => {
      setUserCreds(values);
      auth.mutateAsync();
      resetForm();
    },
  });

  return (
    <FormikProvider value={formik}>
      <SignIn formik={formik} />
    </FormikProvider>
  );
};

export default SignInContainer;
