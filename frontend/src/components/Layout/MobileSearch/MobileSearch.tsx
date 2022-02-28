import React from 'react';
import { Search as SearchIcon, ExpandMore as ExpandMoreIcon } from '@mui/icons-material';
import InputAdornment from '@material-ui/core/InputAdornment';
import { AccordionSummary, AccordionDetails, Typography, ClickAwayListener } from '@mui/material';

import { filterIcon } from 'icons';

import {
  Search,
  FilterButton,
  FilterIcon,
  RelativeWrapper,
  Filter,
  FilterAccordion,
} from './styled';

interface Props {
  isFilterOpen: boolean;
  handleFilterOpen: () => void;
  handleFilterClose: () => void;
}

const MobileSearch: React.FC<Props> = ({ isFilterOpen, handleFilterOpen, handleFilterClose }) => (
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
    />
    <ClickAwayListener onClickAway={handleFilterClose}>
      <RelativeWrapper>
        <FilterButton onClick={handleFilterOpen}>
          <FilterIcon alt="filter" src={filterIcon} />
        </FilterButton>
        {isFilterOpen && (
          <Filter>
            <FilterAccordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon fontSize="small" />}>
                <Typography>Status</Typography>
              </AccordionSummary>
              <AccordionDetails>Statuses here</AccordionDetails>
            </FilterAccordion>
            <FilterAccordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon fontSize="small" />}>
                <Typography>Technology</Typography>
              </AccordionSummary>
              <AccordionDetails>Technologies here</AccordionDetails>
            </FilterAccordion>
          </Filter>
        )}
      </RelativeWrapper>
    </ClickAwayListener>
  </>
);

export default MobileSearch;
