import { styled } from '@mui/material';

import theme from 'themeSettings';

export const HEADER_HEIGHT = '80px';
export const HEADER_HEIGHT_IPAD = '60px';
export const HEADER_HEIGHT_MOBILE = '44px';

export const Notifications = styled('div')({
  position: 'absolute',
  top: '60px',
  zIndex: '15',
  maxHeight: '250px',
  width: '400px',
  padding: '10px',
  textAlign: 'left',
  backgroundColor: '#FFF',
  borderRadius: '6px',
  boxShadow: '2px 2px 4px 4px #00000040',
  overflowY: 'auto',
  [theme.breakpoints.down('md')]: {
    top: '40px',
    right: '-60px',
    width: '300px',
  },
});

export const NotificationsButton = styled('div')({
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  width: '40px',
  height: '40px',
  padding: '5px',
  marginRight: '30px',
  borderRadius: '3px',
  backgroundColor: '#7676801f',
  '&:hover': {
    cursor: 'pointer',
  },
  [theme.breakpoints.down('md')]: {
    width: '35px',
    height: '35px',
  },
});

export const TextWrapper = styled('h2')({
  color: '#727272',
  fontSize: '16px',
  margin: '5px 0',
});

export const RedMark = styled('div')({
  width: '10px',
  height: '10px',
  borderRadius: '50%',
  backgroundColor: '#D43E41',
  position: 'relative',
  top: '-18px',
  right: '30px',
  [theme.breakpoints.down('sm')]: {
    top: '-15px',
  },
});
