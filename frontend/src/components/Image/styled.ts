import { styled } from '@mui/material';

export const ImageContainer = styled('div')({
  margin: 0,
  float: 'left',
  width: '100%',
  height: '100%',
  cursor: 'pointer',
});

export const CurrentImage = styled('img')({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});
