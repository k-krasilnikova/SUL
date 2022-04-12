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

interface FoundedCourse {
  courseId: string;
  clientCourseId: string;
}

const SearchResultItemContainer: React.FC<CoursesFound> = ({
  course,
  addDivider,
  foundInMyCoursesId,
  handleSearchClose,
}) => {
  const navigate = useNavigate();

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    const courseIds: FoundedCourse | undefined = foundInMyCoursesId?.find(
      ({ courseId }) => courseId === event.currentTarget.id,
    );
    const navigatePath = courseIds
      ? transformRoute(PATHS.myCourseDetails, courseIds.clientCourseId)
      : transformRoute(PATHS.courseDetails, event.currentTarget.id);
    handleSearchClose();
    navigate(navigatePath);
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
