import { FC } from 'react';
import { Input as MuiInput, InputAdornment, InputProps } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';

const SearchInput: FC<InputProps> = (props) => (
  <MuiInput
    inputProps={{ maxLength: 100 }}
    placeholder="Search"
    startAdornment={
      <InputAdornment position="start">
        <SearchIcon color="disabled" fontSize="medium" />
      </InputAdornment>
    }
    {...props}
  />
);

export default SearchInput;
