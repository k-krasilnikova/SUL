import React from 'react';

import { ICourse } from 'types/course';
import transformRoute from 'utils/helpers/paths/transformRoute';
import { PATHS } from 'constants/routes';

import SearchResultItem from './SearchResultItem';

interface CoursesFound {
  course: ICourse;
  addDivider: boolean;
  foundInMyCoursesId?: string;
}

const SearchResultItemContainer: React.FC<CoursesFound> = ({
  course,
  addDivider,
  foundInMyCoursesId,
}) => {
  const linkTo = foundInMyCoursesId
    ? transformRoute(PATHS.myCourseDetails, foundInMyCoursesId)
    : transformRoute(PATHS.courseDetails, course._id);

  return (
    <SearchResultItem
      course={course}
      status={course.status}
      redirectTo={linkTo}
      addDivider={addDivider}
    />
  );
};

export default SearchResultItemContainer;
