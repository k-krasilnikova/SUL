import styled from 'styled-components';
import { makeStyles } from '@material-ui/core';
import { ListItemButton } from '@mui/material';
import { ReactFragment } from 'react';

import theme from 'themeSettings';

interface TabWrapperTypes {
  component?: ReactFragment;
  to?: string;
}

export const MobileMenuSlider = styled('div')({
  width: '176px',
  height: `calc(100vh - 44px)`,
  backgroundColor: theme.palette.secondary.main,
  padding: '8px 16px 40px 8px',
});

export const MenuTabs = styled('div')({
  fontSize: '24px',
  fontFamily: '"Ubuntu", sans-serif',
  margin: '0px',
});

export const MenuTabsWrapper = styled('div')({
  width: '100%',
  height: 'fit-content',
  backgroundColor: theme.palette.secondary.main,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'left',
  [theme.breakpoints.up('md')]: {
    display: 'none',
  },
});

export const TabWrapper = styled(ListItemButton)<TabWrapperTypes>({
  height: '50px',
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
      width: '50px',
      height: '50px',
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
      width: '50px',
      height: '50px',
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
