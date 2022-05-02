import { styled, ListItem } from '@mui/material';

import theme from 'themeSettings';

export const UserInfo = styled(ListItem)({
  fontSize: '18px',
  '&:not(:last-child)': {
    marginBottom: '20px',
  },
  [theme.breakpoints.down('lg')]: {
    fontSize: '16px',
    '&:not(:last-child)': {
      marginBottom: '12px',
    },
  },
});

export const UserName = styled('h4')({
  margin: 0,
  marginRight: '16px',
  fontSize: '24px',
  fontWeight: 400,
  textAlign: 'left',
  [theme.breakpoints.down('xl')]: {
    fontSize: '22px',
  },
  [theme.breakpoints.down('lg')]: {
    fontSize: '18px',
  },
});

export const UserInfoLabel = styled('span')({
  width: '100px',
  minWidth: '90px',
  margin: 0,
  fontWeight: 500,
  fontSize: '22px',
  color: '#9B9B9B',
  [theme.breakpoints.down('xl')]: {
    fontSize: '20px',
  },
  [theme.breakpoints.down('lg')]: {
    width: '80px',
    minWidth: '65px',
    fontSize: '16px',
  },
});

export const UserInfoText = styled('p')({
  maxWidth: '250px',
  width: '100%',
  padding: '0 10px',
  margin: 0,
  fontSize: '20px',
  [theme.breakpoints.down('xl')]: {
    fontSize: '18px',
  },
  [theme.breakpoints.down('lg')]: {
    maxWidth: '200px',
    fontSize: '14px',
  },
});

export const StackItem = styled('p')({
  margin: 0,
  '& + &': {
    marginTop: '5px',
  },
});
