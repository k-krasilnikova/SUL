import React from 'react';

import { NO_RESULTS } from 'constants/messages';

import { NoSearchResults, SearchResultWrapper } from './styled';
import SearchResultItem from './SearchResultItem';
import { ISearchResultProps } from '../types';

const LAST_ARRAY_ITEM = -1;

const SearchResult: React.FC<ISearchResultProps> = ({
  coursesFound,
  foundInMyCourses,
  handleSearchClose,
}) => (
  <SearchResultWrapper>
    {coursesFound.length ? (
      coursesFound.map((course, index, array) => {
        const isDividerVisible = index < array.length + LAST_ARRAY_ITEM;
        return (
          <SearchResultItem
            key={course._id}
            course={course}
            addDivider={isDividerVisible}
            foundInMyCoursesId={foundInMyCourses}
            handleSearchClose={handleSearchClose}
          />
        );
      })
    ) : (
      <NoSearchResults>{NO_RESULTS}</NoSearchResults>
    )}
  </SearchResultWrapper>
);

export default SearchResult;
