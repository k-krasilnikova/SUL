import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import { useGetClientPaginatedCourses } from 'api/myCourses';
import { useGetCoursesFilters } from 'hooks';
import { getWindowLabelByWidth } from 'utils/helpers/getWindowLabelByWidth';
import { IClientCourse } from 'types/clientCourse';
import CoursesList from 'pages/CoursesList/CoursesList';

const MyCoursesContainer: React.FC = () => {
  const coursesFilters = useGetCoursesFilters(true);

  const {
    data,
    hasNextPage,
    fetchNextPage,
    isLoading: isClientCoursesLoading,
  } = useGetClientPaginatedCourses(coursesFilters);

  const windowWidth = getWindowLabelByWidth();

  const formattedClientCourses = data?.pages.reduce(
    (prev, page) => [...prev, ...page.clientCourses],
    [] as IClientCourse[],
  );
  const commonCourses = formattedClientCourses?.map((item) => item.course);

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
    <CoursesList
      withStatusSelect
      courses={commonCourses}
      clientCourses={formattedClientCourses}
      isLoading={isClientCoursesLoading}
      windowWidth={windowWidth}
      lastCourseRef={clientCourseRef}
    />
  );
};

export default MyCoursesContainer;
