import { styled } from '@mui/styles';
import { Grid, Box, Typography } from '@mui/material';

import Button from 'components/Button/Button';
import globalTheme from 'themeSettings';

const SignMain = styled(Box)({
  height: '100% !important',
  minHeight: '100vh',
  width: '100% !important',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: '0',
  background: globalTheme.palette.secondary.main,
  [globalTheme.breakpoints.down('sm')]: {
    justifyContent: 'center !important',
    margin: '0 auto !important',
  },
});

const SignMainGrid = styled(Grid)({
  height: '100% !important',
  minHeight: '100vh',
  width: '85% !important',
  margin: '0 auto !important',
  padding: '0px !important',
  '@media(max-width: 1280px)': {
    width: '90% !important',
    justifyContent: 'center !important',
  },
  [globalTheme.breakpoints.down('md')]: {
    width: '95% !important',
    justifyContent: 'center !important',
  },
  [globalTheme.breakpoints.down('sm')]: {
    width: '100% !important',
    justifyContent: 'center !important',
  },
  '@media(max-width: 1066px)': {
    width: '95% !important',
  },
  [globalTheme.breakpoints.down('lg')]: {
    width: '85% !important',
    justifyContent: 'center !important',
  },
});

const SignPresGrid = styled(Grid)({
  padding: '0px 5px!important',
  margin: '0px !important',
  display: 'grid',
  [globalTheme.breakpoints.down('md')]: {
    display: 'none',
    justifyContent: 'center',
  },
  [globalTheme.breakpoints.down('sm')]: {
    display: 'none',
  },
});

const ImageWrapper = styled(Box)({
  width: '100%',
  maxWidth: '716px',
  justifySelf: 'center',
  alignSelf: 'center',
  marginBottom: '20px',
  marginLeft: '10px',
  '@media(max-width: 1280px)': {
    maxWidth: '455px',
    marginBottom: '55px',
    marginLeft: '0px',
    marginRight: '30px',
  },
  [globalTheme.breakpoints.down('lg')]: {
    marginBottom: '0px !important',
    marginLeft: '0px !important',
    marginRight: '0px !important',
  },
});

const SignFormGrid = styled(Grid)({
  display: 'grid',
  gridTemplateRows: '30% 70%',
  '@media(max-width: 1280px)': {
    minWidth: '400px !important',
    justifyContent: 'start',
  },
  [globalTheme.breakpoints.down('lg')]: {
    minWidth: '300px !important',
    gridTemplateRows: '40% 60% !important',
    justifyContent: 'end',
  },
  [globalTheme.breakpoints.down('md')]: {
    minWidth: '100% !important',
    justifyContent: 'center',
    gridTemplateRows: '25% 70% !important',
  },
  [globalTheme.breakpoints.down('sm')]: {
    minWidth: '100% !important',
    gridTemplateRows: '30% 70% !important',
    justifyContent: 'center',
  },
  [globalTheme.breakpoints.down('xs')]: {
    maxWidth: '280px !important',
    gridTemplateRows: '30% 70% !important',
    justifyContent: 'center',
  },
});

const DefinitionWrapper = styled(Box)({
  alignSelf: 'start',
  justifySelf: 'center',
  maxWidth: '100%',
  marginRight: '18px',
  marginTop: '13.5%',
  '@media(max-width: 1280px)': {
    marginTop: '15%',
    marginRight: '0px !important',
    marginLeft: '20px !important',
    width: '100%',
  },
  [globalTheme.breakpoints.down('lg')]: {
    alignSelf: 'center',
    justifySelf: 'end',
    marginTop: '0px !important',
    marginRight: '0px !important',
    marginLeft: '0px !important',
  },
  [globalTheme.breakpoints.down('md')]: {
    marginTop: '0px !important',
    marginRight: '0px !important',
    marginLeft: '0px !important',
    justifySelf: 'center',
  },
  [globalTheme.breakpoints.down('sm')]: {
    alignSelf: 'start',
    marginTop: '65px !important',
    marginRight: '0px !important',
    marginLeft: '0px !important',
  },
});

const SignWrapper = styled(Box)({
  alignSelf: 'start',
  justifySelf: 'center',
  width: '328px',
  minHeight: '341px',
  maxHeight: '355px',
  boxShadow: '2px 4px 10px 2px rgba(0, 0, 0, 0.15)',
  marginTop: '8%',
  marginRight: '18px',
  '@media(max-width: 1280px)': {
    marginTop: '5px',
    marginRight: '0px !important',
    marginLeft: '20px !important',
    width: '277px !important',
    minHeight: '257px !important',
    maxHeight: '257px !important',
  },
  [globalTheme.breakpoints.down('lg')]: {
    marginTop: '-27px',
    justifySelf: 'end',
    marginRight: '0px !important',
    marginLeft: '0px !important',
  },
  [globalTheme.breakpoints.down('md')]: {
    justifySelf: 'center',
    marginTop: '10px',
    marginRight: '0px !important',
    marginLeft: '0px !important',
    boxShadow: '2px 4px 10px 2px rgba(0, 0, 0, 0.15)',
  },
  [globalTheme.breakpoints.down('sm')]: {
    marginTop: '35px',
    marginRight: '0px !important',
    marginLeft: '0px !important',
    boxShadow: 'none',
  },
});

const FormBox = styled(Box)({
  marginTop: '51px',
  width: '282px',
  marginRight: '22px',
  marginLeft: '22px',
  '@media(max-width: 1280px)': {
    margin: '0 auto',
    marginTop: '0px !important',
    width: '245px',
    maxHeight: '257px',
  },
  [globalTheme.breakpoints.down('sm')]: {
    width: '248px !important',
  },
});

const ItemsBox = styled(Box)({
  margin: '0px !important',
  padding: '0px !important',
  width: '100%',
});

const GridWrapper = styled(Grid)({
  width: '100% !important',
  margin: '0px !important ',
  padding: '0px !important',
  maxHeight: 'fit-content !important',
  marginBottom: '25px !important',
  alignContent: 'start',
  '& div:nth-child(2)': {
    marginBottom: '0px !important',
  },
  '@media(max-width: 1280px)': {
    marginBottom: '0px !important',
    marginTop: '28px !important',
  },
  [globalTheme.breakpoints.down('sm')]: {
    marginBottom: '0px !important',
    marginTop: '25px !important',
  },
  [globalTheme.breakpoints.down('xs')]: {
    width: '245px !important',
    justifyContent: 'center',
  },
});

interface IColor {
  color?: string;
}

const GridSignInput = styled(Grid)<IColor>(({ color }) => ({
  margin: '0 !important ',
  padding: '0px !important',
  boxSizing: 'border-box',
  marginBottom: '25px !important',
  height: '53px !important',
  maxHeight: '53px !important',
  minHeight: '53px !important',
  '& label': {
    fontFamily: '"Ubuntu", sans-serif',
    ...(color && {
      color: `${color} !important`,
      fontSize: `16px !important`,
    }),
    lineHeight: '21px',
    fontWeight: 400,
    height: '53px !important',
    maxHeight: '53px !important',
    minHeight: '53px !important',
  },
  '& input': {
    fontSize: '18px',
    fontWeight: 400,
    fontFamily: '"Ubuntu", sans-serif',
    padding: '13.57px 14px',
    color: '#1D1D1D',
    background: '#E5EEFD',
    borderRadius: '5px',
  },
  '& input + fieldset': {
    border: '1px solid #B7BECA !important',
    borderColor: '1px solid #B7BECA !important',
  },
  '& input:focus + fieldset': {
    borderColor: '#B7BECA !important',
    border: '1px solid #B7BECA !important',
  },
  '& input:hover + fieldset': {
    borderColor: '#B7BECA !important',
    border: '1px solid #B7BECA !important',
  },
  '@media(max-width: 1280px)': {
    marginBottom: '16px !important',
    margin: '0 !important ',
    padding: '0px !important',
    height: '48px !important',
    maxHeight: '48px !important',
    minHeight: '48px !important',
    '& label': {
      fontSize: '16px',
      lineHeight: '18px',
      fontWeight: 400,
      height: '48px !important',
      maxHeight: '48px !important',
      minHeight: '48px !important',
    },
    '& input': {
      fontSize: '16px',
      fontWeight: 400,
      padding: '0px 10px',
      height: '48px !important',
      maxHeight: '48px !important',
      minHeight: '48px !important',
    },
  },
  [globalTheme.breakpoints.down('sm')]: {
    marginBottom: '16px !important',
    height: '48px !important',
    maxHeight: '48px !important',
    minHeight: '48px !important',
    '& label': {
      height: '48px !important',
      maxHeight: '48px !important',
      minHeight: '48px !important',
    },
    '& input': {
      height: '48px !important',
      maxHeight: '48px !important',
      minHeight: '48px !important',
    },
  },
  [globalTheme.breakpoints.down('xs')]: {
    boxSizing: 'border-box',
    width: '100%',
    height: '48px !important',
    maxHeight: '48px !important',
    minHeight: '48px !important',
    '& label': {
      height: '48px !important',
      maxHeight: '48px !important',
      minHeight: '48px !important',
    },
    '& input': {
      width: '100%',
      boxSizing: 'border-box',
      height: '48px !important',
      maxHeight: '48px !important',
      minHeight: '48px !important',
    },
  },
}));

const GridError = styled(Grid)({
  maxHeight: '18px',
  width: '100%',
  marginTop: '16px',
  marginBottom: '24px',
  '@media(max-width: 1280px)': {
    maxHeight: '27px !important',
    width: '100%',
    marginBottom: '12px !important',
    marginTop: '20px !important',
  },
  [globalTheme.breakpoints.down('sm')]: {
    maxHeight: '16px !important',
    width: '100%',
    marginBottom: '12px !important',
    marginTop: '16px !important',
  },
});

const GridButton = styled(Grid)({
  display: 'flex',
  height: '43px',
  justifyContent: 'center',
  boxSizing: 'border-box',
  margin: '0 !important ',
  padding: '0px !important',
  '@media(max-width: 1280px)': {
    marginTop: '0px !important',
    padding: '0px !important',
  },
  [globalTheme.breakpoints.down('sm')]: {
    marginTop: '0px !important',
  },
  [globalTheme.breakpoints.down('xs')]: {
    width: '100%',
  },
});

const SignButton = styled(Button)({
  fontSize: '18px !important',
  fontWeight: '400 !important',
  letterSpacing: '0.2px !important',
  [globalTheme.breakpoints.down('sm')]: {
    fontSize: '16px !important',
    fontWeight: '400 !important',
    letterSpacing: '0.2px !important',
  },
  [globalTheme.breakpoints.down('xs')]: {
    fontSize: '16px !important',
    fontWeight: '400 !important',
    letterSpacing: '0.2px !important',
  },
});

const WarningHelper = styled(Typography)({
  fontSize: '14px !important',
  margin: '0px',
  lineHeight: '16px !important',
  textAlign: 'center',
  fontWeight: '400 !important',
  fontFamily: '"Ubuntu", sans-serif',
  color: globalTheme.palette.primary.main,
});

export {
  SignMain,
  SignMainGrid,
  SignPresGrid,
  SignFormGrid,
  SignWrapper,
  FormBox,
  GridWrapper,
  GridSignInput,
  ItemsBox,
  GridButton,
  SignButton,
  DefinitionWrapper,
  ImageWrapper,
  WarningHelper,
  GridError,
};
