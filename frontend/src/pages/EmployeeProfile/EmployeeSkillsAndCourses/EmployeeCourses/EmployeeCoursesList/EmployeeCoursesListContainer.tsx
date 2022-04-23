import { FC, useState } from 'react';

import { IEmployeeCoursesList } from 'types/employee';

import EmployeeCoursesList from './EmployeeCourseList';

const EmployeeCoursesListContainer: FC<IEmployeeCoursesList> = ({ courses }) => {
  const [isShown, setIsShown] = useState(false);

  const showCourseInfo = () => {
    setIsShown(true);
  };

  const hideCourseInfo = () => {
    setIsShown(false);
  };

  return (
    <EmployeeCoursesList
      courses={courses}
      showCourseInfo={showCourseInfo}
      hideCourseInfo={hideCourseInfo}
      isShown={isShown}
    />
  );
};

export default EmployeeCoursesListContainer;
