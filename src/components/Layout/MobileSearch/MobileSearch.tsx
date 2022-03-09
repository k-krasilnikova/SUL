import React from 'react';
import { Search as SearchIcon } from '@mui/icons-material';
import InputAdornment from '@material-ui/core/InputAdornment';
import { ClickAwayListener } from '@mui/material';

import { Course } from 'types/course';
import SearchResult from 'components/Layout/Header/SearchResult';

import { Search } from './styled';

interface Props {
  isSearchOpen: boolean;
  searchCourses: (courseName: string) => void;
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
        startAdornment={
          <InputAdornment position="start">
            <SearchIcon color="disabled" fontSize="medium" />
          </InputAdornment>
        }
        onChange={(event) => searchCourses(event.target.value)}
      />
      {isSearchOpen && coursesFound && <SearchResult coursesFound={coursesFound} />}
    </>
  </ClickAwayListener>
);

export default MobileSearch;
