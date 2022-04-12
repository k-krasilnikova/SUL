import React from 'react';
import { Box } from '@mui/material';

import CourseInfo from 'components/Course/CourseInfo';
import Label from 'components/Label';
import { INFO } from 'constants/courseInfoTypes';
import { LABEL_MESSAGE } from 'constants/messages';
import { ICourse } from 'types/course';
import { convertDurationToString } from 'utils/helpers/convertDurationToString';

import { Image, CourseTitle, SearchResultCourse, RedirectButton } from './styled';

interface CourseFound {
  course: ICourse;
  addDivider: boolean;
  status?: string;
  onClick: (event: React.MouseEvent<HTMLElement>) => void;
}

const LABEL_MESSAGE = 'New';

const SearchResultItem: React.FC<CourseFound> = ({ course, status, addDivider, onClick }) => (
  <RedirectButton key={course._id} id={course._id} onClick={onClick}>
    <SearchResultCourse divider={addDivider}>
      <Image avatar={course.avatar} />
      <Box>
        <CourseTitle>{course.title}</CourseTitle>
        {!status && <Label label={LABEL_MESSAGE} />}
        <CourseInfo
          lessons={course.lessons}
          duration={convertDurationToString(course.duration)}
          type={INFO.searchCourses}
        />
      </Box>
    </SearchResultCourse>
  </RedirectButton>
);

export default SearchResultItem;
