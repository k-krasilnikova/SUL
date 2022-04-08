import { List } from '@mui/material';
import { styled } from '@mui/styles';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

import theme from 'themeSettings';

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
  paddingTop: '0',
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
    padding: '0',
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
    padding: '0 0 0 40px',
    marginBottom: '20px',
  },
});

export const CopyIcon = styled(ContentCopyIcon)({
  [theme.breakpoints.up('xs')]: {
    width: '14px',
  },
  [theme.breakpoints.up('sm')]: {
    width: '18px',
  },
  marginLeft: '10px',
  '&:hover': {
    cursor: 'pointer',
  },
});
