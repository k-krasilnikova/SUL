import React from 'react';
import { useParams } from 'react-router';

import { ITestResult } from 'types/test';

import TestResult from './TestResult';

const TestResultContainer: React.FC<ITestResult> = ({
  responseData,
  isLoading,
  assessment,
  isFailed,
  progressBarData,
}) => {
  const params = useParams();

  return (
    <TestResult
      assessment={assessment}
      isFailed={isFailed}
      isLoading={isLoading}
      responseData={responseData}
      courseId={params.courseId}
      progressBarData={progressBarData}
    />
  );
};

export default TestResultContainer;
