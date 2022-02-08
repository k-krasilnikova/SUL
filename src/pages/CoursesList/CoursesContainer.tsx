import React, { useState } from 'react';
import { useParams } from 'react-router';

import { useGetCourses } from 'api/courses';
import useApplyCourse from 'api/courses/applyCourse';

import CoursesList from './CoursesList';

const CoursesContainer: React.FC = () => {
  const params = useParams();
  const { mutate, status } = useApplyCourse();
  const { data, isLoading } = useGetCourses();
  const [targetId, setSpinner] = useState<string | undefined>();

  const handleApplyCourse = (event: React.MouseEvent<Element, MouseEvent>) => {
    setSpinner((event.target as HTMLElement).id);
    mutate(params.courseId);
  };

  return (
    <CoursesList
      data={data}
      isLoading={isLoading}
      handleApplyCourse={handleApplyCourse}
      status={status}
      targetId={targetId}
    />
  );
};

export default CoursesContainer;
