import React from 'react';
import { DialogActions } from '@mui/material';

import { ConfirmDialog } from 'components/ConfirmDialog';
import ButtonLoader from 'components/ButtonLoader';
import { buttonSpinner } from 'animations';

import { ButtonCancel, ButtonExit } from './styled';

interface IConfirm {
  isConfirmOpen: boolean;
  isLoading?: boolean;
  size?: string;
  cancelLeavePage: () => void;
  handleLeavePage: () => void;
}

const ConfirmLeavePage: React.FC<IConfirm> = ({
  isConfirmOpen,
  isLoading,
  size,
  cancelLeavePage,
  handleLeavePage,
}) => (
  <ConfirmDialog
    open={isConfirmOpen}
    onClose={cancelLeavePage}
    size={size}
    confirmMessage="Are you sure you want to leave this page?"
  >
    <DialogActions>
      <ButtonCancel variant="mediumOutlined" onClick={cancelLeavePage}>
        Stay
      </ButtonCancel>
      <ButtonExit disabled={isLoading} variant="mediumContained" onClick={handleLeavePage}>
        {isLoading ? <ButtonLoader buttonSpinner={buttonSpinner} /> : 'Exit'}
      </ButtonExit>
    </DialogActions>
  </ConfirmDialog>
);
export default ConfirmLeavePage;
