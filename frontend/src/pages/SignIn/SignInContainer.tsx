/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-expressions */
import React, { useEffect, useState } from 'react';
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

  const [targetFieldName, setTargetName] = useState<string | undefined>();
  const [currentCoordinates, setCoordinates] = useState<string | undefined>();
  const [labelStatus, setLabelStatus] = useState<string | boolean>();

  const warningHandler = (name: string, e: string) => {
    formik.handleChange(e);
    formik.setFieldTouched(name, FIELD_TOUCHED, FIELD_VALIDATE);
  };

  const getCoordinates = (event: React.MouseEvent<Element, MouseEvent>) => {
    (event.target as HTMLElement).className === SIGN_STYLE_PROPS.additionalClass
      ? setCoordinates((event.target as HTMLElement).className)
      : setCoordinates((event.target as HTMLElement).id);
  };

  const getFieldName = (event: React.MouseEvent<Element, MouseEvent>) => {
    setTargetName((event.currentTarget as HTMLElement).id);
  };

  useEffect(() => {
    currentCoordinates === targetFieldName
      ? setLabelStatus(targetFieldName)
      : currentCoordinates === SIGN_STYLE_PROPS.additionalClass
      ? setLabelStatus(targetFieldName)
      : setLabelStatus(FIELD_VALIDATE);
  }, [currentCoordinates, targetFieldName]);

  return (
    <FormikProvider value={formik}>
      <SignIn
        formik={formik}
        warningHandler={warningHandler}
        isLoading={isLoading}
        labelHandler={SIGN_STYLE_PROPS}
        getFieldName={getFieldName}
        getCoordinates={getCoordinates}
        labelStatus={labelStatus}
      />
    </FormikProvider>
  );
};

export default SignInContainer;
