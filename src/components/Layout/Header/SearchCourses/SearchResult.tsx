import React from 'react';

import { Course } from 'types/course';

import SearchResultItemContainer from './SearchResultItemContainer';
import { SearchResultWrapper, NoSearchResults } from './styled';

interface CoursesFound {
  coursesFound: Array<Course>;
}

const LAST_ARRAY_ITEM = -1;

const SearchResult: React.FC<CoursesFound> = ({ coursesFound }) => (
  <SearchResultWrapper>
    {coursesFound.length ? (
      coursesFound.map((course, id, array) => (
        <SearchResultItemContainer
          course={course}
          addDivider={id < array.length + LAST_ARRAY_ITEM}
        />
      ))
    ) : (
      <NoSearchResults>No results</NoSearchResults>
    )}
  </SearchResultWrapper>
);

export default SearchResult;
