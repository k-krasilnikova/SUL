import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { Page } from 'react-pdf';
import styled from 'styled-components';

import { Button } from 'components/Button';
import theme from 'themeSettings';

export const PDFWrapper = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  width: 'calc(100%-40px)',
  marginTop: '30px',
});

export const ButtonBox = styled(Box)({
  display: 'flex',
  justifyContent: 'baseline',
  alignSelf: 'flex-end',
  marginRight: '4em',
  [theme.breakpoints.down('md')]: {
    marginRight: '3em',
  },
  [theme.breakpoints.down('sm')]: {
    marginRight: '2em',
  },
});

export const StyledButton = styled(Button)({
  color: '#000000',
  minWidth: '40px !important',
  '&.MuiButton-root': {
    padding: '0 !important',
  },
});

export const DocumentBox = styled(Box)({
  display: 'flex',
  justifySelf: 'center',
  alignSelf: 'flex-start',
  width: '1000px',
  margin: '0 auto',
  maxWidth: 'inherit',
  overflowY: 'scroll',
  overflowX: 'hidden',
  height: '75vh',
  '&::-webkit-scrollbar': {
    display: 'none',
  },
  'scrollbar-width': 'none',
  [theme.breakpoints.down('xl')]: {
    width: '100%',
  },
});

export const PageNumberText = styled(Typography)({
  fontSize: '18px !important',
  color: '#131313 !important',
  padding: '6px 0',
  [theme.breakpoints.down('sm')]: {
    fontSize: '14px !important',
  },
});

export const StyledPage = styled(Page)({
  width: '100vw',
  display: 'block',
});
