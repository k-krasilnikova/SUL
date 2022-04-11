import styled from 'styled-components';
import List from '@mui/material/List';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

import theme from 'themeSettings';

export const ProfileBox = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  margin: '88px 40px 70px 122px',
  [theme.breakpoints.down('xl')]: {
    flexDirection: 'row',
    margin: '60px 40px 60px 40px',
  },
  [theme.breakpoints.down('lg')]: {
    flexDirection: 'row',
    margin: '40px 40px 50px 40px',
  },
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    margin: '30px 20px 15px 60px',
  },
  [theme.breakpoints.down('sm')]: {
    margin: '30px 10px 15px 20px',
  },
});
export const AvatarWrapper = styled('div')({
  textAlign: 'center',
  marginRight: '100px',
  marginLeft: '0px',
  width: '219px',
  [theme.breakpoints.down('xl')]: {
    marginRight: '60px',
    width: '190px',
  },
  [theme.breakpoints.down('md')]: {
    display: 'inline-block',
    marginRight: '20px',
    marginBottom: '0px',
  },
  [theme.breakpoints.down('sm')]: {
    display: 'block',
    marginBottom: '14px',
    width: '80px',
  },
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
  flexShrink: '0',
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
    maxWidth: '191px',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    fontSize: '16px',
    lineHeight: '18px',
    marginTop: '5px',
  },
  [theme.breakpoints.up('sm')]: {
    maxWidth: '300px',
    display: 'inline-flex',
    fontSize: '18px',
    lineHeight: '21px',
    marginTop: '4px',
  },
  [theme.breakpoints.up('xl')]: {
    maxWidth: '400px',
    display: 'inline-flex',
    fontSize: '18px',
    lineHeight: '21px',
    padding: '0px 0px 0px 40px',
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
