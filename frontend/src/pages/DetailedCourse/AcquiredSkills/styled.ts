import { ReactNode } from 'react';
import { styled } from '@mui/material';

import theme from 'themeSettings';

export const SkillsList = styled('div')({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '60px',
  [theme.breakpoints.down('lg')]: {
    gap: '40px',
  },
  [theme.breakpoints.down('md')]: {
    gap: '20px',
  },
});

export const SkillInfoWrapper = styled('div')<{ children: ReactNode }>({
  '& > div': {
    background: '#7676801f',
    border: 'none',
  },
  [theme.breakpoints.down('md')]: {
    '& p,h5': {
      fontSize: '14px',
    },
  },
});
