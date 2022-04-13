import React, { useEffect, useState } from 'react';

import { ICourse } from 'types/course';
import { ClientCourse } from 'types/clientCourse';
import useSearchClientCourses from 'api/myCourses/searchClientCourses';

import SearchResult from './SearchResult';

interface CoursesFound {
  coursesFound: ICourse[];
}

const SearchResultContainer: React.FC<CoursesFound> = ({ coursesFound }) => {
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

  return <SearchResult coursesFound={coursesFound} foundInMyCourses={foundInMyCourses} />;
};

export default SearchResultContainer;
