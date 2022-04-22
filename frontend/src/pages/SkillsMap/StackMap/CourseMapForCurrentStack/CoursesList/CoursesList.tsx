import { FC } from 'react';

import { NO_COURSES } from 'constants/messages';
import { ICoursesProps } from 'pages/SkillsMap/types';

import Course from './Course';
import { NoCoursesText } from './styled';

const Courses: FC<ICoursesProps> = ({ courses }) => (
  <>
    {courses.length ? (
      <>
        {courses.map((course) => (
          <Course course={course} />
        ))}
      </>
    ) : (
      <NoCoursesText>{NO_COURSES}</NoCoursesText>
    )}
  </>
);

export default Courses;
