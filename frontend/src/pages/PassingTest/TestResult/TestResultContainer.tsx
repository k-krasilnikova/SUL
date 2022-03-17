import React from 'react';
import { useParams } from 'react-router';

import { ITestResult } from 'types/test';
import { PERCENTAGE, TEST_STATUS } from 'constants/test';
import { COURSE_STATUSES } from 'constants/statuses';
import { useFinishClientCourse } from 'api/myCourses';

import TestResult from './TestResult';

const TestResultContainer: React.FC<ITestResult> = ({ responseData, status }) => {
  const params = useParams();

  const { mutate } = useFinishClientCourse(params.courseId);

  const handleFinishCourse = () => {
    if (status === COURSE_STATUSES.testing) {
      mutate(params.courseId);
    }
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
      courseId={params.courseId}
    />
  );
};

export default TestResultContainer;
