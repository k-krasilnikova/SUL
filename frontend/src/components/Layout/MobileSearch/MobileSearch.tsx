import React from 'react';
import { Search as SearchIcon } from '@mui/icons-material';
import InputAdornment from '@material-ui/core/InputAdornment';

import { Search } from './styled';

const MobileSearch: React.FC = () => (
  <Search
    className="search"
    disableUnderline
    placeholder="Search"
    startAdornment={
      <InputAdornment position="start">
        <SearchIcon color="disabled" fontSize="medium" />
      </InputAdornment>
    }
  />
);

export default MobileSearch;
