import { styled, Divider, Typography } from '@mui/material';

import theme from 'themeSettings';

export const CoursesList = styled('div')({
  maxWidth: '100%',
  [theme.breakpoints.down('xl')]: {
    paddingTop: '16px',
    maxWidth: '828px',
  },
  [theme.breakpoints.down('sm')]: {
    paddingTop: '10px',
    maxWidth: '288px',
  },
});

export const CoursesListItem = styled('div')({
  display: 'flex',
  alignItems: 'center',
  width: '350px',
  height: '80px',
  background: '#f5f5f5',
  border: '1px solid #efefef',
  borderRadius: '5px',
  paddingTop: '16px',
  fontWeight: '400',
  margin: '24px 0 16px 63px',
  padding: '15px',
  [theme.breakpoints.down('xl')]: {
    margin: '8px 0',
    padding: '8px',
    width: '215px',
    height: '53px',
    alignItems: 'start',
  },
});

export const CourseItemText = styled('div')({
  marginLeft: '17px',
  [theme.breakpoints.down('xl')]: {
    marginLeft: '8px',
  },
});

export const CourseTitle = styled(Typography)({
  color: '#2c2525',
  fontSize: '20px',
  lineHeight: '26px',
  marginBottom: '8px',
  [theme.breakpoints.down('xl')]: {
    fontSize: '16px',
    lineHeight: '20px',
    marginBottom: '4px',
  },
});

export const CourseStatus = styled(Typography)({
  color: '#b6b6b6',
  fontSize: '18px',
  lineHeight: '23px',
  [theme.breakpoints.down('xl')]: {
    fontSize: '14px',
    lineHeight: '18px',
  },
});

export const CoursesDivider = styled(Divider)({
  display: 'block',
  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
});

export const NoCourses = styled('div')({
  marginTop: '80px',
  [theme.breakpoints.down('lg')]: {
    marginTop: '50px',
  },
});
