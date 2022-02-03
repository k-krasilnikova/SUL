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
  const { mutateAsync, isLoading, isSuccess, status } = useGetAuth();
  const FIELD_TOUCHED = true;
  const FIELD_VALIDATE = false;

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
    formik.setFieldTouched(name, FIELD_TOUCHED, FIELD_VALIDATE);
  };

  console.log('loading', isLoading);
  console.log('success', isSuccess);
  console.log('status', status);
  return (
    <FormikProvider value={formik}>
      <SignIn
        formik={formik}
        warningHandler={warningHandler}
        isLoading={isLoading}
        status={status}
      />
    </FormikProvider>
  );
};

export default SignInContainer;
