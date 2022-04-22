import { FC, BaseSyntheticEvent } from 'react';

import { ICourseContainerProps } from 'pages/SkillsMap/types';

import Course from './Course';

const CourseContainer: FC<ICourseContainerProps> = ({ course }) => {
  const isCourseCompleted = course.isCompleted;

  const handleCourseClick = ({ preventDefault }: BaseSyntheticEvent) => {
    if (isCourseCompleted) {
      preventDefault();
    }
  };

  return <Course course={course} handleCourseClick={handleCourseClick} />;
};

export default CourseContainer;
