import React, { useState } from 'react';
import { useParams } from 'react-router';

import { useGetCourses } from 'api/courses';
import useApplyCourse from 'api/courses/applyCourse';
import { WINDOW_SIZE } from 'constants/windowWidth';

import CoursesList from './CoursesList';

const CoursesContainer: React.FC = () => {
  const params = useParams();
  const { mutate, isLoading } = useApplyCourse();
  const { data: courses, isLoading: isCoursesLoading } = useGetCourses();
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
    mutate(params.courseId);
  };

  const [isFilterOpen, setFilterOpen] = useState<boolean>(false);
  const handleFilterOpen = () => {
    setFilterOpen(!isFilterOpen);
  };
  const handleFilterClose = () => {
    setFilterOpen(false);
  };

  let windowWidth = WINDOW_SIZE.xl.name;
  if (window.innerWidth < WINDOW_SIZE.xl.width && window.innerWidth > WINDOW_SIZE.lg.width) {
    windowWidth = WINDOW_SIZE.lg.name;
  }
  if (window.innerWidth < WINDOW_SIZE.lg.width && window.innerWidth > WINDOW_SIZE.md.width) {
    windowWidth = WINDOW_SIZE.md.name;
  }
  if (window.innerWidth < WINDOW_SIZE.md.width && window.innerWidth > WINDOW_SIZE.sm.width) {
    windowWidth = WINDOW_SIZE.sm.name;
  }

  return (
    <CoursesList
      courses={courses}
      isLoading={isCoursesLoading}
      handleApplyCourse={handleApplyCourse}
      targetId={targetId}
      targetLoading={isLoading}
      disableLink={disableLink}
      isFilterOpen={isFilterOpen}
      handleFilterOpen={handleFilterOpen}
      handleFilterClose={handleFilterClose}
      windowWidth={windowWidth}
    />
  );
};

export default CoursesContainer;
