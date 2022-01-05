import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { Page } from 'react-pdf';
import styled from 'styled-components';

export const PDFWrapper = styled(Box)({
  flexDirection: 'column',
  display: 'flex',
  width: 'calc(100%-40px)',
  marginTop: '30px',
});

export const ButtonBox = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignSelf: 'center',
});

export const DocumentBox = styled(Box)({
  display: 'flex',
  justifySelf: 'center',
  alignSelf: 'flex-start',
  width: 'fit-content',
  maxWidth: 'inherit',
  overflowY: 'scroll',
  overflowX: 'hidden',
  height: '75vh',
  '&::-webkit-scrollbar': {
    display: 'none',
  },
});

export const PageNumberText = styled(Typography)({
  margin: '2vh',
});

export const StyledPage = styled(Page)({
  width: '75vw',
});
