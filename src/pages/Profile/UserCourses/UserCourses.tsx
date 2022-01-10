import React from 'react';
import Divider from '@mui/material/Divider';
import StarIcon from '@mui/icons-material/Star';

import { Course } from 'types/course';
import isCourseCompleted from 'utils/helpers/isCourseCompleted';

import CourseMaterialInfo from 'pages/Profile/UserCourses/CourseMaterialInfo';
import {
  CoursesBox,
  CoursesList,
  CoursesListItem,
  CourseTitle,
  Title,
  MaterialsList,
} from './styled';

interface CoursesProps {
  courses?: Array<Course>;
}

const UserCourses: React.FC<CoursesProps> = ({ courses }) => (
  <CoursesBox>
    <CoursesList>
      {courses?.map((course) => (
        <>
          <Divider />
          <CoursesListItem key={course._id}>
            <CourseTitle>
              <StarIcon
                fontSize="small"
                color={isCourseCompleted(course) ? 'primary' : 'disabled'}
              />
              <Title>{course.title}</Title>
            </CourseTitle>
            <MaterialsList>
              {course.materials.map((material, id) => (
                <CourseMaterialInfo key={id} material={material} />
              ))}
            </MaterialsList>
          </CoursesListItem>
        </>
      ))}
    </CoursesList>
  </CoursesBox>
);

export default UserCourses;
