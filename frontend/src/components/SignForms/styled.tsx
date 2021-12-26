import { styled } from '@mui/styles';
import { TextField, Box, Typography } from '@mui/material';

const InputStyled = styled(TextField)({
  '& *': {
    color: '#000000DE !important',
  },
});

const SignPresenterBox = styled(Box)({
  marginTop: '50px',
  maxWidth: '500px',
  display: 'flex',
  flexDirection: 'column',
  padding: 0,
  '@media(max-width: 767px)': {
    width: '100%',
    margin: '0 auto',
    justifyContent: 'center',
    marginTop: '20px',
    maxWidth: '500px',
  },
});

const PresenterWrapper = styled(Box)({
  display: 'flex',
  width: '100%',
  paddingLeft: '0px',
  '@media(max-width: 767px)': {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '20px',
    maxWidth: '500px',
  },
});

const SignTechArtLabel = styled(Typography)({
  fontWeight: '600 !important',
  fontSize: '40px !important',
  '@media(max-width: 424px)': {
    fontSize: '35px !important',
  },
});

const SignPresentSubtext = styled(Typography)({
  fontSize: '25px !important',
  color: 'gray',
  '@media(max-width: 767px)': {
    textAlign: 'center',
  },
  '@media(max-width: 424px)': {
    fontSize: '20px !important',
  },
});

export { InputStyled, SignPresenterBox, PresenterWrapper, SignTechArtLabel, SignPresentSubtext };
