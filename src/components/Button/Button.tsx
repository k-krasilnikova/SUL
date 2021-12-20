import React from 'react';
import { Button as MuiButton, ButtonProps } from '@mui/material';

interface Props extends ButtonProps {
  children?: React.ReactNode;
  onClick: () => void;
}

const Button: React.FC<Props> = ({ children, onClick }) => (
  <MuiButton onClick={onClick}>{children}</MuiButton>
);

export default Button;
