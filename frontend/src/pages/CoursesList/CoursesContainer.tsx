import React from 'react';
import { useParams } from 'react-router';

import { useGetCourses } from 'api/courses';
import useApplyCourse from 'api/courses/applyCourse';

import CoursesList from './CoursesList';

const CoursesContainer: React.FC = () => {
  const { data, isLoading } = useGetCourses();

  const params = useParams();
  const mutation = useApplyCourse();

  const handleApplyCourse = () => {
    mutation.mutate(params._id);
  };

  return <CoursesList data={data} isLoading={isLoading} handleApplyCourse={handleApplyCourse} />;
};

export default CoursesContainer;
