import { FC } from 'react';

import { SET_FIRST, SET_NEXT } from 'constants/skillsMap';
import { ICoursesListContainerProps } from 'pages/SkillsMap/types';

import CoursesList from './CoursesList';

export const CoursesListContainer: FC<ICoursesListContainerProps> = ({ courses }) => {
  const sortedCourses = courses.sort(({ isCompleted }) => (isCompleted ? SET_FIRST : SET_NEXT));

  return <CoursesList courses={sortedCourses} />;
};

export default CoursesListContainer;
