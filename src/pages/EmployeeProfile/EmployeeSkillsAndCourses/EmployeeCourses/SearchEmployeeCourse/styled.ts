import { Input } from '@mui/material';
import { styled } from '@mui/styles';

import theme from 'themeSettings';

export const SearchWrapper = styled('div')({
  [theme.breakpoints.up('xl')]: {
    marginLeft: '63px',
  },
});

export const SearchInput = styled(Input)({
  fontSize: '18px',
  [theme.breakpoints.down('sm')]: {
    fontSize: '16px',
    lineHeight: '33.61px',
  },
});
