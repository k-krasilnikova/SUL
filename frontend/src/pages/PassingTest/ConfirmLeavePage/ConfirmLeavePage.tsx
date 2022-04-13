import { FC } from 'react';
import { DialogActions } from '@mui/material';

import ConfirmDialog from 'components/ConfirmDialog';
import { CONFIRM_MESSAGE } from 'constants/messages';
import { ButtonLabels } from 'constants/ButtonLabels';
import ButtonLoader from 'components/ButtonLoader';
import { buttonSpinner } from 'animations';

import { ButtonCancel, ButtonExit } from './styled';

interface IProps {
  isOpened: boolean;
  handleCancelLeavePage: () => void;
  handleLeavePage: () => void;
  isLoading?: boolean;
  size?: string;
}

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
        {ButtonLabels.stay}
      </ButtonCancel>
      <ButtonExit disabled={isLoading} variant="mediumContained" onClick={handleLeavePage}>
        {isLoading ? <ButtonLoader buttonSpinner={buttonSpinner} /> : ButtonLabels.exit}
      </ButtonExit>
    </DialogActions>
  </ConfirmDialog>
);
export default ConfirmLeavePage;
