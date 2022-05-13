import { FC } from 'react';

import { IEmployeeCourses } from 'types/employee';

import { CoursesBox } from './styled';
import SearchEmployeeCourse from './SearchEmployeeCourse';
import EmployeeCoursesList from './EmployeeCoursesList';

const EmployeeCourses: FC<IEmployeeCourses> = ({
  courses,
  searchCourseInList,
  checkSpace,
  checkPastedValue,
  searchCourse,
}) => (
  <CoursesBox>
    <SearchEmployeeCourse
      searchCourseInList={searchCourseInList}
      checkSpace={checkSpace}
      checkPastedValue={checkPastedValue}
      searchCourse={searchCourse}
    />
    <EmployeeCoursesList courses={courses} />
  </CoursesBox>
);

export default EmployeeCourses;
