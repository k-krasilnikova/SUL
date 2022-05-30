import ReactPlayer from 'react-player';
import { styled, Box } from '@mui/material';

import theme from 'themeSettings';

export const MaterialWrapper = styled(Box)({
  width: '100%',
  minHeight: '200px',
  marginBottom: '40px',
  background: 'rgba(30, 30, 30, 0.12)',
  borderRadius: '5px',
  overflow: 'hidden',
  [theme.breakpoints.down('md')]: {
    minHeight: '167px',
    marginBottom: '31px',
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
