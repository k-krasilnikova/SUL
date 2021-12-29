import { styled } from '@mui/styles';
import { Box, Typography } from '@mui/material';

export const Wrapper = styled(Box)({
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

export const LogoBox = styled(Box)({
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

export const CompanyLogo = styled(Typography)({
  fontWeight: '600 !important',
  fontSize: '40px !important',
  '@media(max-width: 424px)': {
    fontSize: '35px !important',
  },
});

export const Instructions = styled(Typography)({
  fontSize: '25px !important',
  color: 'gray',
  '@media(max-width: 767px)': {
    textAlign: 'center',
  },
  '@media(max-width: 424px)': {
    fontSize: '20px !important',
  },
});
