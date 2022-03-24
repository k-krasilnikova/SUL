import React, { Suspense } from 'react';
import InputAdornment from '@material-ui/core/InputAdornment';
import { Divider } from '@mui/material';
import { Search } from '@mui/icons-material';

import { NoContent } from 'components/NoContent';
import { NO_USER_COURSES } from 'constants/messages';
import { SIZE } from 'constants/sizes';
import { ClientCourse } from 'types/clientCourse';
import Loader from 'components/Loader';
import { LOADER } from 'constants/loaderTypes';
import { ProgressBar } from 'components/ProgressBar';
import { countProgress } from 'utils/helpers/countCourseProgress';
import { setFirstLetterUppercase } from 'utils/helpers/setFirstLetterUppercase';

import {
  CoursesBox,
  SearchWrapper,
  SearchCourse,
  CoursesList,
  CoursesListItem,
  CourseItemText,
  CourseTitle,
  CourseStatus,
  CoursesDivider,
  NoCourses,
} from './styled';

interface Props {
  searchCourseInList: (event: React.ChangeEvent<HTMLInputElement>) => void;
  checkSpace: (event: React.KeyboardEvent) => void;
  checkPastedValue: (event: React.ClipboardEvent) => void;
  searchCourse: string;
  courses?: ClientCourse[];
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
              <Search color="disabled" fontSize="medium" />
            </InputAdornment>
          }
          onKeyDown={checkSpace}
          onChange={searchCourseInList}
          onPaste={checkPastedValue}
          value={searchCourse}
        />
        <Divider />
      </SearchWrapper>
      <CoursesList>
        {courses?.length ? (
          courses.map((course, id, coursesArray) => (
            <div key={course.course.title}>
              <CoursesListItem>
                <ProgressBar size={SIZE.small} value={countProgress(course.progress)} />
                <CourseItemText>
                  <CourseTitle>{course.course.title}</CourseTitle>
                  <CourseStatus>{setFirstLetterUppercase(course.status)}</CourseStatus>
                </CourseItemText>
              </CoursesListItem>
              {id < coursesArray.length - 1 && <CoursesDivider />}
            </div>
          ))
        ) : (
          <NoCourses>
            <NoContent message={NO_USER_COURSES} size={SIZE.medium} />
          </NoCourses>
        )}
      </CoursesList>
    </Suspense>
  </CoursesBox>
);

export default UserSkills;
