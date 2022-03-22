import React from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';

import { close } from 'icons';
import { ConfirmDialog } from 'components/ConfirmDialog';
import { PATHS } from 'constants/routes';
import { COURSE_STATUSES } from 'constants/statuses';
import { useGetCourseTest, useStartCourseTest } from 'api/test';
import { convertTestTimeout } from 'utils/helpers/convertTime';
import { useGetClientCourseInfo } from 'api/myCourses';

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

  const { data: clientCourseResponse } = useGetClientCourseInfo(params.courseId);

  const { data } = useGetCourseTest({
    courseId: params.courseId,
    enabled: dialogOpen && clientCourseResponse?.status === COURSE_STATUSES.started,
  });
  const timeout = data && data[0].test.timeout;

  const { mutate: startTestMutate } = useStartCourseTest(params.courseId);

  const handleStartTest = () => {
    startTestMutate(params.courseId);
  };

  return (
    <>
      {timeout && (
        <ConfirmDialog open={dialogOpen} onClose={handleDialogClose}>
          <DialogBox>
            <CloseButtonBox>
              <CloseButton onClick={handleDialogClose}>
                <CloseIcon alt="close" src={close} />
              </CloseButton>
            </CloseButtonBox>
            <StyledDialogTitle>{convertTestTimeout(timeout)}</StyledDialogTitle>
            <MainDialogContentText>
              By clicking on the button, you confirm <br /> the end of the course and proceed to
              testing
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
      )}
    </>
  );
};

export default FormDialog;
