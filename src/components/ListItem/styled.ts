import styled from 'styled-components';
import { Typography, Box, Grid } from '@mui/material';

const HEADER_HEIGHT = '70px';

export const LayoutHeader = styled(Grid)({
  width: 'calc(100vw-10px)',
  backgroundColor: 'white',
  borderBottom: '2px solid #f0f2f7',
  fontFamily: '"Lato", sans-serif',
});
export const HeaderDivider = styled('div')({
  display: 'inline-block',
  width: '1px',
  height: '20px',
  backgroundColor: '#9b9b9b',
  marginTop: '23px',
  marginBottom: '2px',
});

export {};
