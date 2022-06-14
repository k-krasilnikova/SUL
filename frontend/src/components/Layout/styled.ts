import { styled, Grid } from '@mui/material';

import theme from 'themeSettings';

import {
  HEADER_HEIGHT,
  HEADER_HEIGHT_IPAD,
  HEADER_HEIGHT_MOBILE,
} from './AuthorizedLayout/Header/styled';

const MENU_WIDTH = '275px';
const SQUEEZED_MENU_WIDTH = '129px';

export const GridHeader = styled(Grid)({
  zIndex: '10',
  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
});

export const GridMenu = styled(Grid)<{ isSqueeze?: boolean }>(({ isSqueeze }) => ({
  display: 'block',
  width: `${MENU_WIDTH}`,
  ...(isSqueeze && { width: `${SQUEEZED_MENU_WIDTH}` }),
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}));

export const PageWrapper = styled(Grid)<{ isSqueeze?: boolean }>(({ isSqueeze }) => ({
  display: 'flex',
  flexDirection: 'column',
  height: `calc(100vh - ${HEADER_HEIGHT})`,
  width: `calc(100% - ${MENU_WIDTH})`,
  overflowY: 'auto',
  overflowX: 'hidden',
  ...(isSqueeze && { width: `calc(100% - ${SQUEEZED_MENU_WIDTH})` }),
  [theme.breakpoints.down('xl')]: {
    height: `calc(100vh - ${HEADER_HEIGHT_IPAD})`,
  },
  [theme.breakpoints.down('md')]: {
    height: `calc(100vh - ${HEADER_HEIGHT_MOBILE})`,
    width: '100%',
  },
}));
