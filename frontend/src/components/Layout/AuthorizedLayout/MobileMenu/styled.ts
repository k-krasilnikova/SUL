import { Link } from 'react-router-dom';
import { styled, Backdrop } from '@mui/material';

import theme from 'themeSettings';

import { HEADER_HEIGHT_IPAD, HEADER_HEIGHT_MOBILE } from '../Header/styled';

const MOBILE_MENU_WIDTH = '190px';

export const MobileMenuSlide = styled('div')({
  position: 'absolute',
  top: 0,
  right: 0,
  display: 'flex',
  flexDirection: 'column',
  width: `${MOBILE_MENU_WIDTH}`,
  height: '100%',
  padding: '8px 0 38px 0',
  backgroundColor: theme.palette.secondary.main,
  overflowY: 'auto',
});

export const MobileMenuBackdrop = styled(Backdrop)({
  position: 'absolute',
  top: HEADER_HEIGHT_IPAD,
  zIndex: '5',
  background: '#1B1B1C91',
  [theme.breakpoints.down('md')]: {
    top: HEADER_HEIGHT_MOBILE,
  },
});

export const SpaceHolder = styled('div')({
  flex: '1 1 0',
});

export const MobileUserBlock = styled('div')({
  display: 'inline-flex',
  justifyContent: 'space-between',
  marginTop: '40px',
  padding: '0 18px 0 12px',
});

export const UserProfile = styled(Link)({
  display: 'inline-flex',
  justifyContent: 'space-between',
  fontSize: '14px',
  color: '#131313',
});

export const AvatarWrapper = styled('div')({
  margin: 0,
});

export const UserNameWrapper = styled('div')({
  margin: '0 10px 0 8px',
});

export const UserName = styled('p')({
  maxWidth: '80px',
  margin: 0,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
});

export const LogOut = styled('div')({
  display: 'inline-block',
  width: '26px',
  height: '24px',
  marginTop: '2px',
  '&:hover': {
    cursor: 'pointer',
  },
});
