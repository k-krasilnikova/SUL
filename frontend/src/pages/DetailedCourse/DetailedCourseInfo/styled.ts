import { Typography, Button as TextButton } from '@mui/material';
import styled from 'styled-components';

import theme from 'themeSettings';

interface Image {
  imageUrl?: string;
}

export const ImageWrapper = styled('div')<Image>(({ imageUrl }) => {
  return {
    background: `no-repeat url(${imageUrl})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    float: 'left',
    width: '479px',
    height: '268px',
    margin: '0 30px 30px 0',
    overflow: 'hidden',
    borderRadius: '10px',
    [theme.breakpoints.up('xs')]: {
      width: '64px',
      height: '46px',
      margin: '0px 8px 5px 0px',
      borderRadius: '0px',
    },
    [theme.breakpoints.up('md')]: {
      width: '281px',
      height: '147px',
      margin: '5px 25px 30px 0',
      borderRadius: '8px',
    },
    [theme.breakpoints.up('xl')]: {
      width: '479px',
      height: '268px',
      margin: '0 30px 30px 0',
      borderRadius: '10px',
    },
  };
});

export const DetailedCourseText = styled(Typography)({
  fontWeight: 'normal',
  letterSpacing: '-0.4px',
  color: '#131313',
  [theme.breakpoints.up('xs')]: {
    display: 'none',
  },
  [theme.breakpoints.up('md')]: {
    display: 'block',
    fontSize: '18px !important',
    lineHeight: '28px',
    clear: 'none',
    padding: '0',
  },
  [theme.breakpoints.up('lg')]: {
    lineHeight: '28px !important',
    marginRight: '100px !important',
  },
  [theme.breakpoints.up('xl')]: {
    fontSize: '20px !important',
    lineHeight: '37px !important',
    marginRight: '0 !important',
  },
});

export const DetailedCourseTitle = styled(Typography)({
  fontWeight: '700 !important',
  letterSpacing: '-0.4px !important',
  color: '#2c2525',
  [theme.breakpoints.up('xs')]: {
    fontSize: '16px !important',
    lineHeight: '28px !important',
    paddingTop: '10px !important',
    marginBottom: '10px !important',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '28px !important',
    lineHeight: '28px !important',
    marginBottom: '24px !important',
    paddingTop: '0 !important',
  },
  [theme.breakpoints.up('xl')]: {
    fontSize: '28px !important',
    lineHeight: '28px !important',
    marginBottom: '13px !important',
  },
});

export const DetailedCourseTextMobile = styled(Typography)({
  fontWeight: 'normal',
  letterSpacing: '-0.4px',
  color: '#131313',
  [theme.breakpoints.up('xs')]: {
    fontSize: '16px',
    lineHeight: '25px',
    clear: 'both',
    padding: '0 24px 0 8px',
  },
  [theme.breakpoints.up('md')]: {
    display: 'none',
  },
});

export const ButtonFullText = styled(TextButton)({
  fontFamily: '"Ubuntu", sans-serif',
  fontStyle: 'normal',
  fontWeight: '400 !important',
  fontSize: '16px !important',
  lineHeight: '130%',
  display: 'block!important',
  color: '#0a5edc !important',
  padding: '0 !important',
});