import React from 'react';
import { TextField as MuiTextField } from '@mui/material';
import { Field } from 'formik';

import WarningHelper from './styled';

interface TextFieldProps {
  id: string;
  label?: string;
  children?: React.ReactNode;
  defaultValue?: string;
  helperText?: string;
  touched?: boolean;
  onChange?: (e: string) => void;
  error?: string;
  value?: unknown;
  type?: string;
}

const TextField: React.FC<TextFieldProps> = ({
  id,
  label,
  children,
  defaultValue,
  helperText,
  onChange,
  error,
  touched,
  ...rest
}) => (
  <>
    <Field
      component={MuiTextField}
      onChange={onChange}
      id={id}
      label={label}
      defaultValue={defaultValue}
      helperText={helperText}
      size="medium"
      required
      fullWidth
      error={touched && Boolean(error)}
      {...rest}
    >
      {children}
    </Field>
    {error && <WarningHelper>{error}</WarningHelper>}
  </>
);

export default TextField;
