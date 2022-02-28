import React, { useState } from 'react';

import { useGetMyCourses } from 'api/myCourses';
import { WINDOW_SIZE } from 'constants/windowWidth';

import MyCoursesList from './MyCoursesList';

const MyCoursesContainer: React.FC = () => {
  const { data, isLoading } = useGetMyCourses();
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

  let windowWidth = WINDOW_SIZE.xl.name;
  if (window.innerWidth < WINDOW_SIZE.xl.width && window.innerWidth > WINDOW_SIZE.lg.width) {
    windowWidth = WINDOW_SIZE.lg.name;
  }
  if (window.innerWidth < WINDOW_SIZE.lg.width && window.innerWidth > WINDOW_SIZE.md.width) {
    windowWidth = WINDOW_SIZE.md.name;
  }
  if (window.innerWidth < WINDOW_SIZE.md.width && window.innerWidth > WINDOW_SIZE.sm.width) {
    windowWidth = WINDOW_SIZE.sm.name;
  }

  return (
    <MyCoursesList
      data={data?.filter((item) => item.course)}
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
