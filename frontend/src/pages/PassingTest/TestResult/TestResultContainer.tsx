import React from 'react';
import { useParams } from 'react-router';

import { ITestResult } from 'types/test';
import { PERCENTAGE, TEST_STATUS } from 'constants/test';

import TestResult from './TestResult';

const TestResultContainer: React.FC<ITestResult> = ({ responseData }) => {
  const params = useParams();

  const testStatus = responseData ? responseData.result.testStatus : undefined;
  const isFailed = testStatus === TEST_STATUS.notPassed;
  const assessmentRequired = testStatus === TEST_STATUS.assessment;
  const percentageValue = responseData ? responseData?.result?.result * PERCENTAGE : undefined;

  return (
    <TestResult
      assessment={assessmentRequired}
      isFailed={isFailed}
      responseData={responseData}
      percentageValue={percentageValue}
      courseId={params.courseId}
    />
  );
};

export default TestResultContainer;
