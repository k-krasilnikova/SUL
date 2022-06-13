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
  const { data: foundInMyCourse } = useGetClientCourseInfo(courseId, true);

  console.log(foundInMyCourse);
  const handleSelectFoundCourse = (event: React.MouseEvent<HTMLElement>) => {
    setCourseId(event.currentTarget.id);
    handleSearchClose();
  };

  useEffect(() => {
    const navigatePath = foundInMyCourse?._id
      ? transformRoute(PATHS.myCourseDetails, foundInMyCourse._id)
      : transformRoute(PATHS.courseDetails, courseId);

    navigate(navigatePath);
  }, [courseId, foundInMyCourse, navigate]);

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
