import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { Page } from 'react-pdf';
import styled from 'styled-components';

import Button from 'components/Button';

export const PDFWrapper = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  margin: '0 2vw',
  width: 'calc(100%-40px)',
  marginTop: '30px',
});

export const ButtonBox = styled(Box)({
  display: 'flex',
  justifyContent: 'baseline',
  alignSelf: 'flex-end',
  marginRight: '4em',
});

export const StyledButton = styled(Button)({
  color: '#000000',
  minWidth: '25px',
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
  'scrollbar-width': 'none',
});

export const PageNumberText = styled(Typography)({
  fontSize: '18px',
  padding: '6px 0',
});

export const StyledPage = styled(Page)({
  width: '75vw',
});
