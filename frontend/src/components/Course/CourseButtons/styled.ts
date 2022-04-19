import styled from 'styled-components';
import { Box } from '@mui/material';

import theme from 'themeSettings';
import { Info } from 'enums/info';

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
    ...(type === Info.similarCourses && {
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
    ...(type === Info.similarCourses && {
      display: 'none',
    }),
  },
  ...(type === Info.similarCourses && {
    display: 'block',
  }),
  ...(type === Info.searchCourses && {
    height: 'auto',
  }),
  ...(type !== (Info.detailedCourse || Info.searchCourses) && {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  }),
  display: 'flex',
  flexDirection: 'row',
  paddingLeft: '15px',
  paddingBottom: '0',
}));
