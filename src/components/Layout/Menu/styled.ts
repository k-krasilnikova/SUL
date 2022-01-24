import styled from 'styled-components';
import { ListItemButton } from '@mui/material';
import { makeStyles } from '@material-ui/core';
import { ReactFragment } from 'react';

import theme from 'themeSettings';

import { HEADER_HEIGHT } from '../Header/styled';

interface ListItemButtonTypes {
  component?: ReactFragment;
  to?: string;
}

export const MenuTabs = styled('div')({
  width: '100%',
  height: `calc(100vh - ${HEADER_HEIGHT})`,
  backgroundColor: 'white',
  borderRight: '2px solid #f0f2f7',
  fontSize: '24px',
  fontFamily: 'Ubuntu, sans-serif',
  margin: '0px',
  paddingTop: '20px',
});

export const useListStyles = makeStyles({
  default: {
    background: 'none',
    '& span': {
      fontFamily: 'Ubuntu, sans-serif',
      fontWeight: 400,
      fontSize: '22px',
    },
  },
  selected: {
    background: theme.palette.secondary.main,
    boxShadow: '-2px -4px 15px rgba(0, 0, 0, 0.05)',
  },
  selectedLogo: {
    color: theme.palette.primary.main,
  },
  selectedText: {
    '& span': {
      fontFamily: 'Ubuntu, sans-serif',
      fontWeight: 500,
      fontSize: '22px',
    },
  },
});

export const ListItemWraper = styled(ListItemButton)<ListItemButtonTypes>(() => ({
  '& .Mui-selected': {
    background: theme.palette.secondary.main,
  },
}));
