import { styled } from '@mui/material';
import { Link } from 'react-router-dom';

import theme from 'themeSettings';

export const ImageWrapper = styled('div')({
  marginRight: '20px',
  [theme.breakpoints.down('md')]: {
    marginRight: '10px',
  },
});

export const CourseWrapper = styled(Link)<{ isCompleted: boolean }>(({ isCompleted }) => ({
  display: 'flex',
  alignItems: 'center',
  maxWidth: '280px',
  padding: '16px',
  margin: '10px 0',
  fontFamily: theme.typography.fontFamily,
  background: '#FAFAFA',
  borderRadius: '5px',
  border: '2px solid #B6B6B63B',
  ...(isCompleted && {
    opacity: 0.6,
    cursor: 'default',
  }),
  [theme.breakpoints.down('lg')]: {
    maxWidth: '100%',
  },
}));

export const CourseTitle = styled('span')({
  textOverflow: 'ellipsis',
  overflow: 'hidden',
});
