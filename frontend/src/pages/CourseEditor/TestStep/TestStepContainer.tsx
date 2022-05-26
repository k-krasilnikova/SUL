import { FC } from 'react';

import { IStepProps } from 'pages/CourseEditor/types';

import TestStep from './TestStep';

const TestStepContainer: FC<IStepProps> = ({ formik, courseData, isCourseDataLoading }) => {
  let upGroupedAnswers = {};
  if (courseData) {
    upGroupedAnswers = courseData?.test.questions.reduce(
      (acc, group) => ({
        ...acc,
        ...group.answers.reduce((a, s) => ({ [s.aN]: s, ...a }), {}),
      }),
      {},
    );
  }

  return (
    <TestStep
      formik={formik}
      courseData={courseData}
      isCourseDataLoading={isCourseDataLoading}
      upGroupedAnswers={upGroupedAnswers}
    />
  );
};
export default TestStepContainer;
