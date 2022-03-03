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
  width: '303px',
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
  [theme.breakpoints.up('xs')]: {
    padding: '0px 8px !important',
    height: `calc(100vh - ${HEADER_HEIGHT_MOBILE})`,
  },
  [theme.breakpoints.up('md')]: {
    height: `calc(100vh - ${HEADER_HEIGHT_IPAD})`,
  },
  [theme.breakpoints.up('xl')]: {
    height: `calc(100vh - ${HEADER_HEIGHT})`,
    padding: '16px 8px 0 8px !important',
  },
  '@media(max-width: 1110px)': {
    paddingTop: '40px',
  },
  '@media(min-width: 1110px)': {
    padding: '16px 30px 0px 30px !important',
  },
  '@media(min-width: 1440px)': {
    padding: '16px 30px 0px 0px !important',
  },
  width: '100%',
  paddingRight: '30px !important',
  paddingTop: '1.0% !important',
  paddingLeft: '0px !important',
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
