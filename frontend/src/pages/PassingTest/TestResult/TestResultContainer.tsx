import React from 'react';

import { ITestResult } from 'types/test';
import { SKILLS } from 'constants/test';

import TestResult from './TestResult';

const TEST_STATUSES = {
  completed: 'completed',
  failed: 'failed',
};

const STATUS = TEST_STATUSES.completed;

const TestResultContainer: React.FC<ITestResult> = ({ status = STATUS }) => {
  const isFailed = status === TEST_STATUSES.failed;

  return <TestResult isFailed={isFailed} skills={SKILLS} />;
};

export default TestResultContainer;
