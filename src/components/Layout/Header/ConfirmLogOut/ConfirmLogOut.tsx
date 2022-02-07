import React from 'react';
import ConfirmDialog from 'components/ConfirmDialog/ConfirmDialog';
import ButtonLoader from 'components/ButtonLoader';
import { buttonSpinner } from 'animations';

import { ConfirmBox, ButtonBox, ConfirmMessage, ButtonCancel, ButtonExit } from './styled';

interface IConfirm {
  isConfirmOpen: boolean;
  handleLogOut: () => void;
  cancelLogOut: () => void;
  status?: string;
}

const ConfirmLogOut: React.FC<IConfirm> = ({
  handleLogOut,
  cancelLogOut,
  isConfirmOpen,
  status,
}) => (
  <ConfirmDialog open={isConfirmOpen} onClose={cancelLogOut}>
    <ConfirmBox>
      <ConfirmMessage>Log out of this account?</ConfirmMessage>
      <ButtonBox>
        <ButtonCancel variant="mediumContained" onClick={cancelLogOut}>
          Cancel
        </ButtonCancel>
        <ButtonExit onClick={handleLogOut} disabled={status === 'loading'}>
          {status === 'loading' ? <ButtonLoader buttonSpinner={buttonSpinner} /> : 'Exit'}
        </ButtonExit>
      </ButtonBox>
    </ConfirmBox>
  </ConfirmDialog>
);

export default ConfirmLogOut;
