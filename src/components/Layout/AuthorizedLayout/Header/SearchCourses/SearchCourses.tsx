import React from 'react';
import { ClickAwayListener } from '@mui/material';

import { SearchResult } from 'components/Layout/components';
import { ICourse } from 'types/course';

import { Search, RelativeWrapper } from './styled';

interface Props {
  isSearchOpen: boolean;
  searchCourses: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSearchClose: () => void;
  checkSpace: (event: React.KeyboardEvent) => void;
  checkPastedValue: (event: React.ClipboardEvent) => void;
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
      {isSearchOpen && coursesFound && (
        <SearchResult coursesFound={coursesFound} handleSearchClose={handleSearchClose} />
      )}
    </RelativeWrapper>
  </ClickAwayListener>
);

export default SearchCourses;
