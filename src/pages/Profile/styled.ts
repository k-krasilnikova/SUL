import styled from 'styled-components';
import List from '@mui/material/List';
import theme from 'themeSettings';

export const ProfileBox = styled('div')({
  width: '90%',
  margin: '88px 0px 113px 122px',
});
export const AvatarWrapper = styled('div')({
  [theme.breakpoints.up('xs')]: {
    display: 'block',
  },
  [theme.breakpoints.up('lg')]: {
    display: 'inline-block',
  },
  width: '219px',
  textAlign: 'center',
  marginRight: '234px',
});
export const UserInfoList = styled(List)({
  [theme.breakpoints.up('xs')]: {
    display: 'block',
    width: '200px',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  [theme.breakpoints.up('lg')]: {
    display: 'inline-block',
    verticalAlign: 'top',
    width: '400px',
  },
  fontFamily: '"Ubuntu", sans-serif',
  fontWeight: '400',
});
export const UserInfoLabel = styled('span')({
  [theme.breakpoints.up('xs')]: {
    width: '80px',
    display: 'inline-block',
    fontSize: '12px',
    lineHeight: '12px',
    padding: '5px',
    height: '22px',
    margin: '2px 0px',
  },
  [theme.breakpoints.up('lg')]: {
    width: '132px',
    display: 'inline-block',
    fontSize: '18px',
    lineHeight: '21px',
    height: '24px',
    marginBottom: '24px',
    padding: '0px',
  },
});
export const UserInfoText = styled('span')({
  [theme.breakpoints.up('xs')]: {
    width: '120px',
    display: 'inline-block',
    fontSize: '12px',
    lineHeight: '12px',
    padding: '5px',
    height: '22px',
    margin: '2px 0px',
  },
  [theme.breakpoints.up('lg')]: {
    width: '400px',
    display: 'inline-block',
    fontSize: '18px',
    lineHeight: '21px',
    padding: '0px 0px 0px 40px',
    height: '24px',
    marginBottom: '24px',
  },
});
