import React, { useEffect, useState } from 'react';

import { Course } from 'types/course';
import { ClientCourse } from 'types/clientCourse';
import { searchClientCourses } from 'api/myCourses';

import SearchResultItemContainer from './SearchResultItemContainer';
import { SearchResultWrapper, NoSearchResults } from './styled';

interface CoursesFound {
  coursesFound: Array<Course>;
}

const LAST_ARRAY_ITEM = -1;

const SearchResult: React.FC<CoursesFound> = ({ coursesFound }) => {
  const [foundInMyCourses, setFoundInMyCourses] = useState<string | undefined>(undefined);

  const findCourse = (courses: Array<ClientCourse>, title: string): void => {
    for (let clientCourse = 0; clientCourse < courses.length; clientCourse += 1) {
      if (courses[clientCourse].course.title === title) {
        setFoundInMyCourses(courses[clientCourse]._id);
        break;
      }
    }
  };

  useEffect(() => {
    const getClientCourses = async () => {
      const clientCourses = await searchClientCourses();
      coursesFound.forEach((course) => findCourse(clientCourses, course.title));
    };

    getClientCourses();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
