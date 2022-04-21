import { styled } from '@mui/material';

import theme from 'themeSettings';

export const SkillsWrapper = styled('div')<{ isLoading: boolean }>(({ isLoading }) => ({
  width: '100%',
  ...(isLoading && {
    height: '100%',
  }),
  padding: '40px 30px',
  [theme.breakpoints.down('lg')]: {
    padding: '20px 10px',
  },
}));
