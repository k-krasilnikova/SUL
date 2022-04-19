import { FC } from 'react';

import { Dialog } from 'components/Dialogs';
import { convertTestTimeout } from 'utils/helpers/convertTime';

import {
  MainDialogContentText,
  SecondaryDialogContentText,
  WarningDialogContentText,
  StyledDialogTitle,
  StyledButton,
  StyledDialogActions,
} from './styled';

interface IProps {
  isOpened: boolean;
  handleClose: () => void;
  handleStartTest: () => void;
  testTimeout?: number;
}

const StartTestDialog: FC<IProps> = ({ isOpened, testTimeout, handleClose, handleStartTest }) => (
  <>
    {testTimeout && (
      <Dialog open={isOpened} onClose={handleClose} size="medium">
        <StyledDialogTitle>{convertTestTimeout(testTimeout)}</StyledDialogTitle>
        <MainDialogContentText>
          By clicking on the button, you confirm <br /> the end of the course and proceed to testing
        </MainDialogContentText>
        <WarningDialogContentText>WARNING</WarningDialogContentText>
        <SecondaryDialogContentText>
          It will be impossible to return <br /> to the course materials
        </SecondaryDialogContentText>
        <StyledDialogActions>
          <StyledButton variant="medium" onClick={handleStartTest}>
            Start the Test
          </StyledButton>
        </StyledDialogActions>
      </Dialog>
    )}
  </>
);

export default StartTestDialog;
