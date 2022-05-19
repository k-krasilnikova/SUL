import { FC, BaseSyntheticEvent, useState } from 'react';

import { ITestStepContainerProps } from 'pages/CourseEditor/types';
import useGetAdminTest from 'api/admin/getAdminTest';

import TestStep from './TestStep';

const TestStepContainer: FC<ITestStepContainerProps> = ({ formik, courseData }) => {
  const [isCurrentAnswer, setCurrentAnswer] = useState<string>('Answer');

  const handleChangeAnswer = ({ target }: BaseSyntheticEvent) => {
    setCurrentAnswer(target.value);
  };

  const { data: testResponse, isLoading: isTestLoading } = useGetAdminTest(courseData?.test);

  console.log({ testResponse });

  return (
    <TestStep
      formik={formik}
      isCurrentAnswer={isCurrentAnswer}
      handleChangeAnswer={handleChangeAnswer}
      testResponse={testResponse}
      isTestLoading={isTestLoading}
    />
  );
};

export default TestStepContainer;
