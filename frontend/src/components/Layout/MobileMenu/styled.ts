import styled from 'styled-components';
import { ReactFragment } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';
import { ListItemButton, Backdrop } from '@mui/material';

import theme from 'themeSettings';

import { HEADER_HEIGHT_IPAD, HEADER_HEIGHT_MOBILE } from '../Header/styled';

interface TabWrapperTypes {
  component?: ReactFragment;
  to?: string;
}

export const MobileMenuSlide = styled('div')({
  width: '176px',
  height: `calc(100% - ${HEADER_HEIGHT_MOBILE})`,
  backgroundColor: theme.palette.secondary.main,
  padding: '8px 16px 40px 8px',
  position: 'absolute',
  right: '0px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  [theme.breakpoints.up('xs')]: {
    height: `calc(100% - ${HEADER_HEIGHT_MOBILE})`,
    top: HEADER_HEIGHT_MOBILE,
  },
  [theme.breakpoints.up('md')]: {
    height: `calc(100% - ${HEADER_HEIGHT_IPAD})`,
    top: HEADER_HEIGHT_IPAD,
  },
});

export const MobileMenuBackdrop = styled(Backdrop)({
  zIndex: '5',
  background: '#1B1B1C91',
});

export const MenuTabsWrapper = styled('div')({
  flexGrow: '0',
  flexShrink: '0',
  width: '100%',
  height: 'fit-content',
  backgroundColor: theme.palette.secondary.main,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'left',
  '@media(min-width: 1110px)': {
    display: 'none',
  },
});

export const MenuTabs = styled('div')({
  fontSize: '24px',
  fontFamily: '"Ubuntu", sans-serif',
  margin: '0px',
});

export const TabWrapper = styled(ListItemButton)<TabWrapperTypes>({
  height: '50px',
});

export const SpaceHolder = styled('div')({
  flexGrow: '2',
  flexShrink: '1',
  maxHeight: '100%',
});

export const MobileUserBlock = styled('div')({
  flexGrow: '0',
  flexShrink: '0',
  height: '32px',
  display: 'inline-flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  width: '152px',
  alignItems: 'middle',
});

export const UserProfile = styled(Link)({
  display: 'inline-flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  width: '126px',
  alignItems: 'middle',
  fontFamily: '"Ubuntu", sans-serif',
  fontSize: '14px',
  fontWeight: '400',
  lineHeight: '16px',
  textAlign: 'left',
  color: '#131313',
});

export const AvatarWrapper = styled('div')({
  margin: '0px',
});

export const UserNameWrapper = styled('div')({
  margin: '0px 10px 0px 8px',
});

export const UserName = styled('p')({
  width: '80px',
  height: '16px',
  margin: '0px',
});

export const LogOut = styled('div')({
  display: 'inline-block',
  width: '26px',
  height: '24px',
  marginTop: '3px',
  '&:hover': {
    cursor: 'pointer',
  },
});

export const useListStyles = makeStyles({
  default: {
    background: 'none',
    color: 'black',
    padding: '0px',
    '& span': {
      fontFamily: 'Ubuntu, sans-serif',
      fontWeight: 400,
      fontSize: '16px',
      paddingLeft: '2px',
    },
    '& svg': {
      width: '25px',
      height: '25px',
      margin: '12.5px',
    },
  },
  selected: {
    color: `${theme.palette.primary.main}`,
    padding: '0px',
    background: 'none',
    '& span': {
      fontFamily: 'Ubuntu, sans-serif',
      fontWeight: 400,
      fontSize: '16px',
      paddingLeft: '2px',
      color: `${theme.palette.primary.main}`,
    },
    '& svg': {
      width: '25px',
      height: '25px',
      margin: '12.5px',
      color: `${theme.palette.primary.main}`,
    },
  },
  selectedLogo: {
    '& svg': {
      color: `${theme.palette.primary.main}`,
    },
  },
  selectedText: {
    '& span': {
      color: `${theme.palette.primary.main}`,
    },
  },
});
