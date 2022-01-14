import { styled } from '@mui/styles';
import { Grid, Box } from '@mui/material';

const SignMain = styled(Box)({
  height: '95vh',
  width: '90%',
  margin: '0 auto',
  padding: '0',
  '@media(max-width: 767px)': {
    height: '100%',
  },
});

//Материнский блок
const SignMainGrid = styled(Grid)({
  height: '100%',
  width: '100%',
  margin: '0px !important',
  padding: '0px !important',
});

//Левый блок
const SignPresGrid = styled(Grid)({
  padding: '0px 5px!important',
  margin: '0px !important',
  border: '1px solid red',
  display: 'grid',
  '@media(max-width: 767px)': {
    minHeight: '220px',
  },
});

const ImageWrapper = styled(Box)({
  width: '100%',
  maxWidth: '717px',
  justifySelf: 'center',
  alignSelf: 'center',
});

//Правый блок
const SignFormGrid = styled(Grid)({
  background: '#E0FFFF',
  display: 'grid',
  gridTemplateRows: '30% 70%',
  '@media(max-width: 767px)': {
    padding: '20px 5px!important',
  },
});

const DefinitionWrapper = styled(Box)({
  alignSelf: 'start',
  justifySelf: 'center',
  width: '100%',
  marginTop: '130px',
  marginRight: '45px',
  '@media(max-width: 767px)': {
    padding: '20px 5px!important',
  },
});

const SignWrapper = styled(Box)({
  marginRight: '45px',
  alignSelf: 'start',
  justifySelf: 'center',
  maxWidth: '320px',
  boxShadow: '0px 0px 10px 5px gray',
  background: 'gray',
  marginTop: '100px',
});

const FormBox = styled(Box)({
  margin: '30px',
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
});

const GridSignInput = styled(Grid)({
  margin: '10px 0px !important ',
  padding: '0px !important',
  boxSizing: 'border-box',
});

const GridButton = styled(Grid)({
  display: 'flex',
  justifyContent: 'center',
  boxSizing: 'border-box',
  margin: '5px 0px!important ',
  padding: '0px !important',
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
  DefinitionWrapper,
  ImageWrapper,
};
