import { FC, useState } from 'react';

import { convertEmployeeCourseProgress } from 'utils/helpers/convertCourseStatusToProgress';

import CourseItem from './CourseItem';
import { ICourseItemContainerProps } from './types';

const CourseItemContainer: FC<ICourseItemContainerProps> = ({ title, status }) => {
  const [isCourseTitleShown, setCourseTitleShown] = useState(false);
  const { progressValue, progressVariant } = convertEmployeeCourseProgress(status);

  const showCourseInfo = () => {
    setCourseTitleShown(true);
  };

  const hideCourseInfo = () => {
    setCourseTitleShown(false);
  };

  return (
    <CourseItem
      title={title}
      status={status}
      hideCourseInfo={hideCourseInfo}
      showCourseInfo={showCourseInfo}
      isCourseTitleShown={isCourseTitleShown}
      progressValue={progressValue}
      progressVariant={progressVariant}
    />
  );
};

export default CourseItemContainer;
