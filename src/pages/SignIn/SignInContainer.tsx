import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik, FormikProvider } from 'formik';

import signInSchema from 'validations/signInValidationSchema';
import useGetAuth from 'api/auth/getAuth';
import SignIn from './SignIn';
import { PATHS } from 'constants/routes';
interface SignInFields {
  login: string;
  password: string;
}

const initSignInvalue: SignInFields = {
  login: '',
  password: '',
};

const SignInContainer: React.FC = () => {
  const goToProfile = useNavigate();
  const auth = useGetAuth();

  const formik = useFormik({
    initialValues: initSignInvalue,
    validationSchema: signInSchema,
    onSubmit: (values, { resetForm }): void => {
      auth.mutateAsync(values);
      resetForm();
      goToProfile(PATHS.profile);
    },
  });

  return (
    <FormikProvider value={formik}>
      <SignIn formik={formik} />
    </FormikProvider>
  );
};

export default SignInContainer;
