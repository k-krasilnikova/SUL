import { Link } from 'react-router-dom';
import { styled, Grid } from '@mui/material';

import theme from 'themeSettings';

interface MobileMenuProps {
  openMenu: boolean;
}
export const HEADER_HEIGHT = '80px';
export const HEADER_HEIGHT_IPAD = '60px';
export const HEADER_HEIGHT_MOBILE = '44px';
export const INPUT_HEIGHT_WITH_PADDING = '50px';

const SCREEN_WIDTH = 1130;

export const LayoutHeader = styled(Grid)({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  height: HEADER_HEIGHT,
  padding: '0 32px 0 40px',
  backgroundColor: theme.palette.secondary.main,
  [theme.breakpoints.down('xl')]: {
    height: HEADER_HEIGHT_IPAD,
    padding: '0 32px',
  },
  [theme.breakpoints.down('md')]: {
    height: HEADER_HEIGHT_MOBILE,
    padding: '0 12px',
  },
});

export const BrandLogoLink = styled(Link)({
  paddingRight: '160px',
  [theme.breakpoints.down('xl')]: {
    paddingRight: '100px',
  },
  [theme.breakpoints.down(SCREEN_WIDTH)]: {
    paddingRight: '30px',
  },
});

export const BrandLogo = styled('img')({
  width: '130px',
  [theme.breakpoints.down('xl')]: {
    width: '104px',
  },
  [theme.breakpoints.down('md')]: {
    width: '78px',
  },
});
export const HeaderContent = styled('div')({
  display: 'flex',
  alignItems: 'center',
  flexGrow: '1',
  height: HEADER_HEIGHT,
  [theme.breakpoints.up('xs')]: {
    height: HEADER_HEIGHT_MOBILE,
  },
  [theme.breakpoints.down(SCREEN_WIDTH)]: {
    justifyContent: 'flex-end',
  },
  [theme.breakpoints.up('md')]: {
    height: HEADER_HEIGHT_IPAD,
  },
  [theme.breakpoints.up('xl')]: {
    height: HEADER_HEIGHT,
  },
});

export const UserBlock = styled(Link)({
  fontFamily: theme.typography.fontFamily,
  display: 'flex',
  alignItems: 'center',
  margin: '0 45px 0 auto',
  [theme.breakpoints.down(SCREEN_WIDTH)]: {
    margin: '0 10px 0 0',
  },
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
});

export const UserName = styled('div')({
  maxWidth: '160px',
  marginLeft: '22px',
  fontSize: '18px',
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  [theme.breakpoints.down('md')]: {
    marginLeft: '16px',
  },
});

export const LogOut = styled('div')({
  paddingTop: '3px',
  '&:hover': {
    cursor: 'pointer',
  },
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
});
export const MobileMenuIcon = styled('div')<MobileMenuProps>(({ openMenu }) => ({
  display: 'none',
  transition: 'transform 0.2s ease',
  '&:hover': {
    cursor: 'pointer',
  },
  [theme.breakpoints.down('md')]: {
    display: 'block',
    padding: '8px',
    textAlign: 'center',
    transform: openMenu ? 'rotate(90deg)' : 'none',
  },
}));
