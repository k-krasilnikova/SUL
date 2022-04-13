import React, { useEffect, useState } from 'react';

import { ICourse } from 'types/course';
import useSearchClientCourses from 'api/myCourses/searchClientCourses';

import SearchResult from './SearchResult';
import { IClientCourseIds } from './types';

interface Props {
  coursesFound: ICourse[];
  handleSearchClose: () => void;
}

const SearchResultContainer: React.FC<Props> = ({ coursesFound, handleSearchClose }) => {
  const [foundInMyCoursesIds, setFoundInMyCoursesIds] = useState<IClientCourseIds[]>([]);

  const { data: clientCourses } = useSearchClientCourses();

  useEffect(() => {
    if (clientCourses) {
      coursesFound.forEach(({ title }) => {
        const foundedCourse = clientCourses.find(({ course }) => course.title === title);

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
  }, [clientCourses, coursesFound]);

  return (
    <SearchResult
      coursesFound={coursesFound}
      foundInMyCourses={foundInMyCoursesIds}
      handleSearchClose={handleSearchClose}
    />
  );
};

export default SearchResultContainer;
