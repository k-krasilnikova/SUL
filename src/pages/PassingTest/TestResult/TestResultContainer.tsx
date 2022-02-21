import React from 'react';

import { ITestResult } from 'types/test';
import { TEST_STATUS } from 'constants/test';

import TestResult from './TestResult';

const TestResultContainer: React.FC<ITestResult> = ({ responseData }) => {
  const testStatus = responseData ? responseData.result.testStatus : undefined;
  const isFailed = testStatus === TEST_STATUS.notPassed;
  const PERCENTAGE = 100;
  const percentageValue = responseData ? responseData?.result?.result * PERCENTAGE : undefined;
  return (
    <TestResult isFailed={isFailed} responseData={responseData} percentageValue={percentageValue} />
  );
};

export default TestResultContainer;
