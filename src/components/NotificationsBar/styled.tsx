import styled from 'styled-components';

import theme from 'themeSettings';

interface NotificationStyleType {
  isOld?: boolean;
}

export const HEADER_HEIGHT = '80px';
export const HEADER_HEIGHT_IPAD = '60px';
export const HEADER_HEIGHT_MOBILE = '44px';

export const Notifications = styled('div')({
  position: 'absolute',
  zIndex: '15',
  backgroundColor: '#FFFFFF',
  padding: '10px',
  fontFamily: '"Ubuntu", sans-serif',
  borderRadius: '6px',
  textAlign: 'left',
  boxShadow: '2px 2px 4px 4px #00000040',
  maxHeight: '250px',
  overflowY: 'auto',
  width: '400px',
  top: '60px',
  [theme.breakpoints.down('md')]: {
    width: '300px',
    top: '40px',
    right: 0,
  },
});

export const NotificationsButton = styled('div')({
  position: 'relative',
  flexGrow: '0',
  flexShrink: '0',
  borderRadius: '3px',
  backgroundColor: 'rgba(118, 118, 128, 0.12)',
  width: '40px',
  height: '40px',
  margin: '15px 20px 15px 0px',
  padding: '5px',
  display: 'flex',
  justifyContent: 'center',
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

export const NotificationContainer = styled('div')<NotificationStyleType>(({ isOld }) => ({
  width: '100%',
  margin: '10px 0',
  padding: '5px 10px',
  borderRadius: '6px',
  backgroundColor: 'rgba(118, 118, 128, 0.12);',
  display: 'flex',
  ...(isOld && {
    color: '#727272',
  }),
}));

export const ImageWrapper = styled('p')({
  margin: '0 10px 0 0',
  display: 'flex',
  justifyContent: 'center',
  padding: '5px',
});

export const Title = styled('h2')({
  fontSize: '16px',
  fontWeight: '700',
  margin: '5px 0',
});

export const Description = styled('p')({
  fontSize: '14px',
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
});
