import styled from 'styled-components';
import { makeStyles } from '@material-ui/core';
import { ListItemButton, ListItemText } from '@mui/material';
import { ReactFragment } from 'react';

import { leftArrow, rightArrow } from 'icons/menuIcons';
import theme from 'themeSettings';

import { HEADER_HEIGHT } from '../Header/styled';

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
  fontSize: '24px',
  fontFamily: '"Ubuntu", sans-serif',
  margin: '0px',
  position: 'relative',
});

export const LeftArrow = styled(leftArrow)({
  display: 'block',
  position: 'absolute',
  right: '5%',
  top: '43.8%',
  width: '40px !important',
  heigth: '40px !important',
  cursor: 'pointer',
});

export const RightArrow = styled(rightArrow)({
  display: 'block',
  position: 'absolute',
  right: '5%',
  top: '43.8%',
  width: '40px !important',
  heigth: '40px !important',
  cursor: 'pointer',
});

export const MenuTabsWrapper = styled('div')({
  width: '100%',
  height: 'fit-content',
  paddingTop: '50px',
  backgroundColor: theme.palette.secondary.main,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  [theme.breakpoints.down('lg')]: {
    display: 'none',
  },
});

export const TabWrapper = styled(ListItemButton)<TabWrapperTypes>({
  height: '56px',
  marginBottom: '12px !important',
});

export const ItemText = styled(ListItemText)({
  '& span': {
    display: 'block !important',
  },
});

export const useListStyles = makeStyles({
  default: {
    background: 'none',
    color: 'black',
    paddingLeft: '21px !important',
    '& span': {
      fontFamily: 'Ubuntu, sans-serif',
      fontWeight: 400,
      fontSize: '22px',
      paddingLeft: '-10px !important',
    },
    '& svg': {
      width: '40px',
      height: '40px',
    },
    '&:hover': {
      background: `${theme.palette.secondary.main} !important`,
    },
  },
  selected: {
    width: `calc(100% + ${BORDER_CANCELER}px)`,
    paddingLeft: '41px !important',
    background: theme.palette.secondary.main,
    boxShadow: '-10px -4px 15px rgba(0, 0, 0, 0.05)',
    '& span': {
      paddingLeft: '5px !important',
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
    },
  },
  selectedText: {
    '& span': {
      fontFamily: 'Ubuntu, sans-serif',
      fontWeight: 500,
      fontSize: '22px',
    },
  },
});
