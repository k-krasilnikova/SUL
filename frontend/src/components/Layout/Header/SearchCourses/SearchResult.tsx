import React, { useEffect, useState } from 'react';

import { Course } from 'types/course';
import { ClientCourse } from 'types/clientCourse';
import useSearchClientCourses from 'api/myCourses/searchClientCourses';

import SearchResultItemContainer from './SearchResultItemContainer';
import { SearchResultWrapper, NoSearchResults } from './styled';

interface CoursesFound {
  coursesFound: Array<Course>;
}

const LAST_ARRAY_ITEM = -1;

const SearchResult: React.FC<CoursesFound> = ({ coursesFound }) => {
  const [foundInMyCourses, setFoundInMyCourses] = useState<string | undefined>();

  const findCourse = (courses: Array<ClientCourse>, title: string): void => {
    for (let clientCourseIndex = 0; clientCourseIndex < courses.length; clientCourseIndex += 1) {
      if (courses[clientCourseIndex].course.title === title) {
        setFoundInMyCourses(courses[clientCourseIndex]._id);
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
            addDivider={id < array.length + LAST_ARRAY_ITEM}
            foundInMyCoursesId={foundInMyCourses}
          />
        ))
      ) : (
        <NoSearchResults>No results</NoSearchResults>
      )}
    </SearchResultWrapper>
  );
};

export default SearchResult;
