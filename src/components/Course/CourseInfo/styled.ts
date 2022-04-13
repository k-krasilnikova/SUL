import { Box, Typography } from '@mui/material';
import styled from 'styled-components';

import { INFO } from 'constants/courseInfoTypes';
import theme from 'themeSettings';

import { InfoContainerTypes } from '../styled';

export const InfoContainer = styled(Box)<InfoContainerTypes>(({ type }) => ({
  display: 'flex',
  alignItems: 'start',
  alignSelf: 'self-end',
  paddingBottom: '0 !important',
  [theme.breakpoints.down('xl')]: {
    ...(type !== INFO.detailedCourse &&
      type !== INFO.searchCourses && {
        flexDirection: 'column',
      }),
    ...(type !== INFO.searchCourses && {
      marginLeft: '10px',
    }),
  },
  [theme.breakpoints.down('lg')]: {
    display: 'block',
    height: 'fit-content',
  },
  [theme.breakpoints.down('md')]: {
    display: 'flex',
    margin: '0',
    padding: '0',
    flexDirection: 'row',
    ...(type === INFO.detailedCourse && {
      marginLeft: '8px',
    }),
  },
  [theme.breakpoints.down(550)]: {
    ...(type === INFO.detailedCourse && {
      flexDirection: 'column',
    }),
  },
  [theme.breakpoints.down('sm')]: {
    display: 'flex',
    ...(type === INFO.detailedCourse && {
      marginLeft: '8px',
      flexDirection: 'row',
    }),
  },
  [theme.breakpoints.up('xl')]: {
    display: 'block',
    ...(type !== INFO.searchCourses && {
      marginLeft: '15px',
    }),
  },
  [theme.breakpoints.up(1680)]: {
    display: 'flex',
    marginLeft: '0',
  },
}));

export const InfoItem = styled('div')({
  [theme.breakpoints.down('lg')]: {
    paddingBottom: '0 !important',
    display: 'flex',
  },
  [theme.breakpoints.down('md')]: {
    display: 'inline-flex',
  },
  [theme.breakpoints.down(550)]: {
    padding: '5px',
    display: 'flex',
  },
  [theme.breakpoints.down('sm')]: {
    padding: '0',
    display: 'inline-flex',
  },
  display: 'inline-flex',
  color: 'black',
  alignItems: 'center',
  marginRight: '10px',
});

export const InfoItemText = styled(Typography)({
  fontSize: '14px !important',
  lineHeight: '18px',
  verticalAlign: 'middle',
  color: theme.palette.text.primary,
  [theme.breakpoints.down('md')]: {
    lineHeight: '18px',
  },
  [theme.breakpoints.down(550)]: {
    lineHeight: '14px',
  },
  [theme.breakpoints.down('sm')]: {
    width: 'fit-content',
    whiteSpace: 'nowrap',
    padding: '0',
    fontFamily: '"Ubuntu", sans-serif',
    fontSize: '10px',
    fontWeight: '400',
    letterSpacing: '-0.4px',
    textAlign: 'left',
  },
});

export const InfoItemTextBox = styled(Box)({
  [theme.breakpoints.up('xs')]: {
    marginLeft: '4px',
    marginRight: '5px',
  },
  [theme.breakpoints.up('md')]: {
    marginLeft: '8px',
  },
});

export const DurationIcon = styled('img')({
  imageRendering: 'pixelated',
  [theme.breakpoints.up('xs')]: {
    height: '14px',
  },
  [theme.breakpoints.up('md')]: {
    height: '20px',
  },
});

export const LessonsIcon = styled('img')({
  imageRendering: 'pixelated',
  [theme.breakpoints.up('xs')]: {
    height: '14px',
  },
  [theme.breakpoints.up('md')]: {
    height: '20px',
  },
});
