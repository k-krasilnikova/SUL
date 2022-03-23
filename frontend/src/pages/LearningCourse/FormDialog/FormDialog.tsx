import React from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';

import { close } from 'icons';
import { ConfirmDialog } from 'components/ConfirmDialog';
import { PATHS } from 'constants/routes';
import { useStartCourseTest } from 'api/test';
import { convertTestTimeout } from 'utils/helpers/convertTime';
import useGetTestTime from 'api/test/getTestTime';
import Loader from 'components/Loader';

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
  const { data: testTimeout } = useGetTestTime(params.courseId);

  const { mutate: startTestMutate } = useStartCourseTest(params.courseId);

  const handleStartTest = () => {
    startTestMutate(params.courseId);
  };

  return (
    <ConfirmDialog open={dialogOpen} onClose={handleDialogClose}>
      <DialogBox>
        <CloseButtonBox>
          <CloseButton onClick={handleDialogClose}>
            <CloseIcon alt="close" src={close} />
          </CloseButton>
        </CloseButtonBox>
        {testTimeout ? (
          <StyledDialogTitle>{convertTestTimeout(testTimeout)}</StyledDialogTitle>
        ) : (
          <Loader color="primary" />
        )}
        <MainDialogContentText>
          By clicking on the button, you confirm <br /> the end of the course and proceed to testing
        </MainDialogContentText>
        <WarningDialogContentText>WARNING</WarningDialogContentText>
        <SecondaryDialogContentText>
          It will be impossible to return <br /> to the course materials
        </SecondaryDialogContentText>
        <StyledButtonBox>
          <Link to={`${PATHS.learnCourse}/${params.courseId}/test`}>
            <StyledButton variant="medium" onClick={handleStartTest}>
              Start the Test
            </StyledButton>
          </Link>
        </StyledButtonBox>
      </DialogBox>
    </ConfirmDialog>
  );
};

export default FormDialog;
