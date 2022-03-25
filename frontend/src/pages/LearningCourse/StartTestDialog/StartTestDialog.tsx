import { FC } from 'react';

import Loader from 'components/Loader';
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

import { IContainerProps } from './types';

interface IProps extends IContainerProps {
  isLoading: boolean;
  handleStartTest: () => void;
  testTimeout?: number;
}

const StartTestDialog: FC<IProps> = ({
  isLoading,
  isOpened,
  handleClose,
  handleStartTest,
  testTimeout,
}) => (
  <>
    <ConfirmDialog open={isOpened} onClose={handleClose} size="medium">
      {isLoading ? (
        <Loader color="primary" type="component" />
      ) : (
        <>
          {testTimeout && <StyledDialogTitle>{convertTestTimeout(testTimeout)}</StyledDialogTitle>}
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
        </>
      )}
    </ConfirmDialog>
  </>
);

export default StartTestDialog;
