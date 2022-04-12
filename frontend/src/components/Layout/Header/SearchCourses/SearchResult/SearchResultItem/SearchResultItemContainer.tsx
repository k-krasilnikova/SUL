import React from 'react';
import { useNavigate } from 'react-router';

import { ICourse } from 'types/course';
import transformRoute from 'utils/helpers/paths/transformRoute';
import { PATHS } from 'constants/routes';

import SearchResultItem from './SearchResultItem';

interface CoursesFound {
  course: ICourse;
  addDivider: boolean;
  foundInMyCoursesId?: { courseId: string; clientCourseId: string }[];
  handleSearchClose: () => void;
}

const SearchResultItemContainer: React.FC<CoursesFound> = ({
  course,
  addDivider,
  foundInMyCoursesId,
  handleSearchClose,
}) => {
  const navigate = useNavigate();

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    const courseIds: { courseId: string; clientCourseId: string } | undefined =
      foundInMyCoursesId?.find((courseData) => {
        return courseData.courseId === event.currentTarget.id;
      });
    if (courseIds) {
      navigate(transformRoute(PATHS.myCourseDetails, courseIds.clientCourseId));
      handleSearchClose();
    } else {
      navigate(transformRoute(PATHS.courseDetails, event.currentTarget.id));
      handleSearchClose();
    }
  };

  return (
    <SearchResultItem
      course={course}
      status={course.status}
      addDivider={addDivider}
      onClick={handleClick}
    />
  );
};

export default SearchResultItemContainer;
