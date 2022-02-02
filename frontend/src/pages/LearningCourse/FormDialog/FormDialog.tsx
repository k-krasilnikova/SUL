import React from 'react';
import Countdown from 'react-countdown';

import { countdownRenderer } from 'utils/helpers/countdownRenderer';
import { close } from 'icons';
import { ConfirmDialog } from 'components/ConfirmDialog';

import {
  MainDialogContentText,
  SecondaryDialogContentText,
  StyledButton,
  StyledDialogTitle,
  WarningDialogContentText,
  CloseButton,
  CloseButtonBox,
  StyledButtonBox,
  CloseIcon,
} from './styled';

interface IFormDialog {
  dialogOpen: boolean;
  handleDialogClose: () => void;
}

const TEST_TIME_REMAINS_IN_SECONDS = 9150000;
const TEST_DATE = Date.now() + TEST_TIME_REMAINS_IN_SECONDS;

const FormDialog: React.FC<IFormDialog> = ({ dialogOpen, handleDialogClose }) => {
  return (
    <ConfirmDialog open={dialogOpen} onClose={handleDialogClose}>
      <CloseButtonBox>
        <CloseButton onClick={handleDialogClose}>
          <CloseIcon alt="close" src={close} />
        </CloseButton>
      </CloseButtonBox>
      <StyledDialogTitle>
        <Countdown date={TEST_DATE} renderer={countdownRenderer} />
      </StyledDialogTitle>
      <MainDialogContentText>
        By clicking on the button, you confirm <br /> the end of the course and proceed to testing
      </MainDialogContentText>
      <WarningDialogContentText>WARNING</WarningDialogContentText>
      <SecondaryDialogContentText>
        It will be impossible to return <br /> to the course materials
      </SecondaryDialogContentText>
      <StyledButtonBox>
        <StyledButton variant="medium">Start the Test</StyledButton>
      </StyledButtonBox>
    </ConfirmDialog>
  );
};

export default FormDialog;
