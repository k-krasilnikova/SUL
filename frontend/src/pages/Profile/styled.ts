import styled from 'styled-components';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import theme from 'themeSettings';

export const ProfileBox = styled('div')({
  [theme.breakpoints.up('xs')]: {
    width: '320px',
    margin: '5px auto',
    padding: '15px',
  },
  [theme.breakpoints.up('lg')]: {
    width: '440px',
    margin: '10px auto',
    padding: '30px',
  },
  verticalAlign: 'top',
  fontFamily: '"Lato", sans-serif',
  textAlign: 'center',
});
export const UserAvatar = styled(Avatar)({
  margin: '20px auto 20px auto',
});
export const UserInfoList = styled(List)({
  paddingTop: '10px',
  width: '100%',
});
export const UserInfoLabel = styled('span')({
  [theme.breakpoints.up('xs')]: {
    display: 'inline-block',
    fontSize: '14px',
    lineHeight: '14px',
    padding: '5px',
    height: '24px',
    margin: '2px 0px',
  },
  [theme.breakpoints.up('lg')]: {
    display: 'inline-block',
    fontSize: '20px',
    lineHeight: '20px',
    padding: '8px',
    height: '36px',
    margin: '4px 0px',
  },
  backgroundColor: 'white',
  color: 'black',
  width: '30%',
});
export const UserInfoText = styled('span')({
  [theme.breakpoints.up('xs')]: {
    display: 'inline-block',
    fontSize: '14px',
    lineHeight: '14px',
    padding: '5px',
    height: '24px',
    margin: '2px 0px',
  },
  [theme.breakpoints.up('lg')]: {
    display: 'inline-block',
    fontSize: '20px',
    lineHeight: '20px',
    padding: '8px',
    height: '36px',
    margin: '4px 0px',
  },
  backgroundColor: 'white',
  color: 'black',
  width: '70%',
  textAlign: 'right',
});
export const UserListSubheader = styled('div')({
  [theme.breakpoints.up('xs')]: {
    fontSize: '24px',
    lineHeight: '24px',
    padding: '3px',
    height: '30px',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '28px',
    lineHeight: '28px',
    padding: '5px',
    height: '38px',
  },
  backgroundColor: '#d83938',
  color: 'white',
  width: '100%',
});
export const UserListItem = styled('span')({
  [theme.breakpoints.up('xs')]: {
    fontSize: '14px',
    lineHeight: '14px',
    padding: '5px',
    height: '24px',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '20px',
    lineHeight: '20px',
    padding: '5px',
    height: '30px',
  },
  backgroundColor: 'white',
  color: 'black',
  width: '100%',
});
