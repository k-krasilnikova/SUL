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
  width: '40px !important',
  height: '40px !important',
  [theme.breakpoints.down('xl')]: {
    width: '35px !important',
    height: '35px !important',
  },
  [theme.breakpoints.down('lg')]: {
    width: '28px !important',
    height: '28px !important',
  },
});

export const CurrentIcon = styled(Icon)<Props>({
  width: '100% !important',
  height: '100% !important',
});
