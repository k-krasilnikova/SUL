import styled from 'styled-components';
import List from '@mui/material/List';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

import theme from 'themeSettings';

export const ProfileBox = styled('div')({
  width: '90%',
  display: 'flex',
  flexDirection: 'row',
  margin: '88px 0px 70px 122px',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    margin: '16px 19px 14px 16px',
  },
  [theme.breakpoints.down('lg')]: {
    flexDirection: 'row',
    margin: '40px 0px 50px 54px',
  },
});
export const AvatarWrapper = styled('div')({
  [theme.breakpoints.up('xs')]: {
    display: 'block',
    marginBottom: '14px',
    width: '80px',
  },
  [theme.breakpoints.up('sm')]: {
    display: 'inline-block',
    marginRight: '80px',
    marginLeft: '19px',
    marginBottom: '0px',
    width: '132px',
  },
  [theme.breakpoints.up('xl')]: {
    marginRight: '100px',
    marginLeft: '0px',
    width: '219px',
  },
  textAlign: 'center',
});
export const UserInfoList = styled(List)({
  [theme.breakpoints.up('xs')]: {
    display: 'block',
  },
  [theme.breakpoints.up('md')]: {
    display: 'inline-block',
    verticalAlign: 'top',
  },
  fontFamily: '"Ubuntu", sans-serif',
  fontWeight: '400',
  color: '#2C2525',
  paddingTop: '0px',
});
export const UserInfoLabel = styled('span')({
  color: '#9b9b9b',
  fontWeight: '500',
  [theme.breakpoints.up('xs')]: {
    width: '82px',
    display: 'inline-block',
    fontSize: '16px',
    lineHeight: '18px',
    marginTop: '5px',
  },
  [theme.breakpoints.up('sm')]: {
    width: '115px',
    display: 'inline-block',
    fontSize: '18px',
    lineHeight: '21px',
    marginTop: '4px',
  },
  [theme.breakpoints.up('xl')]: {
    width: '132px',
    display: 'inline-block',
    fontSize: '18px',
    lineHeight: '21px',
    height: '24px',
    marginBottom: '20px',
    padding: '0px',
  },
});
export const UserInfoText = styled('span')({
  [theme.breakpoints.up('xs')]: {
    width: '191px',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    fontSize: '16px',
    lineHeight: '18px',
    marginTop: '5px',
  },
  [theme.breakpoints.up('sm')]: {
    width: '300px',
    display: 'inline-flex',
    fontSize: '18px',
    lineHeight: '21px',
    marginTop: '4px',
  },
  [theme.breakpoints.up('xl')]: {
    width: '400px',
    display: 'inline-flex',
    fontSize: '18px',
    lineHeight: '21px',
    padding: '0px 0px 0px 40px',
    height: '24px',
    marginBottom: '20px',
  },
});
export const CopyIcon = styled(ContentCopyIcon)({
  [theme.breakpoints.up('xs')]: {
    width: '14px !important',
  },
  [theme.breakpoints.up('sm')]: {
    width: '18px !important',
  },
  marginLeft: '10px',
  '&:hover': {
    cursor: 'pointer',
  },
});
