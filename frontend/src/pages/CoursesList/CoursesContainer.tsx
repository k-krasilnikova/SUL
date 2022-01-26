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

  const TEXT_LIMIT = 500;

  return (
    <CoursesList
      data={data}
      isLoading={isLoading}
      handleApplyCourse={handleApplyCourse}
      descriptionLimit={TEXT_LIMIT}
    />
  );
};

export default CoursesContainer;
