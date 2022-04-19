import { FC } from 'react';

import ConfirmDialog from 'components/Dialogs/ConfirmDialog';
import { CONFIRM_LOGOUT } from 'constants/messages';
import { ButtonLabels } from 'constants/ButtonLabels';

interface IProps {
  isOpened: boolean;
  isLoading: boolean;
  handleCancelLogOut: () => void;
  handleLogOut: () => void;
}

const ConfirmLogOut: FC<IProps> = ({ isOpened, isLoading, handleLogOut, handleCancelLogOut }) => (
  <ConfirmDialog
    open={isOpened}
    isLoading={isLoading}
    confirmMessage={CONFIRM_LOGOUT}
    declineButtonLabel={ButtonLabels.cancel}
    confirmButtonLabel={ButtonLabels.exit}
    onClose={handleCancelLogOut}
    handleConfirm={handleLogOut}
    handleDecline={handleCancelLogOut}
  />
);

export default ConfirmLogOut;
