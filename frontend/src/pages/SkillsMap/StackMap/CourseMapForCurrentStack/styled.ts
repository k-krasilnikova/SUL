import { styled } from '@mui/material';

import theme from 'themeSettings';

export const Rank = styled('div')<{ selected?: boolean }>(({ selected }) => ({
  display: 'flex',
  flexDirection: 'column',
  width: '430px',
  padding: '20px',
  borderRadius: '10px',
  backgroundColor: '#F1F1F1',
  ...(selected && {
    border: '4px solid rgb(212 62 65 / 20%)',
  }),
  '&:not(:last-child)': {
    marginRight: '40px',
  },
  [theme.breakpoints.down('lg')]: {
    width: '100%',
    margin: '10px 0',
  },
}));

export const RankTitle = styled('h4')({
  marginTop: 0,
  fontSize: '18px',
  fontWeight: 500,
});

export const CoursesWrapper = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  maxHeight: '442px',
  overflowY: 'scroll',
  [theme.breakpoints.down('xl')]: {
    maxHeight: '365px',
  },
  [theme.breakpoints.down('lg')]: {
    maxHeight: '100%',
  },
});
