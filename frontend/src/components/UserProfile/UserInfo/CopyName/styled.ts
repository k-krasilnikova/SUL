import { styled } from '@mui/material';
import { ContentCopy as ContentCopyIcon } from '@mui/icons-material';

import theme from 'themeSettings';

export const CopyWrapper = styled('div')({
  margin: '2px 12px 0 0',
  pointerEvents: 'auto',
  '&:hover': {
    cursor: 'pointer',
  },
});

export const CopyIcon = styled(ContentCopyIcon)({
  [theme.breakpoints.down('lg')]: {
    width: '18px',
  },
});
