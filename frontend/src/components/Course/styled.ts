import styled from 'styled-components';
import { Typography, Box } from '@mui/material';

import theme from 'themeSettings';
import { SIZE } from 'constants/sizes';

interface Size {
  size?: string;
}

export const CourseContainer = styled(Box)<Size>(({ size }) => ({
  width: 'calc(100%-40px)',
  margin: '20px',
  backgroundColor: '#ebebeb',
  padding: '10px',
  borderRadius: '10px',
  fontFamily: '"Lato", sans-serif',
  ...(size === SIZE.large && {
    width: 'calc(100%-40px)',
    margin: '20px',
  }),
  ...(size === SIZE.medium && {
    width: 'calc(50%-20px)',
    margin: '10px',
  }),
  ...(size === SIZE.small && {
    width: 'calc(30%-10px)',
    margin: '5px',
  }),
}));
export const ImageWrapper = styled('div')({
  [theme.breakpoints.up('xs')]: {
    float: 'none',
    width: '300px',
    margin: '0px auto',
  },
  [theme.breakpoints.up('md')]: {
    float: 'left',
    margin: '0px 25px 5px 0px',
  },
});
export const CourseTitle = styled('p')({
  [theme.breakpoints.up('xs')]: {
    clear: 'both',
    fontSize: '16px',
    lineHeight: '26px',
    padding: '5px',
  },
  [theme.breakpoints.up('md')]: {
    clear: 'none',
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
export const CourseDescription = styled('p')({
  [theme.breakpoints.up('xs')]: {
    fontSize: '12px',
    lineHeight: '22px',
    padding: '5px',
    marginTop: '3px',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '20px',
    lineHeight: '30px',
    padding: '5px',
    marginTop: '5px',
  },
  color: 'black',
  textAlign: 'justify',
  margin: '0px',
});
export const ButtonsContainer = styled('div')({
  [theme.breakpoints.up('xs')]: {
    display: 'block',
    height: '90px',
    margin: '10px',
    fontSize: '10px',
  },
  [theme.breakpoints.up('lg')]: {
    height: '50px',
    margin: '20px',
    fontSize: '12px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
});
export const Divider = styled('div')({
  [theme.breakpoints.up('lg')]: {
    flex: '1 2 auto',
  },
});
export const InfoContainer = styled(Box)({
  [theme.breakpoints.up('xs')]: {
    minWidth: '326px',
    margin: '10px',
    height: '30px',
    padding: '0px',
  },
  [theme.breakpoints.up('lg')]: {
    minWidth: '410px',
    margin: '20px 10px',
    height: '50px',
    padding: '10px 5px 10px 5px',
  },
  display: 'inline-block',
  backgroundColor: 'white',
});
export const InfoItem = styled(Typography)({
  [theme.breakpoints.up('xs')]: {
    width: '80px',
    padding: '5px',
    fontSize: '10px',
    lineHeight: '24px',
  },
  [theme.breakpoints.up('lg')]: {
    width: '100px',
    padding: '5px',
    fontSize: '14px',
    lineHeight: '24px',
  },
  display: 'inline-flex',
  verticalAlign: 'middle',
  color: 'grey',
});
