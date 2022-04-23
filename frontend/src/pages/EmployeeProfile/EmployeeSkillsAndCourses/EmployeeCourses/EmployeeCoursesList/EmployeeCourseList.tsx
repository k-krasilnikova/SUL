import { FC } from 'react';

import NoContent from 'components/NoContent';
import ProgressBar from 'components/ProgressBar';
import { NO_USER_COURSES } from 'constants/messages';

import { Size } from 'enums/sizes';
import { IEmployeeCoursesList } from 'types/employee';
import { convertEmployeeCourseProgress } from 'utils/helpers/convertCourseStatusToProgress';
import { setFirstLetterUppercase } from 'utils/helpers/setFirstLetterUppercase';

import CourseItemTitle from './CourseItemTitle';
import {
  CoursesList,
  CourseItemText,
  CoursesDivider,
  CoursesListItem,
  CourseStatus,
  NoCourses,
} from './styled';

const EmployeeCoursesList: FC<IEmployeeCoursesList> = ({
  courses,
  showCourseInfo,
  hideCourseInfo,
  isShown,
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
                <CourseItemTitle
                  title={course.course.title}
                  showCourseInfo={showCourseInfo}
                  hideCourseInfo={hideCourseInfo}
                  isShown={isShown}
                />
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
