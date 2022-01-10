import styled from 'styled-components';
import List from '@mui/material/List';
import theme from 'themeSettings';

export const ProfileBox = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  width: '95%',
  marginRight: '5%',
  padding: '10px',
});
export const AvatarWrapper = styled('div')({
  flex: '1 1 240px',
  display: 'inline-block',
  textAlign: 'center',
});
export const UserInfoList = styled(List)({
  flex: '2 2 600px',
  display: 'inline-block',
  margin: '10px 0px 0px 50px',
});
export const UserInfoLabel = styled('span')({
  [theme.breakpoints.up('xs')]: {
    width: '80px',
    display: 'inline-block',
    fontSize: '14px',
    lineHeight: '14px',
    padding: '5px',
    height: '24px',
    margin: '2px 0px',
  },
  [theme.breakpoints.up('lg')]: {
    width: '200px',
    display: 'inline-block',
    fontSize: '16px',
    lineHeight: '16px',
    padding: '4px',
    height: '24px',
    margin: '4px 0px',
  },
  color: 'black',
  fontFamily: '"Lato", sans-serif',
});
export const UserInfoText = styled('span')({
  [theme.breakpoints.up('xs')]: {
    width: '160px',
    display: 'inline-block',
    fontSize: '14px',
    lineHeight: '14px',
    padding: '5px',
    height: '24px',
    margin: '2px 0px',
  },
  [theme.breakpoints.up('lg')]: {
    width: '400px',
    display: 'inline-block',
    fontSize: '16px',
    lineHeight: '16px',
    padding: '4px',
    height: '24px',
    margin: '4px 0px',
  },
  color: 'black',
  fontFamily: '"Lato", sans-serif',
});
