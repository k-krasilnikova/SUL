import styled from 'styled-components';
import { Input, Divider, Typography } from '@mui/material';

import theme from 'themeSettings';

export const SearchWrapper = styled('div')({
  [theme.breakpoints.up('xl')]: {
    marginLeft: '63px',
  },
});

export const SearchCourse = styled(Input)({
  fontSize: '18px!important',
  [theme.breakpoints.down('sm')]: {
    fontSize: '16px!important',
    lineHeight: '33.61px',
  },
});

export const CoursesBox = styled('div')({
  maxWidth: '100%',
  marginLeft: '0',
  marginRight: '0',
  [theme.breakpoints.down('xl')]: {
    maxWidth: '828px',
    marginLeft: '54px',
    marginRight: '47px',
  },
  [theme.breakpoints.down('md')]: {
    marginLeft: '54px',
    marginRight: '19px',
  },
  [theme.breakpoints.down('sm')]: {
    maxWidth: '288px',
    marginLeft: '13px',
    marginRight: '19px',
  },
});

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
  background: '#F5F5F5',
  border: '1px solid #EFEFEF',
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
  color: '#2C2525',
  fontSize: '20px !important',
  lineHeight: '26px !important',
  marginBottom: '8px !important',
  [theme.breakpoints.down('xl')]: {
    fontSize: '16px !important',
    lineHeight: '20px !important',
    marginBottom: '4px !important',
  },
});

export const CourseStatus = styled(Typography)({
  color: '#B6B6B6',
  fontSize: '18px !important',
  lineHeight: '23px !important',
  [theme.breakpoints.down('xl')]: {
    fontSize: '14px !important',
    lineHeight: '18px !important',
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
