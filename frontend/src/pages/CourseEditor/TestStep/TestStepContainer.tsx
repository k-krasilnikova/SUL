import { FC, BaseSyntheticEvent, useState } from 'react';
import { useNavigate } from 'react-router';

import { ITestStepContainerProps } from 'pages/CourseEditor/types';

import TestStep from './TestStep';

const TestStepContainer: FC<ITestStepContainerProps> = ({ formik }) => {
  const [isCurrentAnswer, setCurrentAnswer] = useState<string>('Answer');
  const navigate = useNavigate();

  const handleBackButtonClick = (event: BaseSyntheticEvent) => {
    event.preventDefault();
    navigate(-1);
  };

  const handleChangeAnswer = (event: BaseSyntheticEvent) => {
    setCurrentAnswer(event.target.value);
  };

  return (
    <TestStep
      formik={formik}
      handleBackButtonClick={handleBackButtonClick}
      isCurrentAnswer={isCurrentAnswer}
      handleChangeAnswer={handleChangeAnswer}
    />
  );
};

export default TestStepContainer;
