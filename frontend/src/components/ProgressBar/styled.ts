import { Box } from '@mui/system';
import styled from 'styled-components';

import { SIZE } from 'constants/sizes';
import theme from 'themeSettings';

interface Size {
  size?: string;
}

export const ProgressBarBox = styled(Box)<Size>(({ size }) => ({
  float: 'right',
  width: '218px',
  height: '218px',
  margin: '5%',
  fontFamily: theme.typography.fontFamily,
  ...(size === SIZE.large && {
    width: '218px',
    height: '218px',
  }),
  ...(size === SIZE.medium && {
    width: '80px',
    height: '80px',
  }),
  ...(size === SIZE.small && {
    width: '41px',
    height: '41px',
    margin: '0px',
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
