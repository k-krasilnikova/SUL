import styled from 'styled-components';
import Grid from '@mui/material/Grid';

import theme from 'themeSettings';

export const GridHeader = styled(Grid)({
  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
  zIndex: '10',
});

export const PageWrapper = styled(Grid)({
  overflowY: 'auto',
  overflowX: 'hidden',
  height: 'calc(100vh - 80px)',
});

export const MenuGrid = styled(Grid)({
  [theme.breakpoints.down('lg')]: {
    display: 'none',
  },
});

export const MobileMenu = styled('div')({
  width: '176px',
  height: '100%',
  backgroundColor: '#ffffff',
  zIndex: '8',
  position: 'absolute',
  top: '0px',
  right: '0px',
});

export const MobileMenuBackground = styled('div')({
  margin: '0px',
  padding: '0px',
  zIndex: '5',
  width: '100%',
  height: '100%',
  backgroundColor: '#000000',
  opacity: '0.57',
  position: 'absolute',
  top: '0px',
  left: '0px',
  overflow: 'hidden',
});
