import React from 'react';

import { useGetClientCourses } from 'api/myCourses';
import { WINDOW_SIZE } from 'constants/windowWidth';
import { getWindowWidth } from 'utils/helpers/getWindowWidth';
import CoursesList from 'pages/CoursesList/CoursesList';

const MyCoursesContainer: React.FC = () => {
  const { data: clientCoursesResponse, isLoading } = useGetClientCourses();
  const disableLinkWidth =
    window.innerWidth < WINDOW_SIZE.sm.width ? WINDOW_SIZE.xs.name : WINDOW_SIZE.sm.name;
  const disableLink = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (disableLinkWidth === WINDOW_SIZE.sm.name) {
      event.preventDefault();
    }
  };

  const windowWidth = getWindowWidth();
  const commonCourses = clientCoursesResponse?.map((item) => item.course);

  return (
    <CoursesList
      courses={commonCourses}
      clientCourses={clientCoursesResponse}
      isLoading={isLoading}
      disableLink={disableLink}
      windowWidth={windowWidth}
    />
  );
};

export default MyCoursesContainer;
