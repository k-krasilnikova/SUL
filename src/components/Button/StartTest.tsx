import React, { useState } from 'react';
import { ClientCourse } from 'types/clientCourse';
import { MyButton } from './styled';
import withTest from './withTest';

interface IProps {
  label: string;
  isTest?: boolean;
}

type TOutterProps = {
  label: string;
  status: string;
  progress: ClientCourse['progress'];
  applyDate?: string;
  courseId: string;
};

const StartTestButton: React.FC<IProps> = ({ label, isTest }) => {
  const [isOpenForm, setOpenForm] = useState(false);
  const handleStartTest = () => setOpenForm(true);

  if (isOpenForm) {
    console.log('start TEST !!');
  }

  return (
    <MyButton variant="mediumContained" disabled={isTest} onClick={handleStartTest}>
      {label}
    </MyButton>
  );
};

export default withTest<TOutterProps>(StartTestButton);
