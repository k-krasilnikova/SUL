import { styled, Box, Typography, TextField } from '@mui/material';

import Button from 'components/Button';
import theme from 'themeSettings';

export const BackButton = styled(Button)({
  height: '40px',
  width: '85px',
  fontSize: '16px',
  [theme.breakpoints.down('lg')]: {
    height: '32px',
    width: '64px',
    fontSize: '12px',
  },
});

export const InnerWrapper = styled(Box)({
  padding: '32px 139px 29px 40px',
  [theme.breakpoints.down('lg')]: {
    padding: '16px 30px 46px 14px',
  },
});

export const FormWrapper = styled(Box)({
  paddingTop: '44px',
  paddingLeft: '85px',
});

export const SectionName = styled(Typography)({
  fontSize: '30px',
  lineHeight: '130%',
  letterSpacing: '-0.4px',
  color: '#2C2525',
});

export const Field = styled(TextField)({
  width: '350px',
  height: '53px',
  '&:not(:last-child)': {
    marginRight: '100px',
  },
  fontSize: '18px',
  [theme.breakpoints.down('xl')]: {
    marginBottom: '15px',
  },
});

export const SectionWrapper = styled(Box)({
  marginTop: '30px',
  marginBottom: '40px',
});

export const AvatarWrapper = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  width: '479px',
  alignItems: 'baseline',
});

export const SecondaryText = styled(Typography)({
  color: '#C4C4C4',
  fontSize: '24px',
});

export const ImageWrapper = styled(SectionWrapper)({
  width: '479px',
  height: '268px',
});

export const DescriptionField = styled(TextField)({
  width: '100%',
  maxWidth: '1075px',
});

export const ButtonWrapper = styled(Box)({
  display: 'flex',
  justifyContent: 'flex-end',
  marginTop: '52px',
});

export const NextButton = styled(BackButton)({
  fontSize: '18px',
});

export const DescriptionWrapper = styled(Box)({
  marginTop: '40px',
  marginBottom: '30px',
});