import React from 'react';
import Countdown from 'react-countdown';

import { countdownRenderer } from 'utils/helpers/countdownRenderer';

import {
  StyledDialog,
  MainDialogContentText,
  SecondaryDialogContentText,
  StyledButton,
  StyledDialogActions,
  StyledDialogContent,
  StyledDialogTitle,
  WarningDialogContentText,
} from './styled';

interface IFormDialog {
  dialogOpen: boolean;
  handleDialogClose: () => void;
}

const TEST_TIME_REMAINS_IN_SECONDS = 9150000;

const FormDialog: React.FC<IFormDialog> = ({ dialogOpen, handleDialogClose }) => {
  return (
    <StyledDialog open={dialogOpen} onClose={handleDialogClose}>
      <StyledDialogTitle>
        <Countdown date={Date.now() + TEST_TIME_REMAINS_IN_SECONDS} renderer={countdownRenderer} />
      </StyledDialogTitle>
      <StyledDialogContent>
        <MainDialogContentText>
          By clicking on the button, you confirm <br /> the end of the course and proceed to testing
        </MainDialogContentText>
        <WarningDialogContentText>WARNING</WarningDialogContentText>
        <SecondaryDialogContentText>
          It will be impossible to return <br /> to the course materials
        </SecondaryDialogContentText>
      </StyledDialogContent>
      <StyledDialogActions>
        <StyledButton variant="medium" onClick={handleDialogClose}>
          Start the Test
        </StyledButton>
      </StyledDialogActions>
    </StyledDialog>
  );
};

export default FormDialog;
