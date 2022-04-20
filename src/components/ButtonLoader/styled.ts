import { ReactFragment } from 'react';
import { styled, Icon } from '@mui/material';

import theme from 'themeSettings';

interface Props {
  buttonSpinner?: ReactFragment;
  fontSize?: string;
  component?: ReactFragment;
}

export const LoaderIcon = styled('div')({
  width: '40px',
  height: '40px',
  [theme.breakpoints.down('xl')]: {
    width: '35px',
    height: '35px',
  },
  [theme.breakpoints.down('lg')]: {
    width: '28px',
    height: '28px',
  },
});

export const CurrentIcon = styled(Icon)<Props>({
  width: '100%',
  height: '100%',
});
