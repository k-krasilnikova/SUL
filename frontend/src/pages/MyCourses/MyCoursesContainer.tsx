import React from 'react';

import { useGetMyCourses } from 'api/myCourses';

import MyCoursesList from './MyCoursesList';

const MyCoursesContainer: React.FC = () => {
  const { data, isLoading } = useGetMyCourses();

  return <MyCoursesList data={data?.filter((item) => item.course)} isLoading={isLoading} />;
};

export default MyCoursesContainer;
