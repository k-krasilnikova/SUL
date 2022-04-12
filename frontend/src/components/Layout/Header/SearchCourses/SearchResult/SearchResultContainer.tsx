import React, { useEffect, useState } from 'react';

import { ICourse } from 'types/course';
import { ClientCourse } from 'types/clientCourse';
import useSearchClientCourses from 'api/myCourses/searchClientCourses';

import SearchResult from './SearchResult';

interface CoursesFound {
  coursesFound: ICourse[];
  handleSearchClose: () => void;
}

const SearchResultContainer: React.FC<CoursesFound> = ({ coursesFound }) => {
  const [foundInMyCourses, setFoundInMyCourses] = useState<
      Array<{ courseId: string; clientCourseId: string }>
      >([]);

  const findCourse = (courses: Array<ClientCourse>, title: string): void => {
    for (let clientCourseIndex = 0; clientCourseIndex < courses.length; clientCourseIndex += 1) {
      if (courses[clientCourseIndex].course.title === title) {
        setFoundInMyCourses((oldArray) => [
          ...oldArray,
          {
            courseId: courses[clientCourseIndex].course._id,
            clientCourseId: courses[clientCourseIndex]._id,
          },
        ]);
        break;
      }
    }
  };

  const { data: clientCourses } = useSearchClientCourses();

  useEffect(() => {
    if (clientCourses) {
      coursesFound.forEach((course) => findCourse(clientCourses, course.title));
    }
  }, [clientCourses, coursesFound]);

  return (
    <SearchResultWrapper>
      {coursesFound.length ? (
        coursesFound.map((course, id, array) => (
          <SearchResultItemContainer
            course={course}
            foundInMyCoursesId={foundInMyCourses}
            handleSearchClose={handleSearchClose}
          />
        ))
      ) : (
        <NoSearchResults>{NO_RESULTS}</NoSearchResults>
      )}
    </SearchResultWrapper>
  );
};

export default SearchResultContainer;
