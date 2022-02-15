import React from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';

import { close } from 'icons';
import { ConfirmDialog } from 'components/ConfirmDialog';
import { PATHS } from 'constants/routes';

import {
  DialogBox,
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

const FormDialog: React.FC<IFormDialog> = ({ dialogOpen, handleDialogClose }) => {
  const params = useParams();
  return (
    <ConfirmDialog open={dialogOpen} onClose={handleDialogClose}>
      <DialogBox>
        <CloseButtonBox>
          <CloseButton onClick={handleDialogClose}>
            <CloseIcon alt="close" src={close} />
          </CloseButton>
        </CloseButtonBox>
        <StyledDialogTitle>2 h 48 min 48 sec left</StyledDialogTitle>
        <MainDialogContentText>
          By clicking on the button, you confirm <br /> the end of the course and proceed to testing
        </MainDialogContentText>
        <WarningDialogContentText>WARNING</WarningDialogContentText>
        <SecondaryDialogContentText>
          It will be impossible to return <br /> to the course materials
        </SecondaryDialogContentText>
        <StyledButtonBox>
          <Link to={`${PATHS.learnCourse}/${params.courseId}/test`}>
            <StyledButton variant="medium">Start the Test</StyledButton>
          </Link>
        </StyledButtonBox>
      </DialogBox>
    </ConfirmDialog>
  );
};

export default FormDialog;
