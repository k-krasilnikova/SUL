import React from 'react';
import { useNavigate } from 'react-router';
import { compose } from 'recompose';

import { PATHS } from 'constants/routes';

import { ClientCourse } from 'types/clientCourse';
import { MyButton } from './styled';
import withDisable from './withDisable';
import withTest from './withTest';
import withTimeLeft from './withTimeLeft';

interface IProps {
  label: string;
  courseId: string;
  isTest?: boolean;
  isDisable?: boolean;
}

type TOutterProps = {
  label: string;
  status: string;
  progress?: ClientCourse['progress'];
  applyDate?: string;
  courseId: string;
  timeout: number;
};

const ActionButton: React.FC<IProps> = ({ children, courseId, label, isTest, isDisable }) => {
  const navigate = useNavigate();
  const handleLearninig = () => navigate(`${PATHS.learnCourse}/${courseId}`);
  const handleStartTest = () => navigate(`${PATHS.learnCourse}/${courseId}/test`);

  return (
    <MyButton
      variant="mediumContained"
      disabled={isDisable}
      onClick={isTest ? handleStartTest : handleLearninig}
    >
      {children || label}
    </MyButton>
  );
};

export default compose<IProps, TOutterProps>(withTest, withTimeLeft, withDisable)(ActionButton);
