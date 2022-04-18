import { FC } from 'react';

import { buttonSpinner } from 'animations';
import { Dialog } from 'components/Dialogs';
import Button from 'components/Button';
import ButtonLoader from 'components/ButtonLoader';

import { ConfirmMessage, StyledDialogActions } from './styled';
import { IConfirmDialogProps } from '../types';

const ConfirmDialog: FC<IConfirmDialogProps> = ({
  isLoading,
  confirmMessage,
  confirmButtonLabel,
  declineButtonLabel,
  handleConfirm,
  handleDecline,
  ...dialogProps
}) => (
  <Dialog {...dialogProps}>
    <ConfirmMessage>{confirmMessage}</ConfirmMessage>
    <StyledDialogActions>
      {declineButtonLabel && (
        <Button variant="mediumOutlined" onClick={handleDecline}>
          {declineButtonLabel}
        </Button>
      )}
      <Button disabled={isLoading} variant="mediumContained" onClick={handleConfirm}>
        {isLoading ? <ButtonLoader buttonSpinner={buttonSpinner} /> : confirmButtonLabel}
      </Button>
    </StyledDialogActions>
  </Dialog>
);

export default ConfirmDialog;
