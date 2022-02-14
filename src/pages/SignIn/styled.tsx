import { styled } from '@mui/styles';
import { makeStyles } from '@material-ui/core';
import { Grid, Box } from '@mui/material';

import Button from 'components/Button/Button';
import theme from 'themeSettings';

const SignMain = styled(Box)({
  height: '100% !important',
  minHeight: '100vh',
  width: '100% !important',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: '0',
  background: theme.palette.secondary.main,
});

// Родительский Грид
const SignMainGrid = styled(Grid)({
  height: '100% !important',
  minHeight: '100vh',
  width: '85% !important',
  margin: '0 auto !important',
  padding: '0px !important',
  [theme.breakpoints.down('xl')]: {
    width: '90% !important',
    justifyContent: 'center !important',
  },
  [theme.breakpoints.down('md')]: {
    width: '95% !important',
    justifyContent: 'center !important',
  },
});

// Родительский Левый Ьлок
const SignPresGrid = styled(Grid)({
  padding: '0px 5px!important',
  margin: '0px !important',
  display: 'grid',
  [theme.breakpoints.down('md')]: {
    minHeight: '220px',
    maxWidth: '400px !important',
  },
  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
});

// Вроппер для Изображения
const ImageWrapper = styled(Box)({
  width: '100%',
  maxWidth: '716px',
  justifySelf: 'center',
  alignSelf: 'center',
  marginBottom: '20px',
  marginLeft: '10px',
  border: '1px red solid',
  [theme.breakpoints.down('lg')]: {
    marginBottom: '0px !important',
    marginLeft: '0px !important',
  },
  [theme.breakpoints.down('xl')]: {
    maxWidth: '455px',
    marginBottom: '55px',
    marginLeft: '0px',
    marginRight: '30px',
  },
});

// Родительский Правый блок
const SignFormGrid = styled(Grid)({
  display: 'grid',
  gridTemplateRows: '30% 70%',
  [theme.breakpoints.down('xl')]: {
    minWidth: '400px !important',
    justifyContent: 'start',
  },
  [theme.breakpoints.down('lg')]: {
    gridTemplateRows: '40% 60% !important',
  },
  [theme.breakpoints.down('md')]: {
    gridTemplateRows: '30% 70% !important',
  },
  [theme.breakpoints.down('sm')]: {
    gridTemplateRows: '20% 80% !important',
  },
});

// Блок с Описанием
const DefinitionWrapper = styled(Box)({
  alignSelf: 'start',
  justifySelf: 'center',
  maxWidth: '100%',
  marginRight: '18px',
  marginTop: '13.5%',
  [theme.breakpoints.down('xl')]: {
    marginTop: '12.5%',
    marginRight: '0px !important',
    marginLeft: '35px !important',
    width: '100%',
  },
  [theme.breakpoints.down('lg')]: {
    alignSelf: 'center',
    justifySelf: 'end',
  },
  [theme.breakpoints.down('md')]: {
    marginTop: '0px !important',
    justifySelf: 'center',
  },
});

// Блок формы
const SignWrapper = styled(Box)({
  alignSelf: 'start',
  justifySelf: 'center',
  width: '325px',
  minHeight: '335px',
  boxShadow: '5px 5px 7px 3px rgb(0 0 0 / 10%)',
  marginTop: '8%',
  marginRight: '18px',
  [theme.breakpoints.down('xl')]: {
    marginTop: '10px',
    marginRight: '0px !important',
    marginLeft: '20px !important',
    width: '277px !important',
    minHeight: '257px !important',
    maxHeight: '257px !important',
  },
  [theme.breakpoints.down('lg')]: {
    marginTop: '0px',
    justifySelf: 'end',
  },
  [theme.breakpoints.down('md')]: {
    justifySelf: 'center',
  },
});

// Враппер для формы
const FormBox = styled(Box)({
  marginTop: '50px',
  marginRight: '20px',
  marginLeft: '20px',
  [theme.breakpoints.down('xl')]: {
    margin: '0 auto',
    marginTop: '10px',
    width: '245px',
    maxHeight: '257px',
    border: '1px solid red',
  },
});

// Форма
const ItemsBox = styled(Box)({
  margin: '0px !important',
  padding: '0px !important',
  width: '100%',
});

// Грид для элементов формы
const GridWrapper = styled(Grid)({
  width: '100% !important',
  margin: '0px !important ',
  padding: '0px !important',
  maxHeight: 'fit-content !important',
  marginBottom: '25px !important',
  alignContent: 'start',
  [theme.breakpoints.down('xl')]: {
    marginBottom: '0px !important',
    marginTop: '20px !important',
  },
});

// Вроппер для инпута
const GridSignInput = styled(Grid)({
  margin: '0 !important ',
  padding: '0px !important',
  boxSizing: 'border-box',
  marginBottom: '20px !important',
  '& label': {
    fontFamily: '"Ubuntu", sans-serif',
    color: '#C6C6C9 !important',
    fontSize: '18px',
    lineHeight: '21px',
    fontWeight: 400,
  },
  '& input': {
    fontSize: '18px',
    fontWeight: 400,
    fontFamily: '"Ubuntu", sans-serif',
    padding: '15px 14px',
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
  [theme.breakpoints.down('xl')]: {
    marginBottom: '24px !important',
    margin: '0 !important ',
    padding: '0px !important',
    height: '45px',
    '& label': {
      fontSize: '16px',
      lineHeight: '18px',
      fontWeight: 400,
    },
    '& input': {
      fontSize: '16px',
      fontWeight: 400,
      padding: '0px 10px',
      height: '45px',
    },
  },
});

// Враппер для Кнопки
const GridButton = styled(Grid)({
  display: 'flex',
  height: '43px',
  justifyContent: 'center',
  boxSizing: 'border-box',
  margin: '0 !important ',
  padding: '0px !important',
  marginTop: '20px !important',
  [theme.breakpoints.down('xl')]: {
    marginTop: '10px !important',
  },
});

// Кнопка
const SignButton = styled(Button)({
  fontSize: '18px !important',
  fontWeight: '400 !important',
  letterSpacing: '0.2px !important',
});

const useExplitLabel = makeStyles({
  explicitLabel: {
    '& label': {
      color: '#1D1D1D !important',
    },
  },
  basicLabel: {},
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
  useExplitLabel,
};
