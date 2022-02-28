import React, { useState } from 'react';
import { useParams } from 'react-router';

import { useGetCourses } from 'api/courses';
import useApplyCourse from 'api/courses/applyCourse';
import { WINDOW_SIZE } from 'constants/windowWidth';
import { getWindowWidth } from 'utils/helpers/getWindowWidth';

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

  let windowWidth = getWindowWidth();

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
