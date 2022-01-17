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

  const formik = useFormik({
    initialValues: initSignInvalue,
    validationSchema: signInSchema,
    onSubmit: (values, { resetForm }): void => {
      mutateAsync(values);
      resetForm();
    },
  });
  const FIELD_TOUCHED = true;

  return (
    <FormikProvider value={formik}>
      <SignIn formik={formik} isFieldTouched={FIELD_TOUCHED} />
    </FormikProvider>
  );
};

export default SignInContainer;
