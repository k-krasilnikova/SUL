import React from 'react';

import { StyledDialog } from './styled';

interface IDialog {
  children: React.ReactNode;
  open: boolean;
  onClose: () => void;
}

const ConfirmDialog: React.FC<IDialog> = ({ children, open, onClose }) => (
  <StyledDialog open={open} onClose={onClose}>
    {children}
  </StyledDialog>
);

export default ConfirmDialog;
