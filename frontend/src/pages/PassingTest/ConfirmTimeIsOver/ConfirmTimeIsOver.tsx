import { FC } from 'react';

import { TIME_FOR_TEST_EXPIRED } from 'constants/messages';
import { ButtonLabels } from 'constants/ButtonLabels';
import { ConfirmDialog } from 'components/Dialogs';

import { IConfirmTimeIsOverProps } from './types';

const ConfirmTimeIsOver: FC<IConfirmTimeIsOverProps> = ({ isOpened, handleClose }) => (
  <ConfirmDialog
    open={isOpened}
    confirmMessage={TIME_FOR_TEST_EXPIRED}
    confirmButtonLabel={ButtonLabels.ok}
    onClose={handleClose}
    handleConfirm={handleClose}
  />
);

export default ConfirmTimeIsOver;
