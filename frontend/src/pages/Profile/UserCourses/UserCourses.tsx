import React from 'react';
import { Divider, Input } from '@mui/material';
import { Star as StarIcon, Search as SearchIcon } from '@mui/icons-material';
import InputAdornment from '@material-ui/core/InputAdornment';

import { Course } from 'types/course';
import isCourseCompleted from 'utils/helpers/isCourseCompleted';
import CourseMaterialInfoContainer from 'pages/Profile/UserCourses/CourseMaterialInfoContainer';
import NoContent from 'components/NoContent';
import { NO_COURSES } from 'constants/messages';
import { SIZE } from 'constants/sizes';

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
  return (
    <>
      <CoursesBox>
        {userCourses?.length ? (
          <div>
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
          </div>
        ) : (
          <NoContent message={NO_COURSES} size={SIZE.medium} />
        )}
      </CoursesBox>
    </>
  );
};

export default UserCourses;
