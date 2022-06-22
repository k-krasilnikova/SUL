import ReactPlayer from 'react-player';
import { styled, Box } from '@mui/material';

import theme from 'themeSettings';

export const MaterialWrapper = styled(Box)({
  width: '100%',
  height: '680px',
  minHeight: '200px',
  marginBottom: '40px',
  background: 'rgba(30, 30, 30, 0.12)',
  borderRadius: '5px',
  overflow: 'hidden',
  [theme.breakpoints.down('xl')]: {
    height: '520px',
  },
  [theme.breakpoints.down('lg')]: {
    height: '360px',
  },
  [theme.breakpoints.down('md')]: {
    minHeight: '168px',
    marginBottom: '31px',
  },
  [theme.breakpoints.down('sm')]: {
    height: '240px',
  },
  [theme.breakpoints.down('xs')]: {
    height: '170px',
  },
});

export const MaterialText = styled('div')({
  height: '100%',
  padding: '20px',
  fontSize: '20px',
  textAlign: 'justify',
  overflowY: 'auto',
  [theme.breakpoints.down('xl')]: {
    fontSize: '18px',
  },
  [theme.breakpoints.down('md')]: {
    padding: '15px',
    fontSize: '14px',
  },
});

export const MaterialVideo = styled(ReactPlayer)({
  height: '100%',
  width: '100%',
});

export const PlayVideoIcon = styled('img')({
  height: '154px',
  width: '154px',
  padding: '8px',
  backgroundColor: '#EAEAEAC4',
  borderRadius: '50%',
  [theme.breakpoints.down('lg')]: {
    height: '74px',
    width: '74px',
    padding: '6px',
  },
  [theme.breakpoints.down('sm')]: {
    height: '64px',
    width: '64px',
    padding: '4px',
  },
});
