import { FC } from 'react';

import { ConfirmDialog } from 'components/ConfirmDialog';
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
  size: string;
  testTimeout?: number;
  handleClose: () => void;
  handleStartTest: () => void;
}

const WarningStartTestDialog: FC<IProps> = ({
  isOpened,
  size,
  testTimeout,
  handleClose,
  handleStartTest,
}) => {
  return (
    <>
      {testTimeout && (
        <ConfirmDialog open={isOpened} onClose={handleClose} size={size}>
          <StyledDialogTitle>{convertTestTimeout(testTimeout)}</StyledDialogTitle>
          <MainDialogContentText>
            By clicking on the button, you confirm <br /> the end of the course and proceed to
            testing
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
        </ConfirmDialog>
      )}
    </>
  );
};

export default WarningStartTestDialog;
