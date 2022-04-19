/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useFormik, FormikProvider } from 'formik';

import { useGetAuth } from 'api/auth';
import { FIELD_TOUCHED, FIELD_VALIDATE, INITIAL_VALUES } from 'constants/signIn';
import signInValidationSchema from 'validations';

import SignIn from './SignIn';

const SignInContainer: React.FC = () => {
  const { mutateAsync, isLoading, isError: isAuthError } = useGetAuth();

  const formik = useFormik({
    initialValues: INITIAL_VALUES,
    validationSchema: signInValidationSchema,
    onSubmit: (values): void => {
      mutateAsync(values);
    },
  });

  const [fieldStatus, setFieldStatus] = useState<string | boolean>(false);
  const [authFailed, setAuthFailed] = useState(false);

  useEffect(() => {
    if (isAuthError) setAuthFailed(true);
  }, [isAuthError]);

  const warningHandler = (name: string, event: string) => {
    formik.handleChange(event);
    formik.setFieldTouched(name, FIELD_TOUCHED, FIELD_VALIDATE);
    setAuthFailed(false);
  };

  const outOfFocusFiled = (event: string) => {
    formik.handleBlur(event);
    setFieldStatus(FIELD_VALIDATE);
  };

  const onFocusField = (event: React.MouseEvent<Element, MouseEvent>) => {
    setFieldStatus((event.currentTarget as HTMLElement).id);
  };

  return (
    <FormikProvider value={formik}>
      <SignIn
        formik={formik}
        warningHandler={warningHandler}
        outOfFocusFiled={outOfFocusFiled}
        getFieldName={onFocusField}
        isLoading={isLoading}
        fieldStatus={fieldStatus}
        isAuthError={authFailed}
      />
    </FormikProvider>
  );
};

export default SignInContainer;
