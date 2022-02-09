import React from 'react';

import { StyledDialog } from './styled';

interface IDialog {
  children: React.ReactNode;
  open: boolean;
  onClose: () => void;
  width?: number | undefined;
  height?: number | undefined;
}

const ConfirmDialog: React.FC<IDialog> = ({ children, open, onClose, width, height }) => (
  <StyledDialog open={open} onClose={onClose} width={width} height={height}>
    {children}
  </StyledDialog>
);

export default ConfirmDialog;
