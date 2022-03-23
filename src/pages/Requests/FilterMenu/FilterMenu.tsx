import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { SelectChangeEvent } from '@mui/material/Select';
import { Box, Select } from '@mui/material';

import { arrowDown, arrowUp } from 'icons';

import { FilterIcon } from './styled';

const FilterMenu: React.FC = () => {
  const [age, setAge] = React.useState('');
  const [filterMenuOpen, setFilterMenuOpen] = React.useState(false);

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  const handleFilterMenuClose = () => {
    setFilterMenuOpen(false);
  };

  const handleFilterMenuOpen = () => {
    setFilterMenuOpen(true);
  };

  const FilterImg = () => (
    <FilterIcon alt="filterMenu" src={filterMenuOpen ? arrowUp : arrowDown} />
  );

  return (
    <Box sx={{}}>
      <FormControl sx={{ m: 1, minWidth: 158 }}>
        <Select
          sx={{
            height: '26px',
            fontSize: '14px',
            color: '#2c2525',
            textAlign: 'center',
            borderRadius: '2.4px',
          }}
          value={age}
          onChange={handleChange}
          onOpen={handleFilterMenuOpen}
          onClose={handleFilterMenuClose}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
          IconComponent={FilterImg}
        >
          <MenuItem value="">Everything</MenuItem>
          <MenuItem value="All">All</MenuItem>
          <MenuItem value="Accepted">Accepted</MenuItem>
          <MenuItem value="Rejected">Rejected</MenuItem>
          <MenuItem value="Pending">Pending</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default FilterMenu;
