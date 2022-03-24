import React from 'react';
import { useNavigate } from 'react-router';
import { compose } from 'recompose';

import { PATHS } from 'constants/routes';

import { ClientCourse } from 'types/clientCourse';
import withDisable from 'components/Button/HOC/withDisable';

import withTest from './HOC/withTest';
import withTimeLeft from './HOC/withTimeLeft';
import { CustomButton } from './styled';

interface IProps {
  label: string;
  courseId: string;
  isTest?: boolean;
  isDisable?: boolean;
}

type TOutterProps = {
  label: string;
  status: string;
  courseId: string;
  timeout: number;
  progress?: ClientCourse['progress'];
  applyDate?: string;
};

const ActionButton: React.FC<IProps> = ({ children, courseId, label, isTest, isDisable }) => {
  const navigate = useNavigate();
  const handleLearninig = () => navigate(`${PATHS.learnCourse}/${courseId}`);
  const handleStartTest = () => navigate(`${PATHS.learnCourse}/${courseId}/test`);

  return (
    <CustomButton
      variant="mediumContained"
      disabled={isDisable}
      onClick={isTest ? handleStartTest : handleLearninig}
    >
      {children || label}
    </CustomButton>
  );
};

export default compose<IProps, TOutterProps>(withTest, withTimeLeft, withDisable)(ActionButton);
