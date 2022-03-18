import React, { useState } from 'react';
import { MyButton } from './styled';
import withTest from './withTest';

interface IProps {
  label: string;
  isTest: boolean;
}

const ActionButton: React.FC<IProps> = ({ label, isTest }) => {
  const [isOpenForm, setOpenForm] = useState(false);
  const handleLearninig = () => {};
  const handleStartTest = () => setOpenForm(true);

  if (isOpenForm) {
    console.log('start TEST !!');
  }

  return (
    <MyButton variant="mediumContained" onClick={isTest ? handleStartTest : handleLearninig}>
      {label}
    </MyButton>
  );
};

export default withTest<IProps>(ActionButton);
