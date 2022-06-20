import { styled, Typography, Button as TextButton } from '@mui/material';

import { COLORS_SELECTOR } from 'constants/progressText';
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
      margin: '0 8px 5px 0',
      borderRadius: 0,
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
  textAlign: 'justify',
  letterSpacing: '-0.4px',
  color: '#131313',
  wordBreak: 'break-word',
  [theme.breakpoints.up('xs')]: {
    display: 'none',
  },
  [theme.breakpoints.up('md')]: {
    display: 'block',
    fontSize: '18px',
    lineHeight: '28px',
    clear: 'none',
    padding: 0,
  },
  [theme.breakpoints.up('lg')]: {
    lineHeight: '28px',
    marginRight: '100px',
  },
  [theme.breakpoints.up('xl')]: {
    fontSize: '20px',
    lineHeight: '37px',
    marginRight: 0,
  },
});

export const TitleWrapper = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexWrap: 'wrap',
  marginBottom: '24px',
  color: '#2C2525',
  [theme.breakpoints.down('md')]: {
    flexWrap: 'nowrap',
    minHeight: '46px',
    margin: '0 14px 14px 0',
  },
});

export const DetailedCourseTitle = styled(Typography)({
  paddingTop: '8px',
  fontWeight: 700,
  fontSize: '28px',
  lineHeight: 1,
  wordBreak: 'break-word',
  [theme.breakpoints.down('lg')]: {
    marginRight: '12px',
  },
  [theme.breakpoints.down('md')]: {
    marginRight: '8px',
    paddingTop: 0,
    fontSize: '16px',
  },
});

export const ProgressText = styled('p')<{ variant?: string }>(({ variant }) => ({
  display: 'none',
  margin: 0,
  fontWeight: 700,
  fontSize: '28px',
  lineHeight: 1,
  color: `${COLORS_SELECTOR[variant as keyof typeof COLORS_SELECTOR]}`,
  [theme.breakpoints.down('lg')]: {
    display: 'inline-block',
    paddingTop: '8px',
  },
  [theme.breakpoints.down('md')]: {
    paddingTop: 0,
    fontSize: '16px',
  },
}));

export const DetailedCourseTextMobile = styled(Typography)({
  fontWeight: 'normal',
  letterSpacing: '-0.4px',
  color: '#131313',
  wordBreak: 'break-word',
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
  fontWeight: 400,
  fontSize: '16px',
  lineHeight: '130%',
  display: 'block',
  color: '#0a5edc',
  padding: 0,
});
