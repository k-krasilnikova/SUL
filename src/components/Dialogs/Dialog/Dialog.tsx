import { FC } from 'react';

import { close } from 'icons';

import { StyledDialog, DialogCloseButton, CloseIcon, DialogBodyWrapper } from './styled';
import { IDialogProps } from '../types';

const Dialog: FC<IDialogProps> = ({ children, open, onClose, size = 'small' }) => (
  <StyledDialog open={open} onClose={onClose} size={size}>
    <DialogCloseButton onClick={onClose}>
      <CloseIcon alt="close" src={close} />
    </DialogCloseButton>
    <DialogBodyWrapper>{children}</DialogBodyWrapper>
  </StyledDialog>
);

export default Dialog;
