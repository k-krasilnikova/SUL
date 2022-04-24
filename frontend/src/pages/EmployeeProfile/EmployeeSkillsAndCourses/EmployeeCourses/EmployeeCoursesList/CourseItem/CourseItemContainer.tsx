import { FC, useState } from 'react';

import { convertEmployeeCourseProgress } from 'utils/helpers/convertCourseStatusToProgress';

import CourseItem from './CourseItem';
import { ICourseItemContainerProps } from './types';

const CourseItemContainer: FC<ICourseItemContainerProps> = ({ title, status }) => {
  const [isShown, setIsShown] = useState(false);
  const { progressValue, progressVariant } = convertEmployeeCourseProgress(status);

  const showCourseInfo = () => {
    setIsShown(true);
  };

  const hideCourseInfo = () => {
    setIsShown(false);
  };

  return (
    <CourseItem
      title={title}
      status={status}
      hideCourseInfo={hideCourseInfo}
      showCourseInfo={showCourseInfo}
      isShown={isShown}
      progressValue={progressValue}
      progressVariant={progressVariant}
    />
  );
};

export default CourseItemContainer;
