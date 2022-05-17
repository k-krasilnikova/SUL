import { FC, BaseSyntheticEvent, useState } from 'react';

import { ITestStepContainerProps } from 'pages/CourseEditor/types';

import TestStep from './TestStep';

const TestStepContainer: FC<ITestStepContainerProps> = ({ formik }) => {
  const [isCurrentAnswer, setCurrentAnswer] = useState<string>('Answer');

  const handleChangeAnswer = ({ target }: BaseSyntheticEvent) => {
    setCurrentAnswer(target.value);
  };

  return (
    <TestStep
      formik={formik}
      isCurrentAnswer={isCurrentAnswer}
      handleChangeAnswer={handleChangeAnswer}
    />
  );
};

export default TestStepContainer;
