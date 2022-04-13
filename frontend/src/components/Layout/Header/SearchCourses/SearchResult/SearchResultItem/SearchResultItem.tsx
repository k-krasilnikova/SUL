import React from 'react';
import { Link } from 'react-router-dom';
import { Box } from '@mui/material';

import CourseInfo from 'components/Course/CourseInfo';
import Label from 'components/Label';
import { INFO } from 'constants/courseInfoTypes';
import { LABEL_MESSAGE } from 'constants/messages';
import { ICourse } from 'types/course';
import { convertDurationToString } from 'utils/helpers/convertDurationToString';

import { Image, CourseTitle, SearchResultCourse } from './styled';

interface CourseFound {
  course: ICourse;
  addDivider: boolean;
  status?: string;
  redirectTo: string;
}

const SearchResultItem: React.FC<CourseFound> = ({ course, status, addDivider, redirectTo }) => (
  <Link key={course._id} to={redirectTo}>
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
  </Link>
);

export default SearchResultItem;
