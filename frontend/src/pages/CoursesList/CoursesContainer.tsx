import { useState } from 'react';

import { ICourse } from 'types/course';
import { useApplyCourse, useGetPaginatedCourses } from 'api/courses';
import { useGetProfile } from 'api/profile';
import { useFetchNextPage, useGetCoursesFilters, useSetCoursesFiltersContext } from 'hooks';
import { CoursesFilters } from 'enums/coursesFilters';
import { Role } from 'constants/menuRoles';
import { getWindowLabelByWidth } from 'utils/helpers/getWindowLabelByWidth';

import CoursesList from './CoursesList';

const CoursesContainer: React.FC = () => {
  const [targetId, setTargetId] = useState<string | undefined>();
  useSetCoursesFiltersContext(CoursesFilters.coursesFilters);

  const { mutate: applyCourse, isLoading: isApplyCourseLoading } = useApplyCourse();

  const { isEmptyFilters, coursesFilters } = useGetCoursesFilters(false);

  const {
    data,
    hasNextPage,
    isLoading: isCoursesLoading,
    isFetchingNextPage,
    isFetching,
    fetchNextPage,
  } = useGetPaginatedCourses(coursesFilters);

  const { data: profileResponse } = useGetProfile();

  const courseRef = useFetchNextPage({ hasNextPage, fetchNextPage });

  const isAdmin = profileResponse?.role === Role.admin;
  const windowWidth = getWindowLabelByWidth();
  const formattedCoursesList = data?.pages.reduce(
    (prev, page) => [...prev, ...page.courses.filter((course) => !course.status)],
    [] as ICourse[],
  );

  const handleApplyCourse = (event: React.MouseEvent<Element, MouseEvent>) => {
    setTargetId((event.target as HTMLElement).id);
    applyCourse((event.target as HTMLElement).id);
  };

  return (
    <CoursesList
      courses={formattedCoursesList}
      windowWidth={windowWidth}
      targetId={targetId}
      isLoading={isCoursesLoading}
      isAdmin={isAdmin}
      isFetching={isFetching}
      isFetchingNextPage={isFetchingNextPage}
      isEmptyFilters={isEmptyFilters}
      targetLoading={isApplyCourseLoading}
      handleApplyCourse={handleApplyCourse}
      lastCourseRef={courseRef}
    />
  );
};

export default CoursesContainer;
