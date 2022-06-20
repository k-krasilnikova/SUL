import { styled, Grid } from '@mui/material';

import theme from 'themeSettings';

export const TagsListContainer = styled(Grid)({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '16px',
  marginTop: '30px',
  [theme.breakpoints.down('md')]: {
    marginTop: '20px',
  },
});

export const TagContainer = styled('button')({
  display: 'flex',
  alignItems: 'center',
  padding: '8px 12px',
  backgroundColor: '#7676801F',
  border: '1px solid #CBBEBE',
  borderRadius: '10px',
  '&:hover': {
    cursor: 'pointer',
    textDecoration: 'line-through',
    opacity: 0.7,
  },
});

export const TagText = styled('p')({
  margin: 0,
  paddingRight: '16px',
  fontSize: '14px',
  fontFamily: "'Ubuntu', sans-serif",
  color: '#131313',
});

export const Cross = styled('p')({
  position: 'relative',
  width: '14px',
  height: '14px',
  margin: 0,
  '&:before, &:after': {
    position: 'absolute',
    content: '""',
    height: '14px',
    width: '2px',
    backgroundColor: '#6C6C6C',
  },
  '&:before': {
    transform: 'rotate(45deg)',
  },
  '&:after': {
    transform: 'rotate(-45deg)',
  },
});
