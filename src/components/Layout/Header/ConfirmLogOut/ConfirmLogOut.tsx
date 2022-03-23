import { FC } from 'react';
import { DialogActions } from '@mui/material';

import { ConfirmDialog } from 'components/ConfirmDialog';
import ButtonLoader from 'components/ButtonLoader';
import { buttonSpinner } from 'animations';

import { ButtonCancel, ButtonExit } from './styled';

interface IProps {
  isOpened: boolean;
  handleCancelLogOut: () => void;
  handleLogOut: () => void;
  isLoading?: boolean;
  size?: string;
}

const CONFIRM_MESSAGE = 'Log out of this account?';
const BUTTON_EXIT_TEXT = 'Exit';

const ConfirmLogOut: FC<IProps> = ({
  isOpened,
  isLoading,
  size,
  handleLogOut,
  handleCancelLogOut,
}) => (
  <ConfirmDialog
    confirmMessage={CONFIRM_MESSAGE}
    open={isOpened}
    onClose={handleCancelLogOut}
    size={size}
  >
    <DialogActions>
      <ButtonCancel variant="mediumOutlined" onClick={handleCancelLogOut}>
        Cancel
      </ButtonCancel>
      <ButtonExit disabled={isLoading} variant="mediumContained" onClick={handleLogOut}>
        {isLoading ? <ButtonLoader buttonSpinner={buttonSpinner} /> : BUTTON_EXIT_TEXT}
      </ButtonExit>
    </DialogActions>
  </ConfirmDialog>
);
export default ConfirmLogOut;
