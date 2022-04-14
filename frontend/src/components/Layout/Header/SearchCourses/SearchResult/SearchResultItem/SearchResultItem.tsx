import React from 'react';
import { Box } from '@mui/material';

import CourseInfo from 'components/Course/CourseInfo';
import Label from 'components/Label';
import { INFO } from 'constants/courseInfoTypes';
import { LABEL_MESSAGE } from 'constants/messages';
import { convertDurationToString } from 'utils/helpers/convertDurationToString';

import { Image, CourseTitle, SearchResultCourse, RedirectButton } from './styled';
import { ISearchResultItem } from '../../types';

const SearchResultItem: React.FC<ISearchResultItem> = ({
  course,
  status,
  addDivider,
  handleSelectFoundCourse,
}) => (
  <RedirectButton key={course._id} id={course._id} onClick={handleSelectFoundCourse}>
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
