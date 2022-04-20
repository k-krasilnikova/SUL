import { styled } from '@mui/material';

import theme from 'themeSettings';

export const ImageWrapper = styled('div')({
  marginRight: '20px',
  [theme.breakpoints.down('md')]: {
    marginRight: '10px',
  },
});

export const CourseWrapper = styled('div')({
  borderRadius: '5px',
  fontFamily: theme.typography.fontFamily,
  border: '2px solid #b6b6b63b',
  maxWidth: '220px',
  padding: '16px',
  margin: '10px 0',
  background: '#fafafa',
  display: 'flex',
  alignItems: 'center',
  [theme.breakpoints.down(960)]: {
    width: '100%',
    maxWidth: '100%',
  },
});
