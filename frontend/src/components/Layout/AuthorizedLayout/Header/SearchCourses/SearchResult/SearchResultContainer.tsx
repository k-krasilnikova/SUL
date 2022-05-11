import React, { useEffect, useState } from 'react';

import useSearchClientCourses from 'api/myCourses/searchClientCourses';

import SearchResult from './SearchResult';
import { IClientCourseIds, ISearchResultContainerProps } from '../types';

const SearchResultContainer: React.FC<ISearchResultContainerProps> = ({
  coursesFound,
  handleSearchClose,
}) => {
  const [foundInMyCoursesIds, setFoundInMyCoursesIds] = useState<IClientCourseIds[]>([]);

  const { data: clientCoursesData } = useSearchClientCourses();

  useEffect(() => {
    if (clientCoursesData) {
      coursesFound.forEach(({ title }) => {
        const foundedCourse = clientCoursesData.find(({ course }) => course.title === title);

        if (foundedCourse) {
          setFoundInMyCoursesIds((prevState) => [
            ...prevState,
            {
              courseId: foundedCourse.course._id,
              clientCourseId: foundedCourse._id,
            },
          ]);
        }
      });
    }
  }, [clientCoursesData, coursesFound]);

  return (
    <SearchResult
      coursesFound={coursesFound}
      foundInMyCourses={foundInMyCoursesIds}
      handleSearchClose={handleSearchClose}
    />
  );
};

export default SearchResultContainer;
