import React from 'react';
import { useNavigate } from 'react-router';

import transformRoute from 'utils/helpers/paths/transformRoute';
import { PATHS } from 'constants/routes';

import SearchResultItem from './SearchResultItem';
import { IClientCourseIds, ISearchResultItemContainer } from '../../types';

const SearchResultItemContainer: React.FC<ISearchResultItemContainer> = ({
  course,
  addDivider,
  foundInMyCoursesId,
  handleSearchClose,
}) => {
  const navigate = useNavigate();

  const handleSelectFoundCourse = (event: React.MouseEvent<HTMLElement>) => {
    const courseIds: IClientCourseIds | undefined = foundInMyCoursesId?.find(
      ({ courseId }) => courseId === event.currentTarget.id,
    );

    const navigatePath = courseIds
      ? transformRoute(PATHS.myCourseDetails, courseIds.clientCourseId)
      : transformRoute(PATHS.courseDetails, event.currentTarget.id);

    navigate(navigatePath);
    handleSearchClose();
  };

  return (
    <SearchResultItem
      course={course}
      status={course.status}
      handleSelectFoundCourse={handleSelectFoundCourse}
      addDivider={addDivider}
    />
  );
};

export default SearchResultItemContainer;
