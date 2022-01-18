import React from 'react';
import { useFormik, FormikProvider } from 'formik';

import signInSchema from 'validations/signInValidationSchema';
import useGetAuth from 'api/auth/getAuth';
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
  const { mutateAsync } = useGetAuth();
  const FIELD_TOUCHED = true;

  const formik = useFormik({
    initialValues: initSignInvalue,
    validationSchema: signInSchema,
    onSubmit: (values, { resetForm }): void => {
      mutateAsync(values);
      resetForm();
    },
  });

  const warningHandler = (name: string, e: string) => {
    formik.handleChange(e);
    formik.setFieldTouched(name, FIELD_TOUCHED);
  };

  return (
    <FormikProvider value={formik}>
      <SignIn formik={formik} warningHandler={warningHandler} />
    </FormikProvider>
  );
};

export default SignInContainer;
