import { useState } from 'react';

import { ICourse } from 'types/course';
import { useApplyCourse, useGetPaginatedCourses } from 'api/courses';
import { useGetProfile } from 'api/profile';
import { useFetchNextPage } from 'hooks';
import { Role } from 'constants/menuRoles';
import { getWindowLabelByWidth } from 'utils/helpers/getWindowLabelByWidth';

import CoursesList from './CoursesList';

const CoursesContainer: React.FC = () => {
  const { mutate, isLoading } = useApplyCourse();
  const {
    data,
    hasNextPage,
    fetchNextPage,
    isLoading: isCoursesLoading,
  } = useGetPaginatedCourses();

  const { data: profileResponse } = useGetProfile();
  const isAdmin = profileResponse?.role === Role.admin;

  const [targetId, setTargetId] = useState<string | undefined>();

  const handleApplyCourse = (event: React.MouseEvent<Element, MouseEvent>) => {
    setTargetId((event.target as HTMLElement).id);
    mutate((event.target as HTMLElement).id);
  };

  const windowWidth = getWindowLabelByWidth();

  const formattedCoursesList = data?.pages.reduce(
    (prev, page) => [...prev, ...page.courses.filter((course) => !course.status)],
    [] as ICourse[],
  );

  const courseRef = useFetchNextPage({ hasNextPage, fetchNextPage });

  return (
    <CoursesList
      isAdmin={isAdmin}
      courses={formattedCoursesList}
      isLoading={isCoursesLoading}
      handleApplyCourse={handleApplyCourse}
      targetId={targetId}
      targetLoading={isLoading}
      windowWidth={windowWidth}
      lastCourseRef={courseRef}
    />
  );
};

export default CoursesContainer;
