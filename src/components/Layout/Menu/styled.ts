import styled from 'styled-components';
import { makeStyles } from '@material-ui/core';
import { ListItemButton } from '@mui/material';
import { ReactFragment } from 'react';

import theme from 'themeSettings';

import { HEADER_HEIGHT } from '../Header/styled';

interface TabWrapperTypes {
  component?: ReactFragment;
  to?: string;
}

const BORDER_CANCELER = 10;

export const MenuTabs = styled('div')({
  maxWidth: '303px',
  height: `calc(100vh - ${HEADER_HEIGHT})`,
  backgroundColor: theme.palette.secondary.main,
  borderRight: '2px solid #f0f2f7',
  fontSize: '24px',
  fontFamily: '"Ubuntu", sans-serif',
  margin: '0px',
});

export const MenuTabsWrapper = styled('div')({
  width: '100%',
  height: 'fit-content',
  paddingTop: '50px',
  backgroundColor: theme.palette.secondary.main,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
});

export const TabWrapper = styled(ListItemButton)<TabWrapperTypes>({
  height: '56px',
  marginBottom: '12px !important',
});

export const useListStyles = makeStyles({
  default: {
    background: 'none',
    color: 'black',
    paddingLeft: '22px',
    '& span': {
      fontFamily: 'Ubuntu, sans-serif',
      fontWeight: 400,
      fontSize: '22px',
    },
    '&:hover': {
      background: theme.palette.secondary.main,
    },
  },
  selected: {
    width: `calc(100% + ${BORDER_CANCELER}px)`,
    paddingLeft: '45px',
    background: theme.palette.secondary.main,
    boxShadow: '-2px -4px 15px rgba(0, 0, 0, 0.05)',
    '&:hover': {
      background: theme.palette.secondary.main,
    },
  },
  selectedLogo: {
    color: `${theme.palette.primary.main} !important`,
    fontSize: '5rem',
  },
  selectedText: {
    '& span': {
      fontFamily: 'Ubuntu, sans-serif',
      fontWeight: 500,
      fontSize: '22px',
    },
  },
});
