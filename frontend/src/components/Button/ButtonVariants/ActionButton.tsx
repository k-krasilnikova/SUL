import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { compose } from 'recompose';

import { ClientCourse } from 'types/clientCourse';
import { VariantProps } from 'types/muiTypes';
import { isProgressCompleted } from 'utils/helpers/isTestEnable';
import transformRoute from 'utils/helpers/paths/transformRoute';
import { PATHS } from 'constants/routes';
import { COURSE_STATUSES } from 'constants/statuses';

import { withTimeLeft, withDisable } from './HOC';
import { CustomButton } from './styled';

interface IProps {
  label: string;
  courseId: string;
  status: string;
  variant?: VariantProps;
  isDisable?: boolean;
  progress?: ClientCourse['progress'];
}

type TOutterProps = {
  label: string;
  status: string;
  courseId: string;
  timeout: number;
  progress?: ClientCourse['progress'];
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
    if (progress && status === COURSE_STATUSES.testing) {
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
