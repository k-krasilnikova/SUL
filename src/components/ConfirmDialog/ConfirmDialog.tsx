import React from 'react';

import { StyledDialog } from './styled';

interface IDialog {
  children: React.ReactNode;
  open: boolean;
  onClose: () => void;
  size?: string;
}

const ConfirmDialog: React.FC<IDialog> = ({ children, open, onClose, size }) => (
  <StyledDialog open={open} onClose={onClose} size={size}>
    {children}
  </StyledDialog>
);

export default ConfirmDialog;
