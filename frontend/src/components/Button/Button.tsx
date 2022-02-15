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
}

const Button: React.FC<Props> = ({ onClick, children, id, ...rest }) => (
  <MuiButton id={id} onClick={onClick} {...rest}>
    {children}
  </MuiButton>
);

export default Button;
