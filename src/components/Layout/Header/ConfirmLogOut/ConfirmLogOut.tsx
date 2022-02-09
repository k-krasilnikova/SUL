import React from 'react';

import { ConfirmDialog } from 'components/ConfirmDialog';
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
}

const ConfirmLogOut: React.FC<IConfirm> = ({ handleLogOut, cancelLogOut, isConfirmOpen }) => (
  <ConfirmDialog open={isConfirmOpen} onClose={cancelLogOut}>
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
