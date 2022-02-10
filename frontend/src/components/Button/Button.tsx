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
  onClick?: () => void;
  children?: React.ReactNode;
  component?: React.ElementType;
  to?: string;
}

const Button: React.FC<Props> = ({ onClick, children, ...rest }) => (
  <MuiButton onClick={onClick} {...rest}>
    {children}
  </MuiButton>
);

export default Button;
