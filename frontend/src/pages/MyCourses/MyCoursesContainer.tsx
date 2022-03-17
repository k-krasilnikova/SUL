import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import useGetClientPaginatedCourses from 'api/myCourses/getClientPaginatedCourses';
import { WINDOW_SIZE } from 'constants/windowWidth';
import { getWindowWidth } from 'utils/helpers/getWindowWidth';
import { ClientCourse } from 'types/clientCourse';

import MyCoursesList from './MyCoursesList';

const MyCoursesContainer: React.FC = () => {
  const {
    data,
    hasNextPage,
    fetchNextPage,
    isLoading: isClientCoursesLoading,
  } = useGetClientPaginatedCourses();

  const disableLinkWidth =
    window.innerWidth < WINDOW_SIZE.sm.width ? WINDOW_SIZE.xs.name : WINDOW_SIZE.sm.name;
  const disableLink = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (disableLinkWidth === WINDOW_SIZE.sm.name) {
      event.preventDefault();
    }
  };

  const windowWidth = getWindowWidth();

  const formattedClientCourses = data?.pages.reduce(
    (prev, page) => [...prev, ...page.clientCourses],
    [] as ClientCourse[],
  );

  console.log('mycorses', formattedClientCourses);

  const { ref: clientCourseRef, inView } = useInView({
    root: null,
    threshold: 1.0,
    rootMargin: '0px',
  });

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <MyCoursesList
      clientCourses={formattedClientCourses}
      isLoading={isClientCoursesLoading}
      disableLink={disableLink}
      windowWidth={windowWidth}
      lastClientCourseRef={clientCourseRef}
    />
  );
};

export default MyCoursesContainer;
