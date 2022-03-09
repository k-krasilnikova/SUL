import styled from 'styled-components';
import { Input } from '@mui/material';

import theme from 'themeSettings';

export const Search = styled(Input)({
  borderRadius: '3px',
  backgroundColor: 'rgba(118, 118, 128, 0.12)',
  color: '#3c3c43',
  padding: '8px',
  [theme.breakpoints.up('xs')]: {
    display: 'inline-flex!important',
    width: '100%',
    height: '30px',
    marginRight: '8px',
  },
  '@media(min-width: 1110px)': {
    display: 'none!important',
  },
});
