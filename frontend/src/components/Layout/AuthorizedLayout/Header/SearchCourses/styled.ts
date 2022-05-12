import { styled } from '@mui/material';

import SearchInput from 'components/SearchInput';
import theme from 'themeSettings';

export const Search = styled(SearchInput)({
  flexGrow: 0,
  flexShrink: '1',
  borderRadius: '3px',
  backgroundColor: 'rgba(118, 118, 128, 0.12)',
  color: '#3c3c43',
  height: '40px',
  width: '460px',
  padding: '10px',
  margin: '15px 20px 15px 0',
  fontSize: '18px',
  [theme.breakpoints.up(1920)]: {
    width: '600px',
  },
  [theme.breakpoints.down('lg')]: {
    width: '300px',
  },
  [theme.breakpoints.down(950)]: {
    display: 'none',
  },
});

export const RelativeWrapper = styled('div')({
  position: 'relative',
});