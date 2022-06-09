import { styled, Box, Typography, TextField } from '@mui/material';

import theme from 'themeSettings';

export const Field = styled(TextField)({
  width: '350px',
  height: '53px',
  '&:not(:last-child)': {
    marginRight: '100px',
  },
  fontSize: '18px',
  [theme.breakpoints.down('xl')]: {
    marginBottom: '30px',
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

export const DescriptionWrapper = styled(Box)({
  marginTop: '40px',
  marginBottom: '30px',
});

export const NewAvatarImageWrapper = styled(Box)({
  position: 'relative',
  display: 'flex',
  height: 'inherit',
});

export const AddImageInput = styled('input')({
  position: 'absolute',
  top: 0,
});
