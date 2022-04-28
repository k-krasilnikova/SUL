import { styled } from '@mui/material';

import { IAvatarWrapperProps } from 'components/UserProfile/types';

import theme from 'themeSettings';

export const AvatarWrapper = styled('div')<IAvatarWrapperProps>(({ visible }) => ({
  display: `${visible ? 'none' : 'block'}`,
  margin: '0 100px 10px 0',
  [theme.breakpoints.down('xl')]: {
    marginRight: '60px',
  },
  [theme.breakpoints.down('lg')]: {
    marginRight: '20px',
  },
  [theme.breakpoints.down('md')]: {
    display: `${visible ? 'block' : 'none'}`,
  },
}));
