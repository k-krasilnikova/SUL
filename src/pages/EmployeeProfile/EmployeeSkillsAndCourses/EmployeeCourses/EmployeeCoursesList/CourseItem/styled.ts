import { styled, Divider, Typography } from '@mui/material';

import theme from 'themeSettings';

export const CoursesListItem = styled('div')({
  display: 'flex',
  alignItems: 'center',
  width: '350px',
  height: '80px',
  background: '#F5F5F5',
  border: '1px solid #EFEFEF',
  borderRadius: '5px',
  paddingTop: '16px',
  fontWeight: 400,
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
  position: 'relative',
  marginLeft: '17px',
  [theme.breakpoints.down('xl')]: {
    marginLeft: '8px',
  },
});

export const CourseTitle = styled(Typography)({
  color: '#2C2525',
  fontSize: '20px',
  lineHeight: '26px',
  marginBottom: '8px',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  '&: hover': {
    cursor: 'pointer',
  },
  [theme.breakpoints.down('xl')]: {
    maxWidth: '140px',
    fontSize: '16px',
    lineHeight: '20px',
    marginBottom: '4px',
  },
});

export const HoverCourseTitle = styled('div')({
  position: 'absolute',
  top: '16px',
  right: '-35px',
  display: 'flex',
  justifyContent: 'center',
  width: 'fit-content',
  padding: '3px',
  fontSize: '12px',
  backgroundColor: '#000',
  color: '#FFF',
  overflow: 'inherit',
  textOverflow: 'unset',
  boxShadow: '0 0 10px rgba(0,0,0,0.5)',
});

export const CourseStatus = styled(Typography)({
  color: '#B6B6B6',
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
