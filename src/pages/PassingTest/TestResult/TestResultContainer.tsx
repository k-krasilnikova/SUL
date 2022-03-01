import React from 'react';
import { useParams } from 'react-router';

import { ITestResult } from 'types/test';
import { PERCENTAGE, TEST_STATUS } from 'constants/test';
import useFinishClientCourse from 'api/myCourses/finishClientCourse';

import TestResult from './TestResult';

const TestResultContainer: React.FC<ITestResult> = ({ responseData }) => {
  const params = useParams();
  const { mutate } = useFinishClientCourse(params.courseId);

  const handleFinishCourse = () => {
    mutate(params.courseId);
  };

  const testStatus = responseData ? responseData.result.testStatus : undefined;
  const isFailed = testStatus === TEST_STATUS.notPassed;
  const percentageValue = responseData ? responseData?.result?.result * PERCENTAGE : undefined;

  return (
    <TestResult
      isFailed={isFailed}
      responseData={responseData}
      percentageValue={percentageValue}
      handleFinishCourse={handleFinishCourse}
    />
  );
};

export default TestResultContainer;
