import React from 'react';
import ConfirmDialog from 'components/ConfirmDialog/ConfirmDialog';

import { ConfirmBox, ButtonBox, ConfirmMessage, ButtonCancel, ButtonExit } from './styled';

interface IConfirm {
  isConfirmOpen: boolean;
  handleLogOut: () => void;
  cancelLogOut: () => void;
}

const ConfirmLogOut: React.FC<IConfirm> = ({ handleLogOut, cancelLogOut, isConfirmOpen }) => (
  <ConfirmDialog open={isConfirmOpen} onClose={cancelLogOut}>
    <ConfirmBox>
      <ConfirmMessage>Log out of this account?</ConfirmMessage>
      <ButtonBox>
        <ButtonCancel variant="mediumContained" onClick={cancelLogOut}>
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
