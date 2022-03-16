import React from 'react';

// import { useGetClientCourses } from 'api/myCourses';
import useGetClientPaginatedCourses from 'api/myCourses/getClientPaginatedCourses';
import { WINDOW_SIZE } from 'constants/windowWidth';
import { getWindowWidth } from 'utils/helpers/getWindowWidth';

import MyCoursesList from './MyCoursesList';

const MyCoursesContainer: React.FC = () => {
  // const { data: clientCourses, isLoading } = useGetClientCourses();
  const { data, isLoading } = useGetClientPaginatedCourses();

  console.log(data, 'data');

  const disableLinkWidth =
    window.innerWidth < WINDOW_SIZE.sm.width ? WINDOW_SIZE.xs.name : WINDOW_SIZE.sm.name;
  const disableLink = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (disableLinkWidth === WINDOW_SIZE.sm.name) {
      event.preventDefault();
    }
  };

  const windowWidth = getWindowWidth();

  const clientCourses = data?.pages.map((page) => page.clientCourses);

  console.log(
    'clientCourses',
    clientCourses?.map((pageItem) => pageItem.course),
  );

  return (
    <MyCoursesList
      clientCourses={clientCourses?.filter((item) => item.course)}
      isLoading={isLoading}
      disableLink={disableLink}
      windowWidth={windowWidth}
    />
  );
};

export default MyCoursesContainer;
