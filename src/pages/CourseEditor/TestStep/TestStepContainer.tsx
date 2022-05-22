import { FC } from 'react';

import { ITestStepContainerProps } from 'pages/CourseEditor/types';
import useGetAdminTest from 'api/admin/getAdminTest';

import TestStep from './TestStep';

const TestStepContainer: FC<ITestStepContainerProps> = ({ formik, courseData }) => {
  const { data: testResponse, isLoading: isTestLoading } = useGetAdminTest(courseData?.test);

  console.log({ testResponse });

  return <TestStep formik={formik} testResponse={testResponse} isTestLoading={isTestLoading} />;
};

export default TestStepContainer;
