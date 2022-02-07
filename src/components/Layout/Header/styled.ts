import styled from 'styled-components';
import { Input, Grid, Accordion } from '@mui/material';
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
    width: '79px',
    margin: '14px 140px 12px 12px',
  },
  [theme.breakpoints.up('md')]: {
    width: '105px',
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
  flexGrow: '2',
  flexShrink: '2',
  display: 'flex',
  justifyContent: 'flex-end',
  height: HEADER_HEIGHT,
  textAlign: 'right',
});
export const SpaceHolder = styled('div')({
  flexGrow: '4',
  flexShrink: '2',
  height: HEADER_HEIGHT,
  [theme.breakpoints.up('xs')]: {
    display: 'none',
  },
  [theme.breakpoints.up('lg')]: {
    display: 'block',
    maxWidth: '1000px',
  },
});
export const Search = styled(Input)({
  flexGrow: '0',
  flexShrink: '1',
  borderRadius: '3px',
  padding: '10px',
  backgroundColor: 'rgba(118, 118, 128, 0.12)',
  color: '#3c3c43',
  [theme.breakpoints.up('xs')]: {
    display: 'none!important',
  },
  [theme.breakpoints.up('lg')]: {
    display: 'inline-flex!important',
    width: '463px!important',
    height: '44px',
    fontSize: '16px',
    margin: '8px 20px 8px 0px',
  },
  [theme.breakpoints.up('xl')]: {
    height: '50px',
    fontSize: '24px',
    margin: '15px 20px 15px 0px',
  },
  '@media(min-width: 1530px)': {
    width: '730px!important',
  },
});
export const RelativeWrapper = styled('div')({
  position: 'relative',
});
export const NotificationsButton = styled('div')({
  flexGrow: '0',
  flexShrink: '0',
  borderRadius: '3px',
  backgroundColor: 'rgba(118, 118, 128, 0.12)',
  '&:hover': {
    cursor: 'pointer',
  },
  [theme.breakpoints.up('xs')]: {
    width: '50px',
    height: '50px',
    margin: '-2px 0px 12px 0px',
    padding: '10px',
    transform: 'scale(0.6)',
  },
  [theme.breakpoints.up('md')]: {
    transform: 'none',
    width: '44px',
    height: '44px',
    margin: '8px 16px 8px 0px',
    padding: '8px',
  },
  [theme.breakpoints.up('xl')]: {
    width: '50px',
    height: '50px',
    margin: '15px 20px 15px 0px',
    padding: '10px',
  },
});
export const FilterButton = styled('div')({
  flexGrow: '0',
  flexShrink: '0',
  borderRadius: '3px',
  backgroundColor: 'rgba(118, 118, 128, 0.12)',
  '&:hover': {
    cursor: 'pointer',
  },
  [theme.breakpoints.up('xs')]: {
    display: 'none!important',
  },
  [theme.breakpoints.up('md')]: {
    display: 'block!important',
    width: '44px',
    height: '44px',
    marginTop: '8px',
    padding: '8px 9px 10px 6px',
  },
  [theme.breakpoints.up('lg')]: {
    width: '44px',
    height: '44px',
    marginTop: '8px',
    padding: '8px 9px 10px 6px',
  },
  [theme.breakpoints.up('xl')]: {
    width: '50px',
    height: '50px',
    marginTop: '15px',
    padding: '10px 12px 10px 5px',
  },
});
export const Filter = styled('div')({
  position: 'absolute',
  zIndex: '15',
  top: '70px',
  width: '334px',
  backgroundColor: '#FFFFFF',
  borderRadius: '6px',
  boxShadow: '0px 4px 4px #00000040',
});
export const FilterAccordion = styled(Accordion)({
  border: 'none',
  boxShadow: 'none',
  minHeight: '65px',
  padding: '10px',
});
export const Notifications = styled('div')({
  position: 'absolute',
  zIndex: '15',
  top: '70px',
  width: '572px',
  backgroundColor: '#FFFFFF',
  padding: '10px',
  fontFamily: '"Ubuntu", sans-serif',
  borderRadius: '6px',
  textAlign: 'left',
  boxShadow: '0px 4px 4px #00000040',
});
export const UserBlock = styled(Link)({
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  [theme.breakpoints.up('xs')]: {
    display: 'none',
  },
  [theme.breakpoints.up('md')]: {
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
  [theme.breakpoints.up('md')]: {
    height: '23px',
    marginLeft: '16px',
    fontSize: '20px',
    padding: '0px 5px 0px 0px',
  },
  [theme.breakpoints.up('xl')]: {
    height: '28px',
    marginLeft: '22px',
    fontSize: '24px',
    padding: '0px 10px 0px 0px',
  },
});
export const LogOut = styled('div')({
  flexGrow: '0',
  flexShrink: '0',
  '&:hover': {
    cursor: 'pointer',
  },
  [theme.breakpoints.up('xs')]: {
    display: 'none',
  },
  [theme.breakpoints.up('md')]: {
    display: 'block',
    width: '40px',
    height: '30px',
    margin: '15px 16px 15px 0px',
    padding: '3px 0px 0px 0px',
  },
  [theme.breakpoints.up('xl')]: {
    width: '50px',
    height: '50px',
    margin: '15px 20px 15px 0px',
    padding: '12px 10px 10px 10px',
  },
});
export const MobileMenuIcon = styled('div')<MobileMenuProps>(({ openMenu }) => ({
  '&:hover': {
    cursor: 'pointer',
  },
  [theme.breakpoints.up('xs')]: {
    width: '16px',
    height: '10px',
    textAlign: 'center',
    margin: '15px 17px 16px 6px',
    transform: openMenu ? 'rotate(90deg) translateX(2px) translateY(-5px)' : 'none',
  },
  [theme.breakpoints.up('md')]: {
    display: 'none',
  },
}));
