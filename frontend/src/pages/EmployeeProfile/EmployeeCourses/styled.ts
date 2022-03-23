import styled from 'styled-components';
import { Input, Divider, Typography } from '@mui/material';
import { Search } from '@mui/icons-material';

import theme from 'themeSettings';

export const SearchWrapper = styled('div')({
  [theme.breakpoints.up('xl')]: {
    marginLeft: '63px',
  },
});

export const SearchIcon = styled(Search)({});

export const SearchCourse = styled(Input)({
  [theme.breakpoints.up('xs')]: {
    fontSize: '16px!important',
    lineHeight: '33.61px',
  },
  [theme.breakpoints.up('sm')]: {
    fontSize: '18px!important',
  },
});

export const CoursesBox = styled('div')({
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
  [theme.breakpoints.up('xl')]: {
    maxWidth: '100%',
    marginLeft: '0px',
    marginRight: '0px',
  },
});

export const CoursesList = styled('div')({
  [theme.breakpoints.down('xl')]: {
    paddingTop: '16px',
    maxWidth: '828px',
  },
  [theme.breakpoints.down('sm')]: {
    paddingTop: '10px',
    maxWidth: '288px',
  },
  [theme.breakpoints.up('xl')]: {
    maxWidth: '100%',
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
  fontFamily: '"Ubuntu", sans-serif',
  fontWeight: '400',
  margin: '24px 0px 16px 63px',
  padding: '15px',
  [theme.breakpoints.down('xl')]: {
    margin: '8px 0px',
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
  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
  [theme.breakpoints.up('sm')]: {
    display: 'block',
  },
});

export const NoCourses = styled('div')({
  [theme.breakpoints.down('lg')]: {
    marginTop: '50px',
  },
  [theme.breakpoints.up('lg')]: {
    marginTop: '80px',
  },
});
