import React from 'react';
import { Button as MuiButton, ButtonProps } from '@mui/material';

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    medium: true;
    mediumOutlined: true;
    mediumContained: true;
    large: true;
  }
}

interface Props extends ButtonProps {
  id?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  children?: React.ReactNode;
  component?: React.ElementType;
  to?: string;
  disabled?: boolean;
}

const Button: React.FC<Props> = ({ disabled, onClick, children, id, ...rest }) => (
  <MuiButton id={id} onClick={onClick} disabled={disabled} {...rest}>
    {children}
  </MuiButton>
);

export default Button;
