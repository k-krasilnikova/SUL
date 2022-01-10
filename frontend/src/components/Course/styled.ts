import styled from 'styled-components';
import { Typography, Box, Grid } from '@mui/material';

import theme from 'themeSettings';
import { SIZE } from 'constants/sizes';

interface Size {
  size?: string;
}

export const CourseContainer = styled(Grid)({
  backgroundColor: '#ebebeb',
  borderRadius: '10px',
  fontFamily: '"Lato", sans-serif',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  [theme.breakpoints.down('lg')]: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
});

export const AboutCourseContainer = styled('div')({
  minHeight: '200px',
  padding: '10px',
  [theme.breakpoints.down('sm')]: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
});

export const ImageWrapper = styled('div')({
  float: 'left',
  width: '250px',
  height: '150px',
  margin: '0px',
  marginRight: '10px',
  overflow: 'hidden',
  borderRadius: '10px',
  [theme.breakpoints.down('md')]: {
    alignItems: 'center',
    alignSelf: 'center',
    marginRight: '10px',
  },
  [theme.breakpoints.down('sm')]: {
    alignItems: 'center',
    alignSelf: 'center',
    marginRight: '0px',
    width: '100%',
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

export const CourseDescription = styled('p')<Size>(({ size }) => ({
  [theme.breakpoints.up('xs')]: {
    fontSize: '12px',
    lineHeight: '22px',
    padding: '5px',
    marginTop: '3px',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '14px',
    lineHeight: '18px',
    padding: '5px',
    marginTop: '5px',
    ...(size === SIZE.large && {
      fontSize: '16px',
      lineHeight: '20px',
    }),
    ...(size === SIZE.medium && {
      fontSize: '14px',
      lineHeight: '18px',
    }),
    ...(size === SIZE.small && {
      fontSize: '12px',
      lineHeight: '14px',
    }),
  },
  color: 'black',
  textAlign: 'justify',
  margin: '0px',
}));

export const ButtonsContainer = styled('div')({
  [theme.breakpoints.down('xl')]: {
    fontSize: '12px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    height: 'fit-content',
    margin: '0px',
    padding: '10px',
  },
  [theme.breakpoints.down('lg')]: {
    fontSize: '12px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    height: 'fit-content',
    margin: '0px',
    padding: '10px',
  },
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  padding: '10px',
  '@media(max-width: 1230px)': {
    flexDirection: 'column',
    display: 'flex',
  },
  '@media(max-width: 1023px)': {
    flexDirection: 'row',
    display: 'flex',
  },
  '@media(max-width: 580px)': {
    flexDirection: 'column',
    display: 'flex',
  },
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
