import React from 'react';

import { useGetMyCourses } from 'api/myCourses';

import MyCoursesList from './MyCoursesList';

const MyCoursesContainer: React.FC = () => {
  const { data, isLoading } = useGetMyCourses();

  const TEXT_LIMIT = 500;

  return (
    <MyCoursesList
      data={data?.filter((item) => item.course)}
      isLoading={isLoading}
      descriptionLimit={TEXT_LIMIT}
    />
  );
};

export default MyCoursesContainer;
