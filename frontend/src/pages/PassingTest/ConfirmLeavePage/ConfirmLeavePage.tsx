import { FC } from 'react';
import { DialogActions } from '@mui/material';

import { buttonSpinner } from 'animations';
import ConfirmDialog from 'components/ConfirmDialog';
import { CONFIRM_MESSAGE } from 'constants/messages';
import { ButtonLabels } from 'constants/ButtonLabels';
import ButtonLoader from 'components/ButtonLoader';

import { ButtonCancel, ButtonExit } from './styled';

interface IProps {
  isOpened: boolean;
  showDialog: boolean;
  handleCancelLeavePage: () => void;
  handleLeavePage: () => void;
  isLoading?: boolean;
  size?: string;
}

const ConfirmLeavePage: FC<IProps> = ({
  isOpened,
  showDialog,
  isLoading,
  size,
  handleCancelLeavePage,
  handleLeavePage,
}) => (
  <ConfirmDialog
    open={showDialog || isOpened}
    onClose={handleCancelLeavePage}
    size={size}
    confirmMessage={CONFIRM_MESSAGE}
  >
    <DialogActions>
      <ButtonCancel variant="mediumOutlined" onClick={handleCancelLeavePage}>
        {ButtonLabels.stay}
      </ButtonCancel>
      <ButtonExit disabled={isLoading} variant="mediumContained" onClick={handleLeavePage}>
        {isLoading ? <ButtonLoader buttonSpinner={buttonSpinner} /> : ButtonLabels.exit}
      </ButtonExit>
    </DialogActions>
  </ConfirmDialog>
);
export default ConfirmLeavePage;
