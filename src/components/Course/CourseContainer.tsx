import React from 'react';

import { COURSE_STATUSES } from 'constants/statuses';

import Course from './Course';

interface Props {
  title: string | undefined;
  description: string;
  duration: string | undefined;
  lessons: number | undefined;
  status?: string;
  pageName?: string;
  windowWidth?: string;
  type?: string;
  imageUrl?: string;
  courseRef?: (node?: Element | null) => void;
  progress?: number;
}

const CourseItem: React.FC<Props> = ({
  title,
  description,
  duration,
  lessons,
  pageName,
  status,
  children,
  windowWidth,
  type,
  imageUrl,
  courseRef,
  progress,
}) => {
  const isCourseCompleted = !!(
    status && [COURSE_STATUSES.successful, COURSE_STATUSES.completed].includes(status)
  );
  return (
    <Course
      title={title}
      description={description}
      duration={duration}
      lessons={lessons}
      pageName={pageName}
      status={status}
      windowWidth={windowWidth}
      type={type}
      imageUrl={imageUrl}
      isCourseCompleted={isCourseCompleted}
      courseRef={courseRef}
      progress={progress}
    >
      {children}
    </Course>
  );
};

export default CourseItem;
