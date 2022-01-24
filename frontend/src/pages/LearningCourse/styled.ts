import styled from 'styled-components';
import { Box, Typography } from '@mui/material';

import { Button } from 'components/Button';

interface ButtonProps {
  disabled: boolean;
}

export const LearningPageContainer = styled('div')({
  width: '100%',
  padding: '40px',
});
export const BackButton = styled(Button)({
  height: '39.59px',
  width: '84.64px',
  borderRadius: '4px',
  fontFamily: '"Ubuntu", sans-serif',
  fontSize: '16px',
  fontStyle: 'normal',
  fontWeight: '500',
  lineHeight: '22px',
  letterSpacing: '-0.4px',
  textAlign: 'center',
  textTransform: 'none',
});
export const LearningWrapper = styled('div')({
  maxWidth: '1303px',
  color: '#131313',
  textAlign: 'right',
  padding: '0px 85px',
});
export const StepperController = styled('div')({
  display: 'inline-flex',
  alignItems: 'center',
  width: '95px',
  textAlign: 'center',
  marginBottom: '13px',
});
export const Step = styled('p')({
  color: '#131313',
  margin: '0px 15px',
  fontFamily: '"Ubuntu", sans-serif',
  fontSize: '18px',
  fontWeight: '400',
  lineHeight: '22px',
});
export const TextWrapper = styled(Box)({
  width: '100%',
  height: '615px',
  padding: '20px',
  marginBottom: '40px',
  background: 'rgba(30, 30, 30, 0.12)',
  borderRadius: '5px',
  textAlign: 'justify',
  fontFamily: '"Ubuntu", sans-serif',
  fontSize: '24px',
  overflowY: 'scroll',
});
export const Description = styled('div')({
  display: 'inline-block',
  maxWidth: 'calc(100% - 155px - 41px)',
  maxHeight: '418px',
  padding: '31px 238.33px 31px 53.86px',
  textAlign: 'left',
  color: 'black',
  border: '1px solid #E0E0E3',
  borderRadius: '8px',
  overflowY: 'scroll',
});
export const DescriptionTitle = styled(Typography)({
  fontFamily: '"Roboto", sans-serif',
  fontSize: '32px',
  fontStyle: 'normal',
  fontWeight: '700',
  lineHeight: '38px',
  letterSpacing: '0em',
  marginBottom: '24px',
});
export const DescriptionText = styled(Typography)({
  fontFamily: '"SF Pro Text", sans-serif',
  fontSize: '24px',
  fontStyle: 'normal',
  fontWeight: '400',
  lineHeight: '31px',
  letterSpacing: '-0.4050024747848511px',
});
export const StartTestButton = styled(Button)<ButtonProps>(({ disabled }) => ({
  display: 'inline-block',
  verticalAlign: 'top',
  width: '155px',
  height: '50px',
  marginLeft: '40px',
  color: 'white!important',
  textTransform: 'none',
  fontSize: '18px',
  fontStyle: 'normal',
  fontWeight: '500',
  lineHeight: '22px',
  letterSpacing: '-0.40px',
  textAlign: 'center',
  boxShadow: '0px 1px 2px 1px #919191',
  background: '#D43E41',
  ...(disabled && {
    background: '#E19697',
  }),
  '&:hover': {
    background: '#E19697',
    boxShadow: '0px 2px 4px 2px #919191',
  },
}));
