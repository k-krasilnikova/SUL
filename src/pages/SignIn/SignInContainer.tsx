import React from 'react';
import { useFormik } from 'formik';

import { signInSchema, initSignInvalue } from './SignReceiver';
import SignIn from './SignIn';

const SignInContainer: React.FC = () => {
  const TOUCHED_STATUS = { isTouchedStatus: true, shouldValidateStatus: false };

  const formik = useFormik({
    initialValues: initSignInvalue,
    validationSchema: signInSchema,
    onSubmit: (values, { resetForm }): void => {
      resetForm();
    },
  });

  const onChangeHandler = (name: string, e: React.ChangeEvent): void => {
    const { handleChange, setFieldTouched } = formik;
    const { isTouchedStatus, shouldValidateStatus } = TOUCHED_STATUS;
    handleChange(e);
    setFieldTouched(name, isTouchedStatus, shouldValidateStatus);
  };

  return <SignIn formik={formik} onChangeHandler={onChangeHandler} />;
};

export default SignInContainer;
