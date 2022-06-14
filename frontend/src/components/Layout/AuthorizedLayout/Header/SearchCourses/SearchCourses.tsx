import React from 'react';
import { ClickAwayListener } from '@material-ui/core';

import { ICourse } from 'types/course';
import { SearchResult } from 'components/Layout/components';
import { Search as SearchIcon } from '@mui/icons-material';

import { Search, RelativeWrapper, SearchButton } from './styled';

interface Props {
  isSearchOpen: boolean;
  searchCourses: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSearchClose: () => void;
  checkSpace: (event: React.KeyboardEvent) => void;
  checkPastedValue: (event: React.ClipboardEvent) => void;
  isSearchLoading: boolean;
  searchInputValue: string;
  handleMobileSearch: () => void;
  isMobileSearchOpen: boolean;
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
  handleMobileSearch,
  isMobileSearchOpen,
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
        isOpen={isMobileSearchOpen}
      />
      <SearchButton>
        <SearchIcon fontSize="large" color="disabled" onClick={handleMobileSearch} />
      </SearchButton>
      {isSearchOpen && (
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
