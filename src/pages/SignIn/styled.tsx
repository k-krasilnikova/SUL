import { styled } from '@mui/styles';
import { Grid, Box } from '@mui/material';

const SignMain = styled(Box)({
  height: '95vh',
  width: '95%',
  margin: '0 auto',
  padding: '0',
  '@media(max-width: 767px)': {
    height: '100%',
  },
});

/*  Материнский блок  */
const SignMainGrid = styled(Grid)({
  height: '100%',
  width: '100%',
  margin: '0px !important',
  padding: '0px !important',
});

/*  Левый блок  */
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
  maxWidth: '716px',
  justifySelf: 'center',
  alignSelf: 'center',
});

/*  Правый блок  */
const SignFormGrid = styled(Grid)({
  display: 'grid',
  gridTemplateRows: '30% 70%',
  '@media(max-width: 767px)': {
    padding: '20px 5px!important',
  },
});

const DefinitionWrapper = styled(Box)({
  alignSelf: 'start',
  justifySelf: 'center',
  maxWidth: '100%',
  marginRight: '100px',
  marginTop: '130px',
  '@media(max-width: 767px)': {
    padding: '20px 5px!important',
  },
});

const SignWrapper = styled(Box)({
  alignSelf: 'start',
  justifySelf: 'center',
  width: '325px',
  minHeight: '335px',
  boxShadow: '5px 5px 7px 3px rgb(0 0 0 / 10%)',
  marginTop: '100px',
  marginRight: '100px',
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
// Тут прописать нужно отсутпы и сазы для блока путем использования грит атрибутов //
const GridWrapper = styled(Grid)({
  width: '100% !important',
  margin: '0px !important ',
  padding: '0px !important',
  maxHeight: '300px',
  height: 'fit-content',
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
  '& button': {
    fontSize: '18px',
    fontWeight: 600,
    letterSpacing: '0.2px',
  },
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
