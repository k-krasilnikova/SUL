import React from 'react';

import { imageDefault } from 'icons';

import { ImageContainer } from './styled';

interface Props {
  width: number;
  height: number;
  imageUrl?: string;
}

const Image: React.FC<Props> = ({ imageUrl, width, height }) => (
  <ImageContainer width={width} height={height}>
    <img src={imageUrl || imageDefault} />
  </ImageContainer>
);

export default Image;
