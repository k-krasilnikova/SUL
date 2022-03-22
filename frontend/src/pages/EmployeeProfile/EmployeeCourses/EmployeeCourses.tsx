import React, { Suspense } from 'react';
import InputAdornment from '@material-ui/core/InputAdornment';
import { Divider } from '@mui/material';

import { NoContent } from 'components/NoContent';
import { NO_COURSES } from 'constants/messages';
import { SIZE } from 'constants/sizes';
import { ClientCourse } from 'types/clientCourse';
import Loader from 'components/Loader';
import { LOADER } from 'constants/loaderTypes';

import {
  CoursesBox,
  SearchWrapper,
  SearchCourse,
  SearchIcon,
  CoursesList,
  CoursesListItem,
  CoursesDivider,
  NoCourses,
} from './styled';

interface Props {
  courses?: ClientCourse[];
  searchCourseInList: (value: string) => void;
  checkSpace: (event: React.KeyboardEvent) => void;
  checkPastedValue: (value: string) => void;
  searchCourse: string;
}

const UserSkills: React.FC<Props> = ({
  courses,
  searchCourseInList,
  checkSpace,
  checkPastedValue,
  searchCourse,
}) => (
  <CoursesBox>
    <Suspense fallback={<Loader color="primary" type={LOADER.component} />}>
      <SearchWrapper>
        <SearchCourse
          disableUnderline
          placeholder="Search"
          inputProps={{ maxLength: 100 }}
          fullWidth
          startAdornment={
            <InputAdornment position="start">
              <SearchIcon color="disabled" fontSize="medium" />
            </InputAdornment>
          }
          onKeyDown={(event) => {
            checkSpace(event);
          }}
          onChange={(event) => {
            searchCourseInList(event.target.value);
          }}
          onPaste={(event) => {
            event.preventDefault();
            checkPastedValue(event.clipboardData.getData('Text'));
          }}
          value={searchCourse}
        />
        <Divider />
      </SearchWrapper>
      <CoursesList>
        {courses && courses.length ? (
          courses.map((course) => (
            <div key={course.course.title}>
              <CoursesListItem>{course.course.title}</CoursesListItem>
              <CoursesDivider />
            </div>
          ))
        ) : (
          <NoCourses>
            <NoContent message={NO_COURSES} size={SIZE.medium} />
          </NoCourses>
        )}
      </CoursesList>
    </Suspense>
  </CoursesBox>
);

export default UserSkills;
