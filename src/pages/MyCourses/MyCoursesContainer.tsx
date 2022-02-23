import React from 'react';

import { useGetMyCourses } from 'api/myCourses';
import { WINDOW_SIZE } from 'constants/windowWidth';

import MyCoursesList from './MyCoursesList';

const MyCoursesContainer: React.FC = () => {
  const { data, isLoading } = useGetMyCourses();
  const windowWidth =
    window.innerWidth < WINDOW_SIZE.sm.width ? WINDOW_SIZE.xs.name : WINDOW_SIZE.sm.name;
  const disableLink = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (windowWidth === WINDOW_SIZE.sm.name) {
      event.preventDefault();
    }
  };

  return (
    <MyCoursesList
      data={data?.filter((item) => item.course)}
      isLoading={isLoading}
      disableLink={disableLink}
    />
  );
};

export default MyCoursesContainer;
