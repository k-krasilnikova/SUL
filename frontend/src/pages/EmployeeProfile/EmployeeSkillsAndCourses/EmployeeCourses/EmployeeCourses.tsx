import React, { Suspense } from 'react';

import Loader from 'components/Loader';
import { IEmployeeCourses } from 'types/employee';
import { Loaders } from 'enums/loader';

import { CoursesBox } from './styled';
import SearchEmployeeCourse from './SearchEmployeeCourse';
import EmployeeCoursesList from './EmployeeCoursesList';

const EmployeeCourses: React.FC<IEmployeeCourses> = ({
  courses,
  searchCourseInList,
  checkSpace,
  checkPastedValue,
  searchCourse,
}) => (
  <CoursesBox>
    <Suspense fallback={<Loader color="primary" type={Loaders.component} />}>
      <SearchEmployeeCourse
        searchCourseInList={searchCourseInList}
        checkSpace={checkSpace}
        checkPastedValue={checkPastedValue}
        searchCourse={searchCourse}
      />
      <EmployeeCoursesList courses={courses} />
    </Suspense>
  </CoursesBox>
);

export default EmployeeCourses;
