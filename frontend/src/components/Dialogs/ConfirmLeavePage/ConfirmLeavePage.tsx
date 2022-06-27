import { FC } from 'react';

import {
  CONFIRM_LEAVE_CREATOR_PAGE,
  CONFIRM_LEAVE_EDITOR_PAGE,
  CONFIRM_LEAVE_PAGE,
} from 'constants/messages';
import { ButtonLabels } from 'constants/ButtonLabels';
import { ConfirmDialog } from 'components/Dialogs';
import { IConfirmLeavePageProps } from 'components/Dialogs/types';

const ConfirmLeavePage: FC<IConfirmLeavePageProps> = ({
  isOpened,
  isLoading,
  handleCancelLeavePage,
  handleLeavePage,
  isCourseEditor,
  isCourseCreator,
}) => (
  <ConfirmDialog
    open={isOpened}
    confirmMessage={
      isCourseEditor
        ? CONFIRM_LEAVE_EDITOR_PAGE
        : isCourseCreator
        ? CONFIRM_LEAVE_CREATOR_PAGE
        : CONFIRM_LEAVE_PAGE
    }
    declineButtonLabel={ButtonLabels.stay}
    confirmButtonLabel={ButtonLabels.exit}
    isLoading={isLoading}
    handleConfirm={handleLeavePage}
    handleDecline={handleCancelLeavePage}
    onClose={handleCancelLeavePage}
  />
);

export default ConfirmLeavePage;
