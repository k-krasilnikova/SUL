import { PATHS } from 'constants/routes';
import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { compose } from 'recompose';
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
  progress: ClientCourse['progress'];
  applyDate?: string;
  courseId: string;
};

const ActionButton: React.FC<IProps> = ({ children, courseId, label, isTest, isDisable }) => {
  const navigate = useNavigate();
  const [isOpenForm, setOpenForm] = useState(false);
  const handleLearninig = () => navigate(`${PATHS.learnCourse}/${courseId}`);
  const handleStartTest = () => setOpenForm(true);

  if (isOpenForm) {
    console.log('start TEST !!');
  }

  return (
    <MyButton
      variant="mediumContained"
      disabled={isDisable}
      onClick={isTest ? handleLearninig : handleStartTest}
    >
      {children || label}
    </MyButton>
  );
};

export default compose<IProps, TOutterProps>(withTest, withTimeLeft, withDisable)(ActionButton);
