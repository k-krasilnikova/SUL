import React from 'react';

import { imageDefault } from 'icons';

import { ImageContainer, CurrentImage } from './styled';

interface Props {
  imageUrl?: string;
}

const Image: React.FC<Props> = ({ imageUrl }) => (
  <ImageContainer>
    <CurrentImage src={imageUrl || imageDefault} />
  </ImageContainer>
);

export default Image;
