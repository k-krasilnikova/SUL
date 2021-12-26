import React from 'react';

import { InputFieldTypes } from './SignInterfaces';
import { InputStyled } from './styled';

const InputField = ({
  fieldValue,
  touched,
  onChangeHandler,
  handleBlur,
  errors,
  id,
  label,
  autoComplete,
}: InputFieldTypes): JSX.Element => (
  <InputStyled
    value={fieldValue}
    id={id}
    name={id}
    size="small"
    required
    fullWidth
    label={label}
    autoComplete={autoComplete}
    error={touched && Boolean(errors)}
    helperText={touched && errors}
    onChange={onChangeHandler.bind(null, id)}
    onBlur={handleBlur}
  />
);

export default InputField;
