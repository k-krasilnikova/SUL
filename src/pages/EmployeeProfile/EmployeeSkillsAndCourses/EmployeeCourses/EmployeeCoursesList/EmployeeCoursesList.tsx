import { FC } from 'react';

import NoContent from 'components/NoContent';
import { NO_USER_COURSES } from 'constants/messages';

import { Size } from 'enums/sizes';
import { IEmployeeCoursesList } from 'types/employee';

import CourseItemContainer from './CourseItem';
import { CoursesList, CourseListItemWrapper, NoCourses } from './styled';

const EmployeeCoursesList: FC<IEmployeeCoursesList> = ({ courses }) => (
  <CoursesList>
    {courses?.length ? (
      courses.map((course) => {
        return (
          <CourseListItemWrapper key={course.course.title}>
            <CourseItemContainer title={course.course.title} status={course.status} />
          </CourseListItemWrapper>
        );
      })
    ) : (
      <NoCourses>
        <NoContent message={NO_USER_COURSES} size={Size.medium} />
      </NoCourses>
    )}
  </CoursesList>
);

export default EmployeeCoursesList;
