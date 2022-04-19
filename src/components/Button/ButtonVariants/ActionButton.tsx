import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { compose } from 'recompose';

import { IClientCourse } from 'types/clientCourse';
import { VariantProps } from 'types/muiTypes';
import { TCourseLabels } from 'types/course';
import { isProgressCompleted } from 'utils/helpers/isTestEnable';
import transformRoute from 'utils/helpers/paths/transformRoute';
import { PATHS } from 'constants/routes';
import { CourseStatus } from 'enums/courseEnums';

import { withTimeLeft, withDisable } from './HOC';
import { CustomButton } from './styled';

interface IProps {
  courseId?: string;
  status?: CourseStatus;
  label?: TCourseLabels;
  variant?: VariantProps;
  isDisable?: boolean;
  progress?: IClientCourse['progress'];
}

type TOutterProps = {
  timeout: number;
  courseId?: string;
  status?: CourseStatus;
  label?: TCourseLabels;
  progress?: IClientCourse['progress'];
  applyDate?: string;
};

const ActionButton: React.FC<IProps> = ({
  children,
  courseId,
  label,
  isDisable,
  progress,
  status,
  variant,
}) => {
  const navigate = useNavigate();
  const [isContinueTest, setContinueTest] = useState<boolean>(false);
  const handleLearning = () => navigate(transformRoute(PATHS.learnCourse, courseId));
  const handleContinueTest = () => navigate(transformRoute(PATHS.learnCourseTest, courseId));
  useEffect(() => {
    if (progress && status === CourseStatus.testing) {
      setContinueTest(isProgressCompleted(progress));
    }
  }, [progress, status]);

  return (
    <CustomButton
      variant={variant || 'mediumContained'}
      disabled={isDisable}
      onClick={isContinueTest ? handleContinueTest : handleLearning}
    >
      {children || label}
    </CustomButton>
  );
};

export default compose<IProps, TOutterProps>(withTimeLeft, withDisable)(ActionButton);
