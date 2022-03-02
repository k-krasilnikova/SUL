import styled from 'styled-components';
import { Input, Grid } from '@mui/material';
import { Link } from 'react-router-dom';

import theme from 'themeSettings';

interface MobileMenuProps {
  openMenu: boolean;
}

export const HEADER_HEIGHT = '80px';
export const HEADER_HEIGHT_IPAD = '60px';
export const HEADER_HEIGHT_MOBILE = '44px';

export const LayoutHeader = styled(Grid)({
  width: 'calc(100vw-10px)',
  height: HEADER_HEIGHT,
  display: 'flex',
  justifyContent: 'flex-start',
  backgroundColor: theme.palette.secondary.main,
  fontFamily: '"Ubuntu", sans-serif',
  [theme.breakpoints.up('xs')]: {
    height: HEADER_HEIGHT_MOBILE,
  },
  [theme.breakpoints.up('md')]: {
    height: HEADER_HEIGHT_IPAD,
  },
  [theme.breakpoints.up('xl')]: {
    height: HEADER_HEIGHT,
  },
  position: 'relative',
});
export const BrandLogoLink = styled(Link)({
  flexGrow: '0',
  flexShrink: '0',
  [theme.breakpoints.up('xs')]: {
    width: '77.33px',
    margin: '14px 10px 12px 12px',
    quality: '100',
  },
  [theme.breakpoints.up('md')]: {
    width: '101.75px',
    margin: '19px 30px 16px 32px',
    quality: '100',
  },
  '@media(min-width: 1110px)': {
    margin: '19px 48px 16px 32px',
  },
  [theme.breakpoints.up('xl')]: {
    width: '130px',
    margin: '28px 163px 28px 40px',
  },
});
export const BrandLogo = styled('img')({
  [theme.breakpoints.up('xs')]: {
    width: '79px',
  },
  [theme.breakpoints.up('md')]: {
    width: '105px',
  },
  [theme.breakpoints.up('xl')]: {
    width: '130px',
  },
});
export const HeaderContent = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  flexGrow: '2',
  flexShrink: '2',
  height: HEADER_HEIGHT,
  textAlign: 'right',
  [theme.breakpoints.down('md')]: {
    width: 'calc(100% - 101px)',
  },
  [theme.breakpoints.up('xs')]: {
    height: HEADER_HEIGHT_MOBILE,
  },
  [theme.breakpoints.up('md')]: {
    height: HEADER_HEIGHT_IPAD,
  },
  [theme.breakpoints.up('xl')]: {
    height: HEADER_HEIGHT,
  },
});
export const SpaceHolder = styled('div')({
  flexGrow: '4',
  flexShrink: '2',
  height: '100%',
  [theme.breakpoints.up('xs')]: {
    display: 'none',
  },
  '@media(min-width: 1110px)': {
    display: 'block',
    maxWidth: '1000px',
  },
});
export const Search = styled(Input)({
  flexGrow: '0',
  flexShrink: '1',
  borderRadius: '3px',
  backgroundColor: 'rgba(118, 118, 128, 0.12)',
  color: '#3c3c43',
  height: '40px',
  width: '460px',
  padding: '10px',
  margin: '15px 20px 15px 0px',
  fontSize: '18px',
  [theme.breakpoints.down(950)]: {
    display: 'none!important',
  },
  [theme.breakpoints.up(1920)]: {
    width: '600px',
  },
});
export const RelativeWrapper = styled('div')({
  position: 'relative',
});
export const NotificationsButton = styled('div')({
  position: 'relative',
  flexGrow: '0',
  flexShrink: '0',
  borderRadius: '3px',
  backgroundColor: 'rgba(118, 118, 128, 0.12)',
  width: '40px',
  height: '40px',
  margin: '15px 20px 15px 0px',
  padding: '5px',
  display: 'flex',
  justifyContent: 'center',
  '&:hover': {
    cursor: 'pointer',
  },
  [theme.breakpoints.down('md')]: {
    width: '35px',
    height: '35px',
  },
});

export const UserBlock = styled(Link)({
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
  '@media(min-width: 1110px)': {
    display: 'flex',
    height: '50px',
    padding: '3px',
    margin: '5px 30px 5px 10px',
  },
  [theme.breakpoints.up('xl')]: {
    height: '60px',
    padding: '6px',
    margin: '10px 45px 10px 20px',
  },
});
export const UserName = styled('div')({
  color: 'black',
  fontFamily: '"Ubuntu", sans-serif',
  fontWeight: '400',
  fontSize: '18px',
  padding: '0px 10px 0px 0px',
  marginLeft: '22px',
  [theme.breakpoints.down('md')]: {
    marginLeft: '16px',
    padding: '0px 5px 0px 0px',
  },
});
export const LogOut = styled('div')({
  flexGrow: '0',
  flexShrink: '0',
  display: 'block',
  width: '40px',
  height: '30px',
  margin: '15px 16px 15px 0px',
  padding: '3px 0px 0px 0px',
  '&:hover': {
    cursor: 'pointer',
  },
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
});
export const MobileMenuIcon = styled('div')<MobileMenuProps>(({ openMenu }) => ({
  display: 'none',
  '&:hover': {
    cursor: 'pointer',
  },
  [theme.breakpoints.down('md')]: {
    display: 'block',
    width: '18px',
    height: '12px',
    textAlign: 'center',
    margin: '15px 17px 16px 6px',
    transform: openMenu ? 'rotate(90deg) translateX(2px) translateY(-5px)' : 'none',
  },
}));
