import React, { useEffect, useState } from 'react';

import { ClientCourse } from 'types/clientCourse';
import { formatInputValue, checkWhitespace, checkPastedText } from 'utils/helpers/searchHelpers';
import { compareStrings } from 'utils/helpers/compareStrings';

import EmployeeCourses from './EmployeeCourses';

interface CoursesProps {
  courses?: ClientCourse[];
}

const EmployeeCoursesContainer: React.FC<CoursesProps> = ({ courses }) => {
  const [searchCourse, setSearchCourse] = useState('');
  const [employeeCourses, setEmployeeCourses] = useState<ClientCourse[]>();

  useEffect(() => {
    if (courses) {
      const filteredCourses = courses.filter((course) => {
        const isFound = compareStrings(course.course.title, searchCourse);
        return isFound;
      });
      setEmployeeCourses(filteredCourses);
    }
  }, [searchCourse, courses]);

  const searchCourseInList = (event: React.ChangeEvent<HTMLInputElement>) => {
    const formattedValue = formatInputValue(event.target.value);
    setSearchCourse(formattedValue);
  };

  const checkPastedValue = (event: React.ClipboardEvent) => {
    const formattedValue = checkPastedText(event);
    setSearchCourse(formattedValue);
  };

  const checkSpace = (event: React.KeyboardEvent) => {
    checkWhitespace(event, searchCourse);
  };

  return (
    <EmployeeCourses
      courses={employeeCourses}
      searchCourseInList={searchCourseInList}
      checkSpace={checkSpace}
      checkPastedValue={checkPastedValue}
      searchCourse={searchCourse}
    />
  );
};

export default EmployeeCoursesContainer;
