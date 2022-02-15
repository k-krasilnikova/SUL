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
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
  [theme.breakpoints.up('md')]: {
    width: '205px',
  },
  [theme.breakpoints.up('xl')]: {
    width: '303px',
  },
});

export const PageWrapper = styled(Grid)({
  overflowY: 'auto',
  overflowX: 'hidden',
  height: 'calc(100vh - 80px)',
});

export const useLayOutStyles = makeStyles({
  hideGridMenu: {
    width: '129px !important',
    [theme.breakpoints.up('md')]: {
      width: '82px !important',
    },
    [theme.breakpoints.up('xl')]: {
      width: '129px !important',
    },
  },
  hidePageWrapper: {
    [theme.breakpoints.down('md')]: {
      width: '100%',
    },

    [theme.breakpoints.up('md')]: {
      width: 'calc(100% - 205px) !important',
    },
    [theme.breakpoints.up('xl')]: {
      width: 'calc(100% - 303px) !important',
    },
  },
  showPageWrapper: {
    [theme.breakpoints.down('md')]: {
      width: '100%',
    },
    [theme.breakpoints.up('md')]: {
      width: `calc(100% - 82px)`,
    },
    [theme.breakpoints.up('xl')]: {
      width: `calc(100% - 129px)`,
    },
  },
});
