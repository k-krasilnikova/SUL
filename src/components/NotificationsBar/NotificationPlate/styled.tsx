import { styled } from '@mui/material';

interface NotificationStyleType {
  isOld?: boolean;
}

export const NotificationContainer = styled('div')<NotificationStyleType>(({ isOld }) => ({
  width: '100%',
  margin: '10px 0',
  padding: '5px 10px',
  borderRadius: '6px',
  backgroundColor: 'rgba(118, 118, 128, 0.12);',
  display: 'flex',
  alignItems: 'center',
  ...(isOld && {
    color: '#727272',
  }),
}));

export const ImageWrapper = styled('p')({
  display: 'flex',
  height: '40px',
  margin: '0 10px 0 0',
  padding: '5px',
});

export const Title = styled('h2')({
  fontSize: '16px',
  fontWeight: 700,
  margin: '5px 0',
  wordBreak: 'break-word',
});

export const Description = styled('p')({
  fontSize: '14px',
  margin: '5px 0',
  wordBreak: 'break-word',
});
