import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { styled, Box, List, ListItem } from '@mui/material';

import theme from 'themeSettings';

interface ShowOnMobile {
  displayInfo: boolean;
}

export const ProfileBox = styled('div')({
  width: '90%',
  display: 'flex',
  margin: '24px 0 92px 165px',
  [theme.breakpoints.down('xl')]: {
    margin: '8px 0 50px 122px',
  },
  [theme.breakpoints.down('md')]: {
    margin: '16px 0 50px 16px',
    width: '100%',
  },
});

export const AvatarWrapper = styled('div')({
  marginRight: '100px',
  marginLeft: 0,
  width: '220px',
  [theme.breakpoints.down('lg')]: {
    width: '150px',
    marginRight: '20px',
  },
});

export const EmployeeName = styled(ListItem)({
  fontSize: '24px',
  fontWeight: '400',
  lineHeight: '28px',
  textAlign: 'left',
  marginBottom: '24px',
  [theme.breakpoints.down('xl')]: {
    fontSize: '22px',
    lineHeight: '25px',
    marginBottom: '16px',
  },
  [theme.breakpoints.down('lg')]: {
    marginTop: '10px',
  },
  [theme.breakpoints.down('md')]: {
    fontSize: '16px',
    lineHeight: '18px',
    marginBottom: '50px',
  },
});

export const UserInfoList = styled(List)({
  color: '#2C2525',
  fontWeight: '400',
  display: 'inline-block',
  verticalAlign: 'top',
  marginRight: '5px',
  '&.MuiList-root': {
    padding: 0,
    marginTop: '-10px',
  },
});

export const UserInfoLabel = styled('span')({
  width: '132px',
  fontSize: '18px',
  fontWeight: '500',
  lineHeight: '23px',
  margin: 0,
  color: '#9b9b9b',
  marginBottom: '20px',
  [theme.breakpoints.down('xl')]: {
    lineHeight: '21px',
    width: '100px',
  },
  [theme.breakpoints.down('lg')]: {
    width: '80px',
    marginBottom: '12px',
    fontSize: '16px',
  },
});

export const UserInfoText = styled('p')({
  width: '400px',
  fontSize: '18px',
  lineHeight: '23px',
  margin: '0 0 20px 0',
  [theme.breakpoints.down('xl')]: {
    lineHeight: '21px',
  },
  [theme.breakpoints.down('lg')]: {
    marginBottom: '12px',
    fontSize: '16px',
  },
});

export const EmployeeInfoItem = styled(ListItem)({
  alignItems: 'baseline ',
});

export const UserInfoListItems = styled('div')<ShowOnMobile>(({ displayInfo }) => ({
  [theme.breakpoints.down('md')]: {
    display: displayInfo ? 'block' : 'none',
  },
}));

export const ExpandMoreIcon = styled(ExpandMore)({
  marginLeft: '16px',
});

export const ExpandLessIcon = styled(ExpandLess)({
  marginLeft: '16px',
});

export const MobileIconWrapper = styled(Box)({
  [theme.breakpoints.up('lg')]: {
    display: 'none',
  },
});

export const StackItem = styled('p')({
  margin: '0 0 5px 0',
  fontSize: '18px',
  ':last-of-type': {
    margin: 0,
  },
});
