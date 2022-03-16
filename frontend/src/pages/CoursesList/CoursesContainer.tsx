import { useState } from 'react';

import { Course } from 'types/course';
import { useApplyCourse } from 'api/courses';
import { WINDOW_SIZE } from 'constants/windowWidth';
import { getWindowWidth } from 'utils/helpers/getWindowWidth';
import useGetPaginatedCourses from 'api/courses/getPaginatedCourses';

import CoursesList from './CoursesList';

const CoursesContainer: React.FC = () => {
  const { mutate, isLoading } = useApplyCourse();
  const {
    data,
    isLoading: isCoursesLoading,
    hasNextPage,
    fetchNextPage,
    status,
  } = useGetPaginatedCourses();
  const [targetId, setTargetId] = useState<string | undefined>();

  const disableLinkWidth =
    window.innerWidth < WINDOW_SIZE.sm.width ? WINDOW_SIZE.xs.name : WINDOW_SIZE.sm.name;
  const disableLink = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (disableLinkWidth === WINDOW_SIZE.sm.name) {
      event.preventDefault();
    }
  };

  const handleApplyCourse = (event: React.MouseEvent<Element, MouseEvent>) => {
    setTargetId((event.target as HTMLElement).id);
    mutate((event.target as HTMLElement).id);
  };

  const windowWidth = getWindowWidth();
  const formattedCoursesList = data?.pages.reduce(
    (prev, page) => [...prev, ...page.courses.filter((course) => !course.status)],
    [] as Course[],
  );

  return (
    <CoursesList
      courses={formattedCoursesList}
      isLoading={isCoursesLoading}
      handleApplyCourse={handleApplyCourse}
      targetId={targetId}
      targetLoading={isLoading}
      disableLink={disableLink}
      windowWidth={windowWidth}
      // loadMoreButtonRef={loadMoreButtonRef}
      fetchNextPage={fetchNextPage}
      hasNextPage={hasNextPage}
      status={status}
    />
  );
};

export default CoursesContainer;
