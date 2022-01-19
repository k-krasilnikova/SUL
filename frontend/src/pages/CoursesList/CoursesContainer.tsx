import React from 'react';

import { useGetCourses } from 'api/courses';
import CoursesList from './CoursesList';

const CoursesContainer: React.FC = () => {
  const { data, isLoading } = useGetCourses();

  return <CoursesList data={data} isLoading={isLoading} />;
};

export default CoursesContainer;
