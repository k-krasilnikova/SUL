import styled from 'styled-components';
import { Typography, Box, Grid } from '@mui/material';

import theme from 'themeSettings';
interface InfoContainerTypes {
  color?: string;
  fontSize?: number;
  lineHeight?: number;
}

export const CourseContainer = styled(Grid)({
  backgroundColor: '#ebebeb',
  borderRadius: '10px',
  fontFamily: '"Lato", sans-serif',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  minHeight: '100%',
  [theme.breakpoints.down('lg')]: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
});

export const AboutCourseContainer = styled('div')({
  minHeight: '220px',
  padding: '10px',
  [theme.breakpoints.down('sm')]: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: 'fit-content',
  },
});

export const ImageWrapper = styled('div')({
  float: 'left',
  margin: '0px',
  marginRight: '10px',
  overflow: 'hidden',
  borderRadius: '10px',
  [theme.breakpoints.up('xl')]: {
    width: '250px',
    height: '150px',
    alignItems: 'center',
    alignSelf: 'center',
    marginRight: '10px',
  },
  [theme.breakpoints.down('xl')]: {
    width: '50%',
    height: 'auto',
    alignItems: 'center',
    alignSelf: 'center',
    marginRight: '10px',
  },
  [theme.breakpoints.down('lg')]: {
    width: '250px',
    height: 'auto',
    alignItems: 'center',
    alignSelf: 'center',
    marginRight: '10px',
  },
  [theme.breakpoints.down('md')]: {
    width: '175px',
    height: 'auto',
    alignItems: 'center',
    alignSelf: 'center',
    marginRight: '5px',
  },
  [theme.breakpoints.down('sm')]: {
    width: '85%',
    height: 'auto',
    alignItems: 'center',
    alignSelf: 'center',
    marginRight: '0px',
  },
});

export const CourseTitle = styled('p')({
  [theme.breakpoints.up('xs')]: {
    fontSize: '16px',
    lineHeight: '26px',
    padding: '5px',
  },
  [theme.breakpoints.up('sm')]: {
    fontSize: '18px',
    lineHeight: '28px',
    padding: '5px',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '24px',
    lineHeight: '30px',
    padding: '5px',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '24px',
    lineHeight: '34px',
    padding: '5px',
  },
  color: 'black',
  textAlign: 'justify',
  margin: '0px',
});

export const CourseDescription = styled('p')<InfoContainerTypes>(({ fontSize, lineHeight }) => ({
  [theme.breakpoints.up('xs')]: {
    fontSize: '12px',
    lineHeight: '22px',
    padding: '5px',
    marginTop: '3px',
    ...(fontSize && {
      fontSize: `${fontSize}px`,
    }),
    ...(lineHeight && {
      lineHeight: `${lineHeight}px`,
    }),
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '20px',
    lineHeight: '30px',
    padding: '5px',
    marginTop: '5px',
    ...(fontSize && {
      fontSize: `${fontSize}px`,
    }),
    ...(lineHeight && {
      lineHeight: `${lineHeight}px`,
    }),
  },
  color: 'black',
  textAlign: 'justify',
  margin: '0px',
  ...(fontSize && {
    fontSize: `${fontSize}px`,
  }),
  ...(lineHeight && {
    lineHeight: `${lineHeight}px`,
  }),
}));

export const ButtonsContainer = styled('div')({
  [theme.breakpoints.down('xl')]: {
    justifyContent: 'center',
  },
  [theme.breakpoints.down('lg')]: {
    justifyContent: 'space-between',
  },
  [theme.breakpoints.down('md')]: {
    display: 'flex',
    justifyContent: 'space-evenly',
  },
  display: 'flex',
  flexWrap: 'wrap',
  flexDirection: 'row',
  height: 'fit-content',
  width: '100%',
  fontSize: '12px',
  justifyContent: 'space-between',
  padding: '10px',
  margin: '0px',
});

export const InfoContainer = styled(Box)({
  [theme.breakpoints.up('xs')]: {
    margin: '0px',
    height: '100%',
    padding: '0px',
    flexDirection: 'row',
  },
  [theme.breakpoints.up('lg')]: {
    margin: '0px',
    height: '100%',
    flexDirection: 'row',
  },
  height: 'fit-content',
  display: 'flex',
  alignItems: 'center',
  alignSelf: 'center',
  backgroundColor: 'none',
});

export const InfoItem = styled(Typography)({
  [theme.breakpoints.up('xs')]: {
    width: '70px',
    padding: '5px',
    fontSize: '8px',
    lineHeight: '24px',
  },
  [theme.breakpoints.up('lg')]: {
    width: '90px',
    padding: '5px',
    fontSize: '12px',
    lineHeight: '24px',
  },
  display: 'inline-flex',
  verticalAlign: 'middle',
  color: 'black',
});
