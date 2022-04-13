import { Search } from '@mui/icons-material';
import { Divider, InputAdornment } from '@mui/material';
import React from 'react';

import { IEmployeeCourses } from 'types/employee';

import { SearchInput, SearchWrapper } from './styled';

const SearchEmployeeCourse: React.FC<IEmployeeCourses> = ({
  searchCourseInList,
  checkSpace,
  checkPastedValue,
  searchCourse,
}) => (
  <SearchWrapper>
    <SearchInput
      disableUnderline
      placeholder="Search"
      inputProps={{ maxLength: 100 }}
      fullWidth
      startAdornment={
        <InputAdornment position="start">
          <Search color="disabled" fontSize="medium" />
        </InputAdornment>
      }
      onKeyDown={checkSpace}
      onChange={searchCourseInList}
      onPaste={checkPastedValue}
      value={searchCourse}
    />
    <Divider />
  </SearchWrapper>
);

export default SearchEmployeeCourse;
