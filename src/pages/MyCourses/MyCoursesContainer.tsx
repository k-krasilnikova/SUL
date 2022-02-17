import React from 'react';

import { useGetMyCourses } from 'api/myCourses';

import MyCoursesList from './MyCoursesList';

const MyCoursesContainer: React.FC = () => {
  const { data, isLoading } = useGetMyCourses();
  const windowWidth = window.innerWidth < 425 ? 'small' : 'large';

  return (
    <MyCoursesList
      data={data?.filter((item) => item.course)}
      isLoading={isLoading}
      windowWidth={windowWidth}
    />
  );
};

export default MyCoursesContainer;
