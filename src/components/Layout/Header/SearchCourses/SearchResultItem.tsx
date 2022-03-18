import React from 'react';
import { Link } from 'react-router-dom';
import { Box } from '@mui/material';

import CourseInfo from 'components/Course/CourseInfo';
import { Label } from 'components/Label';
import { PATHS } from 'constants/routes';
import { INFO } from 'constants/coutseInfoTypes';
import { Course } from 'types/course';
import { convertDurationToString } from 'utils/helpers/convertDurationToString';

import { Image, CourseTitle, SearchResultCourse } from './styled';

interface CourseFound {
  course: Course;
  addDivider: boolean;
  foundInMyCourses: string | undefined;
  status: string | undefined;
}

const LABEL_MESSAGE = 'New';

const SearchResultItem: React.FC<CourseFound> = ({
  course,
  status,
  foundInMyCourses,
  addDivider,
}) => (
  <Link
    key={course._id}
    to={
      foundInMyCourses
        ? `${PATHS.myCourses}/${foundInMyCourses}`
        : `${PATHS.coursesList}/${course._id}`
    }
  >
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
