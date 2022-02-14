import styled from 'styled-components';
import { makeStyles } from '@material-ui/core';
import { ListItemButton, ListItemText } from '@mui/material';
import { ReactFragment } from 'react';

import { leftArrow, rightArrow } from 'icons/menuIcons';
import theme from 'themeSettings';

import { HEADER_HEIGHT, HEADER_HEIGHT_IPAD } from '../Header/styled';

interface TabWrapperTypes {
  component?: ReactFragment;
  to?: string;
}

const BORDER_CANCELER = 7;

export const MenuTabs = styled('div')({
  maxWidth: '303px',
  height: `calc(100vh - ${HEADER_HEIGHT})`,
  backgroundColor: theme.palette.secondary.main,
  borderRight: '1px solid rgba(0, 0, 0, 0.39)',
  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.1)',
  fontFamily: '"Ubuntu", sans-serif',
  margin: '0px',
  position: 'relative',
  [theme.breakpoints.up('lg')]: {
    height: `calc(100vh - ${HEADER_HEIGHT_IPAD})`,
    maxWidth: '205px',
    fontSize: '18px',
  },
  [theme.breakpoints.up('xl')]: {
    height: `calc(100vh - ${HEADER_HEIGHT})`,
    maxWidth: '303px',
    fontSize: '22px',
  },
});

export const LeftArrow = styled(leftArrow)({
  display: 'block',
  marginRight: '10px',
  color: 'black',
  position: 'absolute',
  '&:hover': {
    cursor: 'pointer',
  },
  zIndex: '15',
});

export const RightArrow = styled(rightArrow)({
  display: 'block',
  marginRight: '10px',
  color: 'black',
  position: 'absolute',
  '&:hover': {
    cursor: 'pointer',
  },
  zIndex: '15',
});

export const RightArrowBox = styled('div')({
  display: 'flex',
  justifyContent: 'flex-end',
  position: 'absolute',
  right: '12%',
  top: '1%',
  minWidth: '280px !important',
  padding: '10px 0px',
});

export const LeftArrowBox = styled('div')({
  display: 'flex',
  justifyContent: 'flex-end',
  position: 'absolute',
  right: '5%',
  top: '1%',
  minWidth: '280px !important',
  padding: '10px 0px',
});

export const MenuTabsWrapper = styled('div')({
  width: '100%',
  height: 'fit-content',
  paddingTop: '50px',
  backgroundColor: theme.palette.secondary.main,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  '@media(max-width: 1110px)': {
    display: 'none',
  },
  '@media(min-width: 1110px)': {
    display: 'flex',
    paddingTop: '50px',
  },
});

export const TabWrapper = styled(ListItemButton)<TabWrapperTypes>({
  height: '56px',
  marginBottom: '12px !important',
});

export const ItemText = styled(ListItemText)({
  '& span': {
    display: 'block !important',
    '@media(min-width: 1110px)': {
      fontSize: '18px',
    },
    [theme.breakpoints.up('xl')]: {
      fontSize: '22px',
    },
  },
});

export const useListStyles = makeStyles({
  default: {
    background: 'none',
    color: 'black',
    '@media(min-width: 1110px)': {
      paddingLeft: '13px',
    },
    [theme.breakpoints.up('xl')]: {
      paddingLeft: '21px',
    },
    '& span': {
      fontFamily: 'Ubuntu, sans-serif',
      fontWeight: 400,
      paddingLeft: '-10px',
    },
    '& svg': {
      '@media(min-width: 1110px)': {
        width: '35px',
        height: '35px',
      },
      [theme.breakpoints.up('xl')]: {
        width: '40px',
        height: '40px',
      },
      width: '40px',
      height: '40px',
    },
    '&:hover': {
      background: `${theme.palette.secondary.main} !important`,
    },
  },
  selected: {
    width: `calc(100% + ${BORDER_CANCELER}px)`,
    '@media(min-width: 1110px)': {
      paddingLeft: '25px !important',
    },
    [theme.breakpoints.up('xl')]: {
      paddingLeft: '41px !important',
    },

    background: theme.palette.secondary.main,
    boxShadow: '-10px -4px 15px rgba(0, 0, 0, 0.05)',
    '& span': {
      paddingLeft: '0px !important',
    },
    '&:hover': {
      background: `${theme.palette.secondary.main} !important`,
    },
  },
  selectedLogo: {
    color: `${theme.palette.primary.main} !important`,
    '& svg': {
      width: '40px',
      height: '40px',
      '@media(min-width: 1110px)': {
        width: '35px',
        height: '35px',
      },
      [theme.breakpoints.up('xl')]: {
        width: '40px',
        height: '40px',
      },
    },
  },
  selectedText: {
    '& span': {
      fontFamily: 'Ubuntu, sans-serif',
      fontWeight: 500,
      '@media(min-width: 1110px)': {
        fontSize: '18px',
      },
      [theme.breakpoints.up('xl')]: {
        fontSize: '22px',
      },
    },
  },
});
