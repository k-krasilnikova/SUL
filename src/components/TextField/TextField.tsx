/* eslint-disable react/jsx-no-bind */
import React from 'react';
import { TextField as MuiTextField } from '@mui/material';
import { Field, ErrorMessage } from 'formik';

import WarningHelper from './styled';

interface TextFieldProps {
  id: string;
  label?: string;
  children?: React.ReactNode;
  defaultValue?: string;
  helperText?: string;
  touched?: boolean;
  error?: {
    login?: string;
    password?: string;
  };
  onChange?: (e: string) => void;
  handleBlur?: (e: React.FocusEvent) => void;
  handleChange: (e: string) => void;
  setFieldTouched: (name: string, value?: boolean, isValidate?: boolean) => void;
  value?: unknown;
  type?: string;
  placeholder?: string;
  warningHandler?: (name: string, e: string) => void;
}

const TextField: React.FC<TextFieldProps> = ({
  id,
  label,
  children,
  defaultValue,
  helperText,
  touched,
  error,
  onChange,
  handleBlur,
  handleChange,
  setFieldTouched,
  warningHandler,
  ...rest
}) => {
  return (
    <>
      <Field
        component={MuiTextField}
        onChange={handleChange}
        // onChange={warningHandler?.bind(null, id)}
        id={id}
        label={label}
        defaultValue={defaultValue}
        helperText={helperText}
        onBlur={handleBlur}
        size="medium"
        required
        fullWidth
        {...rest}
      >
        {children}
      </Field>
      <ErrorMessage component={WarningHelper} name={id} />
    </>
  );
};

export default TextField;
