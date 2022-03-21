import React from 'react';
import { DialogActions } from '@mui/material';

import { ConfirmDialog } from 'components/ConfirmDialog';
import { Button } from 'components/Button';

interface IConfirmTimeIsOver {
  size?: string;
  isOpened: boolean;
  handleClose: () => void;
}

const ConfirmTimeIsOver: React.FC<IConfirmTimeIsOver> = ({ size, isOpened, handleClose }) => (
  <ConfirmDialog
    open={isOpened}
    onClose={handleClose}
    size={size}
    confirmMessage="The time allotted for passing the test has expired. The next attempt to pass the test will be
  available in 1 week"
  >
    <DialogActions>
      <Button variant="mediumContained" onClick={handleClose}>
        OK
      </Button>
    </DialogActions>
  </ConfirmDialog>
);

export default ConfirmTimeIsOver;
