import styled from 'styled-components';
import { Dialog } from '@mui/material';

import { SIZE } from 'constants/sizes';

interface Size {
  size?: string;
}

export const StyledDialog = styled(Dialog)<Size>(({ size }) => ({
  '& .MuiDialog-paper': {
    borderRadius: '5px',
    boxShadow: 'none',
    maxWidth: '660px !important',
    maxHeight: '340px !important',
    ...(size === SIZE.large && {
      minWidth: '660px !important',
      maxHeight: '335px !important',
    }),
    ...(size === SIZE.medium && {
      minWidth: '520px !important',
      maxHeight: '260px !important',
    }),
  },
}));
