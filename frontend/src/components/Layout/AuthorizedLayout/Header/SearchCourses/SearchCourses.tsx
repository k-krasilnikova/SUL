import React from 'react';
import { ClickAwayListener } from '@material-ui/core';

import { SearchResult } from 'components/Layout/components';
import { ICourse } from 'types/course';

import { Search, RelativeWrapper } from './styled';

interface Props {
  isSearchOpen: boolean;
  searchCourses: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSearchClose: () => void;
  checkSpace: (event: React.KeyboardEvent) => void;
  checkPastedValue: (event: React.ClipboardEvent) => void;
  isSearchLoading: boolean;
  searchInputValue: string;
  coursesFound?: ICourse[];
}

const SearchCourses: React.FC<Props> = ({
  isSearchOpen,
  searchCourses,
  handleSearchClose,
  coursesFound,
  checkSpace,
  checkPastedValue,
  searchInputValue,
  isSearchLoading,
}) => (
  <ClickAwayListener onClickAway={handleSearchClose}>
    <RelativeWrapper>
      <Search
        className="search"
        disableUnderline
        onChange={searchCourses}
        onKeyDown={checkSpace}
        onPaste={checkPastedValue}
        value={searchInputValue}
      />
      {isSearchOpen && !!searchInputValue.length && (
        <SearchResult
          coursesFound={coursesFound}
          handleSearchClose={handleSearchClose}
          isSearchLoading={isSearchLoading}
        />
      )}
    </RelativeWrapper>
  </ClickAwayListener>
);

export default SearchCourses;
