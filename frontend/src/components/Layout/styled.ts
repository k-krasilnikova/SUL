import { makeStyles } from '@material-ui/core';
import styled from 'styled-components';
import Grid from '@mui/material/Grid';

import theme from 'themeSettings';

import { HEADER_HEIGHT, HEADER_HEIGHT_IPAD, HEADER_HEIGHT_MOBILE } from './Header/styled';

export const GridHeader = styled(Grid)({
  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
  zIndex: '10',
});

export const GridMenu = styled(Grid)({
  '@media(max-width: 1110px)': {
    display: 'none',
  },
  '@media(min-width: 1110px)': {
    display: 'block',
    width: '205px',
  },
  [theme.breakpoints.up('xl')]: {
    width: '303px',
  },
});

export const PageWrapper = styled(Grid)({
  overflowY: 'auto',
  overflowX: 'hidden',
  width: '100%',
  paddingRight: '30px !important',
  paddingTop: '1% !important',
  paddingLeft: '0px !important',
  height: `calc(100vh - ${HEADER_HEIGHT})`,
  [theme.breakpoints.down('xl')]: {
    padding: '0px 8px !important',
    paddingTop: '1% !important',
  },
  [theme.breakpoints.down('lg')]: {
    padding: '0px 8px !important',
    paddingTop: '0px !important',
    height: `calc(100vh - ${HEADER_HEIGHT_IPAD}})`,
  },
  [theme.breakpoints.down('md')]: {
    height: `calc(100vh - ${HEADER_HEIGHT_MOBILE})`,
  },
});

export const useLayOutStyles = makeStyles({
  hideGridMenu: {
    width: '129px',
    '@media(min-width: 1110px)': {
      width: '86px!important',
    },
    [theme.breakpoints.up('xl')]: {
      width: '129px!important',
    },
  },
  hidePageWrapper: {
    '@media(max-width: 1110px)': {
      width: '100%!important',
    },
    '@media(min-width: 1110px)': {
      width: 'calc(100% - 205px)!important',
    },
    [theme.breakpoints.up('xl')]: {
      width: 'calc(100% - 303px)!important',
    },
  },
  showPageWrapper: {
    '@media(max-width: 1110px)': {
      width: '100%!important',
    },
    '@media(min-width: 1110px)': {
      width: `calc(100% - 86px)!important`,
    },
    [theme.breakpoints.up('xl')]: {
      width: `calc(100% - 129px)!important`,
    },
  },
});
