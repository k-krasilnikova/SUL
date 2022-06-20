import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import { useGetClientPaginatedCourses } from 'api/myCourses';
import { useGetCoursesFilters, useSetCoursesFiltersContext } from 'hooks';
import CoursesList from 'pages/CoursesList/CoursesList';
import { CoursesFilters } from 'enums/coursesFilters';
import { getWindowLabelByWidth } from 'utils/helpers/getWindowLabelByWidth';
import { IClientCourse } from 'types/clientCourse';

const MyCoursesContainer: React.FC = () => {
  const { coursesFilters, isEmptyFilters } = useGetCoursesFilters(true);

  useSetCoursesFiltersContext(CoursesFilters.myCoursesFilters);

  const { data, hasNextPage, isLoading, isFetchingNextPage, isFetching, fetchNextPage } =
    useGetClientPaginatedCourses(coursesFilters);

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
      windowWidth={windowWidth}
      isEmptyFilters={isEmptyFilters}
      isLoading={isLoading}
      isFetching={isFetching}
      isFetchingNextPage={isFetchingNextPage}
      lastCourseRef={clientCourseRef}
    />
  );
};

export default MyCoursesContainer;
