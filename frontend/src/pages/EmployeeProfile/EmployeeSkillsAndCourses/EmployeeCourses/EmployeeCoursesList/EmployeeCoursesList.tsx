import React from 'react';

import ProgressBar from 'components/ProgressBar';
import NoContent from 'components/NoContent';
import { NO_USER_COURSES } from 'constants/messages';
import { IEmployeeCoursesList } from 'types/employee';
import { setFirstLetterUppercase } from 'utils/helpers/setFirstLetterUppercase';
import { convertEmployeeCourseProgress } from 'utils/helpers/convertCourseStatusToProgress';
import { Size } from 'enums/sizes';

import {
  CourseItemText,
  CoursesDivider,
  CoursesList,
  CoursesListItem,
  CourseStatus,
  CourseTitle,
  HoverCourseTitle,
  NoCourses,
} from './styled';

const EmployeeCoursesList: React.FC<IEmployeeCoursesList> = ({
  courses,
  isShown,
  showCourseInfo,
  hideCourseInfo,
}) => (
  <CoursesList>
    {courses?.length ? (
      courses.map((course, id, coursesArray) => {
        const isDividerVisible = id < coursesArray.length - 1;
        const { progressValue, progressVariant } = convertEmployeeCourseProgress(course.status);
        return (
          <div key={course.course.title}>
            <CoursesListItem>
              <ProgressBar size={Size.small} value={progressValue} variant={progressVariant} />
              <CourseItemText>
                <CourseTitle onMouseEnter={showCourseInfo} onMouseLeave={hideCourseInfo}>
                  {course.course.title.slice(0, 40)}
                </CourseTitle>
                {isShown && <HoverCourseTitle> {course.course.title}</HoverCourseTitle>}
                <CourseStatus>{setFirstLetterUppercase(course.status)}</CourseStatus>
              </CourseItemText>
            </CoursesListItem>
            {isDividerVisible && <CoursesDivider />}
          </div>
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
