import { styled } from '@mui/styles';
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

const ImageWrapper = styled(Box)({
  width: '100%',
  maxWidth: '716px',
  justifySelf: 'center',
  alignSelf: 'center',
  marginBottom: '20px',
  marginLeft: '10px',
  [theme.breakpoints.down('lg')]: {
    marginBottom: '0px !important',
    marginLeft: '0px !important',
  },
});

const SignFormGrid = styled(Grid)({
  display: 'grid',
  gridTemplateRows: '30% 70%',
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

const DefinitionWrapper = styled(Box)({
  alignSelf: 'start',
  justifySelf: 'center',
  maxWidth: '100%',
  marginRight: '18px',
  marginTop: '13.5%',
  [theme.breakpoints.down('xl')]: {
    marginRight: '0px !important',
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

const SignWrapper = styled(Box)({
  alignSelf: 'start',
  justifySelf: 'center',
  width: '325px',
  minHeight: '335px',
  boxShadow: '5px 5px 7px 3px rgb(0 0 0 / 10%)',
  marginTop: '8%',
  marginRight: '18px',
  [theme.breakpoints.down('xl')]: {
    marginRight: '0px !important',
  },
  [theme.breakpoints.down('lg')]: {
    marginTop: '0px',
    justifySelf: 'end',
  },
  [theme.breakpoints.down('md')]: {
    justifySelf: 'center',
  },
});

const FormBox = styled(Box)({
  marginTop: '50px',
  marginRight: '20px',
  marginLeft: '20px',
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
});

const GridSignInput = styled(Grid)({
  margin: '0 !important ',
  padding: '0px !important',
  boxSizing: 'border-box',
  height: 'fit-content',
  marginBottom: '20px !important',
  '& input': {
    fontSize: '18px',
    fontWeight: 600,
    fontFamily: '"Ubuntu", sans-serif',
    padding: '15px 14px',
    '&::placeholder': {
      color: '#C6C6C9',
      fontSize: '18px !important',
      fontFamily: '"Ubuntu", sans-serif',
      fontWeight: 400,
    },
  },
});

const GridButton = styled(Grid)({
  display: 'flex',
  height: '43px',
  justifyContent: 'center',
  boxSizing: 'border-box',
  margin: '0 !important ',
  padding: '0px !important',
  marginTop: '20px !important',
});

const SignButton = styled(Button)({
  fontSize: '18px !important',
  fontWeight: '600 !important',
  letterSpacing: '0.2px !important',
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
};
