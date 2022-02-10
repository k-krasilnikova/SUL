import React, { useState } from 'react';
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
  const { mutateAsync, status } = useGetAuth();
  const [labelState, setLabelState] = useState<boolean | undefined>(false);
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

  const handleFocus = () => {
    setLabelState(true);
  };

  return (
    <FormikProvider value={formik}>
      <SignIn
        formik={formik}
        warningHandler={warningHandler}
        status={status}
        handleFocus={handleFocus}
        labelState={labelState}
      />
    </FormikProvider>
  );
};

export default SignInContainer;
