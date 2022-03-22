import React, { useEffect, useState } from 'react';

import { ClientCourse } from 'types/clientCourse';

import EmployeeCourses from './EmployeeCourses';

interface CoursesProps {
  courses?: ClientCourse[];
}

const EmployeeCoursesContainer: React.FC<CoursesProps> = ({ courses }) => {
  const [searchCourse, setSearchCourse] = useState('');
  const [employeeCourses, setEmployeeCourses] = useState<ClientCourse[]>();

  useEffect(() => {
    if (courses) {
      const filteredCourses = courses.filter(
        (course) =>
          course.course.title
            .toLocaleLowerCase()
            .includes(searchCourse.trimEnd().toLocaleLowerCase()) ||
          course.course.title.toLowerCase().includes(searchCourse.toLowerCase()),
      );
      setEmployeeCourses(filteredCourses);
    }
  }, [searchCourse, courses]);

  const searchCourseInList = (value: string) => {
    const formattedValue = value.split(/\s+/).join(' ').trimStart();
    setSearchCourse(formattedValue);
  };

  const checkPastedValue = (value: string) => {
    const formattedValue = value.split(/\s+/).join(' ').trimStart().trimEnd();
    setSearchCourse(formattedValue);
  };

  const checkSpace = (event: React.KeyboardEvent) => {
    const { key } = event;
    const formattedKey = key.trim();
    if (!formattedKey && searchCourse.length === 0) {
      event.preventDefault();
    }
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
