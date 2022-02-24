import styled from 'styled-components';
import { Dialog } from '@mui/material';

import { SIZE } from 'constants/sizes';
import theme from 'themeSettings';

interface Size {
  size?: string;
}

export const StyledDialog = styled(Dialog)<Size>(({ size }) => ({
  '& .MuiDialog-paper': {
    borderRadius: '5px',
    boxShadow: 'none',
    maxWidth: '660px !important',
    maxHeight: '340px !important',
    [theme.breakpoints.up('xs')]: {
      ...(size === SIZE.medium && {
        minWidth: '241px!important',
        minHeight: '215px!important',
      }),
    },
    [theme.breakpoints.up('md')]: {
      ...(size === SIZE.medium && {
        minWidth: '378px !important',
      }),
    },
    [theme.breakpoints.up('xl')]: {
      ...(size === SIZE.large && {
        minWidth: '660px !important',
        maxHeight: '335px !important',
      }),
      ...(size === SIZE.medium && {
        minWidth: '520px !important',
        maxHeight: '260px !important',
      }),
    },
  },
}));
