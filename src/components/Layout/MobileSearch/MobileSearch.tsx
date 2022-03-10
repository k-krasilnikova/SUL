import React from 'react';
import { Search as SearchIcon } from '@mui/icons-material';
import { ClickAwayListener, InputAdornment } from '@mui/material';

import { Course } from 'types/course';
import { SearchResult } from 'components/Layout/Header/SearchCourses';

import { Search } from './styled';

interface Props {
  isSearchOpen: boolean;
  searchCourses: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSearchClose: () => void;
  coursesFound?: Array<Course>;
}

const MobileSearch: React.FC<Props> = ({
  isSearchOpen,
  searchCourses,
  handleSearchClose,
  coursesFound,
}) => (
  <ClickAwayListener onClickAway={handleSearchClose}>
    <>
      <Search
        className="search"
        disableUnderline
        placeholder="Search"
        inputProps={{ maxLength: 50 }}
        startAdornment={
          <InputAdornment position="start">
            <SearchIcon color="disabled" fontSize="medium" />
          </InputAdornment>
        }
        onChange={searchCourses}
      />
      {isSearchOpen && coursesFound && <SearchResult coursesFound={coursesFound} />}
    </>
  </ClickAwayListener>
);

export default MobileSearch;
