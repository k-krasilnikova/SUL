import React from 'react';
import { Divider, Input } from '@mui/material';
import { Star as StarIcon, Search as SearchIcon } from '@mui/icons-material';
import InputAdornment from '@material-ui/core/InputAdornment';

import { Course } from 'types/course';
import isCourseCompleted from 'utils/helpers/isCourseCompleted';

import CourseMaterialInfoContainer from 'pages/Profile/UserCourses/CourseMaterialInfoContainer';
import {
  CoursesBox,
  CoursesList,
  CoursesListItem,
  CourseTitle,
  Title,
  MaterialsList,
} from './styled';

interface CoursesProps {
  userCourses?: Array<Course>;
  setSearchCourse: (value: string) => void;
}

const UserCourses: React.FC<CoursesProps> = ({ userCourses, setSearchCourse }) => {
  return userCourses?.length ? (
    <>
      <CoursesBox>
        <Input
          disableUnderline={true}
          placeholder="Search"
          startAdornment={
            <InputAdornment position="start">
              <SearchIcon color="disabled" />
            </InputAdornment>
          }
          onChange={(event) => {
            setSearchCourse(event.target.value);
          }}
        />
        <CoursesList>
          {userCourses?.map((course) => (
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
                    <CourseMaterialInfoContainer key={id} material={material} />
                  ))}
                </MaterialsList>
              </CoursesListItem>
            </>
          ))}
        </CoursesList>
      </CoursesBox>
    </>
  ) : (
    <div>No courses chosen</div>
  );
};

export default UserCourses;
