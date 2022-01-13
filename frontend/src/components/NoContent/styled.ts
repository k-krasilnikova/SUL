import styled from 'styled-components';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import theme from 'themeSettings';

export const MessageWrapper = styled(Box)({
  height: '100%',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});
export const Message = styled(Typography)({
  fontFamily: '"Ubuntu", sans-serif',
  fontWeight: 'bold',
  color: '#8b8b8b',
  margin: 'auto',
  [theme.breakpoints.up('xs')]: {
    fontSize: '30px',
    lineHeight: '30px',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '50px',
    lineHeight: '50px',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '73px',
    lineHeight: '73px',
  },
});
