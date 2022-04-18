import { Page } from 'react-pdf';
import { styled, Box } from '@mui/material';

import theme from 'themeSettings';

export const DocumentBox = styled(Box)({
  display: 'flex',
  justifySelf: 'center',
  alignSelf: 'flex-start',
  width: '1000px',
  margin: '0 auto',
  maxWidth: 'inherit',
  overflowY: 'scroll',
  overflowX: 'hidden',
  height: '75vh',
  '&::-webkit-scrollbar': {
    display: 'none',
  },
  'scrollbar-width': 'none',
  [theme.breakpoints.down('xl')]: {
    width: '100%',
  },
});

export const StyledPage = styled(Page)({
  width: '100vw',
  display: 'block',
});
