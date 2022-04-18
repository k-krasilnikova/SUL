import { FC } from 'react';

import { CONFIRM_LEAVE_PAGE } from 'constants/messages';
import { ButtonLabels } from 'constants/ButtonLabels';
import { ConfirmDialog } from 'components/Dialogs';

import { IConfirmLeavePageProps } from './types';

const ConfirmLeavePage: FC<IConfirmLeavePageProps> = ({
  isOpened,
  isLoading,
  handleCancelLeavePage,
  handleLeavePage,
}) => (
  <ConfirmDialog
    open={isOpened}
    confirmMessage={CONFIRM_LEAVE_PAGE}
    declineButtonLabel={ButtonLabels.stay}
    confirmButtonLabel={ButtonLabels.exit}
    isLoading={isLoading}
    handleConfirm={handleLeavePage}
    handleDecline={handleCancelLeavePage}
    onClose={handleCancelLeavePage}
  />
);
export default ConfirmLeavePage;
