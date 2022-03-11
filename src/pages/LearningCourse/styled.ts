import styled from 'styled-components';
import { Box } from '@mui/material';
import ReactPlayer from 'react-player';

import { Button } from 'components/Button';

export const LearningPageContainer = styled('div')({
  width: '100%',
  padding: '40px',
});

export const BackButton = styled(Button)({
  height: '40px',
  width: '85px',
  borderRadius: '4px',
  fontFamily: '"Ubuntu", sans-serif',
  fontSize: '16px!important',
  fontStyle: 'normal',
  fontWeight: '500!important',
  lineHeight: '22px',
  letterSpacing: '-0.4px',
  textAlign: 'center',
  boxShadow: 'none',
});

export const LearningWrapper = styled('div')({
  color: '#131313',
  textAlign: 'right',
  padding: '0px 85px',
});
export const StepperController = styled(Box)({
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  marginBottom: '13px',
  height: '39px',
});

export const StyledButton = styled(Button)({
  color: '#131313',
  minWidth: '40px !important',
  minHeight: '39px',
  '&.MuiButton-root': {
    padding: '0 !important',
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
});
export const MaterialText = styled('div')({
  height: '100%',
  textAlign: 'justify',
  padding: '20px',
  fontFamily: '"Ubuntu", sans-serif',
  fontSize: '24px',
  overflowY: 'auto',
});

export const MaterialVideo = styled(ReactPlayer)({
  height: '100%',
  width: '100%',
});

export const Description = styled('div')({
  display: 'inline-block',
  width: 'calc(100% - 196px)',
  height: '418px',
  padding: '31px 238px 31px 54px',
  textAlign: 'left',
  color: 'black',
  border: '1px solid #E0E0E3',
  borderRadius: '8px',
  overflowY: 'auto',
});

export const DescriptionTitle = styled('span')({
  fontFamily: '"Ubuntu", sans-serif',
  fontSize: '32px',
  fontStyle: 'normal',
  fontWeight: '700',
  lineHeight: '38px',
  letterSpacing: '0em',
});

export const DescriptionText = styled('p')({
  fontFamily: '"Ubuntu", sans-serif',
  fontSize: '24px',
  fontStyle: 'normal',
  fontWeight: '400',
  lineHeight: '31px',
  letterSpacing: '-0.4px',
  margin: '24px 0px 0px 0px',
});

export const ButtonWrapper = styled('div')({
  display: 'inline-block',
  verticalAlign: 'top',
  width: '155px',
  marginLeft: '40px',
});

export const StartTestButton = styled(Button)({
  width: '155px',
  height: '50px',
  color: 'white',
  fontSize: '18px!important',
  fontStyle: 'normal',
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
});

export const NextButton = styled(Button)({
  width: '86px',
  height: '50px',
  color: 'white',
  fontSize: '18px!important',
  fontStyle: 'normal',
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
});
