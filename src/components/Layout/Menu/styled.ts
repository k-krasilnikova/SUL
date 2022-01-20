import styled from 'styled-components';
import { ListItemButton } from '@mui/material';
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
  fontFamily: '"Lato", sans-serif',
  margin: '0px',
  paddingTop: '20px',
});

export const ListItemWraper = styled(ListItemButton)<ListItemButtonTypes>(() => ({
  '& .Mui-selected': {
    background: theme.palette.secondary.main,
  },
}));
