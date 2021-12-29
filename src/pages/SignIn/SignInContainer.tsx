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

const SignInContainer: React.FC = () => {
  const formik = useFormik({
    initialValues: initSignInvalue,
    validationSchema: signInSchema,
    onSubmit: (values, { resetForm }): void => {
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
