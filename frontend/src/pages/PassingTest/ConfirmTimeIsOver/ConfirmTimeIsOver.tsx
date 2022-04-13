import { FC } from 'react';
import { DialogActions } from '@mui/material';

import ConfirmDialog from 'components/ConfirmDialog';
import Button from 'components/Button';
import { ButtonLabels } from 'constants/ButtonLabels';

interface IProps {
  isOpened: boolean;
  handleClose: () => void;
  size?: string;
}

const CONFIRM_MESSAGE =
  'The time allotted for passing the test has expired. The next attempt to pass the test will be available in 1 week';

const ConfirmTimeIsOver: FC<IProps> = ({ isOpened, size, handleClose }) => (
  <ConfirmDialog confirmMessage={CONFIRM_MESSAGE} open={isOpened} onClose={handleClose} size={size}>
    <DialogActions>
      <Button variant="mediumContained" onClick={handleClose}>
        {ButtonLabels.ok}
      </Button>
    </DialogActions>
  </ConfirmDialog>
);

export default ConfirmTimeIsOver;
