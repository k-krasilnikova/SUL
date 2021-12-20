import React from 'react';
import { TextField as MuiTextField, BaseTextFieldProps } from '@mui/material';

interface TextFieldProps extends BaseTextFieldProps {
    children?: React.ReactNode;
    id: string;
    label: string;
    defaultValue?: string;
    helperText?: string;
    onChange?: () => void;
}

const TextField: React.FC<TextFieldProps> = ({
    children,
    id,
    label,
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
