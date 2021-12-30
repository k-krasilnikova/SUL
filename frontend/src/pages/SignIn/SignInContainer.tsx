import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik, FormikProvider } from 'formik';

import signInSchema from 'validations/signInValidationSchema';
import useGetToken from 'api/profile/getToken';
import SignIn from './SignIn';
import { TOKEN_FETCH_URL } from 'api/authConstants';
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
  const navToAuth = useNavigate();
  const auth = useGetToken(TOKEN_FETCH_URL);

  const formik = useFormik({
    initialValues: initSignInvalue,
    validationSchema: signInSchema,
    onSubmit: (values, { resetForm }): void => {
      auth.mutateAsync(values);
      resetForm();
      navToAuth(PATHS.profile);
    },
  });

  return (
    <FormikProvider value={formik}>
      <SignIn formik={formik} />
    </FormikProvider>
  );
};

export default SignInContainer;
