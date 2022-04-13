import { Box, Grid } from '@mui/material';
import { styled } from '@mui/styles';

import theme from 'themeSettings';

export const SignInImageWrapper = styled(Grid)({
  padding: '0px 5px!important',
  margin: '0px !important',
  display: 'grid',
  [theme.breakpoints.down('md')]: {
    display: 'none',
    justifyContent: 'center',
  },
  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
});

export const ImageWrapper = styled(Box)({
  width: '100%',
  maxWidth: '716px',
  justifySelf: 'center',
  alignSelf: 'center',
  marginBottom: '20px',
  marginLeft: '10px',
  '@media(max-width: 1280px)': {
    maxWidth: '455px',
    marginBottom: '55px',
    marginLeft: '0px',
    marginRight: '30px',
  },
  [theme.breakpoints.down('lg')]: {
    marginBottom: '0px !important',
    marginLeft: '0px !important',
    marginRight: '0px !important',
  },
});
