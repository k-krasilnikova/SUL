import React from 'react';
import { Link } from 'react-router-dom';
import { Box } from '@mui/material';

import { Course } from 'types/course';
import { PATHS } from 'constants/routes';
import { INFO } from 'constants/coutseInfoTypes';
import CourseInfo from 'components/Course/CourseInfo';

import {
  SearchResultWrapper,
  SearchResultItem,
  Image,
  CourseTitle,
  NoSearchResults,
} from './styled';

interface CoursesFound {
  coursesFound: Array<Course>;
}

const LAST_ARRAY_ITEM = -1;

const SearchResult: React.FC<CoursesFound> = ({ coursesFound }) => (
  <SearchResultWrapper>
    {coursesFound.length ? (
      coursesFound.map((course, id, array) => (
        <Link key={course._id} to={`${PATHS.coursesList}/${course._id}`}>
          <SearchResultItem divider={id < array.length + LAST_ARRAY_ITEM}>
            <Image avatar={course.avatar} />
            <Box>
              <CourseTitle>{course.title}</CourseTitle>
              <CourseInfo
                lessons={course.lessons}
                duration={course.duration}
                type={INFO.searchCourses}
              />
            </Box>
          </SearchResultItem>
        </Link>
      ))
    ) : (
      <NoSearchResults>No results</NoSearchResults>
    )}
  </SearchResultWrapper>
);

export default SearchResult;
