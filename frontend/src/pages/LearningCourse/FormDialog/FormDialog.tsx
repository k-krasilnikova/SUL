import React from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';

import { close } from 'icons';
import { ConfirmDialog } from 'components/ConfirmDialog';
import { PATHS } from 'constants/routes';
import { COURSE_STATUSES } from 'constants/statuses';
import { useGetCourseTest, useStartCourseTest } from 'api/test';
import { convertTestTimeout } from 'utils/helpers/convertTime';

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
  courseStatus: string;
  courseId: string;
}

const FormDialog: React.FC<IFormDialog> = ({
  dialogOpen,
  handleDialogClose,
  courseStatus,
  courseId,
}) => {
  const params = useParams();
  const { data } = useGetCourseTest({
    courseId: params.courseId,
    enabled: dialogOpen && courseStatus === COURSE_STATUSES.started,
  });
  const timeout = data && data[0].test.timeout;

  const { mutate } = useStartCourseTest(params.courseId);

  const handleStartTest = () => {
    if (courseStatus === COURSE_STATUSES.started) {
      mutate(courseId);
    }
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
