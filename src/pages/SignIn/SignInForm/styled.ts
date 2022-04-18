import { styled, Box, Grid, Typography } from '@mui/material';

import Button from 'components/Button';
import theme from 'themeSettings';

export const SignFormGrid = styled(Grid)({
  display: 'grid',
  gridTemplateRows: '30% 70%',
  '@media(max-width: 1280px)': {
    minWidth: '400px',
    justifyContent: 'start',
  },
  [theme.breakpoints.down('lg')]: {
    minWidth: '300px',
    gridTemplateRows: '40% 60%',
    justifyContent: 'end',
  },
  [theme.breakpoints.down('md')]: {
    minWidth: '100%',
    justifyContent: 'center',
    gridTemplateRows: '25% 70%',
  },
  [theme.breakpoints.down('sm')]: {
    minWidth: '100%',
    gridTemplateRows: '30% 70%',
    justifyContent: 'center',
  },
  [theme.breakpoints.down('xs')]: {
    maxWidth: '280px',
    gridTemplateRows: '30% 70%',
    justifyContent: 'center',
  },
});

export const DefinitionWrapper = styled(Box)({
  alignSelf: 'start',
  justifySelf: 'center',
  maxWidth: '100%',
  marginRight: '18px',
  marginTop: '13.5%',
  '@media(max-width: 1280px)': {
    marginTop: '15%',
    marginRight: 0,
    marginLeft: '20px',
    width: '100%',
  },
  [theme.breakpoints.down('lg')]: {
    alignSelf: 'center',
    justifySelf: 'end',
    marginTop: 0,
    marginRight: 0,
    marginLeft: 0,
  },
  [theme.breakpoints.down('md')]: {
    marginTop: 0,
    marginRight: 0,
    marginLeft: 0,
    justifySelf: 'center',
  },
  [theme.breakpoints.down('sm')]: {
    alignSelf: 'start',
    marginTop: '65px',
    marginRight: 0,
    marginLeft: 0,
  },
});

export const SignWrapper = styled(Box)({
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
    marginRight: 0,
    marginLeft: '20px',
    width: '277px',
    minHeight: '257px',
    maxHeight: '257px',
  },
  [theme.breakpoints.down('lg')]: {
    marginTop: '-27px',
    justifySelf: 'end',
    marginRight: 0,
    marginLeft: 0,
  },
  [theme.breakpoints.down('md')]: {
    justifySelf: 'center',
    marginTop: '10px',
    marginRight: 0,
    marginLeft: 0,
    boxShadow: '2px 4px 10px 2px rgba(0, 0, 0, 0.15)',
  },
  [theme.breakpoints.down('sm')]: {
    marginTop: '35px',
    marginRight: 0,
    marginLeft: 0,
    boxShadow: 'none',
  },
});

export const FormBox = styled(Box)({
  marginTop: '51px',
  width: '282px',
  marginRight: '22px',
  marginLeft: '22px',
  '@media(max-width: 1280px)': {
    margin: '0 auto',
    marginTop: 0,
    width: '245px',
    maxHeight: '257px',
  },
  [theme.breakpoints.down('sm')]: {
    width: '248px',
  },
});

export const ItemsBox = styled(Box)({
  margin: 0,
  padding: 0,
  width: '100%',
});

export const GridWrapper = styled(Grid)({
  width: '100%',
  margin: 0,
  padding: 0,
  maxHeight: 'fit-content',
  marginBottom: '25px',
  alignContent: 'start',
  '& div:nth-child(2)': {
    marginBottom: 0,
  },
  '@media(max-width: 1280px)': {
    marginBottom: 0,
    marginTop: '28px',
  },
  [theme.breakpoints.down('sm')]: {
    marginBottom: 0,
    marginTop: '25px',
  },
  [theme.breakpoints.down('xs')]: {
    width: '245px',
    justifyContent: 'center',
  },
});

interface IColor {
  color?: string;
}

export const GridSignInput = styled(Grid)<IColor>(({ color }) => ({
  margin: 0,
  padding: 0,
  boxSizing: 'border-box',
  marginBottom: '25px',
  height: '53px',
  maxHeight: '53px',
  minHeight: '53px',
  '& label': {
    fontFamily: '"Ubuntu", sans-serif',
    ...(color && {
      color: `${color}`,
      fontSize: `16px`,
    }),
    lineHeight: '21px',
    fontWeight: 400,
    height: '53px',
    maxHeight: '53px',
    minHeight: '53px',
  },
  '& input': {
    fontSize: '18px',
    fontWeight: 400,
    fontFamily: '"Ubuntu", sans-serif',
    padding: '13.57px 14px',
    color: '#1D1D1D',
    borderRadius: '5px',
  },
  '& input + fieldset': {
    border: '1px solid #B7BECA',
    borderColor: '1px solid #B7BECA',
  },
  '& input:focus + fieldset': {
    borderColor: '#B7BECA',
    border: '1px solid #B7BECA',
  },
  '& input:hover + fieldset': {
    borderColor: '#B7BECA',
    border: '1px solid #B7BECA',
  },
  '@media(max-width: 1280px)': {
    marginBottom: '16px',
    margin: 0,
    padding: 0,
    height: '48px',
    maxHeight: '48px',
    minHeight: '48px',
    '& label': {
      fontSize: '16px',
      lineHeight: '18px',
      fontWeight: 400,
      height: '48px',
      maxHeight: '48px',
      minHeight: '48px',
    },
    '& input': {
      fontSize: '16px',
      fontWeight: 400,
      padding: '0 10px',
      height: '48px',
      maxHeight: '48px',
      minHeight: '48px',
    },
  },
  [theme.breakpoints.down('sm')]: {
    marginBottom: '16px',
    height: '48px',
    maxHeight: '48px',
    minHeight: '48px',
    '& label': {
      height: '48px',
      maxHeight: '48px',
      minHeight: '48px',
    },
    '& input': {
      height: '48px',
      maxHeight: '48px',
      minHeight: '48px',
    },
  },
  [theme.breakpoints.down('xs')]: {
    boxSizing: 'border-box',
    width: '100%',
    height: '48px',
    maxHeight: '48px',
    minHeight: '48px',
    '& label': {
      height: '48px',
      maxHeight: '48px',
      minHeight: '48px',
    },
    '& input': {
      width: '100%',
      boxSizing: 'border-box',
      height: '48px',
      maxHeight: '48px',
      minHeight: '48px',
    },
  },
}));

export const GridError = styled(Grid)({
  maxHeight: '18px',
  width: '100%',
  marginTop: '16px',
  marginBottom: '24px',
  '@media(max-width: 1280px)': {
    maxHeight: '27px',
    width: '100%',
    marginBottom: '12px',
    marginTop: '20px',
  },
  [theme.breakpoints.down('sm')]: {
    maxHeight: '16px',
    width: '100%',
    marginBottom: '12px',
    marginTop: '16px',
  },
});

export const GridButton = styled(Grid)({
  display: 'flex',
  height: '43px',
  justifyContent: 'center',
  boxSizing: 'border-box',
  margin: 0,
  padding: 0,
  '@media(max-width: 1280px)': {
    marginTop: 0,
    padding: 0,
  },
  [theme.breakpoints.down('sm')]: {
    marginTop: 0,
  },
  [theme.breakpoints.down('xs')]: {
    width: '100%',
  },
});

export const SignButton = styled(Button)({
  fontSize: '18px',
  fontWeight: 400,
  letterSpacing: '0.2px',
  [theme.breakpoints.down('sm')]: {
    fontSize: '16px',
    fontWeight: 400,
    letterSpacing: '0.2px',
  },
  [theme.breakpoints.down('xs')]: {
    fontSize: '16px',
    fontWeight: 400,
    letterSpacing: '0.2px',
  },
});

export const WarningHelper = styled(Typography)({
  fontSize: '14px',
  margin: 0,
  lineHeight: '16px',
  textAlign: 'center',
  fontWeight: 400,
  fontFamily: '"Ubuntu", sans-serif',
  color: theme.palette.primary.main,
});
