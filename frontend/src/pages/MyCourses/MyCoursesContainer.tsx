import React, { useState } from 'react';

import { useGetMyCourses } from 'api/myCourses';
import { WINDOW_SIZE } from 'constants/windowWidth';
import { getWindowWidth } from 'utils/helpers/getWindowWidth';

import MyCoursesList from './MyCoursesList';

const MyCoursesContainer: React.FC = () => {
  const { data: clientCourses, isLoading } = useGetMyCourses();
  const disableLinkWidth =
    window.innerWidth < WINDOW_SIZE.sm.width ? WINDOW_SIZE.xs.name : WINDOW_SIZE.sm.name;
  const disableLink = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (disableLinkWidth === WINDOW_SIZE.sm.name) {
      event.preventDefault();
    }
  };

  const [isFilterOpen, setFilterOpen] = useState<boolean>(false);
  const handleFilterOpen = () => {
    setFilterOpen(!isFilterOpen);
  };
  const handleFilterClose = () => {
    setFilterOpen(false);
  };

  let windowWidth = getWindowWidth();

  return (
    <MyCoursesList
      clientCourses={clientCourses?.filter((item) => item.course)}
      isLoading={isLoading}
      disableLink={disableLink}
      isFilterOpen={isFilterOpen}
      handleFilterOpen={handleFilterOpen}
      handleFilterClose={handleFilterClose}
      windowWidth={windowWidth}
    />
  );
};

export default MyCoursesContainer;
