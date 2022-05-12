import React from 'react';
import { Box } from '@mui/material';

import { LABEL_MESSAGE } from 'constants/messages';
import CourseInfo from 'components/Course/CourseInfo';
import Label from 'components/Label';
import { convertDurationToString } from 'utils/helpers/convertDurationToString';
import { Info } from 'enums/info';
import { ISearchResultItem } from 'components/Layout/components/types';

import { Image, CourseTitle, SearchResultCourse, RedirectButton } from './styled';

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
          type={Info.searchCourses}
        />
      </Box>
    </SearchResultCourse>
  </RedirectButton>
);

export default SearchResultItem;
