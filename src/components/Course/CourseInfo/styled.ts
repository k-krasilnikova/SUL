import { styled, Box, Typography } from '@mui/material';

import { Info } from 'enums/info';
import theme from 'themeSettings';

import { InfoContainerTypes } from '../styled';

export const InfoContainer = styled(Box)<InfoContainerTypes>(({ type }) => ({
  display: 'flex',
  alignItems: 'start',
  alignSelf: 'self-end',
  paddingBottom: 0,
  [theme.breakpoints.down('xl')]: {
    ...(type !== Info.detailedCourse &&
      type !== Info.searchCourses && {
        flexDirection: 'column',
      }),
    ...(type !== Info.searchCourses && {
      marginLeft: '10px',
    }),
  },
  [theme.breakpoints.down('lg')]: {
    height: 'fit-content',
  },
  [theme.breakpoints.down('md')]: {
    margin: 0,
    padding: 0,
    flexDirection: 'row',
    ...(type === Info.detailedCourse && {
      marginLeft: '8px',
    }),
  },
  [theme.breakpoints.down(550)]: {
    ...(type === Info.detailedCourse && {
      flexDirection: 'column',
    }),
  },
  [theme.breakpoints.down('sm')]: {
    ...(type === Info.detailedCourse && {
      marginLeft: '8px',
      marginBottom: '20px',
      flexDirection: 'row',
    }),
  },
  [theme.breakpoints.up('xl')]: {
    ...(type !== Info.searchCourses && {
      marginLeft: '15px',
    }),
  },
  [theme.breakpoints.up(1680)]: {
    marginLeft: 0,
  },
}));

export const InfoItem = styled('div')({
  display: 'inline-flex',
  alignItems: 'center',
  marginRight: '10px',
  color: '#131313',
  [theme.breakpoints.down('xl')]: {
    '&:not(:last-of-type)': {
      marginBottom: '3px',
    },
  },
  [theme.breakpoints.down('lg')]: {
    paddingBottom: 0,
    display: 'flex',
  },
  [theme.breakpoints.down('md')]: {
    display: 'inline-flex',
    '&:not(:last-of-type)': {
      marginBottom: 0,
    },
  },
  [theme.breakpoints.down(550)]: {
    padding: '5px',
    display: 'flex',
  },
  [theme.breakpoints.down('sm')]: {
    padding: 0,
    display: 'inline-flex',
  },
});

export const InfoItemText = styled(Typography)({
  fontSize: '14px',
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
    padding: 0,
    fontFamily: '"Ubuntu", sans-serif',
    fontSize: '10px',
    fontWeight: 400,
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
