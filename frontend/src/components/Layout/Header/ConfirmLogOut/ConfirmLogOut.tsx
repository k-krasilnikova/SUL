import React from 'react';
import ConfirmDialog from 'components/ConfirmDialog/ConfirmDialog';

import { ConfirmBox, ButtonBox, ConfirmMessage, ButtonCancel, ButtonExit } from './styled';

interface IConfirm {
  showConfirm: boolean;
  handleLogOut: () => void;
  cancelLogOut: () => void;
}

const ConfirmLogOut: React.FC<IConfirm> = ({ handleLogOut, cancelLogOut, showConfirm }) => (
  <ConfirmDialog open={showConfirm} onClose={cancelLogOut}>
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
