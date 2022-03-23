import { FC } from 'react';
import { DialogActions } from '@mui/material';

import { ConfirmDialog } from 'components/ConfirmDialog';
import ButtonLoader from 'components/ButtonLoader';
import { buttonSpinner } from 'animations';

import { ButtonCancel, ButtonExit } from './styled';

interface IProps {
  isOpened: boolean;
  isLoading?: boolean;
  size?: string;
  handleCancelLeavePage: () => void;
  handleLeavePage: () => void;
}

const CONFIRM_MESSAGE = 'Are you sure you want to leave this page?';
const BUTTON_EXIT_TEXT = 'Exit';

const ConfirmLeavePage: FC<IProps> = ({
  isOpened,
  isLoading,
  size,
  handleCancelLeavePage,
  handleLeavePage,
}) => (
  <ConfirmDialog
    open={isOpened}
    onClose={handleCancelLeavePage}
    size={size}
    confirmMessage={CONFIRM_MESSAGE}
  >
    <DialogActions>
      <ButtonCancel variant="mediumOutlined" onClick={handleCancelLeavePage}>
        Stay
      </ButtonCancel>
      <ButtonExit disabled={isLoading} variant="mediumContained" onClick={handleLeavePage}>
        {isLoading ? <ButtonLoader buttonSpinner={buttonSpinner} /> : BUTTON_EXIT_TEXT}
      </ButtonExit>
    </DialogActions>
  </ConfirmDialog>
);
export default ConfirmLeavePage;
