import React from 'react';

import { ICourse } from 'types/course';
import { NO_RESULTS } from 'constants/messages';

import { NoSearchResults, SearchResultWrapper } from './styled';
import SearchResultItem from './SearchResultItem';

interface CoursesFound {
  coursesFound: ICourse[];
  foundInMyCourses?: string;
}

const LAST_ARRAY_ITEM = -1;

const SearchResult: React.FC<CoursesFound> = ({ coursesFound, foundInMyCourses }) => (
  <SearchResultWrapper>
    {coursesFound.length ? (
      coursesFound.map((course, id, array) => (
        <SearchResultItem
          course={course}
          addDivider={id < array.length + LAST_ARRAY_ITEM}
          foundInMyCoursesId={foundInMyCourses}
        />
      ))
    ) : (
      <NoSearchResults>{NO_RESULTS}</NoSearchResults>
    )}
  </SearchResultWrapper>
);

export default SearchResult;
