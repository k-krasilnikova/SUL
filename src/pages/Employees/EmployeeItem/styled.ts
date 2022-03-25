import { Box } from '@mui/material';
import styled from 'styled-components';

export const ImageWrapper = styled('div')({
  height: '50px',
  width: '50px',
});

export const UserContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
});

export const Text = styled('p')({
  margin: 0,
  padding: '0 10px',
  fontSize: '18px',
  fontWeight: '400',
  letterSpacing: '0.01em',
});

export const UserName = styled(Text)({
  whiteSpace: 'nowrap',
  lineHeight: '21px',
});

export const Position = styled(Text)({
  fontSize: '16px',
  lineHeight: '18px',
  marginTop: '10px',
  color: '#131313',
});
