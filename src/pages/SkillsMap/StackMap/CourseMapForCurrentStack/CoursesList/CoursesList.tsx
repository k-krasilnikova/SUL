import { FC } from 'react';

import { NO_COURSES } from 'constants/messages';
import { ICoursesListProps } from 'pages/SkillsMap/types';

import Course from './Course';
import { NoCoursesText } from './styled';

const CoursesList: FC<ICoursesListProps> = ({ courses }) => (
  <>
    {courses.length ? (
      <>
        {courses.map((course) => (
          <Course key={course._id} course={course} />
        ))}
      </>
    ) : (
      <NoCoursesText>{NO_COURSES}</NoCoursesText>
    )}
  </>
);

export default CoursesList;
