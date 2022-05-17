import { styled, Box } from '@mui/material';

import theme from 'themeSettings';
import { Info } from 'enums/info';

import { InfoContainerTypes } from '../styled';

export const ButtonsContainer = styled('div')({
  display: 'flex',
  flexWrap: 'wrap',
  flexDirection: 'row',
  height: 'fit-content',
  width: '100%',
  fontSize: '12px',
  justifyContent: 'space-between',
  padding: '10px 0',
  [theme.breakpoints.down('md')]: {
    paddingBottom: '16px',
  },
  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
});

export const CourseInfoBox = styled(Box)<InfoContainerTypes>(({ type }) => ({
  display: 'flex',
  flexDirection: 'row',
  padding: '20px 0 0 15px',
  ...(type === Info.searchCourses && {
    height: 'auto',
  }),
  ...(type !== (Info.detailedCourse || Info.searchCourses) && {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  }),
  [theme.breakpoints.down('md')]: {
    paddingLeft: '12px',
  },
}));
