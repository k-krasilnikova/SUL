import React from 'react';

import ConfirmDialog from 'components/ConfirmDialog/ConfirmDialog';
import { close } from 'icons';

import {
  ConfirmBox,
  ButtonBox,
  ConfirmMessage,
  ButtonCancel,
  ButtonExit,
  CloseButtonBox,
  CloseButton,
  CloseIcon,
} from './styled';

interface IConfirm {
  isConfirmOpen: boolean;
  handleLogOut: () => void;
  cancelLogOut: () => void;
  size?: string;
}

const ConfirmLogOut: React.FC<IConfirm> = ({ handleLogOut, cancelLogOut, isConfirmOpen, size }) => (
  <ConfirmDialog open={isConfirmOpen} onClose={cancelLogOut} size={size}>
    <ConfirmBox>
      <CloseButtonBox>
        <CloseButton onClick={cancelLogOut}>
          <CloseIcon alt="close" src={close} />
        </CloseButton>
      </CloseButtonBox>
      <ConfirmMessage>Log out of this account?</ConfirmMessage>
      <ButtonBox>
        <ButtonCancel variant="mediumOutlined" onClick={cancelLogOut}>
          Cancel
        </ButtonCancel>
        <ButtonExit variant="mediumContained" onClick={handleLogOut}>
          Exit
        </ButtonExit>
      </ButtonBox>
    </ConfirmBox>
  </ConfirmDialog>
);

export default ConfirmLogOut;
