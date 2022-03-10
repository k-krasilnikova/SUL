import React from 'react';
import { Search as SearchIcon } from '@mui/icons-material';
import { ClickAwayListener, InputAdornment } from '@mui/material';

import { Course } from 'types/course';
import { SearchResult } from 'components/Layout/Header/SearchCourses';

import { Search, RelativeWrapper } from './styled';

interface Props {
  isSearchOpen: boolean;
  searchCourses: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSearchClose: () => void;
  coursesFound?: Array<Course>;
}

const SearchCourses: React.FC<Props> = ({
  isSearchOpen,
  searchCourses,
  handleSearchClose,
  coursesFound,
}) => (
  <ClickAwayListener onClickAway={handleSearchClose}>
    <RelativeWrapper>
      <Search
        className="search"
        disableUnderline
        placeholder="Search"
        startAdornment={
          <InputAdornment position="start">
            <SearchIcon color="disabled" fontSize="medium" />
          </InputAdornment>
        }
        onChange={searchCourses}
      />
      {isSearchOpen && coursesFound && <SearchResult coursesFound={coursesFound} />}
    </RelativeWrapper>
  </ClickAwayListener>
);

export default SearchCourses;
