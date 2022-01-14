import styled from 'styled-components';

import { SIZE } from 'constants/sizes';

interface Size {
  size?: string;
}

export const ImageContainer = styled('div')<Size>(({ size }) => ({
  overflow: 'hidden',
  borderRadius: '10px',
  textAlign: 'center',
  margin: '5px',
  float: 'left',
}));

export const CurrentImage = styled('img')({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});
