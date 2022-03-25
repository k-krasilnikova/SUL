import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { compose } from 'recompose';

import { PATHS } from 'constants/routes';

import { ClientCourse } from 'types/clientCourse';
import withDisable from 'components/Button/HOC/withDisable';

import { isProgressCompleted } from 'utils/helpers/isTestEnable';
import { COURSE_STATUSES } from 'constants/statuses';
import withTimeLeft from './HOC/withTimeLeft';
import { CustomButton } from './styled';

interface IProps {
  label: string;
  courseId: string;
  status: string;
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
}) => {
  const navigate = useNavigate();
  const [isContinueTest, setContinue] = useState<boolean>(false);
  const handleLearninig = () => navigate(`${PATHS.learnCourse}/${courseId}`);
  const handleContinueTest = () => navigate(`${PATHS.learnCourse}/${courseId}/test`);

  useEffect(() => {
    if (progress && status === COURSE_STATUSES.testing) {
      setContinue(isProgressCompleted(progress));
    }
  }, [progress, status]);

  return (
    <CustomButton
      variant="mediumContained"
      disabled={isDisable}
      onClick={isContinueTest ? handleContinueTest : handleLearninig}
    >
      {children || label}
    </CustomButton>
  );
};

export default compose<IProps, TOutterProps>(withTimeLeft, withDisable)(ActionButton);
