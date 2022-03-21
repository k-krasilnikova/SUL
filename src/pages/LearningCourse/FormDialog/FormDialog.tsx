import React from 'react';
import { useParams, useNavigate } from 'react-router';

import { ConfirmDialog } from 'components/ConfirmDialog';
import { PATHS } from 'constants/routes';
import { COURSE_STATUSES } from 'constants/statuses';
import { useGetCourseTest, useStartCourseTest } from 'api/test';
import { useGetClientCourseInfo } from 'api/myCourses';
import { convertTestTimeout } from 'utils/helpers/convertTime';

import {
  MainDialogContentText,
  SecondaryDialogContentText,
  WarningDialogContentText,
  StyledDialogTitle,
  StyledButton,
  StyledDialogActions,
} from './styled';

interface IFormDialog {
  size: string;
  dialogOpen: boolean;
  handleDialogClose: () => void;
}

const FormDialog: React.FC<IFormDialog> = ({ size, dialogOpen, handleDialogClose }) => {
  const params = useParams();
  const navigateTo = useNavigate();

  const { data: clientCourseResponse } = useGetClientCourseInfo(params.courseId);

  const { data } = useGetCourseTest({
    courseId: params.courseId,
    enabled: dialogOpen && clientCourseResponse?.status === COURSE_STATUSES.started,
  });
  const timeout = data && data[0].test.timeout;

  const { mutate: startTestMutate } = useStartCourseTest(params.courseId);

  const handleStartTest = () => {
    startTestMutate(params.courseId);
    navigateTo(`${PATHS.learnCourse}/${params.courseId}/test`);
  };

  return (
    <>
      {timeout && (
        <ConfirmDialog open={dialogOpen} onClose={handleDialogClose} size={size}>
          <StyledDialogTitle>{convertTestTimeout(timeout)}</StyledDialogTitle>
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

export default FormDialog;
