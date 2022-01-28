import { Box } from '@mui/system';
import styled from 'styled-components';

import { SIZE } from 'constants/sizes';

interface Size {
  size?: string;
}

export const ProgressBarBox = styled(Box)<Size>(({ size }) => ({
  float: 'right',
  width: '218px',
  height: '218px',
  margin: '5%',
  ...(size === SIZE.large && {
    width: '141px',
    height: '141px',
  }),
  ...(size === SIZE.medium && {
    width: '80px',
    height: '80px',
  }),
  ...(size === SIZE.small && {
    width: '41px',
    height: '41px',
    margin: '0px',
  }),
}));
