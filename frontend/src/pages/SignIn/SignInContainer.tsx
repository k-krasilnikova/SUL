/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-expressions */
import React, { useState } from 'react';
import { useFormik, FormikProvider } from 'formik';

import signInSchema from 'validations/signInValidationSchema';
import useGetAuth from 'api/auth/getAuth';
import { SIGN_STYLE_PROPS } from 'constants/signStyle';

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
  const { mutateAsync, isLoading } = useGetAuth();
  const FIELD_TOUCHED = true;
  const FIELD_VALIDATE = false;

  const formik = useFormik({
    initialValues: initSignInvalue,
    validationSchema: signInSchema,
    onSubmit: (values): void => {
      mutateAsync(values);
    },
  });

  const [fieldStatus, setStatus] = useState<string | boolean>(false);

  const warningHandler = (name: string, e: string) => {
    formik.handleChange(e);
    formik.setFieldTouched(name, FIELD_TOUCHED, FIELD_VALIDATE);
  };

  const outOfFocusFiled = (e: string) => {
    formik.handleBlur(e);
    setStatus(FIELD_VALIDATE);
  };

  const onFocusField = (event: React.MouseEvent<Element, MouseEvent>) => {
    setStatus((event.currentTarget as HTMLElement).id);
  };

  return (
    <FormikProvider value={formik}>
      <SignIn
        formik={formik}
        warningHandler={warningHandler}
        outOfFocusFiled={outOfFocusFiled}
        getFieldName={onFocusField}
        isLoading={isLoading}
        labelHandler={SIGN_STYLE_PROPS}
        fieldStatus={fieldStatus}
      />
    </FormikProvider>
  );
};

export default SignInContainer;
