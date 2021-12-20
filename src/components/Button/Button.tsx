import React from 'react';
import { Button as MuiButton, ButtonProps } from '@mui/material';

interface Props extends ButtonProps {
  onClick: () => void;
  children?: React.ReactNode;
}

const Button: React.FC<Props> = ({ onClick, children }) => (
  <MuiButton onClick={onClick}>{children}</MuiButton>
);

export default Button;
