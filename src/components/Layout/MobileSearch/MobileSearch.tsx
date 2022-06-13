import React from 'react';
import { Search as SearchIcon } from '@mui/icons-material';
import { InputAdornment } from '@mui/material';
import { ClickAwayListener } from '@material-ui/core';

import { SearchResult } from 'components/Layout/components';
import { ICourse } from 'types/course';

import { Search } from './styled';

interface Props {
  isSearchOpen: boolean;
  searchCourses: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSearchClose: () => void;
  checkSpace: (event: React.KeyboardEvent) => void;
  isSearchLoading: boolean;
  coursesFound?: ICourse[];
}

const MobileSearch: React.FC<Props> = ({
  isSearchOpen,
  searchCourses,
  handleSearchClose,
  coursesFound,
  checkSpace,
  isSearchLoading,
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
        <SearchResult
          coursesFound={coursesFound}
          handleSearchClose={handleSearchClose}
          isSearchLoading={isSearchLoading}
        />
      )}
    </>
  </ClickAwayListener>
);

export default MobileSearch;
