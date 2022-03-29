import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import { Course } from 'types/course';
import { useApplyCourse, useGetPaginatedCourses } from 'api/courses';
import { useGetProfile } from 'api/profile';
import { WINDOW_SIZE } from 'constants/windowWidth';
import { getWindowWidth } from 'utils/helpers/getWindowWidth';

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
  const isAdmin = profileResponse?.role === 'admin';

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

  const { ref: courseRef, inView } = useInView({
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
      isAdmin={isAdmin}
      courses={formattedCoursesList}
      isLoading={isCoursesLoading}
      handleApplyCourse={handleApplyCourse}
      targetId={targetId}
      targetLoading={isLoading}
      disableLink={disableLink}
      windowWidth={windowWidth}
      lastCourseRef={courseRef}
    />
  );
};

export default CoursesContainer;
