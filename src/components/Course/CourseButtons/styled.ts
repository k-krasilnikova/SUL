import styled from 'styled-components';
import { Box } from '@mui/material';

import { INFO } from 'constants/courseInfoTypes';
import theme from 'themeSettings';

import { InfoContainerTypes } from '../styled';

export const ButtonsContainer = styled('div')<InfoContainerTypes>(({ type }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  flexDirection: 'row',
  height: 'fit-content',
  width: '100%',
  fontSize: '12px',
  justifyContent: 'space-between',
  padding: '10px 0',
  [theme.breakpoints.down('lg')]: {
    ...(type === INFO.similarCourses && {
      justifyContent: 'start',
    }),
  },
  [theme.breakpoints.down('md')]: {
    alignItems: 'end',
    paddingBottom: '16px',
  },
  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
}));

export const CourseInfoBox = styled(Box)<InfoContainerTypes>(({ type }) => ({
  [theme.breakpoints.down('md')]: {
    paddingLeft: '12px',
  },
  [theme.breakpoints.down('xl')]: {
    ...(type === INFO.similarCourses && {
      display: 'none',
    }),
  },
  ...(type === INFO.similarCourses && {
    display: 'block',
  }),
  ...(type === INFO.searchCourses && {
    height: 'auto',
  }),
  ...(type !== (INFO.detailedCourse || INFO.searchCourses) && {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  }),
  display: 'flex',
  flexDirection: 'row',
  paddingLeft: '15px',
  paddingBottom: '0',
}));
