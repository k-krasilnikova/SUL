import { styled, Box, Typography, TextField } from '@mui/material';

import { AlertWrapper } from '../TestStep/styled';

export const FieldWrapper = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  width: '350px',
  marginBottom: '30px',
  '&:not(:last-child)': {
    marginRight: '100px',
  },
});

export const Field = styled(TextField)({
  width: '350px',
  height: '53px',
  fontSize: '18px',
  '& label': {
    color: '#A2A2A2',
  },
  '&.MuiTextField-root > .MuiFormLabel-root.Mui-focused': {
    color: '#2C2525',
  },
  '& .MuiFormHelperText-root': {
    marginRight: '29px',
    marginBottom: '5px',
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

export const DescriptionWrapper = styled(Box)({
  marginTop: '40px',
  marginBottom: '30px',
});

export const InputLengthCounter = styled(Typography)({
  display: 'flex',
  alignSelf: 'flex-end',
  fontSize: '0.75rem',
  marginTop: '6px',
  color: '#A2A2A2',
});

export const DescriptionFieldWrapper = styled(FieldWrapper)({
  maxWidth: '1075px',
  width: '100%',
});

export const AlertBox = styled(AlertWrapper)({
  paddingTop: '30px',
  maxWidth: '479px',
});
