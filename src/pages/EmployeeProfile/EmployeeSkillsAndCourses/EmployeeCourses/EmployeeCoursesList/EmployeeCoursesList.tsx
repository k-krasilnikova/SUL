import React from 'react';

import ProgressBar from 'components/ProgressBar';
import NoContent from 'components/NoContent';
import { NO_USER_COURSES } from 'constants/messages';
import { SIZE } from 'constants/sizes';
import { IEmployeeCoursesList } from 'types/employee';
import { countProgress } from 'utils/helpers/countCourseProgress';
import { setFirstLetterUppercase } from 'utils/helpers/setFirstLetterUppercase';

import {
  CourseItemText,
  CoursesDivider,
  CoursesList,
  CoursesListItem,
  CourseStatus,
  CourseTitle,
  NoCourses,
} from './styled';

const EmployeeCoursesList: React.FC<IEmployeeCoursesList> = ({ courses }) => (
  <CoursesList>
    {courses?.length ? (
      courses.map((course, id, coursesArray) => {
        const isDividerVisible = id < coursesArray.length - 1;
        return (
          <div key={course.course.title}>
            <CoursesListItem>
              <ProgressBar size={SIZE.small} value={countProgress(course.progress)} />
              <CourseItemText>
                <CourseTitle>{course.course.title}</CourseTitle>
                <CourseStatus>{setFirstLetterUppercase(course.status)}</CourseStatus>
              </CourseItemText>
            </CoursesListItem>
            {isDividerVisible && <CoursesDivider />}
          </div>
        );
      })
    ) : (
      <NoCourses>
        <NoContent message={NO_USER_COURSES} size={SIZE.medium} />
      </NoCourses>
    )}
  </CoursesList>
);

export default EmployeeCoursesList;