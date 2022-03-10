import styled from 'styled-components';

import theme from 'themeSettings';

export const ImageWrapper = styled('div')({
  marginRight: '20px !important',
  [theme.breakpoints.down('md')]: {
    marginRight: '10px !important',
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
  [theme.breakpoints.down('md')]: {
    width: '100%',
    maxWidth: '100%',
  },
});
