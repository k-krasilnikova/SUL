import { FC } from 'react';

import { convertEmployeeCourseProgress } from 'utils/helpers/convertCourseStatusToProgress';

import CourseItem from './CourseItem';
import { ICourseItemContainerProps } from './types';

const CourseItemContainer: FC<ICourseItemContainerProps> = ({ title, status }) => {
  const { progressValue, progressVariant } = convertEmployeeCourseProgress(status);

  return (
    <CourseItem
      title={title}
      status={status}
      progressValue={progressValue}
      progressVariant={progressVariant}
    />
  );
};

export default CourseItemContainer;
