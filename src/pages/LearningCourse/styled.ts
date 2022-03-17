import styled from 'styled-components';
import { Box, Typography } from '@mui/material';
import ReactPlayer from 'react-player';
import { ExpandMore, ExpandLess } from '@mui/icons-material';

import { Button } from 'components/Button';
import theme from 'themeSettings';

interface DescriptionProps {
  isDescriptionOpen: boolean;
}

export const LearningPageContainer = styled('div')({
  width: '100%',
  padding: '40px',
  [theme.breakpoints.down('xl')]: {
    padding: '30px',
  },
  [theme.breakpoints.down('md')]: {
    padding: '16px',
  },
});

export const BackButton = styled(Button)({
  height: '40px',
  width: '85px',
  borderRadius: '4px',
  fontFamily: '"Ubuntu", sans-serif',
  fontSize: '16px!important',
  fontWeight: '500!important',
  lineHeight: '22px',
  letterSpacing: '-0.4px',
  textAlign: 'center',
  boxShadow: 'none',
  [theme.breakpoints.down('xl')]: {
    height: '32px',
    width: '64px',
    fontSize: '12px!important',
    lineHeight: '16px',
  },
  [theme.breakpoints.down('md')]: {
    height: '20px',
    width: '40px',
    minWidth: '40px!important',
    fontSize: '10px!important',
  },
});

export const LearningWrapper = styled('div')({
  color: '#131313',
  textAlign: 'right',
  padding: '0px 85px',
  [theme.breakpoints.down('xl')]: {
    padding: '0px 24px',
    maxWidth: '717px',
  },
  [theme.breakpoints.down('md')]: {
    padding: '8px 0px',
    maxWidth: '100%',
  },
});

export const StepperController = styled(Box)({
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  marginBottom: '13px',
  height: '39px',
  [theme.breakpoints.down('xl')]: {
    marginBottom: '9px',
    height: '27px',
  },
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
});

export const StyledButton = styled(Button)({
  color: '#131313',
  minWidth: '40px !important',
  minHeight: '39px',
  '&.MuiButton-root': {
    padding: '0 !important',
  },
  [theme.breakpoints.down('xl')]: {
    minWidth: '40px !important',
    minHeight: '27px',
  },
});

export const Step = styled('p')({
  color: '#131313',
  fontSize: '18px !important',
  fontFamily: '"Ubuntu", sans-serif',
  fontWeight: '400',
  lineHeight: '22px !important',
});

export const MaterialWrapper = styled(Box)({
  width: '100%',
  minHeight: '200px',
  marginBottom: '40px',
  background: 'rgba(30, 30, 30, 0.12)',
  borderRadius: '5px',
  overflow: 'hidden',
  [theme.breakpoints.down('md')]: {
    minHeight: '167px',
    marginBottom: '31px',
  },
});

export const MaterialText = styled('div')({
  height: '100%',
  textAlign: 'justify',
  padding: '20px',
  fontFamily: '"Ubuntu", sans-serif',
  fontSize: '24px',
  overflowY: 'auto',
  [theme.breakpoints.down('xl')]: {
    fontSize: '18px',
  },
  [theme.breakpoints.down('md')]: {
    padding: '15px',
    fontSize: '14px',
  },
});

export const MaterialVideo = styled(ReactPlayer)({
  height: '100%',
  width: '100%',
});

export const DescriptionWrapper = styled('div')<DescriptionProps>(({ isDescriptionOpen }) => ({
  display: 'inline-block',
  float: 'left',
  width: 'calc(100% - 196px)',
  maxHeight: '438px',
  paddingBottom: '20px',
  [theme.breakpoints.down('xl')]: {
    width: 'calc(100% - 193px)',
  },
  [theme.breakpoints.down('md')]: {
    display: 'block',
    float: 'none',
    width: '100%',
    marginTop: '23px',
    maxHeight: '290px',
    paddingBottom: '0px',
    ...(!isDescriptionOpen && {
      display: 'none',
    }),
  },
}));

export const Description = styled('div')({
  display: 'block',
  width: 'calc(100% - 196px)',
  padding: '31px 238px 31px 54px',
  textAlign: 'left',
  color: 'black',
  border: '1px solid #E0E0E3',
  borderRadius: '8px',
  overflowY: 'auto',
  [theme.breakpoints.down('xl')]: {
    width: '100%',
    padding: '24px 44px 31px 24px',
  },
  [theme.breakpoints.down('md')]: {
    display: 'block',
    width: '100%',
    padding: '8px 19px 3px 8px',
  },
});

export const DescriptionTitle = styled('span')({
  fontFamily: '"Ubuntu", sans-serif',
  fontSize: '32px',
  fontWeight: '700',
  lineHeight: '38px',
  letterSpacing: '0em',
  [theme.breakpoints.down('xl')]: {
    fontSize: '24px',
    lineHeight: '28px',
  },
  [theme.breakpoints.down('md')]: {
    fontSize: '18px',
    lineHeight: '21px',
  },
});

export const DescriptionText = styled('p')({
  fontFamily: '"Ubuntu", sans-serif',
  fontSize: '24px',
  fontWeight: '400',
  lineHeight: '31px',
  letterSpacing: '-0.4px',
  margin: '24px 0px 0px 0px',
  [theme.breakpoints.down('xl')]: {
    fontSize: '18px',
    lineHeight: '24px',
    margin: '8px 0px 0px 0px',
  },
  [theme.breakpoints.down('md')]: {
    fontSize: '14px',
    lineHeight: '18px',
    margin: '4px 0px 0px 0px',
  },
});

export const ButtonWrapper = styled('div')({
  display: 'inline-block',
  verticalAlign: 'top',
  width: '155px',
  marginLeft: '40px',
  color: 'white',
  [theme.breakpoints.down('xl')]: {
    marginLeft: '38px',
  },
  [theme.breakpoints.down('md')]: {
    width: '120px',
    marginLeft: '70px',
  },
});

export const StartTestButton = styled(Button)({
  width: '155px',
  height: '50px',
  fontSize: '18px!important',
  fontWeight: '500!important',
  lineHeight: '22px',
  letterSpacing: '-0.4px',
  textAlign: 'center',
  background: '#D43E41',
  '&hover': {
    background: '#D43E41',
  },
  paddingTop: '8px!important',
  boxShadow: 'none!important',
  [theme.breakpoints.down('md')]: {
    fontSize: '16px!important',
    width: '120px',
    height: '36px',
  },
});

export const NextButton = styled(Button)({
  width: '86px',
  height: '50px',
  fontSize: '18px!important',
  fontWeight: '500!important',
  lineHeight: '22px',
  letterSpacing: '-0.4px',
  textAlign: 'center',
  background: '#D43E41',
  '&hover': {
    background: '#D43E41',
  },
  paddingTop: '8px!important',
  boxShadow: 'none!important',
  [theme.breakpoints.down('md')]: {
    fontSize: '16px!important',
    width: '70px',
    height: '36px',
  },
});

export const ToggleDescription = styled(Typography)({
  display: 'inline-block',
  marginRight: 'calc(100% - 294px) !important',
  height: '40px',
  padding: '8px 0px 12px 0px',
  fontFamily: '"Ubuntu", sans-serif',
  fontSize: '16px',
  lineHeight: '16px',
  fontWeight: '500',
  color: '#131313',
  [theme.breakpoints.up('md')]: {
    display: 'none',
  },
});

export const ExpandMoreIcon = styled(ExpandMore)({
  color: '#131313',
  verticalAlign: 'middle',
});

export const ExpandLessIcon = styled(ExpandLess)({
  color: '#131313',
  verticalAlign: 'middle',
});
