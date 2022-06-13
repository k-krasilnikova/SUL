import React from 'react';

import { NO_RESULTS } from 'constants/messages';
import Loader from 'components/Loader';

import { NoSearchResults, SearchResultWrapper } from './styled';
import SearchResultItem from './SearchResultItem';
import { ISearchResultProps } from '../types';

const LAST_ARRAY_ITEM = -1;

const SearchResult: React.FC<ISearchResultProps> = ({
  coursesFound,
  handleSearchClose,
  isSearchLoading,
}) => (
  <SearchResultWrapper>
    {!isSearchLoading ? (
      coursesFound?.length ? (
        coursesFound.map((course, index, array) => {
          const isDividerVisible = index < array.length + LAST_ARRAY_ITEM;
          return (
            <SearchResultItem
              key={course._id}
              course={course}
              addDivider={isDividerVisible}
              handleSearchClose={handleSearchClose}
            />
          );
        })
      ) : (
        <NoSearchResults>{NO_RESULTS}</NoSearchResults>
      )
    ) : (
      <Loader type="component" />
    )}
  </SearchResultWrapper>
);

export default SearchResult;
