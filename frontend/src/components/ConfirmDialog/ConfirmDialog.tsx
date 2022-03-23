import React from 'react';

import { close } from 'icons';

import { Dialog, DialogBodyWrapper, DialogCloseButton, CloseIcon, ConfirmMessage } from './styled';

interface IDialog {
  children: React.ReactNode;
  open: boolean;
  onClose: () => void;
  size?: string;
  confirmMessage?: string;
}

const ConfirmDialog: React.FC<IDialog> = ({ children, open, onClose, size, confirmMessage }) => (
  <Dialog open={open} onClose={onClose} size={size}>
    <DialogCloseButton onClick={onClose}>
      <CloseIcon alt="close" src={close} />
    </DialogCloseButton>
    <DialogBodyWrapper>
      {confirmMessage && <ConfirmMessage>{confirmMessage}</ConfirmMessage>}
      {children}
    </DialogBodyWrapper>
  </Dialog>
);

export default ConfirmDialog;
