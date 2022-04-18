import { styled } from '@mui/material';
import { makeStyles } from '@material-ui/core';
import { ListItemButton, ListItemText } from '@mui/material';
import { ReactFragment } from 'react';

import { leftArrow, rightArrow } from 'icons/menuIcons';
import theme from 'themeSettings';

interface TabWrapperTypes {
  component?: ReactFragment;
  to?: string;
}

const BORDER_CANCELER = 7;

export const MenuTabs = styled('div')({
  maxWidth: '275px',
  height: '100%',
  backgroundColor: theme.palette.secondary.main,
  borderRight: '1px solid rgba(0, 0, 0, 0.39)',
  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.1)',
  fontFamily: '"Ubuntu", sans-serif',
  margin: 0,
  position: 'relative',
  fontSize: '18px',
  [theme.breakpoints.down('md')]: {
    height: '100%',
    maxWidth: '205px',
  },
});

export const LeftArrow = styled(leftArrow)({
  display: 'block',
  color: 'black',
  zIndex: '15',
});

export const RightArrow = styled(rightArrow)({
  display: 'block',
  color: 'black',
  zIndex: '15',
});

export const RightArrowBox = styled('div')({
  display: 'flex',
  justifyContent: 'flex-end',
  padding: '15px 10px',
  margin: '0 10px',
  '&:hover': {
    cursor: 'pointer',
  },
});

export const LeftArrowBox = styled('div')({
  display: 'flex',
  justifyContent: 'flex-end',
  padding: '15px 10px',
  margin: '0 10px',
  '&:hover': {
    cursor: 'pointer',
  },
});

export const MenuTabsWrapper = styled('div')({
  width: '100%',
  height: 'fit-content',
  backgroundColor: theme.palette.secondary.main,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
});

export const TabWrapper = styled(ListItemButton)<TabWrapperTypes>({
  height: '56px',
});

export const ItemText = styled(ListItemText)({
  '& span': {
    display: 'block ',
    fontSize: '18px',
    [theme.breakpoints.down('md')]: {
      fontSize: '16px',
    },
  },
});

export const useListStyles = makeStyles({
  default: {
    paddingLeft: '20px',
    background: 'none',
    color: 'black',
    '& span': {
      fontFamily: 'Ubuntu, sans-serif',
      fontWeight: 400,
    },
    '& svg': {
      width: '35px',
      height: '35px',
    },
    '&:hover': {
      background: `${theme.palette.secondary.main} `,
    },
  },
  selected: {
    width: `calc(100% + ${BORDER_CANCELER}px)`,
    background: theme.palette.secondary.main,
    boxShadow: '-10px -4px 15px rgba(0, 0, 0, 0.05)',
    '&:hover': {
      background: `${theme.palette.secondary.main} `,
    },
  },
  selectedLogo: {
    paddingLeft: '20px',
    color: `${theme.palette.primary.main} `,
    '& svg': {
      width: '35px',
      height: '35px',
    },
  },
  selectedText: {
    paddingLeft: '20px',
    '& span': {
      fontFamily: 'Ubuntu, sans-serif',
      fontWeight: 500,
      fontSize: '18px',
      [theme.breakpoints.down('md')]: {
        fontSize: '16px',
      },
    },
  },
});
