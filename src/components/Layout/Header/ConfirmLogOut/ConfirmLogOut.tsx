import React from 'react';
import { DialogActions } from '@mui/material';

import { ConfirmDialog } from 'components/ConfirmDialog';
import ButtonLoader from 'components/ButtonLoader';
import { buttonSpinner } from 'animations';

import { ButtonCancel, ButtonExit } from './styled';

interface IConfirm {
  isConfirmOpen: boolean;
  handleLogOut: () => void;
  cancelLogOut: () => void;
  isLoading?: boolean;
  size?: string;
}

const ConfirmLogOut: React.FC<IConfirm> = ({
  handleLogOut,
  cancelLogOut,
  isConfirmOpen,
  size,
  isLoading,
}) => (
  <ConfirmDialog
    open={isConfirmOpen}
    onClose={cancelLogOut}
    size={size}
    confirmMessage="Log out of this account?"
  >
    <DialogActions>
      <ButtonCancel variant="mediumOutlined" onClick={cancelLogOut}>
        Cancel
      </ButtonCancel>
      <ButtonExit disabled={isLoading} onClick={handleLogOut} variant="mediumContained">
        {isLoading ? <ButtonLoader buttonSpinner={buttonSpinner} /> : 'Exit'}
      </ButtonExit>
    </DialogActions>
  </ConfirmDialog>
);
export default ConfirmLogOut;
