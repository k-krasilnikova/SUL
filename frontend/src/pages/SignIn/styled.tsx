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

const SignMainGrid = styled(Grid)({
  height: '100%',
  width: '100%',
  margin: '0px !important',
  padding: '0px !important',
});

const SignPresGrid = styled(Grid)({
  padding: '0px 5px!important',
  margin: '0px !important',
  '@media(max-width: 767px)': {
    minHeight: '220px',
  },
});

const SignFormGrid = styled(Grid)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: '0px 5px!important',
  margin: '0px !important',
  '@media(max-width: 767px)': {
    padding: '20px 5px!important',
  },
});

const SignWrapper = styled(Box)({
  maxWidth: '350px',
  boxShadow: '0px 0px 10px 5px gray',
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
};
