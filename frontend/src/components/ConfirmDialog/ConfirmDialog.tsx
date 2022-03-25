import { FC, ReactNode } from 'react';

import { close } from 'icons';

import { Dialog, DialogBodyWrapper, DialogCloseButton, CloseIcon, ConfirmMessage } from './styled';

interface IProps {
  children: ReactNode;
  open: boolean;
  onClose: () => void;
  size?: string;
  confirmMessage?: string;
}

const ConfirmDialog: FC<IProps> = ({ children, open, onClose, size, confirmMessage }) => (
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
