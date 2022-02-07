import { makeStyles } from '@material-ui/core';
import styled from 'styled-components';
import Grid from '@mui/material/Grid';

import theme from 'themeSettings';

export const GridHeader = styled(Grid)({
  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
  zIndex: '10',
});

export const GridMenu = styled(Grid)({
  width: '303px',
  [theme.breakpoints.down('lg')]: {
    display: 'none',
  },
});

export const PageWrapper = styled(Grid)({
  overflowY: 'auto',
  height: 'calc(100vh - 80px)',
});

export const useLayOutStyles = makeStyles({
  hideGridMenu: {
    width: '129px',
  },
  hidePageWrapper: {
    width: 'calc(100% - 303px)',
  },
  showPageWrapper: {
    width: `calc(100% - 129px)`,
  },
});
