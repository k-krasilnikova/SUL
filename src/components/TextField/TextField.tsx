import React from 'react';
import { TextField as MuiTextField, BaseTextFieldProps } from '@mui/material';

interface TextFieldProps extends BaseTextFieldProps {
    id: string;
    label: string;
    children?: React.ReactNode;
    defaultValue?: string;
    helperText?: string;
    onChange?: () => void;
}

const TextField: React.FC<TextFieldProps> = ({
    id,
    label,
    children,
    defaultValue,
    helperText,
    onChange,
}) => (
    <MuiTextField
        onChange={onChange}
        id={id}
        label={label}
        defaultValue={defaultValue}
        helperText={helperText}
    >
        {children}
    </MuiTextField>
);

export default TextField;
