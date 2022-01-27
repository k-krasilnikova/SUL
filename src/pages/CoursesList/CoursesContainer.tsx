import React from 'react';
import { useParams } from 'react-router';

import { useGetCourses } from 'api/courses';
import useApplyCourse from 'api/courses/applyCourse';

import CoursesList from './CoursesList';

const CoursesContainer: React.FC = () => {
  const params = useParams();
  const { mutate } = useApplyCourse();
  const { data, isLoading } = useGetCourses();

  const handleApplyCourse = () => {
    mutate(params.courseId);
  };

  return <CoursesList data={data} isLoading={isLoading} handleApplyCourse={handleApplyCourse} />;
};

export default CoursesContainer;
