import React from 'react';
import { useParams } from 'react-router';

import TestResult from './TestResult';
import { ITestResultPageProps } from './types';

const TestResultContainer: React.FC<ITestResultPageProps> = ({
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
