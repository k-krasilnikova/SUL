import { SIZE } from 'constants/sizes';
import styled from 'styled-components';
import { Typography, Box } from '@mui/material';

import theme from 'themeSettings';
interface InfoContainerTypes {
  color?: string;
  fontSize?: number;
  lineHeight?: number;
}

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
export const CourseTitle = styled('p')<InfoContainerTypes>(({ fontSize }) => ({
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
  ...(fontSize && {
    fontSize: fontSize,
  }),
}));

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

// Враппер над нижним блоком
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
  border: 'red 1px solid',
  justifyContent: 'space-between',
});

export const InfoContainer = styled(Box)({
  [theme.breakpoints.up('xs')]: {
    minWidth: 'fit-content',
    margin: '0px',
    height: '100%',
    padding: '0px',
  },
  [theme.breakpoints.up('lg')]: {
    minWidth: 'fit-content',
    margin: '0px',
    height: '100%',
  },
  height: 'fit-content',
  display: 'flex',
  alignItems: 'center',
  alignSelf: 'center',
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
