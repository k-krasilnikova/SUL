import React from 'react';
import { ClickAwayListener } from '@mui/material';

import { Course } from 'types/course';
import SearchResult from 'components/Layout/Header/SearchCourses/SearchResult';

import { Search, RelativeWrapper } from './styled';

interface Props {
  isSearchOpen: boolean;
  searchCourses: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSearchClose: () => void;
  checkSpace: (event: React.KeyboardEvent) => void;
  checkPastedValue: (event: React.ClipboardEvent) => void;
  searchInputValue: string;
  coursesFound?: Array<Course>;
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
      {isSearchOpen && coursesFound && <SearchResult coursesFound={coursesFound} />}
    </RelativeWrapper>
  </ClickAwayListener>
);

export default SearchCourses;
