import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { Page } from 'react-pdf';
import styled from 'styled-components';

export const PDFWrapper = styled(Box)({
  flexDirection: 'column',
  display: 'flex',
  width: 'calc(100%-40px)',
  margin: '35px',
  padding: '10px',
  borderRadius: '10px',
  backgroundColor: '#ebebeb',
});

export const ButtonBox = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignSelf: 'center',
});

export const DocumentBox = styled(Box)({
  display: 'flex',
  justifySelf: 'center',
  alignSelf: 'center',
  width: 'fit-content',
  maxWidth: 'inherit',
  overflowY: 'scroll',
  overflowX: 'hidden',
  height: '55vh',
  '&::-webkit-scrollbar': {
    display: 'none',
  },
});

export const PageNumberText = styled(Typography)({
  margin: '10px',
});

export const StyledPage = styled(Page)({
  width: '65vw',
});
