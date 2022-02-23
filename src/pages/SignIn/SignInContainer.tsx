/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-expressions */
import React, { useEffect, useState } from 'react';
import { useFormik, FormikProvider } from 'formik';

import signInSchema from 'validations/signInValidationSchema';
import useGetAuth from 'api/auth/getAuth';

import { useExplitLabel } from './styled';
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
  const { mutateAsync, isLoading, status } = useGetAuth();
  const FIELD_TOUCHED = true;
  const FIELD_VALIDATE = false;

  const LABEL_HANDLER = {
    loginLabel: 'login',
    emptyLogin: 'Login is required',
    passwordLabel: 'password',
    emptyPassword: 'Enter your password',
    additionalClass:
      'MuiFormControl-root MuiFormControl-fullWidth MuiTextField-root css-wb57ya-MuiFormControl-root-MuiTextField-root',
  };

  const classes = useExplitLabel();

  const formik = useFormik({
    initialValues: initSignInvalue,
    validationSchema: signInSchema,
    onSubmit: (values): void => {
      mutateAsync(values);
    },
  });

  const [targetFieldName, setTargetName] = useState<string | undefined>();
  const [currentCoordinates, setCoordinates] = useState<string | undefined>();
  const [labelStatus, setLabelStatus] = useState<string | boolean>();

  const warningHandler = (name: string, e: string) => {
    formik.handleChange(e);
    formik.setFieldTouched(name, FIELD_TOUCHED, FIELD_VALIDATE);
  };

  const getCoordinates = (event: React.MouseEvent<Element, MouseEvent>) => {
    (event.target as HTMLElement).className === LABEL_HANDLER.additionalClass
      ? setCoordinates((event.target as HTMLElement).className)
      : setCoordinates((event.target as HTMLElement).id);
  };

  const getFieldName = (event: React.MouseEvent<Element, MouseEvent>) => {
    setTargetName((event.currentTarget as HTMLElement).id);
  };

  useEffect(() => {
    currentCoordinates === targetFieldName
      ? setLabelStatus(targetFieldName)
      : currentCoordinates === LABEL_HANDLER.additionalClass
      ? setLabelStatus(targetFieldName)
      : setLabelStatus(FIELD_VALIDATE);
  }, [currentCoordinates, targetFieldName]);

  return (
    <FormikProvider value={formik}>
      <SignIn
        formik={formik}
        warningHandler={warningHandler}
        isLoading={isLoading}
        classes={classes}
        status={status}
        labelHandler={LABEL_HANDLER}
        getFieldName={getFieldName}
        getCoordinates={getCoordinates}
        labelStatus={labelStatus}
      />
    </FormikProvider>
  );
};

export default SignInContainer;
