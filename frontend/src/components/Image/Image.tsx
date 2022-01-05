import React from 'react';

import { imageDefault } from 'icons';

import { ImageContainer } from './styled';

interface Props {
  size?: string;
  imageUrl?: string;
}

const Image: React.FC<Props> = ({ imageUrl, size }) => (
  <ImageContainer size={size}>
    <img src={imageUrl || imageDefault} />
  </ImageContainer>
);

export default Image;
