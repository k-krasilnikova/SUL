import React, { useState } from 'react';
import { useParams } from 'react-router';

import { useGetCourses } from 'api/courses';
import useApplyCourse from 'api/courses/applyCourse';

import CoursesList from './CoursesList';

const CoursesContainer: React.FC = () => {
  const params = useParams();
  const { mutate, isLoading } = useApplyCourse();
  const getCourses = useGetCourses();
  const [targetId, setTargetId] = useState<string | undefined>();

  const handleApplyCourse = (event: React.MouseEvent<Element, MouseEvent>) => {
    setTargetId((event.target as HTMLElement).id);
    mutate(params.courseId);
  };

  return (
    <CoursesList
      data={getCourses.data}
      isLoading={getCourses.isLoading}
      handleApplyCourse={handleApplyCourse}
      targetId={targetId}
      targetLoading={isLoading}
    />
  );
};

export default CoursesContainer;
