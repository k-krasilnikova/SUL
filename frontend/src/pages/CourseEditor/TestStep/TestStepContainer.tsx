import { FC } from 'react';

import { IStepProps } from 'pages/CourseEditor/types';

import TestStep from './TestStep';

const TestStepContainer: FC<IStepProps> = ({ formik, courseData, isCourseDataLoading }) => {
  let unGroupedAnswers = {};
  if (courseData) {
    unGroupedAnswers = courseData?.test.questions.reduce(
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
      unGroupedAnswers={unGroupedAnswers}
    />
  );
};
export default TestStepContainer;
