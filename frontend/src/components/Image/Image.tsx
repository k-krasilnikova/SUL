import React from 'react';

import { imageDefault } from 'icons';

import { ImageContainer } from './styled';

interface Props {
  imageUrl?: string;
  width: number;
  height: number;
}

const Image: React.FC<Props> = ({ imageUrl, width, height }) => (
  <ImageContainer width={width} height={height}>
    <img src={imageUrl || imageDefault} />
  </ImageContainer>
);

export default Image;
