import React from 'react';
import { Search as SearchIcon } from '@mui/icons-material';
import { ClickAwayListener, InputAdornment } from '@mui/material';

import { SearchResult } from 'components/Layout/components';
import { ICourse } from 'types/course';

import { Search } from './styled';

interface Props {
  isSearchOpen: boolean;
  searchCourses: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSearchClose: () => void;
  checkSpace: (event: React.KeyboardEvent) => void;
  coursesFound?: ICourse[];
}

const MobileSearch: React.FC<Props> = ({
  isSearchOpen,
  searchCourses,
  handleSearchClose,
  coursesFound,
  checkSpace,
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
        onKeyDown={checkSpace}
        onChange={searchCourses}
      />
      {isSearchOpen && coursesFound && (
        <SearchResult coursesFound={coursesFound} handleSearchClose={handleSearchClose} />
      )}
    </>
  </ClickAwayListener>
);

export default MobileSearch;
