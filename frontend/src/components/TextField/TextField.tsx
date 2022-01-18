/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/jsx-no-bind */
import React from 'react';
import { TextField as MuiTextField } from '@mui/material';
import { Field, ErrorMessage } from 'formik';

import WarningHelper from './styled';

interface TextFieldProps {
  id: string;
  warningHandler: (name: string, e: string) => void;
  handleChange?: (e: string) => void;
  setFieldTouched?: (name: string, value?: boolean, isValidate?: boolean) => void;
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
  value?: unknown;
  type?: string;
  placeholder?: string;
}

const TextField: React.FC<TextFieldProps> = ({
  id,
  warningHandler,
  label,
  children,
  defaultValue,
  helperText,
  touched,
  error,
  onChange,
  handleBlur,
  ...rest
}) => (
  <>
    <Field
      component={MuiTextField}
      onChange={warningHandler.bind(null, id)}
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

export default TextField;
