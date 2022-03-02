import React from 'react';
import { useParams } from 'react-router';

import { ITestResult } from 'types/test';
import { PERCENTAGE, TEST_STATUS } from 'constants/test';
import { COURSE_STATUSES } from 'constants/statuses';
import useFinishClientCourse from 'api/myCourses/finishClientCourse';
import useGetClientCourseInfo from 'api/myCourses/getMyCourseInfo';

import TestResult from './TestResult';

const TestResultContainer: React.FC<ITestResult> = ({ responseData }) => {
  const params = useParams();

  const { data: courseData } = useGetClientCourseInfo(params.courseId);
  const { mutate } = useFinishClientCourse(courseData?._id);

  const handleFinishCourse = () => {
    if (courseData?.status === COURSE_STATUSES.testing) {
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
    />
  );
};

export default TestResultContainer;
