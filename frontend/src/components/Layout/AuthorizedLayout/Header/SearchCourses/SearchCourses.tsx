import React from 'react';
import { ClickAwayListener } from '@material-ui/core';

import { ICourse } from 'types/course';
import { SearchResult } from 'components/Layout/components';
import { search } from 'icons';

import { Search, RelativeWrapper, SearchButton, SearchIconStyled } from './styled';

interface Props {
  isSearchOpen: boolean;
  searchCourses: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSearchClose: () => void;
  checkSpace: (event: React.KeyboardEvent) => void;
  checkPastedValue: (event: React.ClipboardEvent) => void;
  isSearchCoursesLoading: boolean;
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
  isSearchCoursesLoading,
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
      <SearchButton onClick={handleMobileSearch}>
        <SearchIconStyled src={search} alt="search" isOpen={isMobileSearchOpen} />
      </SearchButton>
      {isSearchOpen && (
        <SearchResult
          coursesFound={coursesFound}
          handleSearchClose={handleSearchClose}
          isSearchLoading={isSearchCoursesLoading}
        />
      )}
    </RelativeWrapper>
  </ClickAwayListener>
);

export default SearchCourses;
