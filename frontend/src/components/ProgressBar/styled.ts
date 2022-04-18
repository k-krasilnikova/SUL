import { styled, Box } from '@mui/material';

import { SIZE } from 'constants/sizes';
import theme from 'themeSettings';

interface Size {
  size?: string;
}

export const ProgressBarBox = styled(Box)<Size>(({ size }) => ({
  float: 'right',
  width: '180px',
  height: '180px',
  margin: '5%',
  fontFamily: theme.typography.fontFamily,
  ...(size === SIZE.xlarge && {
    width: '304px',
    height: '304px',
    margin: 0,
    [theme.breakpoints.down('xl')]: {
      width: '190px',
      height: '190px',
      marginLeft: '84px',
    },
    [theme.breakpoints.down('md')]: {
      marginLeft: '16px',
    },
    [theme.breakpoints.down('sm')]: {
      width: '123px',
      height: '123px',
    },
  }),
  ...(size === SIZE.large && {
    width: '218px',
    height: '218px',
    [theme.breakpoints.up('xs')]: {
      width: '46px',
      height: '46px',
      margin: 0,
    },
    [theme.breakpoints.up('lg')]: {
      width: '163px',
      height: '163px',
      margin: '5%',
    },
    [theme.breakpoints.up('xl')]: {
      width: '218px',
      height: '218px',
    },
  }),
  ...(size === SIZE.medium && {
    [theme.breakpoints.up('xs')]: {
      width: '46px',
      height: '46px',
    },
    [theme.breakpoints.up('xl')]: {
      width: '80px',
      height: '80px',
    },
  }),
  ...(size === SIZE.small && {
    width: '41px',
    height: '41px',
    margin: 0,
    [theme.breakpoints.up('xs')]: {
      width: '24px',
      height: '24px',
    },
    [theme.breakpoints.up('xl')]: {
      width: '41px',
      height: '41px',
    },
  }),
}));
