import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

import { PATHS } from 'constants/routes';
import { ISearchResultItemContainer } from 'components/Layout/components/types';
import transformRoute from 'utils/helpers/paths/transformRoute';

import { useGetClientCourseInfo } from 'api/myCourses';
import SearchResultItem from './SearchResultItem';

const SearchResultItemContainer: React.FC<ISearchResultItemContainer> = ({
  course,
  addDivider,
  handleSearchClose,
}) => {
  const [courseId, setCourseId] = useState<string>('');
  const navigate = useNavigate();
  const { data: foundInMyCourse, isFetched } = useGetClientCourseInfo(courseId, true);

  const handleSelectFoundCourse = (event: React.MouseEvent<HTMLElement>) => {
    if (!course.status) {
      navigate(transformRoute(PATHS.courseDetails, event.currentTarget.id));
      handleSearchClose();
      return;
    }
    setCourseId(event.currentTarget.id);
  };

  useEffect(() => {
    if (isFetched && foundInMyCourse?._id) {
      navigate(transformRoute(PATHS.myCourseDetails, foundInMyCourse._id));
      handleSearchClose();
    }
  }, [courseId, foundInMyCourse, handleSearchClose, isFetched, navigate]);

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
