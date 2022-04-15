import { styled } from '@mui/material';

import Button from 'components/Button';
import theme from 'themeSettings';

export const LearningPageContainer = styled('div')({
  width: '100%',
  padding: '40px',
  [theme.breakpoints.down('xl')]: {
    padding: '30px',
  },
  [theme.breakpoints.down('md')]: {
    padding: '16px',
  },
});

export const BackButton = styled(Button)({
  height: '40px',
  width: '85px',
  borderRadius: '4px',
  fontFamily: '"Ubuntu", sans-serif',
  fontSize: '16px!important',
  fontWeight: '500!important',
  lineHeight: '22px',
  letterSpacing: '-0.4px',
  textAlign: 'center',
  boxShadow: 'none',
  [theme.breakpoints.down('xl')]: {
    height: '32px',
    width: '64px',
    fontSize: '12px!important',
    lineHeight: '16px',
  },
  [theme.breakpoints.down('md')]: {
    height: '20px',
    width: '40px',
    minWidth: '40px!important',
    fontSize: '10px!important',
  },
});

export const LearningWrapper = styled('div')({
  color: '#131313',
  textAlign: 'right',
  padding: '0px 85px',
  [theme.breakpoints.down('xl')]: {
    padding: '0px 24px',
    maxWidth: '100%',
  },
  [theme.breakpoints.down('md')]: {
    padding: '8px 0px',
  },
});
