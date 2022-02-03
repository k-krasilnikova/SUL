import styled from 'styled-components';
import Grid from '@mui/material/Grid';

import theme from 'themeSettings';

export const GridHeader = styled(Grid)({
  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
  zIndex: '10',
});

export const PageWrapper = styled(Grid)({
  overflowY: 'auto',
  height: 'calc(100vh - 80px)',
});

export const MenuGrid = styled(Grid)({
  [theme.breakpoints.down('lg')]: {
    display: 'none',
  },
});
