import React, { useState } from 'react';

import { searchClientCourses } from 'api/myCourses';
import { Course } from 'types/course';
import { ClientCourse } from 'types/clientCourse';
import transformRoute from 'utils/helpers/paths/transformRoute';
import { PATHS } from 'constants/routes';

import SearchResultItem from './SearchResultItem';

interface CoursesFound {
  course: Course;
  addDivider: boolean;
}

const SearchResultItemContainer: React.FC<CoursesFound> = ({ course, addDivider }) => {
  const [foundInMyCourses, setFoundInMyCourses] = useState<string | undefined>(undefined);

  const findCourse = (courses: Array<ClientCourse>, title: string): void => {
    for (let clientCourse = 0; clientCourse < courses.length; clientCourse += 1) {
      if (courses[clientCourse].course.title === title) {
        setFoundInMyCourses(courses[clientCourse]._id);
        break;
      }
    }
  };

  const getClientCourses = async () => {
    const clientCourses = await searchClientCourses();
    findCourse(clientCourses, course.title);
  };

  const linkTo = foundInMyCourses
    ? transformRoute(PATHS.myCourseDetails, foundInMyCourses)
    : transformRoute(PATHS.courseDetails, course._id);

  getClientCourses();

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
