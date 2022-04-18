import { makeStyles } from '@material-ui/core';
import { styled, Grid } from '@mui/material';

import theme from 'themeSettings';

import { HEADER_HEIGHT, HEADER_HEIGHT_IPAD, HEADER_HEIGHT_MOBILE } from './Header/styled';

export const GridHeader = styled(Grid)({
  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
  zIndex: '10',
});

export const GridMenu = styled(Grid)({
  width: '275px',
  display: 'block',
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
});

export const PageWrapper = styled(Grid)({
  overflowY: 'auto',
  overflowX: 'hidden',
  [theme.breakpoints.up('xs')]: {
    height: `calc(100vh - ${HEADER_HEIGHT_MOBILE})`,
  },
  [theme.breakpoints.up('md')]: {
    height: `calc(100vh - ${HEADER_HEIGHT_IPAD})`,
  },
  [theme.breakpoints.up('xl')]: {
    height: `calc(100vh - ${HEADER_HEIGHT})`,
  },
});

export const useLayOutStyles = makeStyles({
  hideGridMenu: {
    width: '129px!important',
  },
  hidePageWrapper: {
    width: 'calc(100% - 275px)!important',
    [theme.breakpoints.down('md')]: {
      width: '100%!important',
    },
  },
  showPageWrapper: {
    width: `calc(100% - 129px)!important`,
    [theme.breakpoints.down('md')]: {
      width: '100%!important',
    },
  },
});
