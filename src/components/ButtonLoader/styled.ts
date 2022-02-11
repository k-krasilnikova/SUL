import styled from 'styled-components';
import { Icon } from '@mui/material';
import { ReactFragment } from 'react';

import theme from 'themeSettings';

interface Props {
  buttonSpinner?: ReactFragment;
  fontSize?: string;
  component?: ReactFragment;
}

export const LoaderIcon = styled('div')({
  width: '20px !important',
  height: '20px !important',
  [theme.breakpoints.down('xl')]: {
    width: '30px !important',
    height: '30px !important',
  },
  [theme.breakpoints.down('lg')]: {
    width: '25px !important',
    height: '25px !important',
  },
});

export const CurrentIcon = styled(Icon)<Props>({
  width: '100% !important',
  height: '100% !important',
});
