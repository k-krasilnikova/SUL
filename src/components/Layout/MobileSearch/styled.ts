import styled from 'styled-components';
import { Input, Accordion } from '@mui/material';

import theme from 'themeSettings';

export const Search = styled(Input)({
  borderRadius: '3px',
  backgroundColor: 'rgba(118, 118, 128, 0.12)',
  color: '#3c3c43',
  padding: '8px',
  [theme.breakpoints.up('xs')]: {
    display: 'inline-flex!important',
    width: 'calc(100% - 38px)',
    height: '30px',
    marginRight: '8px',
  },
  '@media(min-width: 1110px)': {
    display: 'none!important',
  },
});
export const FilterButton = styled('div')({
  borderRadius: '3px',
  backgroundColor: 'rgba(118, 118, 128, 0.12)',
  '&:hover': {
    cursor: 'pointer',
  },
  height: '30px',
  width: '30px',
  paddingLeft: '3px',
  [theme.breakpoints.up('xs')]: {
    display: 'inline-block',
  },
  '@media(min-width: 1110px)': {
    display: 'none',
  },
});
export const FilterIcon = styled('img')({
  transform: 'scale(0.6)',
});
export const RelativeWrapper = styled('div')({
  position: 'relative',
  display: 'inline-block',
});
export const Filter = styled('div')({
  position: 'absolute',
  zIndex: '15',
  backgroundColor: '#FFFFFF',
  borderRadius: '3px',
  boxShadow: '0px 4px 4px #00000040',
  [theme.breakpoints.up('xs')]: {
    top: '32px',
    width: '200px',
    right: '0px',
  },
  '@media(min-width: 1110px)': {
    display: 'none',
  },
});
export const FilterAccordion = styled(Accordion)({
  border: 'none',
  boxShadow: 'none',
  padding: '5px',
  fontSize: '12px',
  [theme.breakpoints.up('xs')]: {
    minHeight: '30px',
  },
  '@media(min-width: 1110px)': {
    display: 'none',
  },
});
