import { FC } from 'react';

import { IStepProps } from 'pages/CourseEditor/types';

import LessonsStep from './LessonsStep';

const LessonsStepContainer: FC<IStepProps> = ({ formik, courseData }) => (
  <LessonsStep formik={formik} courseData={courseData} />
);

export default LessonsStepContainer;
