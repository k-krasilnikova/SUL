import { useState } from 'react';

import { ICourse } from 'types/course';
import { useApplyCourse, useGetPaginatedCourses } from 'api/courses';
import { useGetProfile } from 'api/profile';
import { useFetchNextPage, useGetCoursesFilters } from 'hooks';
import { Role } from 'constants/menuRoles';
import { getWindowLabelByWidth } from 'utils/helpers/getWindowLabelByWidth';

import CoursesList from './CoursesList';

const CoursesContainer: React.FC = () => {
  const [targetId, setTargetId] = useState<string | undefined>();

  const { mutate, isLoading: isApplyCourseLoading } = useApplyCourse();

  const coursesFilters = useGetCoursesFilters(false);

  const {
    data,
    hasNextPage,
    isLoading: isCoursesLoading,
    isFetchingNextPage,
    isFetching,
    refetch,
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
    mutate((event.target as HTMLElement).id);
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
      targetLoading={isApplyCourseLoading}
      handleApplyCourse={handleApplyCourse}
      lastCourseRef={courseRef}
      refetch={refetch}
    />
  );
};

export default CoursesContainer;
