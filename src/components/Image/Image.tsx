import React from 'react';

import { imageDefault } from 'icons';

import { ImageContainer } from './styled';

interface Props {
  size: string;
  imageUrl?: string;
}
const SIZES = {
  small: 'small',
  large: 'large',
};

const Image: React.FC<Props> = ({ imageUrl, size }) => (
  <ImageContainer
    style={size === SIZES.small ? { width: 150, height: 50 } : { width: 300, height: 200 }}
  >
    <img src={imageUrl || imageDefault} />
  </ImageContainer>
);

export default Image;
