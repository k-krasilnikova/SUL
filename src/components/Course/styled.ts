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
    width: '45%',
    display: 'inline-block',
    margin: '2.5%',
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
export const CourseTitle = styled('p')<Size>(({ size }) => ({
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
  ...(size === SIZE.large && {
    fontSize: '18px',
  }),
  ...(size === SIZE.medium && {
    fontSize: '16px',
  }),
  ...(size === SIZE.small && {
    fontSize: '14px',
  }),
}));

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
  [theme.breakpoints.up('lg')]: {
    fontSize: '12px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    width: '100%',
    height: 'fit-content',
    margin: '0px',
  },
  [theme.breakpoints.up('xl')]: {
    fontSize: '12px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    width: '100%',
    height: 'fit-content',
    margin: '0px',
  },
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
});

export const InfoContainer = styled(Box)({
  [theme.breakpoints.up('xs')]: {
    margin: '0px',
    height: '100%',
    padding: '0px',
    flexDirection: 'column',
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
